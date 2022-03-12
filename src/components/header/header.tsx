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
								textDecoration: "none",
								pointerEvents: "all",
								zIndex: 100,
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
						zIndex: 100,
					}}
				>
					<a
						href="https://twitter.com/JDihlmann"
						style={{ textDecoration: "none", fontWeight: "bold", pointerEvents: "all" }}
					>
						@JDihlmann
					</a>
				</div>
			</div>
		</div>
	)
}

export default Header
