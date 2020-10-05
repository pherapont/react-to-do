import React, { useState, useEffect } from 'react'
import {Route} from "react-router-dom"
import axios from 'axios';

import {AddList, Tasks, List} from './componets'

import listIcon from './assets/img/list.svg'
import './App.scss'

function App() {

	const [lists, setLists] = useState(null)
	const [colors, setColors] = useState([])
	const [ activeList, setActiveList ] = useState(null)
	const [ onLoading, setOnLoading ] = useState (false)

	useEffect( () => {axios
		.get('http://localhost:3001/lists?_expand=color&_embed=tasks')
		.then( ({data}) => {
			setLists(data)
			// setActiveList(data[0])
		} )
	}, [] )
	
	useEffect(() => {	axios
		.get('http://localhost:3001/colors')
		.then( ({data}) => setColors(data) )
	}, [])

	const editListTitle = (id, title) => {
		axios
			.patch('http://localhost:3001/lists/' + id, { name:title })
			.then((response) => {
				if (response) {
					setLists( lists => lists.map( item => {
						if (item.id === id) {
							item.name = title
						}
						return item
					}))
				}
			})
			.catch(() => alert( 'Не удалось обновить название списка!' ))
	}

	const addNewTask = (value, id) => {
		const newTask = {
			listId: id,
			text: value,
			completed: false
		}
		setOnLoading(true)
		axios.post('http://localhost:3001/tasks', newTask)
		.then(response => {
			const allTasks = activeList.tasks
			const newList= [...allTasks, response.data]
			setActiveList(prev => {
				const obj = {...prev}
				obj.tasks = newList
				return obj
			})
		})
		.then(setOnLoading(false))
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
				<List items = {lists}
					isRemoveable
					onRemove = {(id) => {
						const newLists = lists.filter( list => list.id !== id )
						setLists(newLists)
					}}
					onClickItem = { tasks => setActiveList(tasks) }
					activeList = {activeList}
				/>
				< AddList
					onAdd = { newList => setLists( prev => [...prev, newList] )}
					colors = {colors}
				/>
			</div>
			<div className="todo__tasks">
				<Route exact path="/">
					{lists && lists.map((list) => (
							<Tasks
							key={list.id}
							list = { list }
							onEditTitle = { editListTitle }
							onAddTask={addNewTask}
							onLoading={onLoading}
							emptyTasks={false}
							/>
						)
					)}
				</Route>
				<Route path="/:id">
					{ lists && activeList &&
					<Tasks
						list = { activeList }
						onEditTitle = { editListTitle }
						onAddTask={addNewTask}
						onLoading={onLoading}
						emptyTasks={true}
					/> }
				</Route>
			</div>
		</div>
	)
}

export default App
