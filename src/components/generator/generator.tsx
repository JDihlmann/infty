import { useGenerationStore } from "@/stores/generationStore"
import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { useFrame } from "@react-three/fiber"
import FullGenerator from "./fullGenerator"
import StepGenerator from "./stepGenerator"
import { FullGeneratorLoader, StepGeneratorLoader } from "./loader"

const Generator = () => {
	const [generateFull, setGenerateFull] = useState(false)
	const [generateFullDone, setGenerateFullDone] = useState(false)
	const [generateStep, setGenerateStep] = useState(false)
	const [generateStepDone, setGenerateStepDone] = useState(false)

	return (
		<>
			<button
				style={{
					marginRight: "10px",
					pointerEvents: "all",
					backgroundColor: generateFull && generateFullDone ? "#E14942" : "#222222",
				}}
				onClick={() => {
					setGenerateFull(!generateFull)
					setGenerateStep(false)
					setGenerateFullDone(false)
					setGenerateStepDone(false)
					useGenerationStore.getState().setGeneration([])
				}}
			>
				{!generateFullDone && generateFull ? (
					<div
						className="lds-default"
						style={{
							pointerEvents: "all",
							transform: "scale(0.5)",
						}}
					>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				) : (
					<p> {generateFull ? "Delete" : "Full Generation"} </p>
				)}
			</button>
			{generateFull && (
				<FullGeneratorLoader
					doneCallback={() => {
						setGenerateFullDone(true)
					}}
				/>
			)}
			<button
				style={{
					pointerEvents: "all",
					backgroundColor: generateStep && generateStepDone ? "#E14942" : "#222222",
				}}
				onClick={() => {
					setGenerateStep(!generateStep)
					setGenerateFull(false)
					setGenerateFullDone(false)
					setGenerateStepDone(false)
					useGenerationStore.getState().setGeneration([])
				}}
			>
				{!generateStepDone && generateStep ? (
					<div
						className="lds-default"
						style={{
							pointerEvents: "all",
							transform: "scale(0.5)",
						}}
					>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				) : (
					<p> {generateStep ? "Delete" : "Step Generation"} </p>
				)}
			</button>

			{generateStep && (
				<StepGeneratorLoader
					doneCallback={() => {
						setGenerateStepDone(true)
					}}
				/>
			)}
		</>
	)
}

export default Generator
