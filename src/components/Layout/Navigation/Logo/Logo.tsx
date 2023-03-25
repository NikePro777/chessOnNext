import styles from './Logo.module.scss'

const Logo: React.FC = () => {
	return (
		<div className={styles.logo}>
			<a className={styles.logo__link} href="./index.html">
				ШахМатOff
			</a>
		</div>
	)
}

export default Logo
