/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three"
import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { GLTF } from "three-stdlib"

type GLTFResult = GLTF & {
	nodes: {
		StairT_1: THREE.Mesh
	}
	materials: {
		["Material.034"]: THREE.MeshStandardMaterial
	}
}

export default function StairT_1({ ...props }: JSX.IntrinsicElements["group"]) {
	const group = useRef<THREE.Group>()
	const { nodes, materials } = useGLTF("/StairT_1.glb") as GLTFResult
	return (
		<group ref={group} {...props} dispose={null}>
			<mesh
				geometry={nodes.StairT_1.geometry}
				material={materials["Material.034"]}
				scale={0.5}
				position={[0.5, 0.5, 0.5]}
			/>
		</group>
	)
}

useGLTF.preload("/StairT_1.glb")
