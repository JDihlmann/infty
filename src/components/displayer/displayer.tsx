import { useGenerationStore } from "@/stores/generationStore"
import { prototype } from "events"
import ModelObject from "../modelObject/modelObject"

const Displayer = () => {
	const prototypeObjects = useGenerationStore((state) => state.prototypeObjects)
	const size = useGenerationStore((state) => state.size)

	return (
		<group position={[-Math.floor(size.x / 2), 0, -Math.floor(size.z / 2)]}>
			{prototypeObjects &&
				prototypeObjects.map((prototype) => (
					<ModelObject key={prototype.key} id={prototype.id} positionString={prototype.key} />
				))}
		</group>
	)
}

export default Displayer
