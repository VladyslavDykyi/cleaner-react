import cn from "classnames";
import {useCallback, useEffect, useMemo, useState} from "react";
import Services from "../../../services/services";

const AdditionalServices = ({onChange}) => {
	const servicesAdditionalServices = new Services;
	const [additionalServices, setAdditionalServices] = useState(null);
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	useEffect(() => {
		(() => {
			if (additionalServices === null) return;
			const res = additionalServices.filter((item) => item.select === true);
			onChange(res);
		})();
	}, [additionalServices]);
	useEffect(() => {
		(() => {
			getData();
		})();
	}, []);
	const onLoad = (data) => {
		setAdditionalServices(data);
		setError(false);
		setErrorMessage('Виникла помилка при завантаженні.');
	}
	const onError = () => {
		setError(true);
	}
	const getData = () => {
		servicesAdditionalServices.getExtraServicesAll()
			.then(onLoad)
			.catch(onError);
	}
	const handlerChecked = (id) => {
		const updatedLaundryServices = [...additionalServices];
		const serviceIndex = updatedLaundryServices.findIndex(
			(service) => service.id === id
		);
		if (serviceIndex !== -1) {
			updatedLaundryServices[serviceIndex].select = !updatedLaundryServices[
				serviceIndex
				].select;
			setAdditionalServices(updatedLaundryServices);
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
		const updatedLaundryServices = [...additionalServices];
		const serviceIndex = updatedLaundryServices.findIndex(
			(service) => service.name === name.replace("Input", "")
		);
		if (serviceIndex !== -1) {
			updatedLaundryServices[serviceIndex].guantityKilograms = Number(value);
		}
		setAdditionalServices(updatedLaundryServices);
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
								       onChange={handlerQuantityKilograms} value={item.guantityKilograms || ''}
								       placeholder={"34 " + item.measurement}/>
							</label>
						}
					</label>
				</div>
			))
		)
	}
	const renderedServices = useMemo(() => {
		if (additionalServices === null) return null;
		return render(additionalServices);
	}, [additionalServices]);
	return (
		<section className="calculator-wrapper">
			<h2 className="t-s-bold t-4">
				8. Додаткові послуги
			</h2>
			<div className="additional-services">
				{error && <p>{errorMessage}</p>}
				{renderedServices}
			</div>
		</section>
	);
}
export default AdditionalServices;