import type { AppProps } from 'next/app'

import Layout from '@/components/Layout/Layout'

import '@/assets/styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}
