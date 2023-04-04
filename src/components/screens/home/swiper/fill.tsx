import Image from 'next/image'

const Fill = () => (
	<div>
		<h1>Image Component With Layout Fill</h1>
		<div style={{ position: 'relative', width: '300px', height: '500px' }}>
			<Image
				alt="Mountains"
				src="/../public/images/slider/slide2.jpg"
				fill
				sizes="100vw"
				style={{
					objectFit: 'cover',
				}}
			/>
		</div>
		<div style={{ position: 'relative', width: '300px', height: '500px' }}>
			<Image
				alt="Mountains"
				src="/../public/images/slider/slide1.jpg"
				fill
				sizes="100vw"
				style={{
					objectFit: 'contain',
				}}
			/>
		</div>
		<div style={{ position: 'relative', width: '300px', height: '500px' }}>
			<Image
				alt="Mountains"
				src="/../public/images/slider/slide2.jpg"
				quality={100}
				fill
				sizes="100vw"
				style={{
					objectFit: 'none',
				}}
			/>
		</div>
	</div>
)

export default Fill


<Swiper
							spaceBetween={50}
							slidesPerView={1}
							onSlideChange={() => console.log('slide change')}
							onSwiper={(swiper) => console.log(swiper)}
							autoHeight={true}
						>
							<SwiperSlide>
								<div className="swiper_slide">
									<Image
										alt="Mountains"
										src="/../public/images/slider/slide2.jpg"
										sizes="100vh"
									/>
								</div>
							</SwiperSlide>
							{/* <SwiperSlide>
								<div className={styles.swiper_slide}></div>
								<Image
									src="/../public/images/slider/slide1.jpg"
									alt="ШахМатOff"
									fill
									sizes="100vw"
									style={{
										objectFit: 'contain',
									}}
								/>
							</SwiperSlide> */}
						</Swiper>