import React from 'react'

import styles from './Layout.module.scss'
import Navigation from './Navigation/Navigation'
import Sidebar from './Sidebar/Sidebar'

const Layout: React.FC = ({ children }) => {
	return (
		<div className={styles.layout}>
			<h1>Layout</h1>
			<Navigation />
			<div className={styles.center}>child {children} child2</div>
			<main>{children}</main>
			<Sidebar />
		</div>
	)
}
export default Layout
