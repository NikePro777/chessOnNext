import { FC } from 'react'

import styles from './MenuContainer.module.scss'
import MenuItem from './MenuItem'
import { firstMenu } from './menu.data'

const MenuContainer: FC = () => {
	const menu = firstMenu
	return (
		<ul className={styles.menu}>
			{menu.items.map((item) => (
				<li className={styles.menu__item}>
					<MenuItem item={item} key={item.link} />
				</li>
			))}
		</ul>
	)
}

export default MenuContainer
