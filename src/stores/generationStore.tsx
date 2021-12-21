import {
	Prototype,
	Vector3,
	Model as ModelWFC,
	NeighbourPrototype,
	NeighbourPrototypeString,
} from "@/utils/wfc"
import produce, { Draft } from "immer"
import create, { State, StateCreator } from "zustand"
import constraints from "@/models/constraints.json"

import Module from "@/stores/wasm"

export interface Pos3 {
	x: number
	y: number
	z: number
}

type GenerationStore = {
	prototypes: Prototype[]
	size: Vector3
	wfc: ModelWFC
	initializeModule: () => void
}

const constraintIdArray = Object.keys(constraints)
const constraintArray: Prototype[] = []
Object.entries(constraints).forEach(([key, value]) => {
	const neighboursCells: NeighbourPrototype = {
		px: [],
		nx: [],
		py: [],
		ny: [],
		pz: [],
		nz: [],
	}

	Object.entries(value).forEach(([key, value]) => {
		const neighbourCellAxis = value.map((id) => {
			return constraintIdArray.indexOf(id)
		})

		// @ts-ignore
		neighboursCells[key] = neighbourCellAxis
	})

	constraintArray.push({
		id: key,
		neighbourCells: neighboursCells,
	})
})

const initializeModule = () => {
	//@ts-ignore
	Module().then(function (Wasm) {
		const test_func = Wasm.cwrap("test_function")
		console.log("Test Function")
		console.log(test_func())

		// const height = 10
		// var sizes = Wasm._malloc(8)
		// Wasm.HEAP32.set(new Int32Array([height, width]), sizes / 4)
		// processHelper = new Wasm.ConstraintPropagationSolverProcessHelper2(2, 1, sizes)
	})
}

const immer =
	<T extends State>(
		config: StateCreator<T, (fn: (draft: Draft<T>) => void) => void>
	): StateCreator<T> =>
	(set, get, api) =>
		config((fn) => set(produce<T>(fn)), get, api)

export const useGenerationStore = create<GenerationStore>(
	immer((set, get) => ({
		size: { x: 10, y: 10, z: 10 },
		prototypes: constraintArray,
		wfc: new ModelWFC(),
		//wasmExports: WASM.wasmExports,
		initializeModule: initializeModule,
	}))
)

/* const convertConstraintsToPrototypes = (
	constraints: Record<string, Record<string, NeighbourPrototypeString>>
) => {
	const prototypes: Prototype[] = []
	constraints.forEach((element) => {
		const id = Object.keys(element)[0]
		const neighbours = element[id]
		const prototype: Prototype = { id: id, neighbourCells: neighbours }
		prototypes.push(prototype)
	})

	return prototypes
}*/
