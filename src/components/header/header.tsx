import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { useMediaQuery } from "react-responsive"
import { map_range } from "../../utils/mapNumbers"

const Header = ({}) => {
	const container = useRef<HTMLDivElement>(null!)
	const divider = useRef<HTMLDivElement>(null!)

	const [hasUser, setHasUser] = useState(false) // TODO: User Auth

	const systemPrefersDark = useMediaQuery({
		query: "(prefers-color-scheme: dark)",
	})

	const [hamburgerOpen, setHamburgerOpen] = useState(false)

	useEffect(() => {
		const onScroll = () => {
			if (container.current && divider.current) {
				const percentage = Math.min(Math.max(map_range(window.scrollY, 50, 100, 0, 1), 0), 1)
				const percentageDivider = Math.min(
					Math.max(map_range(window.scrollY, 50, 100, 0, 0.2), 0),
					0.2
				)

				container.current.style.backgroundColor = `rgba(${systemPrefersDark ? 51 : 255},${
					systemPrefersDark ? 51 : 255
				},${systemPrefersDark ? 51 : 255},${percentage})`
				divider.current.style.opacity = percentageDivider.toString()
			}
		}

		window.addEventListener("scroll", onScroll)

		return () => window.removeEventListener("scroll", onScroll)
	}, [systemPrefersDark])

	return (
		<div
			ref={container}
			className="flex top-0 sticky items-center justify-center text-black dark:text-white h-14 md:h-16 "
		>
			<div
				className=" w-96 self-center flex items-center justify-between "
				style={{ width: "1024px" }}
			>
				<div className="flex flex-row absolute z-30 md:static items-center">
					<Link href="/">
						<a
							className="flex flex-row items-center font-bold text-3xl text-black"
							style={{
								fontSmooth: "never",
								WebkitFontSmoothing: "none",
								letterSpacing: "-1%",
							}}
						>
							Infty
						</a>
					</Link>
				</div>

				<div
					className="absolute z-30 right-5 md:hidden p-3 pr-0"
					onClick={() => setHamburgerOpen((before) => !before)}
				>
					{hamburgerOpen ? (
						<svg
							width="16"
							height="16"
							viewBox="0 0 19 19"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M4.0502 1.41416C3.26915 0.633107 2.00282 0.633107 1.22177 1.41416C0.440725 2.1952 0.440724 3.46153 1.22177 4.24258L6.89338 9.91418L1.22183 15.5857C0.440783 16.3668 0.440783 17.6331 1.22183 18.4142C2.00288 19.1952 3.26921 19.1952 4.05026 18.4142L9.7218 12.7426L15.3639 18.3847C16.145 19.1658 17.4113 19.1658 18.1923 18.3847C18.9734 17.6037 18.9734 16.3373 18.1923 15.5563L12.5502 9.91419L18.1924 4.27202C18.9734 3.49097 18.9734 2.22464 18.1924 1.44359C17.4113 0.662545 16.145 0.662545 15.364 1.44359L9.7218 7.08576L4.0502 1.41416Z"
								fill="currentColor"
							/>
						</svg>
					) : (
						<svg
							width="18"
							height="16"
							viewBox="0 0 22 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M0 2C0 0.895431 0.895431 0 2 0H20C21.1046 0 22 0.895431 22 2C22 3.10457 21.1046 4 20 4H2C0.89543 4 0 3.10457 0 2ZM0 16C0 14.8954 0.895431 14 2 14H20C21.1046 14 22 14.8954 22 16C22 17.1046 21.1046 18 20 18H2C0.89543 18 0 17.1046 0 16ZM2 7C0.895431 7 0 7.89543 0 9C0 10.1046 0.89543 11 2 11H20C21.1046 11 22 10.1046 22 9C22 7.89543 21.1046 7 20 7H2Z"
								fill="currentColor"
							/>
						</svg>
					)}
				</div>

				<nav
					className={`absolute md:static top-0 min-h-screen z-20 md:min-h-0 left-0 right-0 px-5 md:px-0 py-5 pt-20 md:py-0 justify-center space-y-10 md:space-y-0 md:space-x-5 bg-white dark:bg-black md:bg-transparent bg-opacity-60 backdrop-filter backdrop-blur-md md:backdrop-filter-none flex flex-col items-center md:flex-row ${
						hamburgerOpen ? "visible" : "invisible"
					} font-normal md:visible text-lg md:text-base`}
				>
					<button className="bg-none text-black hover:underline font-bold py-2 px-2 rounded">
						{" "}
						Settings{" "}
					</button>
				</nav>
			</div>

			<div
				className="h-px bg-black dark:bg-white absolute bottom-0 left-0 right-0 transition-opacity"
				style={{ opacity: 0 }}
				ref={divider}
			/>
		</div>
	)
}

export default Header
