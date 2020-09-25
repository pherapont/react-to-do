import React from 'react'
import classNames from 'classnames';
import './List.scss';

const List = ({items, isRemoveable = false}) => {
	
	return (
		<ul className="list">
			{items.map(item => (
				<li key={item.id} className={classNames(item.className, {active: item.isActive})}>
				{/* <li key={item.id} className={`${item.className || ''} ${item.isActive ? 'active' : ''}`}> */}
					<i>{item.icon ? item.icon : (<i className={`badge bage--${item.color}`}></i>)}</i>
					<span>{item.title}</span>
				</li>
			))}
		</ul>
	)
}

export default List
