import { useEffect, useState } from "react"
//import wfc from "@/utils/wasmLoader"
import WFC from "@/stores/wfc"
import dynamic from "next/dynamic"
import { useGenerationStore } from "@/stores/generationStore"

const FullGenerator = dynamic({
	ssr: false,
	loader: async () => {
		const size = useGenerationStore.getState().size
		const prototypes = useGenerationStore.getState().prototypes
		const setGeneration = useGenerationStore.getState().setGeneration

		console.log(size)
		const WFC = await import("../../stores/wfc")

		//@ts-ignore
		WFC.default().then((module) => {
			// Init Helper
			const processHelper = new module.ForwardPropagationSolverProcessHelper3D_32_16_32(prototypes.length, false, false)

			// Enable Heuristic
			processHelper.set_element_type_heuristic(1)

			// Set Probability
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
						} else if (prototype.id.split("_")[0] == "StairsLeft" || prototype.id.split("_")[0] == "StairsRight") {
							processHelper.set_density_probability(id, 3)
						} else {
							processHelper.set_density_probability(id, 1)
						}
					})
				})
			})

			// Pad Walls
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

			// Run
			processHelper.run()

			// Log Error
			if (processHelper.had_error()) {
				console.log(processHelper.get_last_error())
			}

			// Get Result
			const waves = new Array(size.x).fill(0).map(() => new Array(size.y).fill(0).map(() => new Array(size.z).fill(0)))
			for (let x = 0; x < size.x; x++) {
				for (let y = 0; y < size.y; y++) {
					for (let z = 0; z < size.z; z++) {
						//@ts-ignore
						waves[x][y][z] = [processHelper.query(x, y, z) - 1]
					}
				}
			}

			// Set Generation
			setGeneration(waves)
		})

		return () => <></>
	},
})

export default FullGenerator
