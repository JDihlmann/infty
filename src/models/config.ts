import { Prototype } from "@/utils/wfc"

export interface PrototypeTemplate {
	id: string
	neighbourCells: { px: string; nx: string; py: string; ny: string; pz: string; nz: string }
}

const prototypes: PrototypeTemplate[] = [
	{
		id: "empty",
		neighbourCells: {
			px: "E",
			nx: "E",
			py: "E",
			ny: "E",
			pz: "E",
			nz: "E",
		},
	},
	{
		id: "Corner_1",
		neighbourCells: {
			px: "C",
			nx: "C",
			py: "C",
			ny: "O",
			pz: "C",
			nz: "C",
		},
	},
	{
		id: "Corner_2",
		neighbourCells: {
			px: "C",
			nx: "O",
			py: "C",
			ny: "C",
			pz: "C",
			nz: "O",
		},
	},
	{
		id: "Corner_3",
		neighbourCells: {
			px: "C",
			nx: "C",
			py: "C",
			ny: "C",
			pz: "O",
			nz: "C",
		},
	},
	{
		id: "Corner_4",
		neighbourCells: {
			px: "O",
			nx: "C",
			py: "C",
			ny: "C",
			pz: "C",
			nz: "C",
		},
	},
	{
		id: "Corner_5",
		neighbourCells: {
			px: "C",
			nx: "C",
			py: "C",
			ny: "C",
			pz: "C",
			nz: "O",
		},
	},
	{
		id: "EdgeB_1",
		neighbourCells: {
			px: "S",
			nx: "C",
			py: "C",
			ny: "S",
			pz: "C",
			nz: "C",
		},
	},
	{
		id: "EdgeB_2",
		neighbourCells: {
			px: "C",
			nx: "C",
			py: "C",
			ny: "S",
			pz: "C",
			nz: "S",
		},
	},
	{
		id: "EdgeB_3",
		neighbourCells: {
			px: "C",
			nx: "S",
			py: "C",
			ny: "S",
			pz: "C",
			nz: "C",
		},
	},
	{
		id: "EdgeB_4",
		neighbourCells: {
			px: "C",
			nx: "C",
			py: "C",
			ny: "S",
			pz: "S",
			nz: "C",
		},
	},
	{
		id: "EdgeC_1",
		neighbourCells: {
			px: "S",
			nx: "C",
			py: "C",
			ny: "C",
			pz: "S",
			nz: "C",
		},
	},
	{
		id: "EdgeC_2",
		neighbourCells: {
			px: "S",
			nx: "C",
			py: "C",
			ny: "C",
			pz: "C",
			nz: "S",
		},
	},
	{
		id: "EdgeC_3",
		neighbourCells: {
			px: "C",
			nx: "S",
			py: "C",
			ny: "C",
			pz: "C",
			nz: "S",
		},
	},
	{
		id: "EdgeC_4",
		neighbourCells: {
			px: "C",
			nx: "S",
			py: "C",
			ny: "C",
			pz: "S",
			nz: "C",
		},
	},
	{
		id: "EdgeT_1",
		neighbourCells: {
			px: "S",
			nx: "C",
			py: "S",
			ny: "C",
			pz: "C",
			nz: "C",
		},
	},
	{
		id: "EdgeT_2",
		neighbourCells: {
			px: "C",
			nx: "C",
			py: "S",
			ny: "C",
			pz: "C",
			nz: "S",
		},
	},
	{
		id: "EdgeT_3",
		neighbourCells: {
			px: "C",
			nx: "S",
			py: "S",
			ny: "C",
			pz: "C",
			nz: "C",
		},
	},
	{
		id: "EdgeT_4",
		neighbourCells: {
			px: "C",
			nx: "C",
			py: "S",
			ny: "C",
			pz: "S",
			nz: "C",
		},
	},
	{
		id: "Tube_1",
		neighbourCells: {
			px: "C",
			nx: "C",
			py: "O",
			ny: "O",
			pz: "C",
			nz: "C",
		},
	},
	{
		id: "Tube_2",
		neighbourCells: {
			px: "C",
			nx: "C",
			py: "C",
			ny: "C",
			pz: "O",
			nz: "O",
		},
	},
	{
		id: "Tube_3",
		neighbourCells: {
			px: "O",
			nx: "O",
			py: "C",
			ny: "C",
			pz: "C",
			nz: "C",
		},
	},
	{
		id: "StairB_1",
		neighbourCells: {
			px: "S",
			nx: "C",
			py: "C",
			ny: "S",
			pz: "C",
			nz: "C",
		},
	},
	{
		id: "StairB_2",
		neighbourCells: {
			px: "C",
			nx: "C",
			py: "C",
			ny: "S",
			pz: "C",
			nz: "S",
		},
	},
	{
		id: "StairB_3",
		neighbourCells: {
			px: "C",
			nx: "S",
			py: "C",
			ny: "S",
			pz: "C",
			nz: "C",
		},
	},
	{
		id: "StairB_4",
		neighbourCells: {
			px: "C",
			nx: "C",
			py: "C",
			ny: "S",
			pz: "S",
			nz: "C",
		},
	},
	{
		id: "StairT_1",
		neighbourCells: {
			px: "S",
			nx: "S",
			py: "C",
			ny: "C",
			pz: "C",
			nz: "C",
		},
	},
	{
		id: "StairT_2",
		neighbourCells: {
			px: "C",
			nx: "C",
			py: "S",
			ny: "C",
			pz: "C",
			nz: "S",
		},
	},
	{
		id: "StairT_3",
		neighbourCells: {
			px: "S",
			nx: "C",
			py: "S",
			ny: "C",
			pz: "C",
			nz: "C",
		},
	},
	{
		id: "StairT_4",
		neighbourCells: {
			px: "C",
			nx: "C",
			py: "S",
			ny: "C",
			pz: "S",
			nz: "C",
		},
	},
]

