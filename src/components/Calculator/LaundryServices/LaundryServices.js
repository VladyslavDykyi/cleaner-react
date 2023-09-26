import {useState,useEffect} from "react";


const LaundryServices = (props) => {
	const {data,error,errorMessage} = props;
	const [laundryServices,setLaundryServices] = useState(null);
	useEffect(() => {
		setLaundryServices(data);
	}, []);
	useEffect(() => {
		console.log(laundryServices);
	}, []);
	const handlerChecked = ( id) => {
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
	}
	const render = (arr) => {
		console.log(arr);
		if(arr === null) return;
		return (
			arr.map(item => (
				<div className="additional-services-item" key={item.id}>
					<input type="checkbox" name={item.name} id={item.name}
					       onChange={() => handlerChecked(item.id)}
					       checked={item.select}/>
					<label className="services" htmlFor={item.name}>
						<span className="services-card">
							<picture>
								<source srcSet={'./img/additional-services/'+item.svg} type="image/webp"/>
								<img src={'./img/additional-services/'+item.svg} alt=""/>
							</picture>
							<span className="services-wrapper">
								<span className="services-title t-s-bold t-8">{item.text}</span>
								<span className="services-text t-bold t-4">{item.price + item.currency} / {item.measurement}</span>
							</span>
						</span>
						<label className="services-input" htmlFor={item.name + 'Input'}>
							<span className="t-8">Вкажіть вагу у {item.measurement}:</span>
							<input type="number" name={item.name + 'Input'} id={item.name + 'Input'} placeholder={"5 "+item.measurement}/>
						</label>
					</label>
				</div>
			))
		)
	}
	return (
		<section className="calculator-wrapper">
			<h2 className="t-s-bold t-4">
				9. Послуги з прання білизни
			</h2>
			<div className="additional-services widthX2">
				{error && <p>{errorMessage}</p>}
				{render(laundryServices)}
			</div>
		</section>
);
}
LaundryServices.defaultProps = {
	error: '',
	errorMessage: '',
	data: null,
}
export default LaundryServices;