import React, {useState} from 'react';
import Badge from '../Badge';
import addIcon from './../../assets/img/add.svg'
import closeIcon from './../../assets/img/close.svg'
import List from './../List'

import './AddList.scss'


const AddList = ({colors}) => {
	const [visiblePopup, setVisiblePopup] = useState(false)
	const [selectedColor, selectColor] = useState(null)

	return (
		<div className="add-list">
		<List
			onClick = {() => setVisiblePopup( true )}
			items={[
			{
				id: 1,
				title: 'Добавить список',
				icon: <img src={addIcon} alt="Добавить список" />,
				className: 'list__add-btn'
			}
		]}
		/>
		{visiblePopup && <div className="add-list__popup">
			<img onClick={() => setVisiblePopup( false )} src={closeIcon} className="add-list__close-btn" alt="Закрыть форму"/>
			<input type="text" className="input" placeholder="Название папки" />
			<div className="add-list__badges">
				{colors.map(color => (
					(<Badge 
						onClick={() => selectColor(color.id)} 
						key={color.id} 
						color={color} 
						className={selectedColor === color.id && 'isActive'}
						/>)
					)
				)}
			</div>
			
			<button className="btn">Добавить</button>
		</div>}
		</div>
	)
}

export default AddList