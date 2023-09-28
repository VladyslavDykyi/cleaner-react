import React, {useEffect, useState, memo, useCallback, useMemo} from "react";

const QuantityBathrooms = ({onChange}) => {
	
	const [quantityBathRooms, setQuantityBathRooms] = useState({
		maxQuantityElem: 6,
		selectId: '',
		parameter: 'numberBathRooms',
	});
	useEffect(() => {
		(() => {
			onChange({
				'quantityRooms': quantityBathRooms.selectId
			})
		})();
	}, [quantityBathRooms]);
	
	const handlerChange = useCallback((event) => {
		const selectQuantity = Number(event.target.nextElementSibling.textContent);
		setQuantityBathRooms({
			...quantityBathRooms,
			selectId: selectQuantity,
		});
	})
	const handlerChangeInput = useCallback((event) => {
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
	});
	
	const handlerKeyPress = useCallback((event) => {
		const invalidCharacters = ['e', '+', '-'];
		if (invalidCharacters.includes(event.key)) {
			event.preventDefault();
		}
	});
	
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
	const renderedServices = useMemo(() => {
		if (quantityBathRooms === null) return null;
		return render(quantityBathRooms);
	}, [quantityBathRooms]);
	return (
		<section className="calculator-wrapper">
			<h2 className="t-s-bold t-4">
				5. Кількість санвузлів
			</h2>
			<div className="numberRooms">
				{renderedServices}
				<label className="input" htmlFor="numberRoomsInput">
					<input type="number"
					       name="numberRoomsInput"
					       id="numberRoomsInput"
					       placeholder="Введіть власноруч, якщо більше"
					       value={quantityBathRooms.selectId}
					       onChange={handlerChangeInput}
					       onKeyPress={handlerKeyPress}
					/>
				</label>
			</div>
		</section>
	)
}
export default memo(QuantityBathrooms);