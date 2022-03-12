import { useGenerationStore } from "@/stores/generationStore"
import { memo, useEffect, useState } from "react"
import WFC from "../../wfc/wfc"

interface FullGeneratorProps {
	doneCallback: () => void
}

const FullGenerator = memo<FullGeneratorProps>(({ doneCallback }) => {
	const size = useGenerationStore((state) => state.size)
	const prototypes = useGenerationStore((state) => state.prototypes)
	const setGeneration = useGenerationStore((state) => state.setGeneration)

	const [wfcModule, setWFCModule] = useState(undefined)
	const [done, setDone] = useState(false)

	useEffect(() => {
		//@ts-ignore
		WFC().then((module) => {
			setWFCModule(module)
		})
	}, [])

	useEffect(() => {
		if (wfcModule && !done) {
			// @ts-ignore
			const processHelper = new wfcModule.ForwardPropagationSolverProcessHelper3D_32_16_32(
				prototypes.length,
				false,
				false
			)

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
			try {
				processHelper.run()

				// Get Result
				const waves = new Array(size.x)
					.fill(0)
					.map(() => new Array(size.y).fill(0).map(() => new Array(size.z).fill(0)))
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
				setDone(true)
				doneCallback()
			} catch (error) {
				console.log("Rerunning")
				if (processHelper.had_error()) {
					console.log(processHelper.get_last_error())
				}

				//@ts-ignore
				WFC().then((module) => {
					setWFCModule(module)
				})
			}
		}
	}, [wfcModule, size, prototypes, setGeneration, doneCallback, setDone, done])

	return <></>
})

export default FullGenerator
