import { MathUtils } from "three"

export interface Prototype {
	id: string
	neighbourCells: Record<string, number[]>
}

export interface Vector3 {
	x: number
	y: number
	z: number
}

export class Model {
	size: Vector3
	waves: number[][][][]
	prototypes: Prototype[]

	constructor() {
		this.prototypes = []
		this.size = { x: 0, y: 0, z: 0 }
		this.waves = [[[]]]
	}

	public init = (prototypes: Prototype[], size: Vector3) => {
		this.size = size
		this.prototypes = prototypes
		this.waves = new Array(this.size.x)
			.fill(0)
			.map(() => new Array(this.size.y).fill(0).map(() => new Array(this.size.z).fill(0)))

		for (let x = 0; x < this.size.x; x++) {
			for (let y = 0; y < this.size.y; y++) {
				for (let z = 0; z < this.size.z; z++) {
					this.waves[x][y][z] = [...Array(this.prototypes.length).keys()]
				}
			}
		}

		// Zero Pad
		for (let x = 0; x < this.size.x; x++) {
			for (let y = 0; y < this.size.y; y++) {
				for (let z = 0; z < this.size.z; z++) {
					if (
						x === 0 ||
						// y === 0 ||
						z === 0 ||
						x === this.size.x - 1 ||
						y === this.size.y - 1 ||
						z === this.size.z - 1
					) {
						this.observeWith({ x: x, y: y, z: z }, 0)
						this.propagate({ x: x, y: y, z: z })
					}
				}
			}
		}
	}

	public run = (seed: number, limit: number): boolean => {
		for (let l = 0; l < limit; l++) {
			const nodeIndex = this.nextUnobservedNode()

			if (nodeIndex != null) {
				this.observe(nodeIndex)
				const success = this.propagate(nodeIndex)
				if (!success) {
					console.log("Could not be solved")
					return false
				}
			} else {
				return true
			}
		}

		return true
	}

	private observe = (nodeIndex: Vector3): void => {
		const { x, y, z } = nodeIndex
		const wave = this.waves[x][y][z]

		/*let pick = 0
		if (wave.length >= 1) {
			const waveSet = new Set(wave)
			if (waveSet.has(0)) {
				const dir = [-1, 0, 1]
				let zeroCount = 0
				let nonZeroCount = 0
				dir.forEach((dx) => {
					dir.forEach((dy) => {
						dir.forEach((dz) => {
							if (Math.abs(dx) + Math.abs(dy) + Math.abs(dz) <= 1) {
								if (
									x + dx >= 0 &&
									x + dx < this.size.x &&
									y + dy >= 0 &&
									y + dy < this.size.y &&
									z + dz >= 0 &&
									z + dz < this.size.z
								) {
									const neighbourWave = this.waves[x + dx][y + dy][z + dz]
									if (this.waves[x + dx][y + dy][z + dz].length === 1) {
										if (neighbourWave[0] === 0) {
											zeroCount++
										} else {
											nonZeroCount++
										}
									}
								}
							}
						})
					})
				})

				if (zeroCount > nonZeroCount) {
					pick = 0
				} else {
					waveSet.delete(0)
					MathUtils.randInt(0, waveSet.size - 1)
				}
			} else {
				pick = MathUtils.randInt(0, wave.length - 1)
			}
		}*/

		const pick = MathUtils.randInt(0, wave.length - 1)

		this.waves[x][y][z] = [wave[pick]]
	}

	private observeWith = (nodeIndex: Vector3, observeIndex: number): void => {
		const { x, y, z } = nodeIndex
		this.waves[x][y][z] = [observeIndex]
	}

