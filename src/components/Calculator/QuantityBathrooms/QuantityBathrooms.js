import React, {useEffect, useState, memo, useCallback, useMemo} from "react";
import Services from "../../../services/services";

const QuantityBathrooms = ({onChange,numeration}) => {
	const servicesQuantityBathRooms = new Services;
	const [quantityBathRooms, setQuantityBathRooms] = useState(null);
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	useEffect(() => {
		(() => {
			if (quantityBathRooms === null) return;
			onChange({
				'quantityRooms': quantityBathRooms.selectId
			})
		})();
	}, [quantityBathRooms]);
	useEffect(() => {
		(() => {
			getData();
		})();
	}, []);
	const onLoad = (data) => {
		setQuantityBathRooms(data);
		setError(false);
		setErrorMessage('Виникла помилка при завантаженні.');
	}
	const onError = () => {
		setError(true);
	}
	const getData = () => {
		servicesQuantityBathRooms.getMaxQuantitiesBathrooms()
			.then(onLoad)
			.catch(onError);
	}
	const handlerChange = (event) => {
		if (quantityBathRooms === null) return;
		const selectQuantity = Number(event.target.nextElementSibling.textContent);
		setQuantityBathRooms({
			...quantityBathRooms,
			selectId: selectQuantity,
		});
	}
	const handlerChangeInput = (event) => {
		if (quantityBathRooms === null) return;
		const selectQuantity = Number(event.target.value);
		
		setQuantityBathRooms({
			...quantityBathRooms,
			selectId: selectQuantity,
		});
		if (selectQuantity === 0) {
			setQuantityBathRooms({
				...quantityBathRooms,
				selectId: '',
			});
		}
	};
	
	const handlerKeyPress = (event) => {
		const invalidCharacters = ['e', '+', '-'];
		if (invalidCharacters.includes(event.key)) {
			event.preventDefault();
		}
	};
	
	const render = (obj) => {
		const elems = [];
		for (let i = 1; i <= obj.maxQuantityElem; i++) {
			elems.push(<label className="radio-text" htmlFor={obj.parameter + i} key={obj.parameter + i}>
				<input type="radio"
				       name={obj.parameter}
				       id={obj.parameter + i}
				       checked={obj.selectId === i}
				       onChange={handlerChange}
				/>
				<span>{i}</span>
			</label>);
		}
		return elems;
	}
	const renderInput = () => {
		return (
			<label className="input" htmlFor="numberRoomsInput">
				<input type="number"
				       name="numberRoomsInput"
				       id="numberRoomsInput"
				       placeholder="Введіть власноруч, якщо більше"
				       min='0'
				       value={quantityBathRooms.selectId}
				       onChange={handlerChangeInput}
				       onKeyPress={handlerKeyPress}
				/>
			</label>
		)
	}
	const renderedServicesInput = useMemo(() => {
		if (quantityBathRooms === null) return;
		return renderInput();
	}, [quantityBathRooms]);
	const renderedServices = useMemo(() => {
		if (quantityBathRooms === null) return;
		return render(quantityBathRooms);
	}, [quantityBathRooms]);
	return (
		<section className="calculator-wrapper">
			<h2 className="t-s-bold t-4">
				{numeration}. Кількість санвузлів
			</h2>
			<div className="numberRooms">
				{error && <p>{errorMessage}</p>}
				{renderedServices}
				{renderedServicesInput}
			</div>
		</section>
	)
}
export default memo(QuantityBathrooms);