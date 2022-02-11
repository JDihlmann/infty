import produce, { Draft } from "immer"
import create, { State, StateCreator } from "zustand"
import constraints from "@/models/constraints.json"
import WFC from "@/stores/wfc"
import { Vector3 } from "three"
import { DigitalGlitch } from "three-stdlib"

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
	wfcModule: any
	initWFCModule: () => void
	waves: number[][][][]
	prototypeObjects: PrototypeObject[]
	entropyObjects: PrototypeObject[]
	setGeneration: (waves: number[][][][]) => void
	debugEntropy: (waves: number[][][][], wavesEntropy: number[][][]) => void
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
	<T extends State>(
		config: StateCreator<T, (fn: (draft: Draft<T>) => void) => void>
	): StateCreator<T> =>
	(set, get, api) =>
		config((fn) => set(produce<T>(fn)), get, api)

export const useGenerationStore = create<GenerationStore>(
	immer((set, get) => ({
		size: { x: 32, y: 16, z: 32 },
		prototypes: constraintArray,
		prototypeObjects: [],
		entropyObjects: [],
		waves: [[[]]],
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
									key: "" + x + "-" + y + "-" + z,
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
		debugEntropy: (waves: number[][][][], wavesEntropy: number[][][]): void => {
			set((state) => {
				const prototypeObjects: PrototypeObject[] = []

				for (let x = 0; x < wavesEntropy.length; x++) {
					for (let y = 0; y < wavesEntropy[0].length; y++) {
						for (let z = 0; z < wavesEntropy[0][0].length; z++) {
							if (waves[x][y][z][0] != -1) {
								console.log("Empty")
								const diag = [-1, 0, 1]
								diag.forEach((dx) => {
									diag.forEach((dy) => {
										diag.forEach((dz) => {
											if (Math.abs(dx) + Math.abs(dy) + Math.abs(dz) == 1) {
												if (
													x + dx >= 0 &&
													x + dx < wavesEntropy.length &&
													y + dy >= 0 &&
													y + dy < wavesEntropy[0].length &&
													z + dz >= 0 &&
													z + dz < wavesEntropy[0][0].length
												) {
													if (waves[x + dx][y + dy][z + dz][0] == -1) {
														let found = false
														prototypeObjects.forEach((p) => {
															if (p.key == x + dx + "" + (y + dy) + "" + (z + dz)) {
																found = true
															}
														})

														if (!found) {
															prototypeObjects.push({
																key: "" + x + dx + "" + y + dy + "" + z + dz,
																id: "" + wavesEntropy[x + dx][y + dy][z + dz],
																position: new Vector3(x + dx, y + dy, z + dz),
															})
														}
													}
												}
											}
										})
									})
								})
							}
						}
					}
				}
				state.entropyObjects = prototypeObjects
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
