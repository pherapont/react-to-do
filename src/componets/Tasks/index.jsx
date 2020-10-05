import React from 'react'

import AddTaskForm from './AddTaskForm';

import './Tasks.scss'
import editIcon from './../../assets/img/edit.svg'

export default function Tasks( {list, onEditTitle, onAddTask, onLoading, emptyTasks} ) {

	const editTitle = () => {
		const newTitle =  prompt('Новый заголовок списка', list.name)
		onEditTitle(list.id, newTitle)
	}

	return (
		<div className="tasks">
			<h2 style={{ color: list.color.hex }} className="tasks__title">
				{list.name}
				<img onClick={editTitle} src={editIcon} alt="Иконка редактировать" />
			</h2>

			<div className="tasks__items">

				{ emptyTasks && !list.tasks.length > 0 && <h2>Задачи отсутствуют</h2> }

				{ list.tasks && list.tasks.map( task => (
					<div key={task.id} className="tasks__item-row">
						<div className="checkbox">
							<input id={task.id} type="checkbox"/>
							<label htmlFor={task.id}>
								<svg width="11" height="8" viewBox="0 0 11 8" fill="none"   xmlns="http://www.w3.org/2000/svg">
									<path d="M9.29 1.20 L3.79 6.70 L1.29 4.20" stroke="#b2b2b2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
								</svg>
							</label>
						</div>
						<input type="text" readOnly value={task.text} />
					</div>
				))}
			</div>

			<AddTaskForm
				onAddTask={(value) => onAddTask(value, list.id) }
				onLoading={onLoading}
			/>
			
		</div>
)
}
