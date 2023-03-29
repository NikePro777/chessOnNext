import Link from 'next/link'
import { FC } from 'react'

import styles from './MenuContainer.module.scss'
import MenuItemDrop from './MenuItemDrop/MenuItemDrop'
import { IMenuDropItem } from './menu.interface'

type MenuWrap = {
	item: {
		title: string
		link: string
		dropMenu?: IMenuDropItem[]
	}
}
const MenuItem: FC<MenuWrap> = ({ item }) => {
	const { dropMenu } = item
	console.log(dropMenu)

	return dropMenu ? (
		<li className={styles.menu__item}>
			<Link
				className={styles.menu__item + ' ' + styles.dropdown_list}
				href={item.link}
			>
				<span>{item.title}</span>
			</Link>
			<ul className={styles.dropdown_list__items}>
				{dropMenu.map((drop) => {
					;<MenuItemDrop title={drop.title} link={drop.link} />
				})}

				{/* {...dropMenu} */}
			</ul>
		</li>
	) : (
		<li className={styles.menu__item}>
			<Link className={styles.menu__item_link} href={item.link}>
				<span>{item.title}</span>
			</Link>
		</li>
	)
}

export default MenuItem
//index//
// const TodoViewer = () => {
// 	const [view, setView] = useState<TodoState>('all')
// 	return (<TodoList state={view} />)}

//interface//
// export type TodoState = 'all' | 'open' | 'completed'
// export type Todo = {
//   id: number
//   completed: boolean
//   title: string
// }

//todo list

// type TodoListProps = {
// 	state: TodoState;
//   };

//   const TodoList = ({ state }: TodoListProps) => {
// 	const { data, isLoading, isSuccess } = useTodosQuery(state);

// 	if (isLoading)
// 	  return (
// 		<Spinner
// 		  thickness="4px"
// 		  speed="0.65s"
// 		  emptyColor="gray.200"
// 		  color="blue.500"
// 		  size="xl"
// 		/>
// 	  );

// 	return (
// 	  <List>
// 		{isSuccess && data.map((todo) => <TodoItem key={todo.id} {...todo} />)}
// 	  </List>
// 	);
//   };

//   export { TodoList };

//todo item

// const TodoItem = ({ completed, id, title }: Todo) => {
// 	const client = useQueryClient();

// 	const { mutate: toggle } = useMutation({
// 	  mutationFn: () => toggleTodoStatus(id, !completed),
// 	  onSuccess: () => client.invalidateQueries(['todos']),
// 	});

// 	return (
// 	  <ListItem>
// 		<Stack spacing={4} direction="row" onClick={() => toggle()}>
// 		  <Checkbox isChecked={completed}>{title}</Checkbox>
// 		</Stack>
// 	  </ListItem>
// 	);
//   };

//   export { TodoItem };
