import React from 'react'
import Badge from './../Badge';
import classNames from 'classnames';
import axios from 'axios';

import './List.scss';
import removeIcon from './../../assets/img/remove.svg';

const List = ({items, isRemoveable, onClick, onRemove, onClickItem}) => {

	const removeList = (id) => {
		if (window.confirm('Вы действительно хотите удалить список?')) {
			axios
				.delete('http://localhost:3001/lists/' + id)
				.then( onRemove(id) )
		}
	}

	return (
		<ul onClick = {onClick} className="list">
			{items.map(item => (
				<li key={item.id} onClick={ item.tasks ? () => onClickItem(item) : null } className={classNames(item.className, {active: item.isActive})}>
					<i>{item.icon ? item.icon : (<Badge color={item.color.name} />)}</i>
					<span>
						{item.name}
						{ item.tasks && ` (${item.tasks.length})` } 
					</span>
					{ isRemoveable && 
						<img
							onClick={() => removeList(item.id)}
							className="list__remove-icon"
							src={removeIcon}
							alt="Удалить список" /> }
				</li>
			))}
		</ul>
	)
}

export default List
