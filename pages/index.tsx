import { NextPage } from 'next'

import Layout from '@/components/Layout/Layout'
import Home from '@/components/screens/home/Home'

const HomePage: NextPage = (props) => {
	return <Home />

	// return <Home {...props} />
}

export default HomePage
