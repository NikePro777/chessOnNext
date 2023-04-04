import Image from 'next/image'
import { FC } from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

import styles from './swiper.module.scss'

// import './swiper.module.scss'

const SwiperSection: FC = () => {
	return (
		<>
			<div className="sub_head">
				<div className="container">
					<div className="sub_head__slider">
						<div className="swiper">
							<div className="swiper-wrapper">
								<div className="swiper-slide"></div>
								<Image
									alt="Mountains"
									src="/../public/images/slider/slide2.jpg"
									sizes="100vh"
								/>
								<div className="swiper-slide"></div>
							</div>
						</div>
						<div className="swiper-pagination__wrapper">
							<div className="swiper-pagination"></div>
						</div>
					</div>
				</div>
			</div>
			<style jsx>{`
				.sub_head {
					// padding-bottom: 50px;
					// background: #2d3038;
					position: relative;
					// z-index: -1;
					// padding: 30px 0 30px;
					padding: 15px 0 15px;
				}
				.sub_head__slider {
					max-width: 100%;
					// size: unset;
				}

				img {
					object-fit: cover;
					width: 100%;
					height: 470px;

					// @media (max-width: 992px) {
					// 	height: 400px;
					// }

					// @media (max-width: 768px) {
					// 	height: 300px;
					// }

					// @media (max-width: $breakpoint480) {
					// 	height: 250px;
					// }
				}
			`}</style>
		</>
	)
}

export default SwiperSection
