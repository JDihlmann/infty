import Body from "@/components/body/body"
import Scene from "@/components/scenes/scene"
import { useRouter } from "next/router"

const Home = () => {
	const router = useRouter()
	// const { id } = router.query // TODO: Throw if this butterfly does not exist

	return (
		<>
			<div className=" top-0 left-0 w-screen h-screen  overflow-hidden absolute ">
				<Scene />
			</div>
			<Body></Body>
		</>
	)
}

export default Home
