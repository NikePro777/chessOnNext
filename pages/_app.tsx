import type { AppProps } from 'next/app'

import Layout from '@/components/Layout/Layout'

import '../src/assets/styles/_global.scss'

export default function App({ Component, pageProps }: AppProps) {
	return (
		// <>
		// 	{' '}
		// 	<style jsx global>
		// 		{'$color-accent: #ffba00;'}
		// 	</style>
		<Layout>
			<Component {...pageProps} />
		</Layout>
		// </>
	)
}
