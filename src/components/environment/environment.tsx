import { Environment as EnvironmentLight } from "@react-three/drei"
import { Suspense } from "react"
import Displayer from "../displayer/displayer"

const Environment = () => {
	return (
		<Suspense fallback={null}>
			<EnvironmentLight files="environmentMap.hdr" />
			<ambientLight intensity={0.2} />
			<gridHelper args={[1000, 1000]} position={[0, 1, 0]} />

			<Displayer />
		</Suspense>
	)
}

export default Environment
