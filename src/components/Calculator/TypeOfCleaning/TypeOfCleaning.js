import React, {useEffect, useState, memo} from 'react';

const TypeOfCleaning = (props) => {
	const [type, setType] = useState([
		{
			type: 'normal',
			select: false,
			content: 'Звичайне',
			parameter: 'type-cleaning',
		},
		{
			type: 'general',
			select: false,
			content: 'Генеральне',
			parameter: 'type-cleaning',
		},
		{
			type: 'afterRepair',
			select: false,
			content: 'Після ремонту',
			parameter: 'type-cleaning',
		},
		{
			type: 'eco',
			select: false,
			content: 'ЕСО',
			parameter: 'type-cleaning',
		},
		{
			type: 'preAfterParty',
			select: false,
			content: 'Pre & AfterParty',
			parameter: 'type-cleaning',
		},
		{
			type: 'dryCleaner',
			select: false,
			content: 'Хімчистка',
			parameter: 'type-cleaning',
		},
	]);
	
	useEffect(() => {
		const updatedType = [...type];
		for (const item of updatedType) {
			if (item.select) {
				props.onChange(item);
			}
		}
	}, [type]);
	
	const handleChange = (event) => {
		const selectedType = event.target.id;
		const updatedType = type.map((item) => ({
			...item,
			select: item.type === selectedType,
		}));
		setType(updatedType);
	};
	const render = (arr) => {
		return (
			arr.map((item) => (
				<label className="radio" htmlFor={item.type} key={item.type}>
					<input
						onChange={handleChange}
						checked={item.select}
						type="radio"
						name={item.parameter}
						id={item.type}
					/>
					<span>{item.content}</span>
				</label>
			))
		);
	}
	return (
		<section className="calculator-wrapper">
			<h2 className="t-s-bold t-4">
				1. Вид прибирання
			</h2>
			<div className="type-cleaning">
				{render(type)}
			</div>
		</section>
	)
}
export default memo(TypeOfCleaning);