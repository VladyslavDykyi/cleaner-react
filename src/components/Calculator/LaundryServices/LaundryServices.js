import {useState, useEffect, useMemo, memo} from "react";
import Services from "../../../services/services";

const LaundryServices = ({onChange}) => {
	const servicesLaundry = new Services;
	const [laundryServices, setLaundryServices] = useState(null);
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
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
			updatedLaundryServices[serviceIndex].guantityKilograms = Number(value);
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
								<source srcSet={'./img/additional-services/' + item.svg} type="image/webp"/>
								<img src={'./img/additional-services/' + item.svg} alt={item.text}/>
							</picture>
							<span className="services-wrapper">
								<span className="services-title t-s-bold t-8">{item.text}</span>
								<span
									className="services-text t-bold t-4">{item.price + item.currency} / {item.measurement}</span>
							</span>
						</span>
						<label className="services-input" htmlFor={item.name + 'Input'}>
							<span className="t-8">Вкажіть вагу у {item.measurement}:</span>
							<input type="number" onChange={handlerQuantityKilograms}
							       value={item.guantityKilograms || ''} name={item.name + 'Input'}
							       id={item.name + 'Input'}
							       placeholder={"5 " + item.measurement}/>
						</label>
					</label>
				</div>
			))
		)
	}
	const renderedServices = useMemo(() => {
		if (laundryServices === null) return null;
		return render(laundryServices);
	}, [laundryServices]);
	return (
		<section className="calculator-wrapper">
			<h2 className="t-s-bold t-4">
				9. Послуги з прання білизни
			</h2>
			<div className="additional-services widthX2">
				{error && <p>{errorMessage}</p>}
				{renderedServices}
			</div>
		</section>
	);
}
export default memo(LaundryServices);