import {useState, useEffect, useMemo, memo} from "react";
import Services from "../../../services/services";
import './LandryServices.css';
import cn from "classnames";

const LaundryServices = ({onChange,numeration}) => {
	const servicesLaundry = new Services;
	const [laundryServices, setLaundryServices] = useState(null);
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [expanded, setExpanded] = useState(false);
	useEffect(() => {
		(() => {
			if (laundryServices === null) return;
			const res = laundryServices.filter((item) => item.select === true);
			onChange(res);
		})();
	}, [laundryServices]);
	useEffect(() => {
		(() => {
			getData();
		})();
	}, []);
	const onLoad = (data) => {
		setLaundryServices(data);
		setError(false);
		setErrorMessage('Виникла помилка при завантаженні.');
	}
	const onError = () => {
		setError(true);
	}
	const getData = () => {
		servicesLaundry.getLaundryServicesAll()
			.then(onLoad)
			.catch(onError);
	}
	const handlerChecked = (id) => {
		const updatedLaundryServices = [...laundryServices];
		const serviceIndex = updatedLaundryServices.findIndex(
			(service) => service.id === id
		);
		if (serviceIndex !== -1) {
			updatedLaundryServices[serviceIndex].select = !updatedLaundryServices[
				serviceIndex
				].select;
			setLaundryServices(updatedLaundryServices);
		}
	};
	const handlerQuantityKilograms = (event) => {
		const {value, name} = event.target;
		const updatedLaundryServices = [...laundryServices];
		const serviceIndex = updatedLaundryServices.findIndex(
			(service) => service.name === name.replace("Input", "")
		);
		if (serviceIndex !== -1) {
			updatedLaundryServices[serviceIndex].quantityKilograms = Number(value);
		}
		setLaundryServices(updatedLaundryServices);
	};
	const render = (arr) => {
		return (
			arr.map(item => (
				<div className="additional-services-item" key={item.id}>
					<input type="checkbox" name={item.name} id={item.name}
					       onChange={() => handlerChecked(item.id)}
					       checked={item.select}/>
					<label className="services" htmlFor={item.name}>
						<span className="services-card">
							<picture>
								<source srcSet={item.svg} type="image/webp"/>
								<img src={item.svg} alt={item.text}/>
							</picture>
							<span className="services-wrapper">
								<span className="services-title t-s-bold t-8">{item.text}</span>
								<span
									className="services-text t-bold t-4">{item.price + item.currency} / {item.measurement}</span>
							</span>
						</span>
						{
							item.measurement &&
							<label className="services-input" htmlFor={item.name + 'Input'}>
								<span className="t-8">Вкажіть вагу у {item.measurement}:</span>
								<input type="number" onChange={handlerQuantityKilograms}
								       value={item.quantityKilograms || ''} name={item.name + 'Input'}
								       id={item.name + 'Input'}
								       placeholder={"5 " + item.measurement}/>
							</label>
						}
					</label>
				</div>
			))
		)
	}
	const renderedServices = useMemo(() => {
		if (laundryServices === null) return null;
		return render(laundryServices);
	}, [laundryServices]);
	const handlerClickRead = () => {
		setExpanded(!expanded);
	}
	const additionalServicesClasses = cn("additional-services widthX2", {
		active: expanded, // Добавляем класс "expanded", если expanded === true
	});
	return (
		<section className="calculator-wrapper">
			<h2 className="t-s-bold t-4">
				{numeration}. Прання та інше
			</h2>
			<div className={additionalServicesClasses} id='laundryServices'>
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
	);
}
export default memo(LaundryServices);