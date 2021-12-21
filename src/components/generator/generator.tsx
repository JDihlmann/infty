import { useGenerationStore } from "@/stores/generationStore"

const Generator = () => {
	const wfc = useGenerationStore((state) => state.wfc)
	const size = useGenerationStore((state) => state.size)
	const prototypes = useGenerationStore((state) => state.prototypes)
	const setGeneration = useGenerationStore((state) => state.setGeneration)

	const generate = () => {
		wfc.init(prototypes, size)
		wfc.run(1, 1000000000000000)
		setGeneration(wfc.waves)
	}

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
