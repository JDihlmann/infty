/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three"
import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { GLTF } from "three-stdlib"

type GLTFResult = GLTF & {
	nodes: {
		Cube097: THREE.Mesh
		Cube097_1: THREE.Mesh
	}
	materials: {
		["Material.072"]: THREE.MeshStandardMaterial
		["Material.089"]: THREE.MeshStandardMaterial
	}
}

export default function Model({ ...props }: JSX.IntrinsicElements["group"]) {
	const group = useRef<THREE.Group>()
	const { nodes, materials } = useGLTF("/StairsLeft.glb") as GLTFResult
	return (
		<group ref={group} {...props} dispose={null}>
			<group scale={[1, 1, 0.13]}>
				<mesh geometry={nodes.Cube097.geometry} material={materials["Material.072"]} />
				<mesh geometry={nodes.Cube097_1.geometry} material={materials["Material.089"]} />
			</group>
		</group>
	)
}

useGLTF.preload("/StairsLeft.glb")
