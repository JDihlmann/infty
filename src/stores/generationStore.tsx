import {
	Prototype,
	Vector3 as V3,
	Model as ModelWFC,
	NeighbourPrototype,
	NeighbourPrototypeString,
} from "@/utils/wfc"
import produce, { Draft } from "immer"
import create, { State, StateCreator } from "zustand"
import constraints from "@/models/constraints.json"
import WFC from "@/stores/wfc"
import { Vector3 } from "three"

export interface Pos3 {
	x: number
	y: number
	z: number
}

interface PrototypeObject {
	id: string
	key: string
	position: Vector3
}

type GenerationStore = {
	prototypes: Prototype[]
	size: V3
	wfcModule: any
	initWFCModule: () => void
	wfc: ModelWFC
	prototypeObjects: PrototypeObject[]
	setGeneration: (waves: number[][][][]) => void
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

const immer =
	<T extends State>(
		config: StateCreator<T, (fn: (draft: Draft<T>) => void) => void>
	): StateCreator<T> =>
	(set, get, api) =>
		config((fn) => set(produce<T>(fn)), get, api)

export const useGenerationStore = create<GenerationStore>(
	immer((set, get) => ({
		size: { x: 50, y: 10, z: 50 },
		prototypes: constraintArray,
		wfc: new ModelWFC(),
		prototypeObjects: [],
		//wasmExports: WASM.wasmExports,
		wfcModule: undefined,
		initWFCModule: (): void => {
			//@ts-ignore
			WFC().then((mod) => {
				set((state) => {
					state.wfcModule = mod
				})
			})
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
									key: "" + x + "" + y + "" + z,
									id: prototypeIds[protoypeId],
									position: new Vector3(x, y, z),
								})
							}
						}
					}
				}

				state.prototypeObjects = prototypeObjects
			})
		},
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
