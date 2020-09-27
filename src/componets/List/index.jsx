import React from 'react'
import Badge from './../Badge';
import classNames from 'classnames';
import './List.scss';
import removeIcon from './../../assets/img/remove.svg';

const List = ({items, isRemoveable, onClick, onRemove}) => {
	return (
		<ul onClick = {onClick} className="list">
			{items.map(item => (
				<li key={item.id} className={classNames(item.className, {active: item.isActive})}>
					<i>{item.icon ? item.icon : (<Badge color={item.color} />)}</i>
					<span>{item.name}</span>
				{ isRemoveable && 
					<img
						onClick={() => onRemove(item)}
						className="list__remove-icon"
						src={removeIcon}
						alt="Удалить список" /> }
				</li>
			))}
		</ul>
	)
}

export default List
