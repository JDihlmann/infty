import Arch from "@/models/Arch"
import ArchLeft from "@/models/ArchLeft"
import ArchRight from "@/models/ArchRight"
import BendWall from "@/models/BendWall"
import BendWallOuter from "@/models/BendWallOuter"
import BendWallOuterLower from "@/models/BendWallOuterLower"
import BendWallOuterTop from "@/models/BendWallOuterTop"
import BendWallTop from "@/models/BendWallTop"
import Connector from "@/models/Connector"
import Corner from "@/models/Corner"
import CornerFull from "@/models/CornerFull"
import CornerFullHalfLower from "@/models/CornerFullHalfLower"
import CornerHalfLower from "@/models/CornerHalfLower"
import DoubleSided from "@/models/DoubleSided"
import Edge from "@/models/Edge"
import EdgeHalfLower from "@/models/EdgeHalfLower"
import FlatStairsFreeUper from "@/models/FlatStairsFreeUper"
import FlatStairWithWallLeftLowerUper from "@/models/FlatStairWithWallLeftLowerUper"
import FlatStairWithWallRightUper from "@/models/FlatStairWithWallRightUper"
import Loop from "@/models/Loop"
import LoopHalfLower from "@/models/LoopHalfLower"
import Stairs from "@/models/Stairs"
import StairsLeft from "@/models/StairsLeft"
import StairsRight from "@/models/StairsRight"
import StairWithWallLeft from "@/models/StairWithWallLeft"
import StairWithWallRight from "@/models/StairWithWallRight"
import Wall from "@/models/Wall"
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
			case "ArchLeft":
				return <ArchLeft key={key} position={pos} rotation={obj.rotation} />
			case "ArchRight":
				return <ArchRight key={key} position={pos} rotation={obj.rotation} />
			case "BendWall":
				return <BendWall key={key} position={pos} rotation={obj.rotation} />
			case "BendWallOuter":
				return <BendWallOuter key={key} position={pos} rotation={obj.rotation} />
			case "BendWallOuterLower":
				return <BendWallOuterLower key={key} position={pos} rotation={obj.rotation} />
			case "BendWallOuterTop":
				return <BendWallOuterTop key={key} position={pos} rotation={obj.rotation} />
			case "BendWallTop":
				return <BendWallTop key={key} position={pos} rotation={obj.rotation} />
			case "Connector":
				return <Connector key={key} position={pos} rotation={obj.rotation} />
			case "Corner":
				return <Corner key={key} position={pos} rotation={obj.rotation} />
			case "CornerFull":
				return <CornerFull key={key} position={pos} rotation={obj.rotation} />
			case "CornerFullHalfLower":
				return <CornerFullHalfLower key={key} position={pos} rotation={obj.rotation} />
			case "CornerHalfLower":
				return <CornerHalfLower key={key} position={pos} rotation={obj.rotation} />
			case "DoubleSided":
				return <DoubleSided key={key} position={pos} rotation={obj.rotation} />
			case "Edge":
				return <Edge key={key} position={pos} rotation={obj.rotation} />
			case "EdgeHalfLower":
				return <EdgeHalfLower key={key} position={pos} rotation={obj.rotation} />
			case "FlatStairsFreeUper":
				return <FlatStairsFreeUper key={key} position={pos} rotation={obj.rotation} />
			case "FlatStairWithWallLeftLowerUper":
				return <FlatStairWithWallLeftLowerUper key={key} position={pos} rotation={obj.rotation} />
			case "FlatStairWithWallRightUper":
				return <FlatStairWithWallRightUper key={key} position={pos} rotation={obj.rotation} />
			case "Loop":
				return <Loop key={key} position={pos} rotation={obj.rotation} />
			case "LoopHalfLower":
				return <LoopHalfLower key={key} position={pos} rotation={obj.rotation} />
			case "Stairs":
				return <Stairs key={key} position={pos} rotation={obj.rotation} />
			case "StairsLeft":
				return <StairsLeft key={key} position={pos} rotation={obj.rotation} />
			case "StairsRight":
				return <StairsRight key={key} position={pos} rotation={obj.rotation} />
			case "StairWithWallLeft":
				return <StairWithWallLeft key={key} position={pos} rotation={obj.rotation} />
			case "StairWithWallRight":
				return <StairWithWallRight key={key} position={pos} rotation={obj.rotation} />
			case "Wall":
				return <Wall key={key} position={pos} rotation={obj.rotation} />
		}
	}

	return (
		<group position={[-Math.floor(size.x / 2), -1, -Math.floor(size.z / 2)]}>
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
