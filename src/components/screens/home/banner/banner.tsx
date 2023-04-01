import Link from 'next/link'
import { FC } from 'react'

import styles from './header_banner.module.scss'

const Banner: FC = () => {
	return (
		<>
			<div className={styles.header_banner}>
				{/* <div className="header-banner"> */}
				<div className="container">
					<div className={styles.header_banner__items}>
						<div className={styles.header_banner__item}>
							<h1 className={styles.header_banner__title}>ШахМатOff</h1>
							<p className={styles.header_banner__subtitle}>
								БОЛЬШЕ, ЧЕМ ПРОСТО ШАХМАТНАЯ ШКОЛА
							</p>
						</div>
						<div className={styles.header_banner__item}>
							<a
								href="tel:+73432712011"
								className={styles.header_banner__content_tell}
							>
								+7 (343) 271-20-11
							</a>
							<Link href="./" className="btn">
								Оформить заявку сейчас
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Banner
