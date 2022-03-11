/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three"
import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { GLTF } from "three-stdlib"

type GLTFResult = GLTF & {
	nodes: {
		ArchLeft: THREE.Mesh
	}
	materials: {
		["Material.446"]: THREE.MeshStandardMaterial
	}
}

export default function Model({ ...props }: JSX.IntrinsicElements["group"]) {
	const group = useRef<THREE.Group>()
	const { nodes, materials } = useGLTF("/ArchLeft.glb") as GLTFResult
	return (
		<group ref={group} {...props} dispose={null}>
			<mesh
				geometry={nodes.ArchLeft.geometry}
				material={materials["Material.446"]}
				scale={[0.5, 0.5, -0.5]}
			/>
		</group>
	)
}

useGLTF.preload("/ArchLeft.glb")