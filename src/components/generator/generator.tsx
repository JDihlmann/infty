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

	//@ts-ignore
	const logError = (processHelper, errPos) => {
		if (processHelper.had_error()) {
			console.log("Error in " + errPos)
			console.log(processHelper.get_last_error())
		}
	}

	const generate = () => {
		if (wfcModule) {
			console.log("Module")
			console.log(prototypes)
			console.log("Prototypes Length: " + prototypes.length)
			const processHelper = new wfcModule.ConstraintPropagationSolverProcessHelper3D(
				prototypes.length + 1,
				1,
				size.z,
				size.y,
				size.x,
				false
			)

			logError(processHelper, "init")

			prototypes.forEach((prototype, id) => {
				const neighbourCells = prototype.neighbourCells

				neighbourCells.px.forEach((neighbourId) => {
					processHelper.set_rule(id, neighbourId, 0, 0, 1, true)
					logError(processHelper, "set rule")
				})

				neighbourCells.nx.forEach((neighbourId) => {
					processHelper.set_rule(id, neighbourId, 0, 0, -1, true)
					logError(processHelper, "set rule")
				})

				neighbourCells.py.forEach((neighbourId) => {
					processHelper.set_rule(id, neighbourId, 0, 1, 0, true)
					logError(processHelper, "set rule")
				})

				neighbourCells.ny.forEach((neighbourId) => {
					processHelper.set_rule(id, neighbourId, 0, -1, 0, true)
					logError(processHelper, "set rule")
				})

				neighbourCells.pz.forEach((neighbourId) => {
					processHelper.set_rule(id, neighbourId, 1, 0, 0, true)
					logError(processHelper, "set rule")
				})

				neighbourCells.nz.forEach((neighbourId) => {
					processHelper.set_rule(id, neighbourId, -1, 0, 0, true)
					logError(processHelper, "set rule")
				})

				const diag = [-1, 0, 1]

				prototypes.forEach((prototype, otherId) => {
					diag.forEach((z) => {
						diag.forEach((y) => {
							diag.forEach((x) => {
								if (Math.abs(z) + Math.abs(y) + Math.abs(x) > 1) {
									processHelper.set_rule(id, otherId, z, y, x, true)
									logError(processHelper, "set rule")
								}
							})
						})
					})
				})

				diag.forEach((z) => {
					diag.forEach((y) => {
						diag.forEach((x) => {
							processHelper.set_rule(id, prototypes.length, z, y, x, true)
							logError(processHelper, "set rule")
						})
					})
				})
			})

			const diag = [-1, 0, 1]
			diag.forEach((z) => {
				diag.forEach((y) => {
					diag.forEach((x) => {
						processHelper.set_rule(prototypes.length, prototypes.length, z, y, x, true)
						logError(processHelper, "set rule")
					})
				})
			})

			console.log("started run")
			var t0 = performance.now()
			console.log(t0)
			processHelper.run()

			console.log("finished run")
			var t1 = performance.now()
			console.log("Call to doSomething took " + (t1 - t0) / 1000 + " seconds.")
			logError(processHelper, "run")

			/*processHelper.set_rule(prototypes.length, prototypes.length, 0, 0, 1, true)
			processHelper.set_rule(prototypes.length, prototypes.length, 0, 0, -1, true)
			processHelper.set_rule(prototypes.length, prototypes.length, 0, 1, 0, true)
			processHelper.set_rule(prototypes.length, prototypes.length, 0, -1, 0, true)
			processHelper.set_rule(prototypes.length, prototypes.length, 1, 0, 0, true)
			processHelper.set_rule(prototypes.length, prototypes.length, -1, 0, 0, true) */

			const waves = new Array(size.x)
				.fill(0)
				.map(() => new Array(size.y).fill(0).map(() => new Array(size.z).fill(0)))

			for (let x = 0; x < 10; x++) {
				for (let y = 0; y < 10; y++) {
					for (let z = 0; z < 10; z++) {
						console.log(processHelper.query(z, y, x) - 1)

						waves[x][y][z] = [processHelper.query(z, y, x) - 1]
					}
				}
			}

			logError(processHelper, "query")

			setGeneration(waves)
		}
	}

	useEffect(() => {
		initWFCModule()
	}, [initWFCModule])

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
