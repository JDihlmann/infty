import Header from "@/components/header/header"
import React, { FunctionComponent } from "react"

interface BodyProps {
	className?: string
}

const Body: FunctionComponent<BodyProps> = ({ children, className = undefined }) => {
	return (
		<div
			className={`bg-white z-20  dark:bg-black text-black dark:text-white flex flex-col box-border h-screen ${className}`}
		>
			<Header />
			<div className={"flex-1 flex flex-col items-stretch self-center"}>{children}</div>
		</div>
	)
}

export default Body
