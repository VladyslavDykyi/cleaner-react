import React, {useEffect, useState, memo, useCallback, useMemo} from "react";

const QuantityRooms = ({onChange}) => {
	
	const [quantityRooms, setQuantityRooms] = useState({
		maxQuantityElem: 6,
		selectId: '',
		parameter: 'numberRooms',
	});
	
	useEffect(() => {
		(() => {
			onChange({
				'quantityRooms': quantityRooms.selectId
			})
		})();
	}, [quantityRooms]);
	
	const handlerChange = useCallback((event) => {
		const selectQuantity = Number(event.target.nextElementSibling.textContent);
		setQuantityRooms({
			...quantityRooms,
			selectId: selectQuantity,
		});
	});
	const handlerChangeInput = useCallback((event) => {
		const selectQuantity = Number(event.target.value);
		
		setQuantityRooms({
			...quantityRooms,
			selectId: selectQuantity,
		});
		if (selectQuantity === 0) {
			setQuantityRooms({
				...quantityRooms,
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
		if (quantityRooms === null) return null;
		return render(quantityRooms);
	}, [quantityRooms]);
	return (
		<section className="calculator-wrapper">
			<h2 className="t-s-bold t-4">
				4. Кількість кімнат
			</h2>
			<div className="numberRooms">
				{renderedServices}
				<label className="input" htmlFor="numberRoomsInput">
					<input type="number"
					       name="numberRoomsInput"
					       id="numberRoomsInput"
					       placeholder="Введіть власноруч, якщо більше"
					       value={quantityRooms.selectId}
					       onChange={handlerChangeInput}
					       onKeyPress={handlerKeyPress}
					/>
				</label>
			</div>
		</section>
	)
};
export default memo(QuantityRooms);