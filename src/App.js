import React from 'react'
import './App.scss'
import List from './componets/List/'
import AddListButton from './componets/AddButtonList'
import listIcon from './assets/img/list.svg'


function App() {
	const [value, setValue] = React.useState('Hello World!')
	return (
		<div className="todo">
			<div className="todo__sidebar">

				<button onClick={() => setValue('It word of state!')}>Обновить</button>
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

				< AddListButton />

			</div>
			
			<div className="todo__tasks">
				
			</div>
		</div>
	)
}

export default App
