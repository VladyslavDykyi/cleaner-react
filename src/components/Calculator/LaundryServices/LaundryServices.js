import {useState} from "react";

const LaundryServices = () => {
	const [laundryServices,setLaundryServices] = useState([
		{
			id:1,
			select:false,
			name:'bedLinenTowels',
			svg :'bed-linen-towels.svg',
			text:'Постільна білизна, рушники',
			price: 75,
			measurement:'кг',
			currency:'грн',
		},
		{
			id:2,
			select:false,
			name:'clothes',
			svg :'clothes.svg',
			text:'Одяг - футболки, сорочки, джинси, реглани, махрові халати',
			price: 70,
			measurement:'кг',
			currency:'грн',
		},
		{
			id:3,
			select:false,
			name:'curtainsWithoutIroning',
			svg :'curtains-without-ironing.svg',
			text:'Штори, гардини (без прасування)',
			price: 150,
			measurement:'кг',
			currency:'грн',
		},
		{
			id:4,
			select:false,
			name:'blanketBlanketBedspread',
			svg :'blanket-blanket-bedspread.svg',
			text:'Ковдра, плед, покривало',
			price: 350,
			measurement:'кг',
			currency:'грн',
		},
		{
			id:5,
			select:false,
			name:'blanketBlanketBedspreadNaturalWoolFluff',
			svg :'blanket-blanket-bedspread-natural-wool-fluff.svg',
			text:'Ковдра, плед, покривало (натур. вовна, пух)',
			price: 450,
			measurement:'кг',
			currency:'грн',
		},
		{
			id:6,
			select:false,
			name:'laundryDelivery',
			svg :'laundry-delivery.svg',
			text:'Доставка білизни',
			price: 250,
			measurement:'кг',
			currency:'грн',
		},
	]);
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
		return (
			arr.map(item => (
				<div className="additional-services-item" key={item.id}>
					<input type="checkbox" name={item.name} id={item.name}
					       onChange={() => handlerChecked(item.id)}
					       checked={item.selected}/>
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
				{render(laundryServices)}
			</div>
		</section>
);
}
export default LaundryServices;