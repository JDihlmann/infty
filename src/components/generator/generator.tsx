import { useGenerationStore } from "@/stores/generationStore"
import { Prototype } from "@/utils/wfc"
import { Environment as EnvironmentLight, Html } from "@react-three/drei"
import { useState } from "react"
import { Color, Euler, MathUtils, Vector3 } from "three"
import Corner_1 from "@/models/Corner_1"
import Corner_2 from "@/models/Corner_2"
import Corner_3 from "@/models/Corner_3"
import Corner_4 from "@/models/Corner_4"
import Corner_5 from "@/models/Corner_5"
import EdgeB_1 from "@/models/EdgeB_1"
import EdgeB_2 from "@/models/EdgeB_2"
import EdgeB_3 from "@/models/EdgeB_3"
import EdgeB_4 from "@/models/EdgeB_4"
import EdgeC_1 from "@/models/EdgeC_1"
import EdgeC_2 from "@/models/EdgeC_2"
import EdgeC_3 from "@/models/EdgeC_3"
import EdgeC_4 from "@/models/EdgeC_4"
import EdgeT_1 from "@/models/EdgeT_1"
import EdgeT_2 from "@/models/EdgeT_2"
import EdgeT_3 from "@/models/EdgeT_3"
import EdgeT_4 from "@/models/EdgeT_4"
import Tube_1 from "@/models/Tube_1"
import Tube_2 from "@/models/Tube_2"
import Tube_3 from "@/models/Tube_3"
import StairT_1 from "@/models/StairT_1"
import StairT_2 from "@/models/StairT_2"
import StairT_3 from "@/models/StairT_3"
import StairT_4 from "@/models/StairT_4"
import StairB_1 from "@/models/StairB_1"
import StairB_2 from "@/models/StairB_2"
import StairB_3 from "@/models/StairB_3"
import StairB_4 from "@/models/StairB_4"
import { Position } from "@react-three/drei/helpers/Position"
import { parsePrototypes } from "@/models/config"

interface ProtypeObject {
	id: string
	key: string
	position: Vector3
}

const Generator = () => {
	const wfc = useGenerationStore((state) => state.wfc)
	const size = useGenerationStore((state) => state.size)
	const prototypes = useGenerationStore((state) => state.prototypes)

	const [generation, setGeneration] = useState<ProtypeObject[] | undefined>()

	const getMeshForId = (
		id: string,
		key: string,
		rotation: Euler | undefined,
		position: Vector3 | undefined
	) => {
		switch (id) {
			case "Corner_1":
				return <Corner_1 key={key} position={position} rotation={[0, MathUtils.degToRad(90), 0]} />

			case "Corner_2":
				return <Corner_2 key={key} position={position} rotation={[0, MathUtils.degToRad(90), 0]} />

			case "Corner_3":
				return <Corner_3 key={key} position={position} rotation={[0, MathUtils.degToRad(90), 0]} />

			case "Corner_4":
				return <Corner_4 key={key} position={position} rotation={[0, MathUtils.degToRad(90), 0]} />

			case "Corner_5":
				return <Corner_5 key={key} position={position} rotation={[0, MathUtils.degToRad(90), 0]} />

			case "EdgeB_1":
				return <EdgeB_1 key={key} position={position} rotation={[0, MathUtils.degToRad(90), 0]} />

			case "EdgeB_2":
				return <EdgeB_2 key={key} position={position} rotation={[0, MathUtils.degToRad(90), 0]} />

			case "EdgeB_3":
				return <EdgeB_3 key={key} position={position} rotation={[0, MathUtils.degToRad(90), 0]} />

			case "EdgeB_4":
				return <EdgeB_4 key={key} position={position} rotation={[0, MathUtils.degToRad(90), 0]} />

			case "EdgeC_1":
				return <EdgeC_1 key={key} position={position} rotation={[0, MathUtils.degToRad(90), 0]} />

			case "EdgeC_2":
				return <EdgeC_2 key={key} position={position} rotation={[0, MathUtils.degToRad(90), 0]} />

			case "EdgeC_3":
				return <EdgeC_3 key={key} position={position} rotation={[0, MathUtils.degToRad(90), 0]} />

			case "EdgeC_4":
				return <EdgeC_4 key={key} position={position} rotation={[0, MathUtils.degToRad(90), 0]} />

			case "EdgeT_1":
				return <EdgeT_1 key={key} position={position} rotation={[0, MathUtils.degToRad(90), 0]} />

			case "EdgeT_2":
				return <EdgeT_2 key={key} position={position} rotation={[0, MathUtils.degToRad(90), 0]} />

			case "EdgeT_3":
				return <EdgeT_3 key={key} position={position} rotation={[0, MathUtils.degToRad(90), 0]} />

			case "EdgeT_4":
				return <EdgeT_4 key={key} position={position} rotation={[0, MathUtils.degToRad(90), 0]} />

			case "Tube_1":
				return <Tube_1 key={key} position={position} rotation={[0, MathUtils.degToRad(90), 0]} />

			case "Tube_2":
				return <Tube_2 key={key} position={position} rotation={[0, MathUtils.degToRad(90), 0]} />

			case "Tube_3":
				return <Tube_3 key={key} position={position} rotation={[0, MathUtils.degToRad(90), 0]} />

			case "StairT_1":
				return <StairT_1 key={key} position={position} rotation={[0, MathUtils.degToRad(90), 0]} />

			case "StairT_2":
				return <StairT_2 key={key} position={position} rotation={[0, MathUtils.degToRad(90), 0]} />

			case "StairT_3":
				return <StairT_3 key={key} position={position} rotation={[0, MathUtils.degToRad(90), 0]} />

			case "StairT_4":
				return <StairT_4 key={key} position={position} rotation={[0, MathUtils.degToRad(90), 0]} />

			case "StairB_1":
				return <StairB_1 key={key} position={position} rotation={[0, MathUtils.degToRad(90), 0]} />

			case "StairB_2":
				return <StairB_2 key={key} position={position} rotation={[0, MathUtils.degToRad(90), 0]} />

			case "StairB_3":
				return <StairB_3 key={key} position={position} rotation={[0, MathUtils.degToRad(90), 0]} />

			case "StairB_4":
				return <StairB_4 key={key} position={position} rotation={[0, MathUtils.degToRad(90), 0]} />
		}
	}

	const makeGeneration = (waves: number[][][][]) => {
		const prototypeObjects: ProtypeObject[] = []
		const prototypeIds: string[] = useGenerationStore.getState().prototypes.map((p) => p.id)

		for (let x = 0; x < waves.length; x++) {
			for (let y = 0; y < waves[0].length; y++) {
				for (let z = 0; z < waves[0][0].length; z++) {
					const protoypeId = waves[x][y][z][0]

					if (prototypeIds[protoypeId] !== "empty") {
						prototypeObjects.push({
							key: "" + x + "" + y + "" + z,
							id: prototypeIds[protoypeId],
							position: new Vector3(x, y, z),
						})
					}
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
						wfc.run(1, 1000000000000000)
						makeGeneration(wfc.waves)
					}}
				>
					Test
				</button>
			</Html>

			{generation &&
				generation.map((protype) =>
					getMeshForId(protype.id, protype.key, new Euler(0, 0, 2), protype.position)
				)}
		</group>
	)
}

export default Generator
