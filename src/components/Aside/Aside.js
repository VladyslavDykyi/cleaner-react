import {useState, useMemo, useEffect} from "react";
import Services from "../../services/services";
import MyCalculator from "./calculatorFunc";

const Aside = ({
	               typeOfContract,
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
	const settingsCalc = new Services;
	const [settings, setSettings] = useState(null);
	const [price, setPrice] = useState('');
	useEffect(() => {
		(() => {
			getData();
		})();
	}, []);
	useEffect(() => {
		(() => {
			setPrice(
				(typeOfContract.type === 'dryCleaning') ?
					funcCalcAdditionalDry(
						additionalOfServices
					) : funcCalc(
						areaOfRoom.areaRoom,
						quantityOfCleaner.quantity,
						settings,
						quantityOfRooms,
						additionalOfServices
					)
			);
		})();
	}, [
		areaOfRoom,
		quantityOfCleaner,
		quantityOfRooms,
		settings,
		additionalOfServices,
		typeOfContract,
	]);
	const onLoad = (data) => {
		setSettings(data);
	}
	const onError = () => {
		throw new Error('Error Api');
	}
	const getData = () => {
		settingsCalc.getCalculatorSettingsAll()
			.then(onLoad)
			.catch(onError);
	}
	const funcCalcAdditionalDry = (additionalOfServices) => {
		if ( !additionalOfServices.length) return '';
		const calc = new MyCalculator;
		return calc.sumPriceAdditional(additionalOfServices);
	}
	const funcCalc = (
		areaOfRoom,
		quantityOfCleaner,
		settingsObj,
		quantityRooms,
		additionalOfServices
	) => {
		if (settingsObj === null) return '';
		const {priceTime, discountAdditional} = settingsObj;
		const keys = Object.keys(priceTime)
			.map(item => Number(item))
			.reverse();
		const calc = new MyCalculator;
		for (let i = 0; i < keys.length; i++) {
			const {
				defaultPrice,
				step,
				timeCleaning,
				timePrice
			} = priceTime[keys[i]];
			if (+quantityRooms.minAreaM2 > areaOfRoom &&
				keys[i] === +quantityRooms.minAreaM2) {
				if ( !additionalOfServices.length && quantityOfCleaner === 0) {
					return +defaultPrice;
				}
				return +defaultPrice +
					calc.sumPriceAdditional(additionalOfServices,discountAdditional) +
					calc.priceDopCleaners(800, quantityOfCleaner);
			}
			if (keys[i] <= areaOfRoom) {
				return calc.cleaningDefault2(
					+defaultPrice,
					keys[i],
					quantityOfCleaner,
					800,
					+step,
					+areaOfRoom,
					additionalOfServices,
					discountAdditional
				);
			}
		}
		return '';
	}
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
		if (typeOfCleaning === null && typeOfCleaning === '') return null;
		if (typeOfRoom === null && typeOfRoom === '') return null;
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
	const renderQuantityBathroom = (content, text, texts) => {
		if (content.quantityRooms === undefined || content.quantityRooms === '' || content.quantityRooms === null) return '';
		return (
			<li className="aside-list-item">
				{(content.quantityRooms > 4 ? `${content.quantityRooms} ${text}` : `${content.quantityRooms} ${texts}`)}
			</li>
		)
	}
	const renderQuantityRoom = (content, text, texts) => {
		if (content.id === undefined) return null;
		return (
			<li className="aside-list-item">
				{(content.id > 4 ? `${content.id} ${text}` : `${content.id} ${texts}`)}
			</li>
		);
	}
	const renderedServicesQuantityRoom = useMemo(() => {
		if (quantityOfRooms === null) return '';
		if (quantityOfBathroom === null) return '';
		return {
			room: renderQuantityRoom(quantityOfRooms, 'кімнат', 'кімнати'),
			bathroom: renderQuantityBathroom(quantityOfBathroom, 'санвузлів', 'санвузла'),
		};
	}, [quantityOfRooms, quantityOfBathroom]);
	const renderQuantityCleaner = (obj) => {
		return (
			<span>
				{obj.quantity} доп. працівника
			</span>
		)
	}
	const renderedServicesQuantityCleaner = useMemo(() => {
		if (quantityOfCleaner === null) return null;
		return renderQuantityCleaner(quantityOfCleaner);
	}, [quantityOfCleaner]);
	const typeAside = (typeOfContract.type === 'dryCleaning') ? (<aside className="col-md-3">
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
				<i className="bi bi-arrow-repeat"/>
				<span>
					одноразове прибирання
				</span>
			</p>
			<h3 className="aside-title t-bold t-5">
				До сплати:
				<span className="aside-prise t-e-bold t-3">
					 {` ${price} грн`}
				</span>
			</h3>
			<p className="aside-min-price t-bold t-7">
				{price < 1000 ? '*МІНІМАЛЬНА сума замовлення 1000 грн' : ''}
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
	</aside>) : (<aside className="col-md-3">
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
					 {` ${price} грн`}
				</span>
			</h3>
			<p className="aside-min-price t-bold t-7">
				{price < 1000 ? '*МІНІМАЛЬНА сума замовлення 1000 грн' : ''}
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
	</aside>);
	return (
		typeAside
	);
}
Aside.defaultProps = {
	typeOfContract: {
		type: 'cleaning',
	},
	typeOfCleaning: '',
	typeOfRoom: '',
	quantityOfCleaner: 0,
	quantityOfRooms: '',
	quantityOfBathroom: null,
	areaOfRoom: 0,
	additionalOfServices: null,
	orderOfDryCleaning: null,
	laundryOfServices: null,
	data: '',
	time: '',
	contactAndAddress: null,
}
export default Aside;