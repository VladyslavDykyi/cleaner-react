import React, {useState, useEffect, memo, useCallback} from "react";
import Slider from '@mui/material/Slider';
import './TotalAreaRoom.css';

const TotalAreaRoom = ({onChange}) => {
	const [areaRoom, setAreaRoom] = useState({
		min: 0,
		maxSlider: 200,
		value: 0,
	});
	useEffect(() => {
		(() => {
			onChange({
				'areaRoom': areaRoom.value
			})
		})();
	}, [areaRoom]);
	const handleChange = useCallback((event, newValue) => {
		setAreaRoom({
			...areaRoom,
			value: newValue,
		});
	});
	const handlerChangeInput = useCallback((event) => {
		const newValue = Number(event.target.value);
		if (newValue !== areaRoom.value) {
			setAreaRoom({
				...areaRoom,
				value: newValue,
			});
		}
	}, [areaRoom]);
	const handlerKeyPress = useCallback((event) => {
		const invalidCharacters = ['e', '+', '-'];
		if (invalidCharacters.includes(event.key)) {
			event.preventDefault();
		}
	});
	return (
		<section className="calculator-wrapper">
			<h2 className="t-s-bold t-4">
				6. Загальний метраж приміщення
			</h2>
			<div className="numberRooms">
				<Slider
					aria-label="Always visible"
					defaultValue={areaRoom.min}
					min={areaRoom.min}
					max={areaRoom.maxSlider}
					value={areaRoom.value}
					onChange={handleChange}
					valueLabelDisplay="on"
				/>
				<label className="input" htmlFor="totalSquareFootage">
					<input type="number"
					       name="totalSquareFootage"
					       id="totalSquareFootage"
					       min={areaRoom.min}
					       placeholder="Введіть власноруч, якщо більше"
					       value={areaRoom.value || ''}
					       onChange={handlerChangeInput}
					       onKeyPress={handlerKeyPress}
					/>
				</label>
			</div>
		</section>
	)
}
export default memo(TotalAreaRoom);