import { FC } from 'react'

import Banner from './banner/banner'
import Fill from './swiper/fill'
import SwiperSection from './swiper/swiperSection'

const Home: FC = () => {
	return (
		<>
			<Banner />
			<SwiperSection />
			{/* <Fill /> */}
		</>
	)
}

export default Home
