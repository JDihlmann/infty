/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three"
import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { GLTF } from "three-stdlib"

type GLTFResult = GLTF & {
	nodes: {
		Tube_2: THREE.Mesh
	}
	materials: {
		["Material.018"]: THREE.MeshStandardMaterial
	}
}

export default function Tube_2({ ...props }: JSX.IntrinsicElements["group"]) {
	const group = useRef<THREE.Group>()
	const { nodes, materials } = useGLTF("/Tube_2.glb") as GLTFResult
	return (
		<group ref={group} {...props} dispose={null}>
			<mesh
				geometry={nodes.Tube_2.geometry}
				material={materials["Material.018"]}
				scale={0.5}
				position={[0.5, 0.5, 0.5]}
			/>
		</group>
	)
}

useGLTF.preload("/Tube_2.glb")
