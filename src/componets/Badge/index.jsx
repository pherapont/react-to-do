import React from 'react';
import './Badge.scss';
import classNames from 'classnames';

const Badge = ({color, onClick, className}) => {
	return (
		<i onClick={onClick} className={`badge badge--${color.name} ${className}` }></i>
	);
};

export default Badge;