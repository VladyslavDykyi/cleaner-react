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
	const [priceTime, setPriceTime] = useState({
		price: '',
		timeWorkMin: 0,
	});
	const [processingPersonalData, setProcessingPersonalData] = useState(false);
	const handlerChange = () => setProcessingPersonalData((prevValue) => !prevValue);
	useEffect(() => {
		(() => {
			getData();
		})();
	}, []);
	useEffect(() => {
		(() => {
			setPriceTime((typeOfContract.type === 'dryCleaning') ?
				funcCalcAdditionalDry(
					additionalOfServices,
					orderOfDryCleaning,
					laundryOfServices,
				) :
				funcCalc(
					areaOfRoom.areaRoom,
					quantityOfCleaner.quantity,
					settings,
					quantityOfRooms,
					additionalOfServices,
					orderOfDryCleaning,
					laundryOfServices,
				));
		})();
	}, [
		areaOfRoom,
		quantityOfCleaner,
		quantityOfRooms,
		settings,
		additionalOfServices,
		typeOfContract,
		orderOfDryCleaning,
		laundryOfServices
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
	const funcCalcAdditionalDry = (
		additionalOfServices,
		orderOfDryCleaning,
		laundryOfServices,
	) => {
		const calc = new MyCalculator;
		let res = 0;
		let resTime = 0;
		if (additionalOfServices.length) {
			res += calc.sumPriceAdditional(additionalOfServices);
			resTime += calc.sumTimeAdditional(additionalOfServices); // Добавляем час доп. услуг
		}
		if (orderOfDryCleaning.length) {
			res += calc.sumPriceAdditional(orderOfDryCleaning);
			resTime += calc.sumTimeAdditional(orderOfDryCleaning); // Добавляем час химчистки
		}
		if (laundryOfServices.length) {
			res += calc.sumPriceAdditional(laundryOfServices);
			resTime += calc.sumTimeAdditional(laundryOfServices); // Добавляем час прання
		}
		return {
			price: res,
			timeWorkMin: resTime,
		};
	}
	const funcCalc = (
		areaOfRoom,
		quantityOfCleaner,
		settingsObj,
		quantityRooms,
		additionalOfServices,
		orderOfDryCleaning,
		laundryOfServices,
	) => {
		if (settingsObj === null) return '';
		const {
			priceTime,
			discountAdditional,
			discountDryOfCleaning,
			discountWash,
			salaryAdditionalCleaner
		} = settingsObj;
		const keys = Object.keys(priceTime)
			.map(item => Number(item))
			.reverse();
		const calc = new MyCalculator;
		let res = 0; // остаточна ціна
		let resTime = 0; // остаточний час праці
		for (let i = 0; i < keys.length; i++) {
			const {
				defaultPrice,
				step,
				timeCleaning,
				timePrice,
			} = priceTime[keys[i]];
			if (+quantityRooms.minAreaM2 > areaOfRoom &&
				+keys[i] === +quantityRooms.minAreaM2) {
				if ( !laundryOfServices.length &&
					!orderOfDryCleaning.length &&
					!additionalOfServices.length &&
					quantityOfCleaner === 0) {
					return {
						price: +defaultPrice,// Додаем мінімальну цену м2 в залежності від кількості кімнат
						timeWorkMin: +timeCleaning,// Додаем мінімальний час праці м2 в залежності від кількості кімнат
					};
				}
				resTime += +timeCleaning; // Добавляем мінімальний час м2 в залежності від кількості кімнат
				resTime += calc.sumTimeAdditional(additionalOfServices, ); // Добавляем час доп. услуг
				resTime += calc.sumTimeAdditional(orderOfDryCleaning, ); // Добавляем час химчистки
				resTime += calc.sumTimeAdditional(laundryOfServices, ); // Добавляем час прання
				res += +defaultPrice; // Добавляем мінімальну цену м2 в залежності від кількості кімнат
				res += calc.sumPriceAdditional(additionalOfServices, discountAdditional); // Добавляем цену доп. услуг
				res += calc.sumPriceAdditional(orderOfDryCleaning, discountDryOfCleaning); // Добавляем цену химчистки
				res += calc.sumPriceAdditional(laundryOfServices, discountWash); // Добавляем цену прання
				res += calc.priceDopCleaners(salaryAdditionalCleaner, quantityOfCleaner); // Добавляем цену доп. уборщиков
				return {
					price: res,
					timeWorkMin: resTime,
				};
			}
			if (+keys[i] <= areaOfRoom) {
				resTime += calc.priceTimeServices(+timeCleaning, +timePrice, +areaOfRoom, +keys[i]);// Додаем час вираховуючись на м2
				resTime += calc.sumTimeAdditional(additionalOfServices); // Добавляем час доп. услуг
				resTime += calc.sumTimeAdditional(orderOfDryCleaning); // Добавляем час химчистки
				resTime += calc.sumTimeAdditional(laundryOfServices); // Добавляем час прання
				res += calc.priceDopCleaners(salaryAdditionalCleaner, quantityOfCleaner); // Додаем ціну дод. прибиральників
				res += calc.priceTimeServices(+defaultPrice, +step, +areaOfRoom, +keys[i]); // Додаем ціну вираховуючись на м2
				res += calc.sumPriceAdditional(additionalOfServices, discountAdditional); // Додаем ціну дод. послуг
				res += calc.sumPriceAdditional(orderOfDryCleaning, discountDryOfCleaning); // Додаем ціну химчистки
				res += calc.sumPriceAdditional(laundryOfServices, discountWash); // Додаем ціну прання
				return {
					price: res,
					timeWorkMin: resTime,
				};
			}
		}
		return {
			price: "",
			timeWorkMin: "",
		};
	}
	const minutesToHoursAndMinutes = (minutes, timeWorkOneCleaner, quantityOfCleaner = 0) => {
		if (typeof minutes === 'string' ||
			minutes === 0 ||
			isNaN(minutes) ||
			timeWorkOneCleaner === null) return `≈ 00 год 00 хв`;
		const dopTimeFull = minutes / 60;
		const quantityCleaner = Math.ceil(dopTimeFull / timeWorkOneCleaner);
		const min = (typeOfContract.type === 'dryCleaning') ?
			minutes / quantityCleaner :
			minutes / (quantityCleaner + quantityOfCleaner) ;
		const hours = Math.floor(min / 60);
		const remainingMinutes = min % 60;
		const formattedHours = String(hours).padStart(2, '0');
		const formattedMinutes = String(Math.round(remainingMinutes)).padStart(2, '0');
		return `≈ ${formattedHours} год ${formattedMinutes} хв`;
		
	}
	const renderedServicesMinutesToHoursAndMinutes = useMemo(() => {
		if (priceTime === null || settings === null) return;
		return minutesToHoursAndMinutes(priceTime.timeWorkMin,
			settings.timeWorkOneCleaner,
			quantityOfCleaner.quantity);
	}, [priceTime, quantityOfCleaner, settings]);
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
					{renderedServicesMinutesToHoursAndMinutes}
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
					 {` ${priceTime.price} грн`}
				</span>
			</h3>
			<p className="aside-min-price t-bold t-7">
				{priceTime.price < 1000 ? '*МІНІМАЛЬНА сума замовлення 1000 грн' : ''}
			</p>
			<label className="my-checkbox" htmlFor="checkbox">
				<input className="visually-hidden"
				       type="checkbox"
				       name="politick"
				       id="checkbox"
				       checked={processingPersonalData}
				       onChange={handlerChange}
				/>
				<span className="t-8">
					Я приймаю
					<a href="#">Політику</a>
					та
					<a href="#">Умови використання</a>
					даним сайтом та послугами
				</span>
			</label>
			<button className="btn btn-pink" type="button" disabled={priceTime.price < 1000 || !processingPersonalData}>
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
					{renderedServicesMinutesToHoursAndMinutes}
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
					 {` ${priceTime.price} грн`}
				</span>
			</h3>
			<p className="aside-min-price t-bold t-7">
				{priceTime.price < 1000 ? '*МІНІМАЛЬНА сума замовлення 1000 грн' : ''}
			</p>
			<label className="my-checkbox" htmlFor="checkbox">
				<input className="visually-hidden"
				       type="checkbox"
				       name="politick"
				       id="checkbox"
				       checked={processingPersonalData}
				       onChange={handlerChange}
				/>
				<span className="t-8">
					Я приймаю
					<a href="#">Політику</a>
					та
					<a href="#">Умови використання</a>
					даним сайтом та послугами
				</span>
			</label>
			<button className="btn btn-pink" type="button" disabled={priceTime.price < 1000 || !processingPersonalData}>
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
	quantityOfBathroom: 0,
	areaOfRoom: 0,
	additionalOfServices: null,
	orderOfDryCleaning: null,
	laundryOfServices: null,
	data: '',
	time: '',
	contactAndAddress: null,
}
export default Aside;