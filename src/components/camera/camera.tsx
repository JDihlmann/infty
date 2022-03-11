import { MapControls, PerspectiveCamera } from "@react-three/drei"
import { MathUtils } from "three"

const Camera = () => {
	const angle = MathUtils.degToRad(35)

	return (
		<>
			<MapControls
				autoRotate
				autoRotateSpeed={0.7}
				target={[0, 0, 0]}
				maxPolarAngle={angle}
				minPolarAngle={angle}
				minDistance={10}
				maxDistance={50}
			/>
			<PerspectiveCamera makeDefault position={[-2, 30, -2]} />
		</>
	)
}

export default Camera
