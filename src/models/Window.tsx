/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three"
import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { GLTF } from "three-stdlib"

type GLTFResult = GLTF & {
	nodes: {
		Window: THREE.Mesh
	}
	materials: {
		["Material.137"]: THREE.MeshStandardMaterial
	}
}

export default function Model({ ...props }: JSX.IntrinsicElements["group"]) {
	const group = useRef<THREE.Group>()
	const { nodes, materials } = useGLTF("/Window.glb") as GLTFResult
	return (
		<group ref={group} {...props} dispose={null}>
			<mesh geometry={nodes.Window.geometry} material={materials["Material.137"]} scale={0.5} />
		</group>
	)
}

useGLTF.preload("/Window.glb")
