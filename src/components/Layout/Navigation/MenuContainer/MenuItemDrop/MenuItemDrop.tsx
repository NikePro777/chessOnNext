import Link from 'next/link'

import { IMenuDropItem } from '../menu.interface'

import styles from './MenuItemDrop.module.scss'

const MenuItemDrop: React.FC = (link, title) => {
	return (
		<li className={styles.dropdown_list__item}>
			<Link href={link} className={styles.dropdown_list__link}>
				{title}
			</Link>
		</li>
	)
}

export default MenuItemDrop
