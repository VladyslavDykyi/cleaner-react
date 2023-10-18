import {useMemo, useState, memo, useEffect} from "react";
import cn from 'classnames';
import Services from "../../../services/services";
import './OrderDryCleaning.css';
const OrderDryCleaning = ({onChange,numeration}) => {
	const servicesDryCleanSofaCarpets = new Services;
	const [orderDryCleaning, setOrderDryCleaning] = useState(null);
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [expanded, setExpanded] = useState(false);
	useEffect(() => {
		(() => {
			if (orderDryCleaning === null) return;
			const res = orderDryCleaning.filter((item) => item.select === true);
			onChange(res);
		})();
	}, [orderDryCleaning]);
	useEffect(() => {
		(() => {
			getData();
		})();
	}, []);
	const onLoad = (data) => {
		setOrderDryCleaning(data);
		setError(false);
		setErrorMessage('Виникла помилка при завантаженні.');
	}
	const onError = () => {
		setError(true);
	}
	const getData = () => {
		servicesDryCleanSofaCarpets.getDryCleanSofaCarpetsAll()
			.then(onLoad)
			.catch(onError);
	}
	const handlerChecked = (id) => {
		const updatedLaundryServices = [...orderDryCleaning];
		const serviceIndex = updatedLaundryServices.findIndex(
			(service) => service.id === id
		);
		if (serviceIndex !== -1) {
			updatedLaundryServices[serviceIndex].select = !updatedLaundryServices[
				serviceIndex
				].select;
			setOrderDryCleaning(updatedLaundryServices);
		}
	};
	const handlerClick = (event) => {
		const elem = event.target.closest('.additional-services-item');
		if ( !elem) return;
		
		const measurement = elem.getAttribute('data-measurement');
		
		if (measurement !== null) {
			elem.classList.toggle('active');
		}
	};
	const handlerQuantityKilograms = (event) => {
		const {value, name} = event.target;
		const updatedLaundryServices = [...orderDryCleaning];
		const serviceIndex = updatedLaundryServices.findIndex(
			(service) => service.name === name.replace("Input", "")
		);
		if (serviceIndex !== -1) {
			updatedLaundryServices[serviceIndex].quantityKilograms = Number(value);
		}
		setOrderDryCleaning(updatedLaundryServices);
	};
	const render = (data) => {
		if (data === null) return;
		return (
			data.map(item => (
				<div className={cn('additional-services-item', {'active': item.measurement !== null && item.select})}
				     key={item.id}>
					<input type="checkbox" name={item.name} id={item.name}
					       onChange={() => handlerChecked(item.id)}
					       checked={item.select}
					/>
					<label className="services" htmlFor={item.name} onClick={handlerClick}>
						<span className="services-card">
							<picture>
								<source srcSet={item.svg} type="image/webp"/>
								<img src={item.svg} alt={item.text}/>
							</picture>
							<span className="services-wrapper">
								<span className="services-title t-s-bold t-8">{item.text} {item.measurement}</span>
								<span className="services-text t-bold t-4">{item.price + ' ' + item.currency}</span>
							</span>
						</span>
						{
							item.measurement &&
							<label className="services-input" htmlFor={item.name + "Input"}>
								<span className="t-8">Вкажіть площу у {item.measurement}:</span>
								<input type="number" name={item.name + "Input"} id={item.name + "Input"}
								       onChange={handlerQuantityKilograms} value={item.quantityKilograms || ''}
								       placeholder={"34 " + item.measurement}/>
							</label>
						}
					</label>
				</div>
			))
		)
	}
	const renderedServices = useMemo(() => {
		if (orderDryCleaning === null) return null;
		return render(orderDryCleaning);
	}, [orderDryCleaning]);
	const handlerClickRead = () => {
		setExpanded(!expanded);
	}
	const additionalServicesClasses = cn("additional-services", {
		active: expanded, // Добавляем класс "expanded", если expanded === true
	});
	return (
		<>
			<section className="calculator-wrapper">
				<h2 className="t-s-bold t-4">
					{numeration}. Замовити хімчистку меблів та килимів
				</h2>
				<h3 className="t-s-bold t-6">
					Замовити хімчистку одночасно з прибиранням та отримати 30% знижки
				</h3>
				<div className={additionalServicesClasses} id='orderDryList'>
					{error && <p>{errorMessage}</p>}
					{renderedServices}
				</div>
				<div className='d-flex justify-content-center'>
					<button className='btn' type='button' onClick={handlerClickRead}>
					<span className='t-s-bold t-7 orangesText mx-3'>
						{expanded ? 'згорнути' : 'розгорнути'}
					</span>
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
							<path fillRule="evenodd" clipRule="evenodd" d="M3.29289 22.7071C3.68342 23.0976 4.31658 23.0976 4.70711 22.7071L16 11.4142L27.2929 22.7071C27.6834 23.0976 28.3166 23.0976 28.7071 22.7071C29.0976 22.3166 29.0976 21.6834 28.7071 21.2929L16.7071 9.29289C16.3166 8.90237 15.6834 8.90237 15.2929 9.29289L3.29289 21.2929C2.90237 21.6834 2.90237 22.3166 3.29289 22.7071Z" fill="#E98D04"/>
						</svg>
					</button>
				</div>
			</section>
		</>
	);
}
export default memo(OrderDryCleaning);