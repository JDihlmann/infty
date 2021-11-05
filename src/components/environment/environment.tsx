import { useGenerationStore } from "@/stores/generationStore"
import { Environment as EnvironmentLight, Html } from "@react-three/drei"
import { Suspense } from "react"
import { MathUtils } from "three"
import Generator from "../generator/generator"

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
				position={[-2.5, 0, 1.5]}
				scale={[2, 4, 2]}
				rotation={[MathUtils.degToRad(90), 0, 0]}
			>
				<boxGeometry />
				<meshStandardMaterial color={"white"} />
			</mesh>
			<mesh castShadow receiveShadow position={[2.5, 0, -3.5]} scale={[1, 4, 1]}>
				<boxGeometry />
				<meshStandardMaterial color={"white"} />
			</mesh>

			<gridHelper args={[100, 100]} />
			<Generator />

			{/* <mesh receiveShadow position={[0, -0.51, 0]} scale={[100, 0.1, 100]}>
				<boxGeometry />
				<meshStandardMaterial color={"white"} />
			</mesh> */}
		</Suspense>
	)
}

export default Environment
