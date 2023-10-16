import React, {useEffect, useState, memo, useCallback, useMemo} from "react";
import Services from "../../../services/services";

const QuantityRooms = ({onChange,numeration}) => {
	const servicesQuantityRooms = new Services;
	const [quantityRooms, setQuantityRooms] = useState(null);
	const [finalValue,setFinalValue] = useState(null);
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	useEffect(() => {
		(() => {
			if (finalValue === null) return;
			onChange(finalValue);
		})();
	}, [finalValue]);
	useEffect(() => {
		(() => {
			getData();
		})();
	}, []);
	const onLoad = (data) => {
		setQuantityRooms(data);
		setError(false);
		setErrorMessage('Виникла помилка при завантаженні.');
	}
	const onError = () => {
		setError(true);
	}
	const getData = () => {
		servicesQuantityRooms.getMaxQuantitiesRooms()
			.then(onLoad)
			.catch(onError);
	}
	const handlerChange = (event) => {
		const selectedType = event.target.id;
		const updatedQuantityRooms = quantityRooms.map((item) => ({
			...item,
			select: item.type === selectedType,
		}));
		
		setQuantityRooms(updatedQuantityRooms);
		// Передайте выбранное значение в родительский компонент
		const selectedRoom = updatedQuantityRooms.find((item) => item.select);
		setFinalValue(selectedRoom)
	};
	const handlerChangeInput = (event) => {
		const selectQuantity = Number(event.target.value);
		if(!isNaN(selectQuantity) && selectQuantity ) {
			const updatedQuantityRooms = quantityRooms.map((item) => ({
				...item,
				select: item.id === selectQuantity,
			}));
			setFinalValue({
				"id": selectQuantity,
				"type": `room${selectQuantity}`,
				"select": true,
				minAreaM2: quantityRooms.find((item) => item.id === selectQuantity)
					? quantityRooms.find((item) => item.id === selectQuantity).minAreaM2
					: quantityRooms.at(-1).minAreaM2,
			})
			setQuantityRooms(updatedQuantityRooms);
		}
	};
	const render = (quantityRooms) => {
		return quantityRooms.map((item) => (
			<label className="radio-text" htmlFor={item.type} key={item.type}>
				<input
					type="radio"
					name={item.name}
					id={item.type}
					checked={item.select}
					onChange={handlerChange}
				/>
				<span>{item.id}</span>
			</label>
		));
	};
	const renderInput = () => {
		return (
			<label className="input" htmlFor="numberRoomsInput">
				<input
					type="number"
					name="numberRoomsInput"
					id="numberoomsInput"
					placeholder="Введіть власноруч, якщо більше"
					value={finalValue ? finalValue.id : ''}
					onChange={handlerChangeInput}
				/>
			</label>
		);
	};
	
	const renderedServicesInput = useMemo(() => {
		if (quantityRooms === null) return;
		return renderInput();
	}, [quantityRooms]);
	
	const renderedServices = useMemo(() => {
		if (quantityRooms === null) return;
		return render(quantityRooms);
	}, [quantityRooms]);
	
	return (
		<section className="calculator-wrapper">
			<h2 className="t-s-bold t-4">
				{numeration}. Кількість кімнат
			</h2>
			<div className="numberRooms">
				{error && <p>{errorMessage}</p>}
				{renderedServices}
				{renderedServicesInput}
			</div>
		</section>
	);
};

export default QuantityRooms;