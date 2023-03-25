import React from 'react'

import styles from './Layout.module.scss'
import Navigation from './Navigation/Navigation'
import Sidebar from './Sidebar/Sidebar'

const Layout: React.FC = ({ children }) => {
	return (
		<div className="wrapper">
			<header>
				<div className={styles.header}>
					<Navigation />
				</div>
			</header>
			<main>{children}</main>
			<Sidebar />
		</div>
	)
}
export default Layout
