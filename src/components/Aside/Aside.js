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
	               setValidInput,
               }) => {
	
	const settingsCalc = new Services;
	const [settings, setSettings] = useState(null);
	const [numberCleaner, setNumberCleaner] = useState(0);
	const [timeWork, setTimeWork] = useState('');
	const [priceTime, setPriceTime] = useState({
		price: '',
		timeWorkMin: 0,
		salaryCleaner: 0,
	});
	const [processingPersonalData, setProcessingPersonalData] = useState(false);
	const [validData, setValidData] = useState({});
	const [validMessage, setValidMessage] = useState('');
	const handlerChange = () => setProcessingPersonalData((prevValue) => !prevValue);
	useEffect(() => {
		(() => {
			getData();
		})();
	}, []);
	useEffect(() => {
		(() => {
			if (typeOfContract.type === 'dryCleaning') {
				setPriceTime(
					funcCalcAdditionalDry(
						additionalOfServices,
						orderOfDryCleaning,
						laundryOfServices,
						settings,
					)
				)
			} else {
				switch (typeOfCleaning.type) {
					case 'afterRepair':
						setPriceTime(funcCalc(
							areaOfRoom.areaRoom,
							quantityOfCleaner.quantity,
							settings,
							quantityOfRooms,
							additionalOfServices,
							orderOfDryCleaning,
							laundryOfServices,
							typeOfCleaning.type,
							typeOfRoom.type,
							quantityOfBathroom,
						));
						break;
					case 'eco':
						setPriceTime(funcCalc(
							areaOfRoom.areaRoom,
							quantityOfCleaner.quantity,
							settings,
							quantityOfRooms,
							additionalOfServices,
							orderOfDryCleaning,
							laundryOfServices,
							typeOfCleaning.type,
							typeOfRoom.type,
							quantityOfBathroom,
						));
						break;
					case 'general':
						setPriceTime(funcCalc(
							areaOfRoom.areaRoom,
							quantityOfCleaner.quantity,
							settings,
							quantityOfRooms,
							additionalOfServices,
							orderOfDryCleaning,
							laundryOfServices,
							typeOfCleaning.type,
							typeOfRoom.type,
							quantityOfBathroom,
						));
						break;
					case 'normal':
						setPriceTime(funcCalc(
							areaOfRoom.areaRoom,
							quantityOfCleaner.quantity,
							settings,
							quantityOfRooms,
							additionalOfServices,
							orderOfDryCleaning,
							laundryOfServices,
							typeOfCleaning.type,
							typeOfRoom.type,
							quantityOfBathroom,
						));
						break;
					case 'preAfterParty':
						setPriceTime(funcCalc(
							areaOfRoom.areaRoom,
							quantityOfCleaner.quantity,
							settings,
							quantityOfRooms,
							additionalOfServices,
							orderOfDryCleaning,
							laundryOfServices,
							typeOfCleaning.type,
							typeOfRoom.type,
							quantityOfBathroom,
						));
						break;
				}
			}
		})();
	}, [
		areaOfRoom,
		quantityOfCleaner,
		quantityOfRooms,
		settings,
		additionalOfServices,
		typeOfContract,
		orderOfDryCleaning,
		laundryOfServices,
		typeOfCleaning,
		typeOfRoom,
		quantityOfBathroom,
		numberCleaner,
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
		settings,
	) => {
		const {salaryCleanerOnHands, salaryCleanerMax, cleanerAditionalInterestRate} = settings;
		const calc = new MyCalculator;
		let res = 0;
		let resTime = 0;
		let salaryCleaners = 0;
		if (additionalOfServices.length) {
			res += calc.sumPriceAdditional(additionalOfServices);
			resTime += calc.sumTimeAdditional(additionalOfServices); // Добавляем час доп. услуг
			salaryCleaners += calc.salaryDopCleaner(
				calc.sumPriceAdditional(additionalOfServices, cleanerAditionalInterestRate),
				numberCleaner,
				salaryCleanerOnHands,
				quantityOfCleaner,
				salaryCleanerMax,
			);
		}
		if (orderOfDryCleaning.length) {
			res += calc.sumPriceAdditional(orderOfDryCleaning);
			resTime += calc.sumTimeAdditional(orderOfDryCleaning); // Добавляем час химчистки
			salaryCleaners += calc.salaryDopCleaner(
				calc.sumPriceAdditional(orderOfDryCleaning, cleanerAditionalInterestRate),
				numberCleaner,
				salaryCleanerOnHands,
				quantityOfCleaner,
				salaryCleanerMax,
			);
		}
		if (laundryOfServices.length) {
			res += calc.sumPriceAdditional(laundryOfServices);
			resTime += calc.sumTimeAdditional(laundryOfServices); // Добавляем час прання
		}
		return {
			price: Math.floor(res),
			timeWorkMin: resTime,
			salaryCleaner: salaryCleaners,
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
		typeOfCleaning,
		typeOfRoom,
		quantityOfBathroom,
	) => {
		if (settingsObj === null) return '';
		const {
			priceTime,
			discountAdditional,
			discountDryOfCleaning,
			discountWash,
			salaryAdditionalCleaner,
			salaryCleanerMax,
			cleanerInterestRate,
			cleanerAditionalInterestRate,
			salaryCleanerOnHands,
		} = settingsObj;
		const keys = Object.keys(priceTime)
			.map(item => Number(item))
			.reverse();
		const calc = new MyCalculator;
		let resTime = 0; // остаточний час праці
		for (let i = 0; i < keys.length; i++) {
			const {
				defaultPrice,
				timeCleaning,
				timePrice,
				step,
			} = priceTime[keys[i]];
			if (+quantityRooms.minAreaM2 > areaOfRoom &&
				+keys[i] === +quantityRooms.minAreaM2) {
				if ( !laundryOfServices.length &&
					!orderOfDryCleaning.length &&
					!additionalOfServices.length &&
					quantityOfCleaner === 0) {
					const salaryCleaners = calc.salaryCleaner(
						+defaultPrice,
						priceTime[keys[i]][typeOfCleaning][typeOfRoom].clean,
						priceTime[keys[i]][typeOfCleaning][typeOfRoom].room,
						cleanerInterestRate,
						calc.sumPriceAdditional(additionalOfServices, cleanerAditionalInterestRate),
						calc.sumPriceAdditional(orderOfDryCleaning, cleanerAditionalInterestRate),
						numberCleaner,
						salaryCleanerOnHands,
						quantityOfCleaner,
						salaryCleanerMax,
					);
					const resultPriceBathroom = calc.priceBathroom(
						quantityOfBathroom.price,
						quantityOfBathroom.quantityRooms
					);
					const coefficient = priceTime[keys[i]][typeOfCleaning][typeOfRoom].clean *
						priceTime[keys[i]][typeOfCleaning][typeOfRoom].room;
					return {
						price: Math.ceil((+defaultPrice * coefficient) + resultPriceBathroom),// Додаем мінімальну цену м2 в залежності від кількості кімнат
						timeWorkMin: +timeCleaning,// Додаем мінімальний час праці м2 в залежності від кількості кімнат
						salaryCleaner: salaryCleaners,
					};
				}
				resTime += +timeCleaning; // Добавляем мінімальний час м2 в залежності від кількості кімнат
				resTime += calc.sumTimeAdditional(additionalOfServices,); // Добавляем час доп. услуг
				resTime += calc.sumTimeAdditional(orderOfDryCleaning,); // Добавляем час химчистки
				resTime += calc.sumTimeAdditional(laundryOfServices,); // Добавляем час прання
				const coefficient = priceTime[keys[i]][typeOfCleaning][typeOfRoom].clean *
					priceTime[keys[i]][typeOfCleaning][typeOfRoom].room;
				const resultPriceAreaM2 = (+defaultPrice * coefficient); // Добавляем мінімальну цену м2 в залежності від кількості кімнат
				const resultAdditionalOfServices = calc.sumPriceAdditional(additionalOfServices, discountAdditional); // Добавляем цену доп. услуг
				const resultOrderOfDryCleaning= calc.sumPriceAdditional(orderOfDryCleaning, discountDryOfCleaning); // Добавляем цену химчистки
				const resultLaundryOfServices= calc.sumPriceAdditional(laundryOfServices, discountWash); // Добавляем цену прання
				const resultPriceDopCleaners = calc.priceDopCleaners(salaryAdditionalCleaner, quantityOfCleaner); // Добавляем цену доп. уборщиков
				const resultPriceBathroom = calc.priceBathroom(
					quantityOfBathroom.price,
					quantityOfBathroom.quantityRooms
				);
				const salaryCleaners = calc.salaryCleaner(
					resultPriceAreaM2,
					priceTime[keys[i]][typeOfCleaning][typeOfRoom].clean,
					priceTime[keys[i]][typeOfCleaning][typeOfRoom].room,
					cleanerInterestRate,
					calc.sumPriceAdditional(additionalOfServices, cleanerAditionalInterestRate),
					calc.sumPriceAdditional(orderOfDryCleaning, cleanerAditionalInterestRate),
					numberCleaner,
					salaryCleanerOnHands,
					quantityOfCleaner,
					salaryCleanerMax,
				);
				return {
					price: Math.ceil(resultPriceAreaM2 + resultPriceBathroom + resultAdditionalOfServices + resultOrderOfDryCleaning + resultLaundryOfServices + resultPriceDopCleaners),
					timeWorkMin: resTime,
					salaryCleaner: salaryCleaners,
				};
			}
			if (+keys[i] <= areaOfRoom) {
				resTime += calc.timeServices(
					+timeCleaning,
					+timePrice,
					+areaOfRoom,
					+keys[i],
					priceTime[keys[i]][typeOfCleaning][typeOfRoom].clean,
					priceTime[keys[i]][typeOfCleaning][typeOfRoom].room, // Додаем час вираховуючись на м2
				)
				resTime += calc.sumTimeAdditional(additionalOfServices); // Добавляем час доп. услуг
				resTime += calc.sumTimeAdditional(orderOfDryCleaning); // Добавляем час химчистки
				resTime += calc.sumTimeAdditional(laundryOfServices); // Добавляем час прання
				resTime += calc.timeBathroom(quantityOfBathroom.timeWork,
					quantityOfBathroom.quantityRooms)
				const resultPriceDopCleaners = calc.priceDopCleaners(salaryAdditionalCleaner, quantityOfCleaner); // Додаем ціну дод. прибиральників
				const resultPriceAreaM2 = calc.priceTimeServices(
					+defaultPrice,
					priceTime[keys[i]][typeOfCleaning][typeOfRoom].step,
					+areaOfRoom,
					+keys[i],
					priceTime[keys[i]][typeOfCleaning][typeOfRoom].clean,
					priceTime[keys[i]][typeOfCleaning][typeOfRoom].room,
				); // Додаем ціну вираховуючись на м2;
				const resultAdditionalOfServices = calc.sumPriceAdditional(additionalOfServices, discountAdditional);// Додаем ціну дод. послуг
				const resultOrderOfDryCleaning = calc.sumPriceAdditional(orderOfDryCleaning, discountDryOfCleaning); // Додаем ціну химчистки
				const resultLaundryOfServices = calc.sumPriceAdditional(laundryOfServices, discountWash); // Додаем ціну прання
				const resultPriceBathroom = calc.priceBathroom(
					quantityOfBathroom.price,
					quantityOfBathroom.quantityRooms
				);
				const defaultM2Price = calc.priceDefaultM2(+defaultPrice,+step,+areaOfRoom,+keys[i]);
				const salaryCleaners = calc.salaryCleaner(
					defaultM2Price,
					priceTime[keys[i]][typeOfCleaning][typeOfRoom].clean,
					priceTime[keys[i]][typeOfCleaning][typeOfRoom].room,
					cleanerInterestRate,
					calc.sumPriceAdditional(additionalOfServices, cleanerAditionalInterestRate),
					calc.sumPriceAdditional(orderOfDryCleaning, cleanerAditionalInterestRate),
					numberCleaner,
					salaryCleanerOnHands,
					quantityOfCleaner,
					salaryCleanerMax,
				);
				return {
					price: Math.ceil(resultPriceDopCleaners + resultPriceAreaM2 + resultAdditionalOfServices + resultOrderOfDryCleaning + resultLaundryOfServices + resultPriceBathroom),
					timeWorkMin: resTime,
					salaryCleaner: salaryCleaners,
				};
			}
		}
		return {
			price: "",
			timeWorkMin: "",
			salaryCleaner: "",
		};
	}
	const minutesToHoursAndMinutes = (minutes, timeWorkOneCleaner, quantityOfCleaner = 0) => {
		if (typeof minutes === 'string' ||
			minutes === 0 ||
			isNaN(minutes) ||
			timeWorkOneCleaner === null) return `≈ 00 год 00 хв`;
		const dopTimeFull = minutes / 60;
		setNumberCleaner(Math.ceil(dopTimeFull / timeWorkOneCleaner));
		const quantityCleaner = Math.ceil(dopTimeFull / timeWorkOneCleaner);
		const min = (typeOfContract.type === 'dryCleaning') ?
			minutes / quantityCleaner :
			minutes / (quantityCleaner + quantityOfCleaner);
		const hours = Math.floor(min / 60);
		const remainingMinutes = min % 60;
		const formattedHours = String(hours).padStart(2, '0');
		const formattedMinutes = String(Math.round(remainingMinutes)).padStart(2, '0');
		setTimeWork(`≈ ${formattedHours} год ${formattedMinutes} хв`);
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
						{item.text} {item.quantityKilograms || ''} {item.measurement}
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
						{item.text} {item.quantityKilograms || ''} {item.measurement}
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
						{`${item.text} ${item.quantityKilograms || ''} ${item.measurement || ''}`}
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
	const handlerSubmit = (
		dataTypeOfRoom,
		dataTypeOfCleaning,
		dataQuantityOfCleaner,
		dataQuantityOfRooms,
		dataQuantityOfBathroom,
		dataAreaOfRoom,
		dataAdditionalOfServices,
		dataOrderOfDryCleaning,
		dataLaundryOfServices,
		dataDate,
		dataTime,
		priceTime,
		timeWork,
		contactAndAddress,
		numberCleaner,
	) => {
		const dataExecution = {
			timeContract: dataTime.time,
			dataContract: dataDate,
			landryServicesContract: dataLaundryOfServices,
			orderDryCleaningContract: dataOrderOfDryCleaning,
			additionalOfServicesContract: dataAdditionalOfServices,
			areaOfRoomContract: dataAreaOfRoom.areaRoom,
			quantityBathroomContract: dataQuantityOfBathroom.quantityRooms,
			quantityRoomsContract: {
				quantityRooms: dataQuantityOfRooms.id,
				area: dataQuantityOfRooms.minAreaM2,
			},
			quantityCleanerContract: dataQuantityOfCleaner.quantity,
			typeCleaningContract: dataTypeOfCleaning.type,
			typeRoomContract: dataTypeOfRoom.type,
			executionTimeContract: {
				min: priceTime.timeWorkMin,
				content: timeWork,
			},
			executionPriceContract: priceTime.price,
			contactAddressContract: contactAndAddress,
			numberCleanerContract: numberCleaner,
			salaryCleanerContract: priceTime.salaryCleaner,
		} // У цьому об'єкті дані для відсилання на сервер
		return dataExecution
	};
	const handlerValid = (dataContacts) => {
		if (dataContacts.userTel === '' || dataContacts.userName === '') {
			setValidData({
				userTel: dataContacts.userTel === '' ? 'Заповніть поле телефону' : '',
				userName: dataContacts.userName === '' ? 'Заповніть поле Імені' : '',
			});
			(() => {
				setValidInput({
					telValid: dataContacts.userTel === '',
					nameValid: dataContacts.userName === '',
				});
			})();
		} else {
			setValidData({
				userTel: '',
				userName: '',
			});
			(() => {
				setValidInput({
					telValid: false,
					nameValid: false,
				});
			})();
			const wrapper = document.createElement('div');
			wrapper.classList.add('modal-backdrop','fade','show');
			const body = document.querySelector('body');
			body.append(wrapper)
			const modal = document.querySelector('#exampleModal');
			modal.classList.add('show');
			modal.style.display = 'block';
			modal.addEventListener('click', (event) => {
				// Проверяем, был ли клик внутри элемента #exampleModal
				if (event.target === modal) {
					modal.style.display = 'none';
					modal.classList.remove('show');
					const wrappers = document.querySelector('.modal-backdrop.fade.show');
					if (wrappers) {
						wrappers.remove();
					}
				}
			});
			const btnModal = document.querySelector('.btn-close');
			btnModal.addEventListener('click', () => {
				modal.style.display = 'none';
				modal.classList.remove('show');
				const wrappers = document.querySelector('.modal-backdrop.fade.show');
				if (wrappers) {
					wrappers.remove();
				}
			});
			const backendUrl = 'http://clean.webgenerator.com.ua/api/v1/order'; // Замените на реальный URL вашего бекенда
			const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
			// Определите параметры запроса, включая метод (POST) и тело запроса (JSON-представление объекта)
			const requestOptions = {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'X-CSRF-Token': csrfToken,
				},
				body: JSON.stringify(handlerSubmit(
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
					priceTime,
					timeWork,
					contactAndAddress,
					numberCleaner
				)),
			};
			// Выполните запрос с использованием fetch
			fetch(backendUrl, requestOptions)
				.then((response) => {
					if (!response.ok) {
						throw new Error('Ошибка сети');
					}
					return response.json();
				})
				.then((data) => {
				})
				.catch((error) => {
					console.error('Произошла ошибка:', error);
				});
		}
	};
	const validPrice = () => {
		if (settings && settings.minimumOrderValue !== null) {
			const message = priceTime.price < settings.minimumOrderValue
				? `*МІНІМАЛЬНА сума замовлення ${settings.minimumOrderValue} грн`
				: '';
			setValidMessage(message); // Устанавливаем сообщение в состояние
		} else {
			setValidMessage('');
		}
	};
	useEffect(() => {
		validPrice(); // Запуск функции при изменении settings
	}, [settings,priceTime.price]);
	const [disableBtn,setDisableBtn] = useState(true);
	const disableBtnValid = () => {
		if (settings && settings.minimumOrderValue !== null) {
			const message = priceTime.price < settings.minimumOrderValue || !processingPersonalData;
			setDisableBtn(message);
		} else {
			setDisableBtn(true);
		}
	}
	useEffect(() => {
		disableBtnValid(); // Запуск функции при изменении settings
	}, [settings,processingPersonalData,priceTime.price]);
	const typeAside = (typeOfContract.type === 'dryCleaning') ? (<aside className="aside-bg">
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
					 {` ${priceTime.price || 0} грн`}
				</span>
			</h3>
			<p className="aside-min-price t-bold t-7">
				{validMessage}
				{validData.userTel }<br/>
				{validData.userName }
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
					<a href="http://clean.webgenerator.com.ua/site/dowload/privacy-policy-Green-Gloves.pdf" target="_blank">Політику</a>
					та
					<a href="http://clean.webgenerator.com.ua/site/dowload/terms-and-conditions-Green-Gloves-04-10-2023.pdf" target="_blank">Умови використання</a>
					даним сайтом та послугами
				</span>
			</label>
			<button className="btn btn-pink"
			        onClick={() => handlerValid(contactAndAddress)}
			        type="button"
			        disabled={disableBtn}
				>
				Замовити Чистоту
			</button>
		</div>
	</aside>) : (<aside className="aside-bg">
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
				<i className="bi bi-people"/>
				{numberCleaner} прибиральника
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
					 {` ${priceTime.price || 0} грн`}
				</span>
			</h3>
			<p className="aside-min-price t-bold t-7">
				{validMessage}
				{validData.userTel }<br/>
				{validData.userName }
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
					<a href="http://clean.webgenerator.com.ua/site/dowload/privacy-policy-Green-Gloves.pdf" target="_blank">Політику</a>
					та
					<a href="http://clean.webgenerator.com.ua/site/dowload/terms-and-conditions-Green-Gloves-04-10-2023.pdf" target="_blank">Умови використання</a>
					даним сайтом та послугами
				</span>
			</label>
			<button className="btn btn-pink suka"
			        id='padaras'
			        onClick={() => {
				        handlerValid(contactAndAddress)
			        }}
			        type="button"
			        disabled={disableBtn}
			        >
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