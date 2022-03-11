/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three"
import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { GLTF } from "three-stdlib"

type GLTFResult = GLTF & {
	nodes: {
		StairWithWallLeft: THREE.Mesh
	}
	materials: {
		["Material.115"]: THREE.MeshStandardMaterial
	}
}

export default function Model({ ...props }: JSX.IntrinsicElements["group"]) {
	const group = useRef<THREE.Group>()
	const { nodes, materials } = useGLTF("/StairWithWallLeft.glb") as GLTFResult
	return (
		<group ref={group} {...props} dispose={null}>
			<mesh
				geometry={nodes.StairWithWallLeft.geometry}
				material={materials["Material.115"]}
				scale={[1, 1, 0.13]}
			/>
		</group>
	)
}

useGLTF.preload("/StairWithWallLeft.glb")