import { Environment as EnvironmentLight, Html } from "@react-three/drei"
import { Suspense, useEffect } from "react"
import { MathUtils, Object3D, Vector3 } from "three"
import Displayer from "../displayer/displayer"
import { useGenerationStore } from "@/stores/generationStore"

const Environment = () => {
	return (
		<Suspense fallback={null}>
			<EnvironmentLight />
			{/* <pointLight position={[5, 0, 0]} /> */}
			<ambientLight intensity={0.4} />

			<gridHelper args={[100, 100]} />
			<Displayer />
		</Suspense>
	)
}

export default Environment
