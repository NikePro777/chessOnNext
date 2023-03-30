import { IMenu } from './menu.interface'

export const firstMenu: IMenu = {
	title: 'Menu',
	items: [
		{
			title: 'Главная',
			link: '/',
		},
		{
			title: 'О нас',
			link: '/',
			dropMenu: [
				{
					title: 'О школе',
					link: '/',
				},
				{
					title: 'Преимущества',
					link: '/',
				},
				{
					title: 'Видеоуроки',
					link: '/',
				},
				{
					title: 'Расписание филиалов',
					link: '/',
				},
			],
		},
		{
			title: 'Тренеры',
			link: '/',
		},
		{
			title: 'Наш Блог',
			link: '/',
		},
		{
			title: 'Стоимость',
			link: '/',
			dropMenu: [
				{
					title: 'Тихвинъ',
					link: '/',
				},
				{
					title: 'Авиационная',
					link: '/',
				},
			],
		},
		{
			title: 'Контакты',
			link: '/about',
		},
	],
}
