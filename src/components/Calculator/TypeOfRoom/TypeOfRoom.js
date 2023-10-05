import React, {useState, useEffect, memo, useCallback, useMemo} from "react";
import Services from "../../../services/services";

const TypeOfRoom = ({onChange,numeration}) => {
	const servicesTypeRoom = new Services;
	const [type, setType] = useState(null);
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	
	useEffect(() => {
		(() => {
			if (type === null) return;
			const updatedType = [...type];
			for (const item of updatedType) {
				if (item.select) {
					onChange(item);
				}
			}
		})();
	}, [type]);
	useEffect(() => {
		(() => {
			getData();
		})();
	}, []);
	const onLoad = (data) => {
		setType(data);
		setError(false);
		setErrorMessage('Виникла помилка при завантаженні.');
	}
	const onError = () => {
		setError(true);
	}
	const getData = () => {
		servicesTypeRoom.getRoomTypesAll()
			.then(onLoad)
			.catch(onError);
	}
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
	const renderedServices = useMemo(() => {
		if (type === null) return null;
		return render(type);
	}, [type]);
	return (
		<section className="calculator-wrapper">
			<h2 className="t-s-bold t-4">
				{numeration}. Тип приміщення
			</h2>
			<div className="rooms">
				{error && <p>{errorMessage}</p>}
				{renderedServices}
			</div>
		</section>
	);
}
export default memo(TypeOfRoom);