import Head from "next/head"
import { AppProps } from "next/app"
import "tailwindcss/tailwind.css"
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

				<link rel="preload" href="/fonts/Redaction_35-Bold.woff2" as="font" crossOrigin="" />
				<link rel="preload" href="/fonts/Redaction_35-Regular.woff2" as="font" crossOrigin="" />
			</Head>
			<Component {...pageProps} />
		</>
	)
}
