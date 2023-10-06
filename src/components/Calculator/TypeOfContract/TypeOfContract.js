import {useEffect, useMemo, useState} from "react";
import './TypeOfContract.css';
const TypeOfContract = ({onChange,numeration,onChange2}) => {
	const [cleaning, setCleaning] = useState([
		{
			id: 1,
			select: true,
			type: 'cleaning',
			text: 'Прибирання',
		},
		{
			id: 2,
			select: false,
			type: 'dryCleaning',
			text: 'Хімчистка та додаткові послуги',
		},
	]);
	useEffect(() => {
		(() => {
			if (cleaning === null) return;
			const updatedCleaning = [...cleaning];
			for (const item of updatedCleaning) {
				if (item.select) {
					onChange(item);
					onChange2({});
				}
			}
		})();
	}, [cleaning]);
	const handleChange = (event) => {
		const selectedCleaning = event.target.id;
		const updatedCleaning = cleaning.map((item) => ({
			...item,
			select: item.type === selectedCleaning,
		}));
		setCleaning(updatedCleaning);
	}
	const render = (data) => {
		return (
			data.map(item => (
				<label className="radio-text" htmlFor={item.type} key={item.id}>
					<input
						onChange={handleChange}
						checked={item.select}
						type="radio"
						name={item.type}
						id={item.type}
					/>
					<span>{item.text}</span>
				</label>
			))
		)
	}
	const renderedServices = useMemo(() => {
		if (cleaning === null) return null;
		return render(cleaning);
	}, [cleaning]);
	return (
		<section className="calculator-wrapper">
			<h2 className="t-s-bold t-4">
				{numeration}. Тип замовлення
			</h2>
			<div className="type-cleaning justify-content-start grid-g22">
				{renderedServices}
			</div>
		</section>
	);
}
export default TypeOfContract;