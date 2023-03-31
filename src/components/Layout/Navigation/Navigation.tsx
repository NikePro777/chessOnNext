import React from 'react'

import Logo from './Logo/Logo'
import MenuContainer from './MenuContainer/MenuContainer'
import styles from './Navigation.module.scss'

const Navigation: React.FC = () => {
	return (
		<div className="container">
			<div className={styles.navbar}>
				<Logo />
				<nav>
					<MenuContainer />
				</nav>
				<button className={styles.burger}>
						<span></span>
					</button>
			</div>
		</div>
	)
}
export default Navigation
