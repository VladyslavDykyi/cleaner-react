import React, {useState,useEffect} from "react";

const TypeOfRoom = (props) => {
	const [type, setType] = useState([
		{
			type: 'apartment',
			select: false,
			content: 'Квартира',
			parameter: 'rooms',
		},
		{
			type: 'house',
			select: false,
			content: 'Будинок',
			parameter: 'rooms',
		},
		{
			type: 'apartmentForDailyRent',
			select: false,
			content: 'Квартира в оренді подобово',
			parameter: 'rooms',
		},
		{
			type: 'office',
			select: false,
			content: 'Офіс',
			parameter: 'rooms',
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
				<label className="radio-text" htmlFor={item.type} key={item.type}>
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
				3. Тип приміщення
			</h2>
			<div className="rooms">
				{render(type)}
			</div>
		</section>
	);
}
export default TypeOfRoom;