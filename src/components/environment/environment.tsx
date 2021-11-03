import { Environment as EnvironmentLight } from "@react-three/drei"
import { Suspense } from "react"
import { MathUtils } from "three"

const Environment = () => {
	return (
		<Suspense fallback={null}>
			<EnvironmentLight preset="city" />
			<pointLight position={[5, 0, 0]} />
			<ambientLight intensity={0.4} />

			<mesh castShadow receiveShadow position={[-2, 0, 1]} scale={[1, 4, 1]}>
				<boxGeometry />
				<meshStandardMaterial color={"white"} />
			</mesh>
			<mesh
				castShadow
				receiveShadow
				position={[-2, 0, 1]}
				scale={[2, 4, 2]}
				rotation={[MathUtils.degToRad(90), 0, 0]}
			>
				<boxGeometry />
				<meshStandardMaterial color={"white"} />
			</mesh>
			<mesh castShadow receiveShadow position={[2, 0, -3]} scale={[1, 4, 1]}>
				<boxGeometry />
				<meshStandardMaterial color={"white"} />
			</mesh>

			<gridHelper args={[100, 100]} />
		</Suspense>
	)
}

export default Environment
