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
			<div className="tasks__item-row">
				<div className="checkbox">
					<input id="check" type="checkbox"/>
					<label htmlFor="check">
						<svg width="11" height="8" viewBox="0 0 11 8" fill="none"   xmlns="http://www.w3.org/2000/svg">
							<path d="M9.29 1.20 L3.79 6.70 L1.29 4.20" stroke="#b2b2b2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
					</label>
				</div>
				<input type="text" value="ReactJS Hooks (useState, useReducer, useEffect и т.д.)" />
			</div>
		</div>
)
}
