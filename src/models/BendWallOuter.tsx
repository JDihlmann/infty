/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three"
import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { GLTF } from "three-stdlib"

type GLTFResult = GLTF & {
	nodes: {
		BendWallOuter: THREE.Mesh
	}
	materials: {
		["Material.438"]: THREE.MeshStandardMaterial
	}
}

export default function Model({ ...props }: JSX.IntrinsicElements["group"]) {
	const group = useRef<THREE.Group>()
	const { nodes, materials } = useGLTF("/BendWallOuter.glb") as GLTFResult
	return (
		<group ref={group} {...props} dispose={null}>
			<mesh
				geometry={nodes.BendWallOuter.geometry}
				material={materials["Material.438"]}
				scale={[-0.5, -0.5, 0.5]}
			/>
		</group>
	)
}

useGLTF.preload("/BendWallOuter.glb")
