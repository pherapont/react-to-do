import React, {useState} from 'react';
import Badge from '../Badge';
import List from './../List'

import axios from 'axios';

import addIcon from './../../assets/img/add.svg'
import closeIcon from './../../assets/img/close.svg'
import './AddList.scss'


const AddList = ({onAdd, colors}) => {
	
	const [visiblePopup, setVisiblePopup] = useState(false)
	const [selectedColor, selectColor] = useState(3)
	const [inputValue, setInputValue] = useState('')

	const onClose = () => {
		setVisiblePopup(false)
		setInputValue('')
		selectColor(colors[0].id)
	}
	
	const addList = () => {
		if( !inputValue ) {
			alert('Введите название списка!')
			return
		}
		const newList = {"name": inputValue, "colorId": selectedColor}
		const color = colors.find(color => color.id === selectedColor)

		axios
			.post('http://localhost:3001/lists', newList)
			.then( response => onAdd( {...response.data, color} ) )

		onClose()
	}

	return (
		<div className="add-list">
		<List
			onClick = {() => setVisiblePopup( true )}
			items={[
			{
				id: 1,
				name: 'Добавить список',
				icon: <img src={addIcon} alt="Добавить список" />,
				className: 'list__add-btn'
			}
		]}
		/>
		{ visiblePopup &&
			<div className="add-list__popup">
				<img
					onClick={onClose}
					src={closeIcon}
					className="add-list__close-btn"
					alt="Закрыть форму"
				/>

				<input
					value={inputValue}
					onChange={e => {setInputValue(e.target.value)}}
					type="text" 
					className="input"
					placeholder="Название папки"
				/>
				
				<div className="add-list__badges">
					{colors.map(color => (
						(<Badge 
							onClick={() => selectColor(color.id)} 
							key={color.id} 
							color={color.name} 
							className={selectedColor === color.id && 'isActive'}
							/>)
						)
					)}
				</div>
				<button onClick={addList} className="btn">Добавить</button>
			</div>
		}
		</div>
	)
}

export default AddList