import {useEffect, useState, memo, useMemo, useCallback} from 'react';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterLuxon} from '@mui/x-date-pickers/AdapterLuxon';
import {DateCalendar} from '@mui/x-date-pickers/DateCalendar';
import {DateTime, Settings} from 'luxon';

import './DataOfTime.css';

Settings.defaultLocale = 'uk';

const DataOfTime = ({onChangeTime, onChangeData,numeration}) => {
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
	const [data, setData] = useState(DateTime.now().toISODate());
	useEffect(() => {
		(() => {
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
		})();
	}, [time, data]);
	const handlerCheckData = useCallback((newValue) => setData(newValue));
	const handlerCheck = useCallback((event) => {
		const selectedTime = event.target.nextElementSibling.textContent;
		const updatedTime = time.map((item) => ({
			...item,
			select: item.time === selectedTime,
		}));
		setTime(updatedTime);
	})
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
	const renderedServices = useMemo(() => {
		if (time === null) return null;
		return render(time);
	}, [time]);
	const theme = createTheme({
		components: {
			MuiDateCalendar: {
				styleOverrides: {
					root: {
						width: '100%',
						height: '100%',
						maxHeight: '100%',
					},
				},
			},
			MuiDayCalendar: {
				styleOverrides: {
					header: {},
					weekDayLabel: {
						width: '64px',
						height: '64px',
						fontSize: '16px',
						color: '#83b100',
						fontWeight: '700',
						fontFamily: 'Mulish',
					},
					slideTransition: {
						overflowX: 'visible',
					},
				},
			},
			MuiPickersDay: {
				styleOverrides: {
					root: {
						width: '64px',
						height: '64px',
						fontSize: '16px',
						color: '#454545',
						fontWeight: '500',
						borderRadius: '16px',
						border: '1px solid #83b100',
					},
				},
			},
			MuiPickersCalendarHeader: {
				styleOverrides: {
					labelContainer: {
						fontSize: '22px',
						color: '#454545',
						fontWeight: '500',
						cursor: 'auto',
					},
				},
			},
			MuiSvgIcon: {
				styleOverrides: {
					root: {
						fill: '#83b100',
					},
				}
			}
		},
	});
	return (
		<section className="calculator-wrapper">
			<h2 className="t-s-bold t-4">
				{numeration}. Дата та час
			</h2>
			<div className="calendar-time">
				<div className="calendar-pick">
					<LocalizationProvider dateAdapter={AdapterLuxon} adapterLocale='uk'>
						<ThemeProvider theme={theme}>
							<DateCalendar onChange={handlerCheckData} views={['day']}/>
						</ThemeProvider>
					</LocalizationProvider>
				</div>
				<div className="time-pick">
					{renderedServices}
				</div>
			</div>
		</section>
	);
}

export default memo(DataOfTime);