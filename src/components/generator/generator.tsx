import { useGenerationStore } from "@/stores/generationStore"
import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { useFrame } from "@react-three/fiber"
import FullGenerator from "./fullGenerator"
import StepGenerator from "./stepGenerator"

const Generator = () => {
	const [generateFull, setGenerateFull] = useState(false)
	const [generateStep, setGenerateStep] = useState(false)

	return (
		<>
			<button
				style={{
					marginRight: "10px",
					pointerEvents: "all",
					backgroundColor: generateFull ? "#444444" : "#222222",
				}}
				onClick={() => {
					setGenerateFull(!generateFull)
					setGenerateStep(false)
					useGenerationStore.getState().setGeneration([])
				}}
			>
				<p> {generateFull ? "Delete" : "Full Generation"} </p>
			</button>
			{generateFull && <FullGenerator />}
			<button
				style={{
					pointerEvents: "all",
					backgroundColor: generateStep ? "#444444" : "#222222",
				}}
				onClick={() => {
					setGenerateStep(!generateStep)
					setGenerateFull(false)
					useGenerationStore.getState().setGeneration([])
				}}
			>
				<p> {generateStep ? "Delete" : "Step Generation"} </p>
			</button>
			{generateStep && <StepGenerator />}
		</>
	)
}

export default Generator
