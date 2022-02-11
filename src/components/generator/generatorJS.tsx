import { useGenerationStore } from "@/stores/generationStore"

const GeneratorJS = () => {
	const wfc = useGenerationStore((state) => state.wfc)
	const size = useGenerationStore((state) => state.size)
	const prototypes = useGenerationStore((state) => state.prototypes)
	const setGeneration = useGenerationStore((state) => state.setGeneration)

	const generate = () => {
		wfc.init(prototypes, size)
		wfc.run(1, 1000000000000000)
		useGenerationStore.getState().initWFCModule()
		setGeneration(wfc.waves)
	}

	const checkValidity = () => {
		const wfcModule = useGenerationStore.getState().wfcModule
		if (wfcModule) {
			const waves = useGenerationStore.getState().waves
			const prototypes = useGenerationStore.getState().prototypes
			const processHelper = new wfcModule.ConstraintPropagationSolverProcessHelper3D(
				prototypes.length,
				false,
				1,
				size.x,
				size.y,
				size.z
			)

			prototypes.forEach((prototype, id) => {
				const neighbourCells = prototype.neighbourCells

				neighbourCells.px.forEach((neighbourId) => {
					processHelper.set_rule(id, neighbourId, 1, 0, 0, true)
				})

				neighbourCells.nx.forEach((neighbourId) => {
					processHelper.set_rule(id, neighbourId, -1, 0, 0, true)
				})

				neighbourCells.py.forEach((neighbourId) => {
					processHelper.set_rule(id, neighbourId, 0, 1, 0, true)
				})

				neighbourCells.ny.forEach((neighbourId) => {
					processHelper.set_rule(id, neighbourId, 0, -1, 0, true)
				})

				neighbourCells.pz.forEach((neighbourId) => {
					processHelper.set_rule(id, neighbourId, 0, 0, 1, true)
				})

				neighbourCells.nz.forEach((neighbourId) => {
					processHelper.set_rule(id, neighbourId, 0, 0, -1, true)
				})
			})

			for (let x = 0; x < size.x; x++) {
				for (let y = 0; y < size.y; y++) {
					for (let z = 0; z < size.z; z++) {
						const wave = waves[x][y][z][0]
						processHelper.write_external_solution(x, y, z, wave)
					}
				}
			}

			processHelper.validate_external_solution()
		}
	}

	return (
		<div style={{ position: "absolute", bottom: 20 }}>
			<button
				className="bg-black text-white hover:bg-gray-800 font-bold py-2 px-2 rounded"
				onClick={() => generate()}
			>
				<p> Generate </p>
			</button>
			<button
				className="bg-black text-white hover:bg-gray-800 font-bold py-2 px-2 rounded"
				onClick={() => checkValidity()}
			>
				<p> Validity </p>
			</button>
		</div>
	)
}

export default GeneratorJS
