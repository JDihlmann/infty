import { Environment as EnvironmentLight, Html } from "@react-three/drei"
import { Suspense, useEffect } from "react"
import { MathUtils, Object3D, Vector3 } from "three"
import Displayer from "../displayer/displayer"
import Module from "@/stores/wasm"
import { useGenerationStore } from "@/stores/generationStore"

const Environment = () => {
	const initializeModel = useGenerationStore((state) => state.initializeModule)

	useEffect(() => {
		initializeModel()
	}, [initializeModel])

	return (
		<Suspense fallback={null}>
			<EnvironmentLight preset="city" />
			{/* <pointLight position={[5, 0, 0]} /> */}
			<ambientLight intensity={0.4} />

			<gridHelper args={[100, 100]} />
			<Displayer />
		</Suspense>
	)
}

export default Environment
