import Link from 'next/link'
import { FC } from 'react'

import styles from './MenuContainer.module.scss'
import { IMenuDrop } from './menu.interface'

const MenuItem: FC<{ item: IMenuDrop }> = ({ item }) => {
	return (
		<Link className={styles.menu__item_link} href={item.link}>
			<span>{item.title}</span>
		</Link>
	)
}

export default MenuItem
