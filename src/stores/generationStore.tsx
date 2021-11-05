import { Prototype, Vector3, Model as ModelWFC } from "@/utils/wfc"
import produce, { Draft } from "immer"
import create, { State, StateCreator } from "zustand"

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

const immer =
	<T extends State>(
		config: StateCreator<T, (fn: (draft: Draft<T>) => void) => void>
	): StateCreator<T> =>
	(set, get, api) =>
		config((fn) => set(produce<T>(fn)), get, api)

export const useGenerationStore = create<GenerationStore>(
	immer((set, get) => ({
		size: { x: 10, y: 10, z: 10 },
		prototypes: [
			{
				id: "fill_cube",
				neighbourCells: {
					px: [0],
					nx: [0],
					py: [0, 1],
					ny: [0],
					pz: [0],
					nz: [0],
				},
			},
			{
				id: "ceil_cube",
				neighbourCells: {
					px: [1],
					nx: [1],
					py: [2],
					ny: [0, 1],
					pz: [1],
					nz: [1],
				},
			},
			{
				id: "empty",
				neighbourCells: {
					px: [2],
					nx: [2],
					py: [2],
					ny: [1, 2],
					pz: [2],
					nz: [2],
				},
			},
		],
		wfc: new ModelWFC(),
	}))
)
