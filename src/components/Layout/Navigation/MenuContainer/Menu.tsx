import { FC } from 'react'

import './MenuContainer.module.scss'
import MenuItem from './MenuItem'
import { IMenu } from './menu.interface'

const Menu: FC<{ menu: IMenu }> = ({ menu: { items, title } }) => {
	return (
		<li className="menu__item">
			{items?.map((item) => (
				<MenuItem item={item} key={item.link} />
			))}
		</li>
	)
}

export default Menu
