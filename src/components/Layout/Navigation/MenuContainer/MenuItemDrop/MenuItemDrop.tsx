import Link from 'next/link'

import styles from '../MenuContainer.module.scss'
import { IMenuDropItem } from '../menu.interface'

interface Drop {
	dropMenu: { title: string; link: string }
}
const MenuItemDrop: React.FC<Drop> = ({ dropMenu }) => {
	return (
		<li className={styles.dropdown_list__item}>
			<Link
				href={dropMenu.link}
				className={styles.dropdown_list__link}
				key={dropMenu.title}
			>
				{dropMenu.title}
			</Link>
		</li>
	)
}

export default MenuItemDrop
