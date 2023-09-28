import {useState, useEffect, useMemo, useCallback, memo} from "react";
import Services from "../../../services/services";

const LaundryServices = () => {
	const servicesLaundry = new Services;
	
	const [laundryServices, setLaundryServices] = useState(null);
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	
	useEffect(() => {
		getData();
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
	const handlerChecked = useCallback((id) => {
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
	})
	console.log('4')
	const render = (arr) => {
		if (arr === null) return;
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
								<img src={'./img/additional-services/' + item.svg} alt=""/>
							</picture>
							<span className="services-wrapper">
								<span className="services-title t-s-bold t-8">{item.text}</span>
								<span
									className="services-text t-bold t-4">{item.price + item.currency} / {item.measurement}</span>
							</span>
						</span>
						<label className="services-input" htmlFor={item.name + 'Input'}>
							<span className="t-8">Вкажіть вагу у {item.measurement}:</span>
							<input type="number" name={item.name + 'Input'} id={item.name + 'Input'}
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