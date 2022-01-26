import { useGenerationStore } from "@/stores/generationStore"
import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { Prototype } from "@/utils/wfc"

const Generator = () => {
	const wfc = useGenerationStore((state) => state.wfc)
	const size = useGenerationStore((state) => state.size)
	const prototypes = useGenerationStore((state) => state.prototypes)
	const setGeneration = useGenerationStore((state) => state.setGeneration)
	const setDebugEntropy = useGenerationStore((state) => state.debugEntropy)
	const initWFCModule = useGenerationStore((state) => state.initWFCModule)
	const wfcModule = useGenerationStore((state) => state.wfcModule)

	// @ts-ignore
	const [processHelper, setProcessHelper] = useState(undefined)

	//@ts-ignore
	const logError = (processHelper, errPos) => {
		if (processHelper.had_error()) {
			console.log("Error in " + errPos)
			console.log(processHelper.get_last_error())
		}
	}

	const initProcessHelper = () => {
		if (wfcModule) {
			const processHelper = new wfcModule.ConstraintPropagationSolverProcessHelper3D(
				prototypes.length,
				false
			)

			logError(processHelper, "init")

			/* const id2Pos = {
				pz: { x: 0, y: 0, z: 1 },
				nz: { x: 0, y: 0, z: -1 },
				py: { x: 0, y: 1, z: 0 },
				ny: { x: 0, y: -1, z: 0 },
				px: { x: 1, y: 0, z: 0 },
				nx: { x: -1, y: 0, z: 0 },
			}

			prototypes.forEach((prototype, protoypeId) => {
				const neighbourCells = prototype.neighbourCells

				Object.entries(neighbourCells).forEach(([id, neighbourIds]) => {
					// @ts-ignore
					const pos = id2Pos[id]
					neighbourIds.forEach((neighbourId: number) => {
						// @ts-ignore
						processHelper.set_rule(protoypeId, neighbourId, pos.x, pos.y, pos.z, true)
						logError(processHelper, "set rule")
					})
				})
			}) */

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
			})

			setProcessHelper(processHelper)
		}
	}

	const run = () => {
		if (processHelper) {
			var t0 = performance.now()

			//@ts-ignore
			processHelper.run()

			var t1 = performance.now()
			console.log("Run took: " + (t1 - t0) / 1000 + " seconds.")
			logError(processHelper, "run")

			const waves = new Array(size.x)
				.fill(0)
				.map(() => new Array(size.y).fill(0).map(() => new Array(size.z).fill(0)))

			for (let x = 0; x < size.x; x++) {
				for (let y = 0; y < size.y; y++) {
					for (let z = 0; z < size.z; z++) {
						//@ts-ignore
						waves[x][y][z] = [processHelper.query(z, y, x) - 1]
						logError(processHelper, "query")
					}
				}
			}

			console.log("Generated Succesfully")

			setGeneration(waves)
		} else {
			initProcessHelper()
		}
	}

	const step = () => {
		if (processHelper) {
			var t0 = performance.now()

			//@ts-ignore
			processHelper.run_step()

			var t1 = performance.now()
			console.log("Run took: " + (t1 - t0) / 1000 + " seconds.")
			logError(processHelper, "step")

			const waves = new Array(size.x)
				.fill(0)
				.map(() => new Array(size.y).fill(0).map(() => new Array(size.z).fill(0)))

			const entropies = new Array(size.x)
				.fill(0)
				.map(() => new Array(size.y).fill(0).map(() => new Array(size.z).fill(0)))

			for (let x = 0; x < size.x; x++) {
				for (let y = 0; y < size.y; y++) {
					for (let z = 0; z < size.z; z++) {
						//@ts-ignore
						waves[x][y][z] = [processHelper.query(z, y, x) - 1]

						//@ts-ignore
						entropies[x][y][z] = processHelper.num_valid_in_pattern_buffer_coordinates(x, y, z)
						logError(processHelper, "query")
					}
				}
			}

			console.log("Generated Succesfully")

			setGeneration(waves)
			setDebugEntropy(waves, entropies)
		} else {
			initProcessHelper()
		}
	}

	useEffect(() => {
		initWFCModule()
	}, [initWFCModule])

	return (
		<div style={{ position: "absolute", bottom: 20 }}>
			<button
				className="bg-black text-white hover:bg-gray-800 font-bold py-2 px-2 rounded"
				onClick={() => run()}
			>
				<p> Generate </p>
			</button>
			<button
				className="bg-black text-white hover:bg-gray-800 font-bold py-2 px-2 rounded"
				onClick={() => step()}
			>
				<p> Step </p>
			</button>
		</div>
	)
}

export default Generator
