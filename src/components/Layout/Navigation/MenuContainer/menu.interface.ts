export interface IMenu {
	title: string
	items: IMenuDrop[]
}

export interface IMenuDrop {
	title: string
	link: string
	dropMenu?: IMenuDropItem[]
}

export interface IMenuDropItem {
	title: string
	link: string
}
