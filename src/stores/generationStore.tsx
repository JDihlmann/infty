import { Prototype, Vector3, Model as ModelWFC } from "@/utils/wfc"
import produce, { Draft } from "immer"
import create, { State, StateCreator } from "zustand"
import { parsePrototypes } from "@/models/config"

import WASM from "@/stores/wasm"

export interface Pos3 {
	x: number
	y: number
	z: number
}

type GenerationStore = {
	prototypes: Prototype[]
	size: Vector3
	wfc: ModelWFC
}

// @ts-ignore

/* // @ts-ignore
WASM().then((module) => {
	console.log("Module created!")

	// @ts-ignore
	module.cwrap("test_func")
	//let a = module._pingIt()
	//console.log(a)
}) */

//const test_func = WASM.cwrap("test_func")
//test_func()

// @ts-ignore
WASM()
//const test_func = WASM().cwrap("test_func")
//test_func()

const immer =
	<T extends State>(
		config: StateCreator<T, (fn: (draft: Draft<T>) => void) => void>
	): StateCreator<T> =>
	(set, get, api) =>
		config((fn) => set(produce<T>(fn)), get, api)

export const useGenerationStore = create<GenerationStore>(
	immer((set, get) => ({
		size: { x: 100, y: 10, z: 100 },
		prototypes: parsePrototypes(),
		wfc: new ModelWFC(),
		//wasmExports: WASM.wasmExports,
	}))
)
