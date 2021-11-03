import { MapControls, PerspectiveCamera } from "@react-three/drei"
import { MathUtils } from "three"

const Camera = () => {
	const angle = MathUtils.degToRad(35)

	return (
		<>
			<MapControls
				target={[0, 0, 0]}
				maxPolarAngle={angle}
				minPolarAngle={angle}
				minDistance={10}
				maxDistance={40}
			/>
			<PerspectiveCamera makeDefault position={[-2, 30, -2]} />
		</>
	)
}

export default Camera
