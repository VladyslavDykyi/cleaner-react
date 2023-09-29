import {memo, useMemo} from "react";

const Aside = ({
	               typeOfRoom,
	               typeOfCleaning,
	               quantityOfCleaner,
	               quantityOfRooms,
	               quantityOfBathroom,
	               areaOfRoom,
	               additionalOfServices,
	               orderOfDryCleaning,
	               laundryOfServices,
	               data,
	               time,
	               contactAndAddress,
               }) => {
	console.log('3.2');
	console.log(orderOfDryCleaning, 'orderOfDryCleaning');
	console.log(contactAndAddress);
	const renderAdditionalServices = (content) => {
		return (
			<ul className="aside-list">
				{content.map(item => (
					<li className="aside-list-item" key={item.id}>
						{item.text} {item.guantityKilograms || ''} {item.measurement}
					</li>
				))}
			</ul>
		);
	}
	const renderedServicesAdditionalServices = useMemo(() => {
		if (additionalOfServices === null) return;
		return renderAdditionalServices(additionalOfServices);
	}, [additionalOfServices]);
	const renderOrderDryCleaning = (content) => {
		return (
			<ul className="aside-list">
				{content.map(item => (
					<li className="aside-list-item" key={item.id}>
						{item.text} {item.guantityKilograms || ''} {item.measurement}
					</li>
				))}
			</ul>
		);
	}
	const renderedServicesOrderDryCleaning = useMemo(() => {
		if (orderOfDryCleaning === null) return;
		return renderOrderDryCleaning(orderOfDryCleaning);
	}, [orderOfDryCleaning]);
	const renderListLaundry = (content) => {
		if (content === null) return;
		return (
			<ul className="aside-list">
				{content.map(item => (
					<li className="aside-list-item" key={item.id}>
						{`${item.text} (${item.guantityKilograms || ''} ${item.measurement})`}
					</li>
				))}
			</ul>
		);
	}
	const renderedServicesListLaundry = useMemo(() => {
		console.log(laundryOfServices, 'laundryOfServices')
		if (laundryOfServices === null) return;
		return renderListLaundry(laundryOfServices);
	}, [laundryOfServices]);
	const renderData = (content) => {
		return (
			<span>
				{content}
			</span>
		);
	}
	const renderedServicesData = useMemo(() => {
		if (data === null) return null;
		return renderData(data);
	}, [data]);
	const renderTime = (content) => {
		return (
			<span>
				{content.time}
			</span>
		);
	}
	const renderedServicesTime = useMemo(() => {
		if (time === null) return null;
		return renderTime(time);
	}, [time]);
	const renderElem = ({content}) => {
		if ( !content) return;
		return (
			<li className="aside-list-item">
				{content}
			</li>
		);
	}
	const renderedServicesElem = useMemo(() => {
		if (typeOfCleaning === null) return null;
		if (typeOfRoom === null) return null;
		return {
			cleaning: renderElem(typeOfCleaning),
			room: renderElem(typeOfRoom),
		};
	}, [typeOfCleaning, typeOfRoom]);
	const renderAreaRoom = (content) => {
		return (
			<li className="aside-list-item">
				{content.areaRoom} м2
			</li>
		);
	}
	const renderedServicesAreaRoom = useMemo(() => {
		if (areaOfRoom === null) return null;
		return renderAreaRoom(areaOfRoom);
	}, [areaOfRoom]);
	const renderQuantityRoom = (content, text, texts) => {
		if ( !content.quantityRooms) return;
		return (
			<li className="aside-list-item">
				{(content.quantityRooms > 4 ? `${content.quantityRooms} ${text}` : `${content.quantityRooms} ${texts}`)}
			</li>
		);
	}
	const renderedServicesQuantityRoom = useMemo(() => {
		if (quantityOfRooms === null) return null;
		if (quantityOfBathroom === null) return null;
		return {
			room: renderQuantityRoom(quantityOfRooms, 'кімнат', 'кімнати'),
			bathroom: renderQuantityRoom(quantityOfBathroom, 'санвузлів', 'санвузла'),
		};
	}, [quantityOfRooms, quantityOfBathroom]);
	const renderQuantityCleaner = (obj) => {
		return (
			<span>
				{obj.quantity} працівника
			</span>
		)
	}
	const renderedServicesQuantityCleaner = useMemo(() => {
		if (quantityOfCleaner === null) return null;
		return renderQuantityCleaner(quantityOfCleaner);
	}, [quantityOfCleaner]);
	return (
		<aside className="col-md-3">
			<div className="aside">
				<h3 className="aside-title t-bold t-5">Ви обрали:</h3>
				<p className="aside-wrapper">
					<i className="bi bi-calendar"/>
					{renderedServicesData}
				</p>
				<p className="aside-wrapper">
					<i className="bi bi-clock"/>
					{renderedServicesTime}
				</p>
				<ul className="aside-list">
					{renderedServicesElem.cleaning}
					{renderedServicesElem.room}
					{renderedServicesQuantityRoom.room}
					{renderedServicesQuantityRoom.bathroom}
					{renderedServicesAreaRoom}
				</ul>
				<h3 className="aside-title t-s-bold t-5">
					Додаткові послуги:
				</h3>
				{renderedServicesAdditionalServices}
				<h3 className="aside-title t-s-bold t-5">
					Хімчистка:
				</h3>
				{renderedServicesOrderDryCleaning}
				<h3 className="aside-title t-s-bold t-5">
					Прання:
				</h3>
				{renderedServicesListLaundry}
				<p className="aside-wrapper">
					<i className="bi bi-clock"/>
					<span>
						≈ 4 год 30 хв
					</span>
				</p>
				<p className="aside-wrapper">
					<i className="bi bi-people"/>
					{renderedServicesQuantityCleaner}
				</p>
				<p className="aside-wrapper">
					<i className="bi bi-arrow-repeat"/>
					<span>
						одноразове прибирання
					</span>
				</p>
				<h3 className="aside-title t-bold t-5">
					До сплати:
					<span className="aside-prise t-e-bold t-3">
						 1739 грн
					</span>
				</h3>
				<p className="aside-min-price t-bold t-7">
					*МІНІМАЛЬНА сума замовлення 1000 грн
				</p>
				<label className="my-checkbox" htmlFor="checkbox">
					<input className="visually-hidden" type="checkbox" name="politick" id="checkbox"/>
					<span className="t-8">
						Я приймаю
						<a href="#">Політику</a>
						та
						<a href="#">Умови використання</a>
						даним сайтом та послугами
					</span>
				</label>
				<button className="btn btn-pink" type="button">
					Замовити Чистоту
				</button>
			</div>
		</aside>
	);
}
Aside.defaultProps = {
	typeOfCleaning: null,
	typeOfRoom: null,
	quantityOfCleaner: 1,
	quantityOfRooms: null,
	areaOfRoom: null,
	additionalOfServices: null,
	orderOfDryCleaning: null,
	laundryOfServices: null,
	data: '',
	time: '',
	contactAndAddress: null,
}
export default memo(Aside);