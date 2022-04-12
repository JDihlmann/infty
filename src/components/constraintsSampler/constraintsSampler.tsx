import Header from "@/components/header/header"
import React, { FunctionComponent } from "react"
import { useControls } from "leva"
import { useGenerationStore } from "@/stores/generationStore"

interface ConstraintsSamplerProps {}

const ConstraintsSampler: FunctionComponent<ConstraintsSamplerProps> = ({}) => {
	const prototypes = useGenerationStore((state) => state.prototypes)
	const probabilites = useGenerationStore((state) => state.probabilities)
	const setProbalities = useGenerationStore((state) => state.setProbabilities)

	const names: string[] = Object.values(prototypes).map(({ id }) => {
		return id.split("_")[0]
	})

	const levaObjects: Record<string, number> = {}
	names.forEach((name) => {
		levaObjects[name] = probabilites[name] ? probabilites[name] : 1
	})

	const probabilities = useControls(levaObjects, { collapsed: true })
	setProbalities(probabilities)

	return <></>
}

export default ConstraintsSampler
