import cn from "classnames";
import {useCallback, useEffect, useMemo, useState} from "react";

const AdditionalServices = ({onChange}) => {
	const obj = [
		{
			currency: "грн",
			id: 1,
			measurement: null,
			name: "ovenWashing",
			price: "300",
			select: false,
			svg: "oven-washing.svg",
			text: "Миття духової шафи",
		},
		{
			currency: "грн",
			id: 2,
			measurement: null,
			name: "hoodWashing",
			price: "200",
			select: false,
			svg: "hood-washing.svg",
			text: "Миття витяжки",
		},
		{
			currency: "грн",
			id: 3,
			measurement: null,
			name: "kitchenCabinets",
			price: "300",
			select: false,
			svg: "kitchen-cabinets.svg",
			text: "Прибирання в кухонних шафах",
		},
		{
			currency: "грн",
			id: 4,
			measurement: null,
			name: "washingDishes",
			price: "160",
			select: false,
			svg: "washing-dishes.svg",
			text: "Миття посуду",
		},
		{
			currency: "грн",
			id: 5,
			measurement: null,
			name: "fridge",
			price: "270",
			select: false,
			svg: "fridge.svg",
			text: "Миття холодильника",
		},
		{
			currency: "грн",
			id: 6,
			measurement: null,
			name: "microwaves",
			price: "160",
			select: false,
			svg: "microwaves.svg",
			text: "Миття мікрохвильовки",
		},
		{
			currency: "грн",
			id: 7,
			measurement: null,
			name: "balcony",
			price: "160",
			select: false,
			svg: "balcony.svg",
			text: "Прибирання балкона",
		},
		{
			currency: "грн",
			id: 8,
			measurement: "м2",
			name: "windowWashing",
			price: "70",
			select: false,
			svg: "window-washing.svg",
			text: "Миття вікон",
		},
		{
			currency: "грн",
			id: 9,
			measurement: null,
			name: "animalTray",
			price: "150",
			select: false,
			svg: "animal-tray.svg",
			text: "Прибирання лотка для тварин",
		},
		{
			currency: "грн",
			id: 10,
			measurement: null,
			name: "oneHour",
			price: "200",
			select: false,
			svg: "one-hour.svg",
			text: "Додаткова година",
		},
		{
			currency: "грн",
			id: 11,
			measurement: null,
			name: "kitchen",
			price: "1400",
			select: false,
			svg: "kitchen.svg",
			text: "Генеральне прибирання кухні",
		},
		{
			currency: "грн",
			id: 12,
			measurement: null,
			name: "wardrobe",
			price: "130",
			select: false,
			svg: "wardrobe.svg",
			text: "Гардеробна",
		},
		{
			currency: "грн",
			id: 13,
			measurement: null,
			name: "vacuumCleaner",
			price: "120",
			select: false,
			svg: "vacuum-cleaner.svg",
			text: "Пилосмок на замовлення",
		},
		{
			currency: "грн",
			id: 14,
			measurement: null,
			name: "stepladder",
			price: "300",
			select: false,
			svg: "stepladder.svg",
			text: "Стремянка на замовлення",
		},
		{
			currency: "грн",
			id: 15,
			measurement: null,
			name: "deliveryOfKeysInOneDirection",
			price: "250",
			select: false,
			svg: "delivery-of-keys-in-one-direction.svg",
			text: "Доставка ключів в одну сторону",
		},
		{
			currency: "грн",
			id: 16,
			measurement: null,
			name: "closet",
			price: "190",
			select: false,
			svg: "closet.svg",
			text: "Прибирання в шафі",
		},
		{
			currency: "грн",
			id: 17,
			measurement: null,
			name: "bathroom",
			price: "250",
			select: false,
			svg: "bathroom.svg",
			text: "+1 Санвузол (ванна/душова)",
		},
		{
			currency: "грн",
			id: 18,
			measurement: null,
			name: "toilet",
			price: "150",
			select: false,
			svg: "toilet.svg",
			text: "+Туалет (унітаз/рукомийник)",
		},
	];
	const [additionalServices, setAdditionalServices] = useState(obj);
	useEffect(() => {
		(() => {
			if (additionalServices === null) return;
			const res = additionalServices.filter((item) => item.select === true);
			onChange(res);
		})();
	}, [additionalServices]);
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
				7. Додаткові послуги
			</h2>
			<div className="additional-services">
				{renderedServices}
			</div>
		</section>
	);
}
export default AdditionalServices;