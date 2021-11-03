import { EffectComposer, Pixelation, SSAO } from "@react-three/postprocessing"
import { folder, useControls } from "leva"

const Postprocessing = () => {
	return (
		<EffectComposer multisampling={0}>
			{
				//@ts-ignore
				<SSAO samples={31} radius={10} intensity={20} luminanceInfluence={0.1} color="black" />
			}
		</EffectComposer>
	)
}

export default Postprocessing
