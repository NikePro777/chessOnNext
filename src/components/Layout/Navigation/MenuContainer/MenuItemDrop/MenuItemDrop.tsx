import Link from 'next/link'
import { title } from 'process'
import { FC } from 'react'

import { IMenuDropItem } from '../menu.interface'

import styles from './MenuItemDrop.module.scss'
import MenuItemDropik from './MenuItemDropik'

interface MenuItemDropInterface {
	dropMenu: IMenuDropItem[]
}

const MenuItemDrop: FC<MenuItemDropInterface> = ({ dropMenu }) => {
	console.log(dropMenu)

	return (
		<>
			{dropMenu.map((drop) => {
				;<li className={styles.dropdown_list__item}>
					<Link href={drop.link} className={styles.dropdown_list__link}>
						{drop.title}
					</Link>
				</li>
			})}
		</>
	)
}

export default MenuItemDrop
