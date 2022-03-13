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
import { memo } from "react"
import { MathUtils, Object3D, Vector3 } from "three"

interface ModelObjectProps {
	id: string
	positionString: string
}

const ModelObject = memo<ModelObjectProps>(({ id, positionString }) => {
	const prototypes = useGenerationStore((state) => state.prototypes)
	const position = new Vector3(
		parseInt(positionString.split("_")[0]),
		parseInt(positionString.split("_")[1]),
		parseInt(positionString.split("_")[2])
	)

	const getMeshForId = (id: string, position: Vector3 | undefined) => {
		const nameId = id.split("_")[0]

		const obj = new Object3D()
		obj.rotateOnWorldAxis(new Vector3(1, 0, 0), MathUtils.degToRad(parseInt(id.split("_")[1]) * 90))
		obj.rotateOnWorldAxis(new Vector3(0, 0, 1), MathUtils.degToRad(-parseInt(id.split("_")[2]) * 90))
		obj.rotateOnWorldAxis(new Vector3(0, 1, 0), MathUtils.degToRad(parseInt(id.split("_")[3]) * 90))

		const pos = position?.clone().add(new Vector3(0.5, 0.5, 0.5))

		switch (nameId) {
			case "Arch":
				return <Arch position={pos} rotation={obj.rotation} />
			case "ArchLeft":
				return <ArchLeft position={pos} rotation={obj.rotation} />
			case "ArchRight":
				return <ArchRight position={pos} rotation={obj.rotation} />
			case "BendWall":
				return <BendWall position={pos} rotation={obj.rotation} />
			case "BendWallOuter":
				return <BendWallOuter position={pos} rotation={obj.rotation} />
			case "BendWallOuterLower":
				return <BendWallOuterLower position={pos} rotation={obj.rotation} />
			case "BendWallOuterTop":
				return <BendWallOuterTop position={pos} rotation={obj.rotation} />
			case "BendWallTop":
				return <BendWallTop position={pos} rotation={obj.rotation} />
			case "Connector":
				return <Connector position={pos} rotation={obj.rotation} />
			case "Corner":
				return <Corner position={pos} rotation={obj.rotation} />
			case "CornerFull":
				return <CornerFull position={pos} rotation={obj.rotation} />
			case "CornerFullHalfLower":
				return <CornerFullHalfLower position={pos} rotation={obj.rotation} />
			case "CornerHalfLower":
				return <CornerHalfLower position={pos} rotation={obj.rotation} />
			case "DoubleSided":
				return <DoubleSided position={pos} rotation={obj.rotation} />
			case "Edge":
				return <Edge position={pos} rotation={obj.rotation} />
			case "EdgeHalfLower":
				return <EdgeHalfLower position={pos} rotation={obj.rotation} />
			case "FlatStairsFreeUper":
				return <FlatStairsFreeUper position={pos} rotation={obj.rotation} />
			case "FlatStairWithWallLeftLowerUper":
				return <FlatStairWithWallLeftLowerUper position={pos} rotation={obj.rotation} />
			case "FlatStairWithWallRightUper":
				return <FlatStairWithWallRightUper position={pos} rotation={obj.rotation} />
			case "Loop":
				return <Loop position={pos} rotation={obj.rotation} />
			case "LoopHalfLower":
				return <LoopHalfLower position={pos} rotation={obj.rotation} />
			case "Stairs":
				return <Stairs position={pos} rotation={obj.rotation} />
			case "StairsLeft":
				return <StairsLeft position={pos} rotation={obj.rotation} />
			case "StairsRight":
				return <StairsRight position={pos} rotation={obj.rotation} />
			case "StairWithWallLeft":
				return <StairWithWallLeft position={pos} rotation={obj.rotation} />
			case "StairWithWallRight":
				return <StairWithWallRight position={pos} rotation={obj.rotation} />
			case "Wall":
				return <Wall position={pos} rotation={obj.rotation} />
		}
	}

	return <>{getMeshForId(id, position)}</>
})

export default ModelObject
