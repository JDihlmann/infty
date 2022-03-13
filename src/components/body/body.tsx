import Header from "@/components/header/header"
import React, { FunctionComponent } from "react"

interface BodyProps {
	className?: string
}

const Body: FunctionComponent<BodyProps> = ({ children, className = undefined }) => {
	return (
		<div
			style={{
				top: 0,
				left: 0,
				position: "absolute",
				width: "100%",
				height: "100%",
				overflow: "hidden",
				zIndex: 0,
				display: "flex",
				flexDirection: "column",
				boxSizing: "border-box",
				background: "none",
				justifyContent: "space-between",
				pointerEvents: "none",
			}}
		>
			<Header />
			<div
				style={{
					flex: 1,
					display: "flex",
					flexDirection: "row",
					alignItems: "flex-end",
					alignSelf: "center",
					justifyContent: "center",
					width: "100%",
					maxWidth: "1024px",
					paddingBottom: "20px",
				}}
			>
				{children}
			</div>
		</div>
	)
}

export default Body
