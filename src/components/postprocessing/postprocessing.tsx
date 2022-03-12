import { EffectComposer, SSAO } from "@react-three/postprocessing"

const Postprocessing = () => {
	return (
		<EffectComposer multisampling={0}>
			{
				//@ts-ignore
				<SSAO samples={32} radius={3} intensity={10} luminanceInfluence={0.1} color="black" />
			}
		</EffectComposer>
	)
}

export default Postprocessing
