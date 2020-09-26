import React from 'react'
import Badge from './../Badge';
import classNames from 'classnames';
import './List.scss';

const List = ({items, isRemoveable = false, onClick}) => {
	
	return (
		<ul onClick = {onClick} className="list">
			{items.map(item => (
				<li key={item.id} className={classNames(item.className, {active: item.isActive})}>
					<i>{item.icon ? item.icon : (<Badge color={item.color} />)}</i>
					<span>{item.title}</span>
				</li>
			))}
		</ul>
	)
}

export default List
