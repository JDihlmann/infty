import { useGenerationStore } from "@/stores/generationStore"
import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import WFC from "@/stores/wfc"

const WFCPromise = WFC({
	noInitialRun: true,
	noExitRuntime: true,
})

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

	//@ts-ignore
	WFCPromise.then((mod) => {
		console.log(mod)
	})

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
