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
					backgroundColor: "white",
				}}
			>
				<Scene />
			</div>
			<Body>
				<Generator />
				<div
					style={{
						position: "absolute",
						flexDirection: "row",
						alignItems: "center",
						zIndex: 100,
						paddingBottom: 10,
						right: 20,
					}}
				>
					<a
						href="https://twitter.com/JDihlmann"
						style={{ textDecoration: "none", fontWeight: "bold", pointerEvents: "all" }}
					>
						@JDihlmann
					</a>
				</div>
			</Body>
		</>
	)
}

export default Home
