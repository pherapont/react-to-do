import React from 'react'

import './Tasks.scss'
import editIcon from './../../assets/img/edit.svg'

export default function Tasks( {list} ) {
	return (
		<div className="tasks">
			<h2 className="tasks__title">
				{list.name}
				<img src={editIcon} alt="Иконка редактировать" />
			</h2>
			{list.tasks.map( task => (
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
)
}
