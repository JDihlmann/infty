import { useGenerationStore } from "@/stores/generationStore"
import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { useFrame } from "@react-three/fiber"

const Generator = () => {
	const size = useGenerationStore((state) => state.size)
	const prototypes = useGenerationStore((state) => state.prototypes)
	const setGeneration = useGenerationStore((state) => state.setGeneration)
	const setDebugEntropy = useGenerationStore((state) => state.debugEntropy)
	const initWFCModule = useGenerationStore((state) => state.initWFCModule)
	const wfcModule = useGenerationStore((state) => state.wfcModule)

	// @ts-ignore
	const [processHelper, setProcessHelper] = useState(undefined)

	const [isRunning, setIsRunning] = useState(false)

	//@ts-ignore
	const logError = (processHelper, errPos) => {
		if (processHelper.had_error()) {
			console.log("Error in " + errPos)
			console.log(processHelper.get_last_error())
		}
	}

	const initProcessHelper = () => {
		if (wfcModule) {
			const processHelper = new wfcModule.ForwardPropagationSolverProcessHelper3D_32_16_32(
				prototypes.length,
				false,
				false
			)

			console.log(prototypes.length)
			logError(processHelper, "init")

			processHelper.set_element_type_heuristic(1)

			prototypes.forEach((prototype, id) => {
				const neighbourCells = prototype.neighbourCells

				Object.entries(neighbourCells).forEach(([posId, neighbourIds]) => {
					neighbourIds.forEach((neighbourId: number) => {
						const x = parseInt(posId.split("_")[0])
						const y = parseInt(posId.split("_")[1])
						const z = parseInt(posId.split("_")[2])
						processHelper.set_rule(id, neighbourId, x, y, z, true)

						if (prototype.id == "Empty") {
							processHelper.set_density_probability(id, 10)
						} else if (prototype.id.split("_")[0] == "Wall") {
							processHelper.set_density_probability(id, 2)
						} else if (prototype.id.split("_")[0] == "Stairs") {
							processHelper.set_density_probability(id, 1)
						} else if (
							prototype.id.split("_")[0] == "StairsLeft" ||
							prototype.id.split("_")[0] == "StairsRight"
						) {
							processHelper.set_density_probability(id, 3)
						} else {
							processHelper.set_density_probability(id, 1)
						}
					})
				})
			})

			// Process Helper set floor
			for (let x = 0; x < size.x; x++) {
				for (let y = 0; y < size.y; y++) {
					for (let z = 0; z < size.z; z++) {
						if (y === 0) {
							processHelper.preset_element(x, y, z, 1)
						} else {
							if (x <= 0 || x >= size.x - 1 || z <= 0 || z >= size.z - 1 || y == size.y - 1) {
								processHelper.preset_element(x, y, z, 0)
							}
						}
					}
				}
			}

			// Ban empty elements on top of floor
			/* const s = 10
			for (let x = s; x < size.x - s; x++) {
				for (let z = s; z < size.z - s; z++) {
					//@ts-ignore
					processHelper.ban_element(x, 1, z, 0)
				}
			} */

			setProcessHelper(processHelper)
		}
	}

	const run = () => {
		if (processHelper) {
			var t0 = performance.now()
			console.log("Started running")

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
						waves[x][y][z] = [processHelper.query(x, y, z) - 1]
						logError(processHelper, "query")
					}
				}
			}
			console.log(waves)

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
						waves[x][y][z] = [processHelper.query(x, y, z) - 1]

						//@ts-ignore
						entropies[x][y][z] = processHelper.num_valid_in_pattern_buffer_coordinates(x, y, z)
						logError(processHelper, "query")
					}
				}
			}

			console.log("Generated Succesfully")

			setGeneration(waves)
			// setDebugEntropy(waves, entropies)
			const timer = setTimeout(() => {
				step()
			}, 50)
		} else {
			initProcessHelper()
		}
	}

	useEffect(() => {
		initWFCModule()
	}, [initWFCModule])

	return (
		<>
			<button
				style={{
					marginRight: "10px",
					pointerEvents: "all",
				}}
				//className="bg-black text-white hover:bg-gray-800 font-bold py-2 px-2 rounded"
				onClick={() => run()}
			>
				<p> Generate </p>
			</button>
			<button
				style={{
					pointerEvents: "all",
				}}
				onClick={() => step()}
			>
				<p> Step </p>
			</button>
		</>
	)
}

export default Generator
