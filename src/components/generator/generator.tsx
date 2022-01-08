import { useGenerationStore } from "@/stores/generationStore"
import { useState, useEffect } from "react"
import dynamic from "next/dynamic"

const Generator = () => {
	const wfc = useGenerationStore((state) => state.wfc)
	const size = useGenerationStore((state) => state.size)
	const prototypes = useGenerationStore((state) => state.prototypes)
	const setGeneration = useGenerationStore((state) => state.setGeneration)
	const initWFCModule = useGenerationStore((state) => state.initWFCModule)
	const wfcModule = useGenerationStore((state) => state.wfcModule)

	const generate = () => {
		// wfc.init(prototypes, size)
		//wfc.run(1, 1000000000000000)

		wfcModule.run()
		console.log(wfcModule)

		const waves = new Array(size.x)
			.fill(0)
			.map(() => new Array(size.y).fill(0).map(() => new Array(size.z).fill(0)))
		for (let x = 0; x < 10; x++) {
			for (let y = 0; y < 10; y++) {
				for (let z = 0; z < 10; z++) {
					waves[x][y][z] = [wfcModule.query(z, y, x)]
				}
			}
		}

		setGeneration(wfc.waves)
	}

	useEffect(() => {
		initWFCModule()
	}, [initWFCModule])

	useEffect(() => {
		if (wfcModule) {
			console.log("Module")
			console.log(size)
			const processHelper = new wfcModule.ConstraintPropagationSolverProcessHelper3D(
				2,
				1,
				size.z,
				size.y,
				size.x,
				false
			)

			prototypes.forEach((prototype, id) => {
				const neighbourCells = prototype.neighbourCells

				neighbourCells.px.forEach((neighbourId) => {
					processHelper.set_rule(id, neighbourId, 0, 0, 1, true)
				})

				neighbourCells.nx.forEach((neighbourId) => {
					processHelper.set_rule(id, neighbourId, 0, 0, -1, true)
				})

				neighbourCells.py.forEach((neighbourId) => {
					processHelper.set_rule(id, neighbourId, 0, 1, 0, true)
				})

				neighbourCells.ny.forEach((neighbourId) => {
					processHelper.set_rule(id, neighbourId, 0, -1, 0, true)
				})

				neighbourCells.pz.forEach((neighbourId) => {
					processHelper.set_rule(id, neighbourId, 1, 0, 0, true)
				})

				neighbourCells.nz.forEach((neighbourId) => {
					processHelper.set_rule(id, neighbourId, -1, 0, 0, true)
				})
			})

			processHelper.run()

			const waves = new Array(size.x)
				.fill(0)
				.map(() => new Array(size.y).fill(0).map(() => new Array(size.z).fill(0)))
			for (let x = 0; x < 10; x++) {
				for (let y = 0; y < 10; y++) {
					for (let z = 0; z < 10; z++) {
						waves[x][y][z] = [processHelper.query(z, y, x)]
					}
				}
			}

			setGeneration(wfc.waves)
		}
	}, [wfcModule, prototypes])

	// Set module
	// @ts-ignore
	/* Module().then(function (Wasm) {
		//const propgationHelper = new Wasm.ConstraintPropagationSolverProcessHelper3D(2, 1, 10, 10, 10)
		//setConstraintPropagationHelper(propgationHelper)
	})*/

	return (
		<div style={{ position: "absolute", bottom: 20 }}>
			<button
				className="bg-black text-white hover:bg-gray-800 font-bold py-2 px-2 rounded"
				onClick={() => generate()}
			>
				<p> Generate </p>
			</button>
		</div>
	)
}

export default Generator
