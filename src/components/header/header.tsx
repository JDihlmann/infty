import Link from "next/link"

const Header = ({}) => {
	return (
		<div
			style={{
				top: 0,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				color: "#222222",
				width: "100%",
				height: "50px",
			}}
		>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					width: "100%",
					maxWidth: "1024px",
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						zIndex: 30,
					}}
				>
					<Link href="/">
						<a
							style={{
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
								fontWeight: "bold",
								fontSize: "1.875rem",
								lineHeight: "2.25rem",
								zIndex: 30,
							}}
						>
							Infty
						</a>
					</Link>
				</div>

				<div
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						zIndex: 30,
					}}
				>
					<button
						style={{
							background: "none",
							fontWeight: "bold",
							paddingTop: "0.5rem",
							paddingBottom: "0.5rem",
							borderRadius: "0.25rem",
						}}
					>
						<Link href="https://twitter.com/JDihlmann">@JDihlmann</Link>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Header
