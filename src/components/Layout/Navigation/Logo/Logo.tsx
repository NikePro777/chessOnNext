import Link from 'next/link'

import styles from './Logo.module.scss'

const Logo: React.FC = () => {
	return (
		<div className={styles.logo}>
			<Link className={styles.logo__link} href="./">
				ШахМатOff
			</Link>
		</div>
	)
}

export default Logo
