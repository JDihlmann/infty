import produce, { Draft } from "immer"
import create, { State, StateCreator } from "zustand"

export interface Pos3 {
	x: number
	y: number
	z: number
}

interface Pond {
	scale: Pos3
	position: Pos3
	randomPositionInside: () => Pos3
}

type EnvironmentStore = {
	pond: Pond
}

const immer =
	<T extends State>(
		config: StateCreator<T, (fn: (draft: Draft<T>) => void) => void>
	): StateCreator<T> =>
	(set, get, api) =>
		config((fn) => set(produce<T>(fn)), get, api)

export const useEnvironmentStore = create<EnvironmentStore>(
	immer((set, get) => ({
		pond: {
			scale: { x: 10, y: 10, z: 4 },
			position: { x: 0, y: 0, z: 0 },
			randomPositionInside() {
				const { pond } = get()

				const inset = 0.2
				const x_diff = pond.scale.x / 2
				const y_diff = pond.scale.y / 2
				const z_diff = pond.scale.z / 2

				const pondPosY = pond.position.y - y_diff
				const x_hat =
					Math.random() * (pond.position.x + x_diff - inset - (pond.position.x - x_diff + inset)) +
					(pond.position.x - x_diff + inset)
				const y_hat =
					Math.random() * (pondPosY + y_diff - inset - (pondPosY - y_diff + inset)) +
					(pondPosY - y_diff + inset)
				const z_hat =
					Math.random() * (pond.position.z + z_diff - inset - (pond.position.z - z_diff + inset)) +
					(pond.position.z - z_diff + inset)

				return { x: x_hat, y: y_hat, z: z_hat }
			},
		},
	}))
)