const revertKey = (key: string): string => {
	switch (key) {
		case "px":
			return "nx"

		case "nx":
			return "px"

		case "py":
			return "ny"

		case "ny":
			return "py"

		case "pz":
			return "nz"

		case "nz":
			return "pz"

		default:
			return "px"
	}
}

export const parsePrototypes = (): Prototype[] => {
	const C = {
		px: [] as number[],
		nx: [] as number[],
		py: [] as number[],
		ny: [] as number[],
		pz: [] as number[],
		nz: [] as number[],
	}

	const S = {
		px: [] as number[],
		nx: [] as number[],
		py: [] as number[],
		ny: [] as number[],
		pz: [] as number[],
		nz: [] as number[],
	}

	const O = {
		px: [] as number[],
		nx: [] as number[],
		py: [] as number[],
		ny: [] as number[],
		pz: [] as number[],
		nz: [] as number[],
	}

	for (let i = 0; i < prototypes.length; i++) {
		const prototype = prototypes[i]
		const { neighbourCells } = prototype

		Object.entries(neighbourCells).forEach(([key, value]) => {
			switch (value) {
				case "C":
					//@ts-ignore
					C[key].push(i)
					break
				case "S":
					//@ts-ignore
					S[key].push(i)
					break
				case "O":
					//@ts-ignore
					O[key].push(i)
					break
			}
		})
	}

	const parserPrototypes = [] as Prototype[]

	for (let i = 0; i < prototypes.length; i++) {
		const prototype = prototypes[i]
		const { neighbourCells } = prototype

		const parsedPrototype: Prototype = {
			id: prototype.id,
			neighbourCells: {
				px: [] as number[],
				nx: [] as number[],
				py: [] as number[],
				ny: [] as number[],
				pz: [] as number[],
				nz: [] as number[],
			},
		}

		Object.entries(neighbourCells).forEach(([key, value]) => {
			switch (value) {
				case "C":
					//@ts-ignore
					parsedPrototype.neighbourCells[key] = [0]
					break
				case "S":
					//@ts-ignore
					parsedPrototype.neighbourCells[key] = O[revertKey(key)]
					break
				case "O":
					//@ts-ignore
					parsedPrototype.neighbourCells[key] = [...O[revertKey(key)], ...S[revertKey(key)]]
					break
				case "E":
					//@ts-ignore
					parsedPrototype.neighbourCells[key] = [0, ...C[revertKey(key)]]
					break
			}
		})

		parserPrototypes.push(parsedPrototype)
	}

	return parserPrototypes
}
