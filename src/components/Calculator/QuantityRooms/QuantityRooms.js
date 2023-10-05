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
		const updatedType = quantityRooms.map((item) => ({
			...item,
			select: item.type === selectedType,
		}));
		const a = updatedType.filter(item => item.select=== true);
		setFinalValue(a[0]);
		setQuantityRooms(updatedType);
	};
	const handlerChangeInput = (event) => {
		const selectQuantity = Number(event.target.value);
		const newRoom = {
			id: selectQuantity,
			type: `room${selectQuantity}`,
			name: "numberRooms",
			select: true,
			quantityRooms: selectQuantity,
			minAreaM2: quantityRooms.at(-1).minAreaM2,
		};
		setFinalValue   (newRoom);
	};
	
	const handlerKeyPress = (event) => {
		const invalidCharacters = ['e', '+', '-'];
		if (invalidCharacters.includes(event.key)) {
			event.preventDefault();
		}
	};
	const render = (quantityRooms) => {
		return (
			quantityRooms.map(item => (
				<label className="radio-text" htmlFor={item.type} key={item.type}>
					<input type="radio"
					       name={item.name}
					       id={item.type}
					       checked={item.select}
					       onChange={handlerChange}
					/>
					<span>{item.id}</span>
				</label>
			)));
	}
	const renderInput = () => {
		return (
			<label className="input" htmlFor="numberRoomsInput">
				<input type="number"
				       name="numberRoomsInput"
				       id="numberRoomsInput"
				       min='0'
				       placeholder="Введіть власноруч, якщо більше"
				       value={quantityRooms.selectId}
				       onChange={handlerChangeInput}
				       onKeyPress={handlerKeyPress}
				/>
			</label>
		)
	}
	const renderedServicesInput = useMemo(() => {
		if (quantityRooms === null) return '';
		return renderInput();
	}, [quantityRooms]);
	const renderedServices = useMemo(() => {
		if (quantityRooms === null) return '';
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
	)
};
export default memo(QuantityRooms);