	private propagate = (nodeIndex: Vector3): boolean => {
		const stack = [nodeIndex]

		while (stack.length > 0) {
			const currentNodeIndex = stack.pop() as Vector3
			const { x, y, z } = currentNodeIndex
			const wave = this.waves[x][y][z]

			const neighboursXP = new Set()
			const neighboursXN = new Set()
			const neighboursYP = new Set()
			const neighboursYN = new Set()
			const neighboursZP = new Set()
			const neighboursZN = new Set()

			wave.forEach((protypeId) => {
				const prototype = this.prototypes[protypeId]

				prototype.neighbourCells.px.forEach((neighbourCells) => neighboursXP.add(neighbourCells))
				prototype.neighbourCells.nx.forEach((neighbourCells) => neighboursXN.add(neighbourCells))
				prototype.neighbourCells.py.forEach((neighbourCells) => neighboursYP.add(neighbourCells))
				prototype.neighbourCells.ny.forEach((neighbourCells) => neighboursYN.add(neighbourCells))
				prototype.neighbourCells.pz.forEach((neighbourCells) => neighboursZP.add(neighbourCells))
				prototype.neighbourCells.nz.forEach((neighbourCells) => neighboursZN.add(neighbourCells))
			})

			if (x + 1 < this.size.x) {
				const neighbourWave = this.waves[x + 1][y][z]
				const newNeighbourWave = new Set<number>()
				neighbourWave.forEach((protypeId) => {
					if (neighboursXP.has(protypeId)) newNeighbourWave.add(protypeId)
				})
				if (newNeighbourWave.size == 0) return false

				if (newNeighbourWave.size != neighbourWave.length) {
					stack.push({ x: x + 1, y, z })
					this.waves[x + 1][y][z] = [...newNeighbourWave]
				}
			}

			if (y + 1 < this.size.y) {
				const neighbourWave = this.waves[x][y + 1][z]
				const newNeighbourWave = new Set<number>()
				neighbourWave.forEach((protypeId) => {
					if (neighboursYP.has(protypeId)) newNeighbourWave.add(protypeId)
				})
				if (newNeighbourWave.size == 0) return false

				if (newNeighbourWave.size != neighbourWave.length) {
					stack.push({ x, y: y + 1, z })
					this.waves[x][y + 1][z] = [...newNeighbourWave]
				}
			}

			if (z + 1 < this.size.z) {
				const neighbourWave = this.waves[x][y][z + 1]
				const newNeighbourWave = new Set<number>()
				neighbourWave.forEach((protypeId) => {
					if (neighboursZP.has(protypeId)) newNeighbourWave.add(protypeId)
				})
				if (newNeighbourWave.size == 0) return false

				if (newNeighbourWave.size != neighbourWave.length) {
					stack.push({ x, y, z: z + 1 })
					this.waves[x][y][z + 1] = [...newNeighbourWave]
				}
			}

			if (x - 1 >= 0) {
				const neighbourWave = this.waves[x - 1][y][z]
				const newNeighbourWave = new Set<number>()
				neighbourWave.forEach((protypeId) => {
					if (neighboursXN.has(protypeId)) newNeighbourWave.add(protypeId)
				})
				if (newNeighbourWave.size == 0) return false

				if (newNeighbourWave.size != neighbourWave.length) {
					stack.push({ x: x - 1, y, z })
					this.waves[x - 1][y][z] = [...newNeighbourWave]
				}
			}

			if (y - 1 >= 0) {
				const neighbourWave = this.waves[x][y - 1][z]
				const newNeighbourWave = new Set<number>()
				neighbourWave.forEach((protypeId) => {
					if (neighboursYN.has(protypeId)) newNeighbourWave.add(protypeId)
				})
				if (newNeighbourWave.size == 0) return false

				if (newNeighbourWave.size != neighbourWave.length) {
					stack.push({ x, y: y - 1, z })
					this.waves[x][y - 1][z] = [...newNeighbourWave]
				}
			}

			if (z - 1 >= 0) {
				const neighbourWave = this.waves[x][y][z - 1]
				const newNeighbourWave = new Set<number>()
				neighbourWave.forEach((protypeId) => {
					if (neighboursZN.has(protypeId)) newNeighbourWave.add(protypeId)
				})
				if (newNeighbourWave.size == 0) return false

				if (newNeighbourWave.size != neighbourWave.length) {
					stack.push({ x, y, z: z - 1 })
					this.waves[x][y][z - 1] = [...newNeighbourWave]
				}
			}
		}

		return true
	}

	public nextUnobservedNode = (): Vector3 | null => {
		let minNodeIndex = null
		let minNodeEntropy = Infinity

		for (let x = 0; x < this.size.x; x++) {
			for (let y = 0; y < this.size.y; y++) {
				for (let z = 0; z < this.size.z; z++) {
					const entropy = this.waves[x][y][z].length

					if (entropy < minNodeEntropy && entropy > 1) {
						minNodeIndex = { x: x, y: y, z: z }
						minNodeEntropy = entropy
					}
				}
			}
		}

		return minNodeIndex
	}
}
