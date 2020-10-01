import React from 'react';

import addIcon from './../../assets/img/add.svg';

const AddTaskForm = () => {
	return (
		<div className="tasks__form">
			<div className="tasks__form-new">
				<img src={addIcon} alt="add icon" />
				<span>Добавить задачу</span>
			</div>
			<div className="task__form-block">
				<input
					type="text" 
					className="input"
					placeholder="Текст задачи"
				/>
				<div className="tasks__form-buttons">
					<button className="btn">Добавить задачу</button>
					<button className="btn btn--white">Отмена</button>
				</div>
			</div>
		</div>
	)
}

export default AddTaskForm