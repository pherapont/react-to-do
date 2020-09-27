import React, { useState } from 'react'
import List from './componets/List/'
import AddList from './componets/AddList'
import Tasks from './componets/Tasks'

import listIcon from './assets/img/list.svg'
import DB from './assets/db.json';
import './App.scss'

function App() {
	const [lists, setLists] = useState(
		DB.lists.map((list) => {
		list.color = DB.colors.find((color) => color.id === list.colorId).name
		return list
	}))
	const addList = (obj) => {
		const newList = [...lists, obj]
		setLists(newList)
	}
	const removeList = (list) => {
		if (window.confirm('Вы действительно хотите удалить список?')) {
			console.log(list)
		}
	}
	return (
		<div className="todo">
			<div className="todo__sidebar">

				<List items={[
					{
						id: 1,
						name: 'Все задачи',
						icon: <img src={listIcon} alt="List icon" />,
					}
				]}
				/>

				<List items={lists}
				isRemoveable
				onRemove = {(list) => removeList(list)}
				/>

				< AddList onAdd={addList} colors={DB.colors} />

			</div>
			
			<div className="todo__tasks">
				<Tasks />
			</div>
		</div>
	)
}

export default App
