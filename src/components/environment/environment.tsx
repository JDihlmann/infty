import { Environment as EnvironmentLight, Html } from "@react-three/drei"
import { Suspense, useEffect } from "react"
import { MathUtils } from "three"
import Generator from "../generator/generator"
import Module from "@/stores/wasm"

const Environment = () => {
	useEffect(() => {
		//var processHelper = null
		//@ts-ignore
		Module().then(function (Wasm) {
			const test_func = Wasm.cwrap("test_function")
			console.log("Test Function")
			console.log(test_func())

			/*const width = 10;
      const height = 10;
      var sizes = Wasm._malloc(8);
      Wasm.HEAP32.set(new Int32Array([height, width]), sizes / 4);
      processHelper = new Wasm.ConstraintPropagationSolverProcessHelper2(
        2,
        1,
        sizes
      );*/
		})
		return () => {
			//if (processHelper !== null) {
			//	processHelper.delete()
			//}
		}
	})

	return (
		<Suspense fallback={null}>
			<EnvironmentLight preset="city" />
			{/* <pointLight position={[5, 0, 0]} /> */}
			<ambientLight intensity={0.4} />

			<gridHelper args={[100, 100]} />
			{/* <Generator /> */}

			{/* <mesh receiveShadow position={[0, -0.51, 0]} scale={[100, 0.1, 100]}>
				<boxGeometry />
				<meshStandardMaterial color={"white"} />
			</mesh> */}
		</Suspense>
	)
}

export default Environment
