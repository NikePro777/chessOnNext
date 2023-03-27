import Link from 'next/link'
import { FC } from 'react'

import { IMenuItem } from './menu.interface'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	return (
		<Link href={item.link}>
			<span>{item.title}</span>
		</Link>
	)
}

export default MenuItem
