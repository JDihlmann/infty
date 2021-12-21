import { useGenerationStore } from "@/stores/generationStore"
import { Prototype } from "@/utils/wfc"
import { Environment as EnvironmentLight, Html } from "@react-three/drei"
import { useState } from "react"
import { Color, Euler, MathUtils, Object3D, Vector3 } from "three"
import Arch from "@/models/Arch"
import Corner from "@/models/Corner"
import Edge from "@/models/Edge"
import Poles from "@/models/Poles"
import Stairs from "@/models/Stairs"
import Tube from "@/models/Tube"
import { Position } from "@react-three/drei/helpers/Position"

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

	const getMeshForId = (id: string, key: string, position: Vector3 | undefined) => {
		const nameId = id.split("_")[0]

		const obj = new Object3D()
		console.log(id)
		obj.rotateOnWorldAxis(new Vector3(1, 0, 0), MathUtils.degToRad(parseInt(id.split("_")[1]) * 90))
		obj.rotateOnWorldAxis(
			new Vector3(0, 0, 1),
			MathUtils.degToRad(-parseInt(id.split("_")[2]) * 90)
		)
		obj.rotateOnWorldAxis(new Vector3(0, 1, 0), MathUtils.degToRad(parseInt(id.split("_")[3]) * 90))

		const pos = position?.clone().add(new Vector3(0.5, 0.5, 0.5))

		switch (nameId) {
			case "Arch":
				return <Arch key={key} position={pos} rotation={obj.rotation} />

			case "Corner":
				return <Corner key={key} position={pos} rotation={obj.rotation} />

			case "Edge":
				return <Edge key={key} position={pos} rotation={obj.rotation} />

			case "Poles":
				return <Poles key={key} position={pos} rotation={obj.rotation} />

			case "Stairs":
				return <Stairs key={key} position={pos} rotation={obj.rotation} />

			case "Tube":
				return <Tube key={key} position={pos} rotation={obj.rotation} />
		}
	}

	const makeGeneration = (waves: number[][][][]) => {
		const prototypeObjects: ProtypeObject[] = []
		const prototypeIds: string[] = useGenerationStore.getState().prototypes.map((p) => p.id)

		for (let x = 0; x < waves.length; x++) {
			for (let y = 0; y < waves[0].length; y++) {
				for (let z = 0; z < waves[0][0].length; z++) {
					const protoypeId = waves[x][y][z][0]

					if (prototypeIds[protoypeId] !== "Empty") {
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
				generation.map((protype) => getMeshForId(protype.id, protype.key, protype.position))}
		</group>
	)
}

export default Generator
