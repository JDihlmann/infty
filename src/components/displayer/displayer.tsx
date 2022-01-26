import Arch from "@/models/Arch"
import Corner from "@/models/Corner"
import Edge from "@/models/Edge"
import Poles from "@/models/Poles"
import Stairs from "@/models/Stairs"
import Tube from "@/models/Tube"
import Roof from "@/models/Roof"
import Window from "@/models/Window"
import { useGenerationStore } from "@/stores/generationStore"
import { MathUtils, Object3D, Vector3 } from "three"
import { Html } from "@react-three/drei"

const Displayer = () => {
	const prototypeObjects = useGenerationStore((state) => state.prototypeObjects)
	const entropyObjects = useGenerationStore((state) => state.entropyObjects)
	const size = useGenerationStore((state) => state.size)

	const getMeshForId = (id: string, key: string, position: Vector3 | undefined) => {
		const nameId = id.split("_")[0]

		const obj = new Object3D()
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

			case "Roof":
				return <Roof key={key} position={pos} rotation={obj.rotation} />

			case "Window":
				return <Window key={key} position={pos} rotation={obj.rotation} />
		}
	}

	return (
		<group position={[-Math.floor(size.x / 2), 0, -Math.floor(size.z / 2)]}>
			{prototypeObjects &&
				prototypeObjects.map((protype) => getMeshForId(protype.id, protype.key, protype.position))}
			{entropyObjects &&
				entropyObjects.map((entropy) => {
					const pos = entropy.position.clone().add(new Vector3(0.5, 0.5, 0.5))
					return (
						<Html key={entropy.key} position={pos} center>
							{entropy.id}
						</Html>
					)
				})}
		</group>
	)
}

export default Displayer
