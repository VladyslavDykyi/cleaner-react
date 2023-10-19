import React, { useState, useEffect, memo, useCallback, useMemo } from "react";
import Slider from "@mui/material/Slider";
import "./TotalAreaRoom.css";
import Services from "../../../services/services";

const TotalAreaRoom = ({ onChange, numeration }) => {
	const servicesAreaRoom = new Services();
	const [areaRoom, setAreaRoom] = useState(null);
	const [areaRoomRender, setAreaRoomRender] = useState(null);
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	
	useEffect(() => {
		if (areaRoom === null) return;
		onChange({
			areaRoom: Math.max(areaRoom.value, areaRoomRender.value),
		});
	}, [areaRoom, areaRoomRender, onChange]);
	
	useEffect(() => {
		getData();
	}, []);
	const onLoad = (data) => {
		setAreaRoomRender(data);
		setAreaRoom(data);
		setError(false);
		setErrorMessage("Виникла помилка при завантаженні.");
	};
	
	const onError = () => {
		setError(true);
	};
	
	const getData = () => {
		servicesAreaRoom
			.getAreaFloorsAll()
			.then(onLoad)
			.catch(onError);
	};
	
	const handleChangeSlider = (event, newValue) => {
		setAreaRoom({
			...areaRoom,
			value: newValue,
		});
	};
	
	const handleChangeInput = useCallback(
		(event) => {
			const newValue = Number(event.target.value);
			if (newValue !== areaRoomRender.value) {
				setAreaRoomRender({
					...areaRoomRender,
					value: newValue,
				});
			}
		},
		[areaRoomRender]
	);
	const renderedServices = useMemo(() => {
		if (areaRoom === null) return;
		return (
			<>
				<Slider
					aria-label="Always visible"
					defaultValue={areaRoom.min}
					min={areaRoom.min}
					max={areaRoom.maxSlider}
					value={areaRoom.value}
					onChange={handleChangeSlider}
					valueLabelDisplay="on"
				/>
				<label className="input" htmlFor="totalSquareFootage">
					<input
						type="text"
						name="totalSquareFootage"
						id="totalSquareFootage"
						placeholder="Введіть власноруч, якщо більше"
						onChange={handleChangeInput}
					/>
				</label>
			</>
		);
	});
	
	return (
		<section className="calculator-wrapper">
			<h2 className="t-s-bold t-4">
				{numeration}. Загальний метраж приміщення
			</h2>
			<div className="numberRooms area">
				{error && <p>{errorMessage}</p>}
				{renderedServices}
			</div>
		</section>
	);
};

export default memo(TotalAreaRoom);
