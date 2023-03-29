import Link from 'next/link'
import { FC } from 'react'

import styles from './MenuContainer.module.scss'
import MenuItemDrop from './MenuItemDrop/MenuItemDrop'
import { IMenuDrop, IMenuDropItem } from './menu.interface'

const MenuItem = ({ title, link, dropMenu }: IMenuDrop) => {
	// const { dropMenu } = item
	// console.log(dropMenu)

	return dropMenu ? (
		<li className={styles.menu__item}>
			<Link
				className={styles.menu__item + ' ' + styles.dropdown_list}
				href={link}
			>
				<span>{title}</span>
			</Link>
			<ul className={styles.dropdown_list__items}>
				<MenuItemDrop link="/" title="fg" />
				{/* {dropMenu.map((drop) => {
					<MenuItemDrop title={drop.title} link={drop.link} />
				})} */}

				{/* {...dropMenu} */}
			</ul>
		</li>
	) : (
		<li className={styles.menu__item}>
			<Link className={styles.menu__item_link} href={link}>
				<span>{title}</span>
			</Link>
		</li>
	)
}

export default MenuItem
