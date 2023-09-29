import React, {useState, useEffect, memo, useCallback} from "react";
import Slider from '@mui/material/Slider';
import './TotalAreaRoom.css';

const TotalAreaRoom = ({onChange}) => {
	const [areaRoom, setAreaRoom] = useState({
		min: 0,
		maxSlider: 200,
		value: 0,
		calcAreaPrice: [
			{
				area: 25,
				valueGreater25: 1000,
			},
			{
				area: 45,
				valueGreater45: 1600,
			},
			{
				area: 70,
				valueGreater70: 2000,
			},
			{
				area: 90,
				valueGreater90: 2300,
			},
			{
				area: 110,
				valueGreater110: 2600,
			},
			{
				area: 130,
				valueGreater130: 2900,
			},
			{
				area: 150,
				valueGreater150: 3200,
			},
			{
				area: 170,
				valueGreater170: 3500,
			},
			{
				area: 190,
				valueGreater190: 3800,
			},
			{
				area: 210,
				valueGreater210: 4100,
			},
			{
				area: 230,
				valueGreater230: 4400,
			},
			{
				area: 250,
				valueGreater250: 4700,
			},
			{
				area: 270,
				valueGreater270: 5000,
			},
			{
				area: 290,
				valueGreater290: 5300,
			},
			{
				area: 310,
				valueGreater310: 5600,
			},
		],
	});
	const [areaRoomRender, setAreaRoomRender] = useState({
		min: 0,
		maxSlider: 200,
		value: 0,
	});
	useEffect(() => {
		(() => {
			const obj = {...areaRoom};
			const valueGreater = (data) => {
				let resultValueGreater;
				if(data.value <= 25) {
				
				}
				return resultValueGreater;
			}
			onChange({
				'areaRoom': obj.value,
				'areaGreater': valueGreater(obj),
			})
		})();
	}, [areaRoom]);
	
	const handleChange = useCallback((event, newValue) => {
		setAreaRoom({
			...areaRoom,
			value: newValue,
		});
	}, []);
	const handlerRender = useCallback((event, newValue) => {
		setAreaRoomRender({
			...areaRoom,
			value: newValue,
		})
	}, [])
	const handlerChangeInput = useCallback((event) => {
		const newValue = Number(event.target.value);
		if (newValue !== areaRoom.value) {
			setAreaRoom({
				...areaRoom,
				value: newValue,
			});
			setAreaRoomRender({
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
	}, []);
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
					value={areaRoomRender.value}
					onChangeCommitted={handleChange}
					onChange={handlerRender}
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
					       onKeyDown={handlerKeyPress}
					/>
				</label>
			</div>
		</section>
	)
}
export default memo(TotalAreaRoom);