import { MenuLi } from '@/types/menu'
import Link from 'next/link'
import { FC } from 'react'

const Li: FC<MenuLi> = ({class:string , text}) => {
	return (
		<li className='menu__item menu__item--active'>
						<Link href='./index.html' className={class}>
							{text}
						</Link>
					</li>
	)
}

export default Li
