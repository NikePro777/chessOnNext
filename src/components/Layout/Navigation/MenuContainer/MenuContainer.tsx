import { FC } from 'react'

import styles from './MenuContainer.module.scss'
import MenuItem from './MenuItem'
import { firstMenu } from './menu.data'

const MenuContainer: FC = () => {
	return (
		<ul className={styles.menu}>
			{firstMenu.items.map((item) => (
				<MenuItem props={item} key={item.link} />
			))}
		</ul>
	)
}

export default MenuContainer
