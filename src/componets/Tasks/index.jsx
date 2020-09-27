import React from 'react'

import './Tasks.scss'
import editIcon from './../../assets/img/edit.svg'

export default function Tasks() {
	return (
		<div className="tasks">
			<h2 className="tasks__title">
				Фронтенд
				<img src={editIcon} alt="Иконка редактировать" />
				</h2>
		</div>
)
}
