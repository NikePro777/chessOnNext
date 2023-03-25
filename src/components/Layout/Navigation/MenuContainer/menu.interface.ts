export interface IMenuItem {
	title: string
	link: string
}

export interface IMenu {
	title: string
	link?: string
	items?: IMenuItem[]
}
