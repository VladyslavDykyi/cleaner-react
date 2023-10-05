import {useMemo, useState, memo, useEffect} from "react";
import cn from 'classnames';
import Services from "../../../services/services";

const OrderDryCleaning = ({onChange,numeration}) => {
	const servicesDryCleanSofaCarpets = new Services;
	const [orderDryCleaning, setOrderDryCleaning] = useState(null);
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
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
								<source srcSet={'./img/additional-services/' + item.svg} type="image/webp"/>
								<img src={'./img/additional-services/' + item.svg} alt={item.text}/>
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
	return (
		<>
			<section className="calculator-wrapper">
				<h2 className="t-s-bold t-4">
					{numeration}. Замовити хімчистку меблів та килимів
				</h2>
				<h3 className="t-s-bold t-6">
					Замовити хімчистку одночасно з прибиранням та отримати 30% знижки
				</h3>
				<div className="additional-services">
					{error && <p>{errorMessage}</p>}
					{renderedServices}
				</div>
			</section>
		</>
	);
}
export default memo(OrderDryCleaning);