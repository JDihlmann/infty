import Head from "next/head"
import { AppProps } from "next/app"
import "../styles/globals.css"

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
				<meta name="description" content="Infinite world generator" />

				<title> Infty </title>
				<meta name="theme-color" content="#ffffff" />

				<link href="https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap" rel="stylesheet" />
			</Head>
			<Component {...pageProps} />
		</>
	)
}
