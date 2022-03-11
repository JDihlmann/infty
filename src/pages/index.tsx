import Body from "@/components/body/body"
import Generator from "@/components/generator/generator"
import Scene from "@/components/scenes/scene"

const Home = () => {
	return (
		<>
			<div
				style={{
					top: 0,
					left: 0,
					position: "absolute",
					width: "100%",
					height: "100%",
					overflow: "hidden",
					zIndex: -1,
				}}
			>
				<Scene />
			</div>
			<Body>
				<Generator />
				{/* <GeneratorJS /> */}
			</Body>
		</>
	)
}

export default Home
