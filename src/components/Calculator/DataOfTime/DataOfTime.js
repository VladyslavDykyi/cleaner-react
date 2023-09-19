import React, {useEffect, useState} from 'react';



import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterLuxon} from '@mui/x-date-pickers/AdapterLuxon';
import {DateCalendar} from '@mui/x-date-pickers/DateCalendar';
import {DateTime, Settings} from 'luxon';

Settings.defaultLocale = 'uk';

const DataOfTime = ({onChangeTime, onChangeData}) => {
	const [time, setTime] = useState([
		{
			id: 1,
			time: '9:00',
			name: 'time',
			select: true,
		},
		{
			id: 2,
			time: '9:30',
			name: 'time',
			select: false,
		},
		{
			id: 3,
			time: '10:00',
			name: 'time',
			select: false,
		},
		{
			id: 4,
			time: '10:30',
			name: 'time',
			select: false,
		},
		{
			id: 5,
			time: '11:00',
			name: 'time',
			select: false,
		},
		{
			id: 6,
			time: '11:30',
			name: 'time',
			select: false,
		},
		{
			id: 7,
			time: '12:00',
			name: 'time',
			select: false,
		},
		{
			id: 8,
			time: '12:30',
			name: 'time',
			select: false,
		},
		{
			id: 9,
			time: '13:00',
			name: 'time',
			select: false,
		},
		{
			id: 10,
			time: '13:30',
			name: 'time',
			select: false,
		},
		{
			id: 11,
			time: '14:00',
			name: 'time',
			select: false,
		},
		{
			id: 12,
			time: '14:30',
			name: 'time',
			select: false,
		},
		{
			id: 13,
			time: '15:00',
			name: 'time',
			select: false,
		},
		{
			id: 14,
			time: '15:30',
			name: 'time',
			select: false,
		},
		{
			id: 15,
			time: '16:00',
			name: 'time',
			select: false,
		},
		{
			id: 16,
			time: '16:30',
			name: 'time',
			select: false,
		},
		{
			id: 17,
			time: '17:00',
			name: 'time',
			select: false,
		},
		{
			id: 18,
			time: '17:30',
			name: 'time',
			select: false,
		},
		{
			id: 19,
			time: '18:00',
			name: 'time',
			select: false,
		},
		{
			id: 20,
			time: '18:30',
			name: 'time',
			select: false,
		},
		{
			id: 21,
			time: '19:00',
			name: 'time',
			select: false,
		}
	]);
	const [data, setData] = React.useState(DateTime.now().toISODate());
	useEffect(() => {
		const updatedTime = [...time];
		for (const item of updatedTime) {
			if (item.select) {
				onChangeTime(item);
			}
		}
		onChangeData(
			DateTime.fromISO(data)
				.toLocaleString({
						day: 'numeric',
						month: 'long',
						year: 'numeric'
					}
				));
	}, [time, data]);
	const handlerCheckData = (newValue) => setData(newValue);
	const handlerCheck = (event) => {
		const selectedTime = event.target.nextElementSibling.textContent;
		const updatedTime = time.map((item) => ({
			...item,
			select: item.time === selectedTime,
		}));
		setTime(updatedTime);
	}
	const render = (arr) => {
		return (
			arr.map(item => (
				<label className="radio-text" htmlFor={item.name + item.id} key={item.id}>
					<input type="radio" onChange={handlerCheck} name={item.name} id={item.name + item.id}/>
					<span>{item.time}</span>
				</label>
			))
		);
	}
	return (
		<section className="calculator-wrapper">
			<h2 className="t-s-bold t-4">
				10. Дата та час
			</h2>
			<div className="calendar-time">
				<div className="calendar-pick">
					<LocalizationProvider dateAdapter={AdapterLuxon} adapterLocale='uk'>
							{/*<DateCalendar onChange={handlerCheckData}/>*/}
						<DateCalendar onChange={handlerCheckData} />
					</LocalizationProvider>
				</div>
				<div className="time-pick">
					{render(time)}
				</div>
			</div>
		</section>
	);
}

export default DataOfTime;