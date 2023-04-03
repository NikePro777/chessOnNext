import Image from 'next/image'
import { FC } from 'react'

const Swiper: FC = () => {
	return (
		<>
			<div className="sub-head">
				<div className="container">
					<div className="sub-head__slider">
						<div className="swiper">
							<div className="swiper-wrapper">
								<div className="swiper-slide">
									<Image
										src="../../../../../public/images/slider/slide2.jpg"
										alt="Набор на занятия"
									/>
								</div>

								<div className="swiper-slide">
									<Image
										src="../../../../../public/images/slider/slide1.jpg"
										alt="ШахМатOff"
									/>
								</div>
							</div>
						</div>
						<div className="swiper-pagination__wrapper">
							<div className="swiper-pagination"></div>
						</div>
					</div>
				</div>
			</div>
			<script src="./swiperScript.js"></script>
		</>
	)
}

export default Swiper
