import { useGenerationStore } from "@/stores/generationStore"
import { Prototype } from "@/utils/wfc"
import { Environment as EnvironmentLight, Html } from "@react-three/drei"
import { useState } from "react"
import { Color, MathUtils, Vector3 } from "three"

interface ProtypeObject {
	id: string
	color: Color
	position: Vector3
}

const Generator = () => {
	const wfc = useGenerationStore((state) => state.wfc)
	const size = useGenerationStore((state) => state.size)
	const prototypes = useGenerationStore((state) => state.prototypes)

	const [generation, setGeneration] = useState<ProtypeObject[] | undefined>()

	const makeGeneration = (waves: number[][][][]) => {
		const prototypeObjects: ProtypeObject[] = []

		for (let x = 0; x < waves.length; x++) {
			for (let y = 0; y < waves[0].length; y++) {
				for (let z = 0; z < waves[0][0].length; z++) {
					const protoypeId = waves[x][y][z][0]

					prototypeObjects.push({
						id: "" + x + "" + y + "" + z,
						color:
							protoypeId === 0
								? new Color("green")
								: protoypeId === 1
								? new Color("red")
								: new Color("blue"),
						position: new Vector3(x, y, z),
					})
				}
			}
		}

		setGeneration(prototypeObjects)
	}

	return (
		<group>
			<Html>
				<button
					onClick={() => {
						wfc.init(prototypes, size)
						wfc.run(1, 1000)
						makeGeneration(wfc.waves)
					}}
				>
					Test
				</button>
			</Html>

			{generation &&
				generation.map((protype) => (
					<mesh key={protype.id} position={protype.position}>
						<boxGeometry />
						<meshStandardMaterial color={protype.color} />
					</mesh>
				))}
		</group>
	)
}

export default Generator
