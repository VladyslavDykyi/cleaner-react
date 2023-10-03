import React, {useState, useEffect, memo, useCallback} from "react";

const AddCleaners = ({onClick}) => {
	const [quantityCleaner, setQuantityCleaner] = useState({
		type: "countCleaner",
		quantity: 0,
	});
	
	useEffect(() => {
		(() => {
			onClick(quantityCleaner);
		})();
	}, [quantityCleaner]);
	
	const addCountCleaner = useCallback(() => {
		setQuantityCleaner((prevState) => ({
			...prevState,
			quantity: prevState.quantity + 1,
		}));
	});
	
	const subtractCountCleaner = useCallback(() => {
		if (quantityCleaner.quantity > 0) {
			setQuantityCleaner((prevState) => ({
				...prevState,
				quantity: prevState.quantity - 1,
			}));
		}
	});
	return (
		<section className="calculator-wrapper">
			<h2 className="t-s-bold t-4">
				3. Режим TURBO
			</h2>
			<div className="counter-wrapper">
				<p className="t-s-bold">
					Додати клінерів
				</p>
				<div className="counter">
					<button onClick={subtractCountCleaner} className="back" type="button">
						<i className="bi bi-dash-lg"/>
					</button>
					<label htmlFor={quantityCleaner.type}>
						<input type="number" name={quantityCleaner.type} id={quantityCleaner.type}
						       value={quantityCleaner.quantity}
						       disabled/>
					</label>
					<button onClick={addCountCleaner} className="next" type="button">
						<i className="bi bi-plus-lg"/>
					</button>
				</div>
			</div>
		</section>
	)
}
export default memo(AddCleaners);