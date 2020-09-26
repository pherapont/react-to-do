import React from 'react'
import './App.scss'
import List from './componets/List/'
import AddList from './componets/AddList'
import listIcon from './assets/img/list.svg'
import {colors} from './assets/db.json';

function App() {
	return (
		<div className="todo">
			<div className="todo__sidebar">

				<List items={[
					{
						id: 1,
						title: 'Все задачи',
						icon: <img src={listIcon} alt="List icon" />,
						
					}
				]}
				/>

				<List items={[
					{
						id: 1,
						title: 'Frontend',
						color: 'pink'
					},
					{
						id: 2,
						title: 'Покупки',
						color: 'green',
						isActive: true
					},
					{
						id: 3,
						title: 'Фильмы и сериалы',
						color: 'blue'
					},
				]}
				isRemoveable
				/>

				< AddList colors={colors} />

			</div>
			
			<div className="todo__tasks">
				
			</div>
		</div>
	)
}

export default App
