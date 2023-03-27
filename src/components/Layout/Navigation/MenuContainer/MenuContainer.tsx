import { FC } from 'react'

import Menu from './Menu'
import { firstMenu } from './menu.data'

const MenuContainer: FC = () => {
	return (
		<ul className="menu">
			<Menu menu={firstMenu} />
		</ul>
	)
}

export default MenuContainer
