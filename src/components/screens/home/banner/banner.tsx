import { FC } from 'react'

import styles from './header_banner.module.scss'

const Banner: FC = () => {
	return (
		<>
			<div className={styles.header_banner}>
				{/* <div className="header-banner"> */}
				<div className="container">
					<div className={styles.header_banner__items}>
						<div className="header-banner__item">
							<h1 className="header-banner__title">ШахМатOff</h1>
							<p className="header-banner__subtitle">
								БОЛЬШЕ, ЧЕМ ПРОСТО ШАХМАТНАЯ ШКОЛА
							</p>
						</div>
						<div className="header-banner__item">
							<a
								href="tel:+73432712011"
								className="header-banner__content_tell"
							>
								+7 (343) 271-20-11
							</a>
							<a href="./zakazat-zvonok.html" className="btn">
								Оформить заявку сейчас
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Banner
