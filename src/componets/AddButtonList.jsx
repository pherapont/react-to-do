import React from 'react';
import addIcon from './../assets/img/add.svg'
import List from './List/'


const AddListButton = () => {
	return (
		<>
		<List items={[
			{
				id: 1,
				title: 'Добавить список',
				icon: <img src={addIcon} alt="Добавить список" />,
				className: 'list__add-btn'
			}
		]}
		/>
		<div className="add-list-popup">
			<h1>Popup</h1>
		</div>
		</>
	)
}

export default AddListButton