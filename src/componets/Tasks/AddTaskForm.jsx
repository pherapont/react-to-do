import React, {useState} from 'react';

import addIcon from './../../assets/img/add.svg';

const AddTaskForm = ({onAddTask, onLoading}) => {
	const [visibaleForm, setVisibaleForm] = useState(false)
	const [taskValue, setTaskValue] = useState('')

	
	const toggleVisibaleForm = () => {
		setVisibaleForm( !visibaleForm )
		setTaskValue('')
	}

	const addNewTask = () => {
		onAddTask(taskValue)
		toggleVisibaleForm()
	}
	
	return (
		<div className="tasks__form">
			{ !visibaleForm ? (
				<div onClick={toggleVisibaleForm} className="tasks__form-new">
					<img src={addIcon} alt="add icon" />
					<span>Добавить задачу</span>
				</div>
				) : (
				<div className="task__form-block">
					<input
						value={taskValue}
						onChange={(e) => {setTaskValue(e.target.value)}}
						type="text" 
						className="input"
						placeholder="Текст задачи"
					/>
					<div className="tasks__form-buttons">
						<button disabled={onLoading} onClick={(addNewTask)} className="btn">Добавить задачу</button>
						<button onClick={toggleVisibaleForm} className="btn btn--white">Отмена</button>
					</div>
				</div>
			)}
		</div>
	)
}

export default AddTaskForm