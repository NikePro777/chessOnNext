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
	return dropMenu.map((drop) => {
		;<li className={styles.dropdown_list__item} key={drop.title}>
			<MenuItemDropik />
		</li>
	})
}

export default MenuItemDrop
