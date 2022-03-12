import { useEffect, useState } from "react"
//import wfc from "@/utils/wasmLoader"
import dynamic from "next/dynamic"
import { useGenerationStore } from "@/stores/generationStore"

export const FullGeneratorLoader = dynamic(() => import("./fullGenerator"), {
	ssr: false,
})

export const StepGeneratorLoader = dynamic(() => import("./stepGenerator"), {
	ssr: false,
})
