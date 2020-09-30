import React, { useState, useEffect } from 'react'
import axios from 'axios';

import {AddList, Tasks, List} from './componets'

import listIcon from './assets/img/list.svg'
import './App.scss'

function App() {

	const [lists, setLists] = useState([])
	const [colors, setColors] = useState([])
	const [ tasks, setTasks ] = useState([])
	
	useEffect( () => {axios
		.get('http://localhost:3001/lists?_expand=color&_embed=tasks')
		.then( ({data}) => {
			setLists(data)
			setTasks(data[0])
		} )
	}, [] )

	useEffect(() => {	axios
		.get('http://localhost:3001/colors')
		.then( ({data}) => setColors(data) )
	}, [])

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

					<List items = {lists}
					isRemoveable
					onRemove = {(id) => {
						const newLists = lists.filter( list => list.id !== id )
						setLists(newLists)
					}}
					onClickItem = { tasks => setTasks(tasks) }
					/>
				

				< AddList
					onAdd = { newList => setLists( prev => [...prev, newList] )}
					colors = {colors}
				/>

			</div>
			
			<div className="todo__tasks">
				{ lists.length && <Tasks list = { tasks } /> }
			</div>
		</div>
	)
}

export default App
