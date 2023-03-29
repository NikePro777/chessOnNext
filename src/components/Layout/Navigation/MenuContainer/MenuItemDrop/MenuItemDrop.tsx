import Link from 'next/link'
import { title } from 'process'

import { IMenuDropItem } from '../menu.interface'

import styles from './MenuItemDrop.module.scss'

interface Todo = {
	link:string
	title:string
}
const MenuItemDrop = ({link, title}:Todo) => {
	return (
		<li className={styles.dropdown_list__item}>
			<Link href={link} className={styles.dropdown_list__link}>
				{title}
			</Link>
		</li>
	)
}

export default MenuItemDrop
