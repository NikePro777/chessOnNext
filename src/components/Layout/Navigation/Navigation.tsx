import React from 'react'

import Logo from './Logo/Logo'
import styles from './Navigation.module.scss'

const Navigation: React.FC = () => {
	return (
		<div className="navbar">
			<Logo />
			<nav>
				<ul className="menu">
					<li className="menu__item menu__item--active">
						<a href="./index.html" className="menu__item-link">
							Главная
						</a>
					</li>
					<li className="menu__item dropdown-list">
						<a href="./school.html" className="menu__item-link">
							О нас
						</a>
						<ul className="dropdown-list__items">
							<li className="dropdown-list__item">
								<a href="./school.html" className="dropdown-list__link">
									{' '}
									О школе{' '}
								</a>
							</li>
							<li className="dropdown-list__item">
								<a href="./advantages.html" className="dropdown-list__link">
									Преимущества
								</a>
							</li>
							<li className="dropdown-list__item">
								<a href="./tutorials.html" className="dropdown-list__link">
									{' '}
									Видеоуроки{' '}
								</a>
							</li>
							<li className="dropdown-list__item">
								<a href="./work.html" className="dropdown-list__link">
									Расписание филиалов
								</a>
							</li>
						</ul>
					</li>
					<li className="menu__item">
						<a href="./coaches.html" className="menu__item-link">
							Тренеры
						</a>
					</li>
					<li className="menu__item">
						<a href="./blog.html" className="menu__item-link">
							Наш Блог
						</a>
					</li>
					<li className="menu__item">
						<a href="./cost.html" className="menu__item-link">
							Стоимость
						</a>
					</li>
					<li className="menu__item">
						<a href="./contacts.html" className="menu__item-link">
							Контакты
						</a>
					</li>
				</ul>
			</nav>

			<button className="burger">
				<span></span>
			</button>
		</div>
	)
}
export default Navigation
