import Camera from "@/components/camera/camera"
import Environment from "@/components/environment/environment"
import { Canvas } from "@react-three/fiber"
import { Grid } from "@react-three/postprocessing"
import React, { FunctionComponent } from "react"
import { NoToneMapping, sRGBEncoding } from "three"
import Postprocessing from "../postprocessing/postprocessing"

interface SceneProps {}

const Scene: FunctionComponent<SceneProps> = ({}) => {
	return (
		<Canvas
			shadows
			dpr={[1, 2]}
			gl={{ antialias: false }}
			onCreated={({ gl }) => {
				gl.toneMapping = NoToneMapping
				gl.outputEncoding = sRGBEncoding
			}}
		>
			<Camera />
			<Environment />
			<Postprocessing />
		</Canvas>
	)
}

export default Scene
