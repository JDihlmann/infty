import constraints from "@/models/constraints.json"
import produce, { Draft } from "immer"
import { Vector3 } from "three"
import create, { State, StateCreator } from "zustand"

export interface Pos3 {
	x: number
	y: number
	z: number
}

export interface Prototype {
	id: string
	neighbourCells: Record<string, number[]>
}
interface PrototypeObject {
	id: string
	key: string
	position: Vector3
}

type GenerationStore = {
	prototypes: Prototype[]
	size: Pos3
	waves: number[][][][]
	entropyObjects: PrototypeObject[]
	prototypeObjects: PrototypeObject[]
	setGeneration: (waves: number[][][][]) => void
	probabilities: Record<string, number>
	exporting: boolean
	setExport: (exporting: boolean) => void
	setProbabilities: (probabilities: Record<string, number>) => void
}

const constraintIdArray = Object.keys(constraints)
const constraintArray: Prototype[] = []
Object.entries(constraints).forEach(([key, value]) => {
	const neighboursCells: Record<string, number[]> = {}

	const diag = [-1, 0, 1]
	diag.forEach((dx) => {
		diag.forEach((dy) => {
			diag.forEach((dz) => {
				neighboursCells["" + dx + "_" + dy + "_" + dz + ""] = []
			})
		})
	})

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

const immer =
	<T extends State>(config: StateCreator<T, (fn: (draft: Draft<T>) => void) => void>): StateCreator<T> =>
	(set, get, api) =>
		config((fn) => set(produce<T>(fn)), get, api)

export const useGenerationStore = create<GenerationStore>(
	immer((set, get) => ({
		size: { x: 32, y: 16, z: 32 },
		prototypes: constraintArray,
		prototypeObjects: [],
		entropyObjects: [],
		waves: [[[]]],
		exporting: false,
		probabilities: {
			Empty: 10, // 10
			Wall: 2,
			Stairs: 1,
			StairsLeft: 3,
			StairsRight: 3,
		},

		setGeneration: (waves: number[][][][]): void => {
			set((state) => {
				const prototypeObjects: PrototypeObject[] = []
				const prototypeIds: string[] = useGenerationStore.getState().prototypes.map((p) => p.id)

				for (let x = 0; x < waves.length; x++) {
					for (let y = 0; y < waves[0].length; y++) {
						for (let z = 0; z < waves[0][0].length; z++) {
							let protoypeId = waves[x][y][z][0]
							if (protoypeId == -1) {
								protoypeId = 0
							}

							const prototypeName = prototypeIds[protoypeId]
							if (prototypeName !== "Empty" && prototypeName !== undefined) {
								prototypeObjects.push({
									key: "" + x + "_" + y + "_" + z,
									id: prototypeIds[protoypeId],
									position: new Vector3(x, y, z),
								})
							}
						}
					}
				}

				state.waves = waves
				state.prototypeObjects = prototypeObjects
			})
		},

		setExport: (exporting: boolean): void => {
			set((state) => {
				state.exporting = exporting
			})
		},

		setProbabilities: (probabilities: Record<string, number>): void => {
			set((state) => {
				state.probabilities = probabilities
			})
		},
	}))
)
