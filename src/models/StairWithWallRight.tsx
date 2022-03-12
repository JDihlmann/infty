/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three"
import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { GLTF } from "three-stdlib"

type GLTFResult = GLTF & {
	nodes: {
		StairWithWallRight: THREE.Mesh
	}
	materials: {
		["Material.116"]: THREE.MeshStandardMaterial
	}
}

export default function Model({ ...props }: JSX.IntrinsicElements["group"]) {
	const group = useRef<THREE.Group>()
	const { nodes, materials } = useGLTF("/StairWithWallRight.glb") as GLTFResult
	return (
		<group ref={group} {...props} dispose={null}>
			<mesh geometry={nodes.StairWithWallRight.geometry} material={materials["Material.116"]} scale={[-1, 1, 0.13]} />
		</group>
	)
}

useGLTF.preload("/StairWithWallRight.glb")
