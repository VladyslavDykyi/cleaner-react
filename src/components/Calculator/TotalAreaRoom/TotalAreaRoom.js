import React, {useState, useEffect, memo, useCallback, useMemo} from "react";
import Slider from '@mui/material/Slider';
import './TotalAreaRoom.css';
import Services from "../../../services/services";

const TotalAreaRoom = ({onChange,numeration}) => {
	const servicesAreaRoom = new Services;
	const [areaRoom, setAreaRoom] = useState(null);
	const [areaRoomRender, setAreaRoomRender] = useState(null);
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	useEffect(() => {
		(() => {
			if (areaRoom === null) return;
			onChange({
				'areaRoom': areaRoom.value,
			})
		})();
	}, [areaRoom]);
	useEffect(() => {
		(() => {
			getData();
		})();
	}, []);
	const onLoad = (data) => {
		setAreaRoomRender(data);
		setAreaRoom(data);
		setError(false);
		setErrorMessage('Виникла помилка при завантаженні.');
	}
	const onError = () => {
		setError(true);
	}
	const getData = () => {
		servicesAreaRoom.getAreaFloorsAll()
			.then(onLoad)
			.catch(onError);
	}
	
	
	const handleChange = (event, newValue) => {
		setAreaRoom({
			...areaRoom,
			value: newValue,
		});
	}
	const handlerRender = (event, newValue) => {
		setAreaRoomRender({
			...areaRoom,
			value: newValue,
		})
	}
	const handlerChangeInput = useCallback((event) => {
		const newValue = event.target.value;
		
		if (newValue === "" || !isNaN(newValue)) {
			if (newValue < 0) return;
			setAreaRoom(prevState => ({
				...prevState,
				value: newValue === "" ? "" : Number(newValue),
			}));
			setAreaRoomRender(prevState => ({
				...prevState,
				value: newValue === "" ? "" : Number(newValue),
			}));
		}
	}, []);
	const render = (data,render) => {
		return (
			<>
				<Slider
					aria-label="Always visible"
					defaultValue={data.min}
					min={data.min}
					max={data.maxSlider}
					value={render.value}
					onChangeCommitted={handleChange}
					onChange={handlerRender}
					valueLabelDisplay="on"
				/>
				<label className="input" htmlFor="totalSquareFootage">
					<input type="number"
					       name="totalSquareFootage"
					       id="totalSquareFootage"
					       placeholder="Введіть власноруч, якщо більше"
					       value={data.value}
					       onChange={handlerChangeInput}
					/>
				</label>
			</>
		)
	}
	const renderedServices = useMemo(() => {
		if (areaRoom === null) return;
		return render(areaRoom, areaRoomRender);
	}, [areaRoom]);
	return (
		<section className="calculator-wrapper">
			<h2 className="t-s-bold t-4">
				{numeration}. Загальний метраж приміщення
			</h2>
			<div className="numberRooms">
				{error && <p>{errorMessage}</p>}
				{renderedServices}
			</div>
		</section>
	)
}
export default memo(TotalAreaRoom);