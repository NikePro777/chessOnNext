import Link from 'next/link'
import { FC } from 'react'

import styles from './MenuContainer.module.scss'
import MenuItemDrop from './MenuItemDrop/MenuItemDrop'
import { IMenuDrop, IMenuDropItem } from './menu.interface'

interface MenuItemProps {
	props: IMenuDrop
}
const MenuItem: FC<MenuItemProps> = ({ props }) => {
	const { dropMenu, title, link } = props
	// console.log(dropMenu)
	if (dropMenu) {
		return (
			<li className={styles.menu__item + ' ' + styles.dropdown_list}>
				<Link className={styles.menu__item_link} href={link}>
					<span>{title}</span>
				</Link>
				<ul className={styles.dropdown_list__items}>
					{dropMenu.map((drop) => {
						return <MenuItemDrop dropMenu={drop} key={drop.title} />
					})}
				</ul>
			</li>
		)
	}
	return (
		<li className={styles.menu__item}>
			<Link className={styles.menu__item_link} href={link}>
				<span>{title}</span>
			</Link>
		</li>
	)
}

export default MenuItem
