import { useGenerationStore } from "@/stores/generationStore"
import { Html } from "@react-three/drei"
import { useRef, useEffect } from "react"
import { Group } from "three"
import { GLTFExporter } from "three-stdlib"
import ModelObject from "../modelObject/modelObject"

const Displayer = () => {
	const prototypeObjects = useGenerationStore((state) => state.prototypeObjects)
	const size = useGenerationStore((state) => state.size)
	const exporting = useGenerationStore((state) => state.exporting)
	const setExport = useGenerationStore((state) => state.setExport)

	const ref = useRef<Group>()

	useEffect(() => {
		if (exporting) {
			if (ref && ref.current) {
				const exporter = new GLTFExporter()

				exporter.parse(
					ref.current,
					async function (gltf) {
						const output = JSON.stringify(gltf, null, 2)

						const blob = new Blob([output], { type: "text/plain" })
						const filename = "infty.gltf"

						const link = document.createElement("a")
						link.href = URL.createObjectURL(blob)
						link.download = filename
						document.body.appendChild(link)
						link.click()
						document.body.removeChild(link)

						setExport(false)
					},
					{}
				)
			}
		}
	}, [exporting, setExport])

	return (
		<>
			<group ref={ref} position={[-Math.floor(size.x / 2), 0, -Math.floor(size.z / 2)]}>
				{prototypeObjects &&
					prototypeObjects.map((prototype) => (
						<ModelObject key={prototype.key} id={prototype.id} positionString={prototype.key} />
					))}
			</group>
		</>
	)
}

export default Displayer
