import React, {useEffect, useState} from 'react';

import TypeOfCleaning from "./TypeOfCleaning";
import TypeOfRoom from "./TypeOfRoom";
import AddCleaners from "./AddCleaners";
import QuantityRooms from "./QuantityRooms";
import QuantityBathrooms from "./QuantityBathrooms";

const Calculator = ({
	                    typeOfCleaning,
	                    typeOfRoom,
	                    quantityOfCleaner,
	                    quantityOfRooms,
	                    quantityOfBathroom,
}) => {
	const [typeCleaning, setTypeCleaning] = useState({});
	const [quantityCleaner, setQuantityCleaner] = useState({});
	const [typeRoom, setTypeRoom] = useState({});
	const [quantityRooms, setQuantityRooms] = useState({});
	const [quantityBathrooms, setQuantityBathrooms] = useState({});
	
	const handleTypeCleaning = (radioData) => {
		setTypeCleaning(radioData);
	};
	const handlerQuantityCleaner = (quantity) => {
		setQuantityCleaner(quantity);
	}
	const handleTypeRoom = (radioData) => {
		setTypeRoom(radioData);
	};
	const handleQuantityRooms = (quantity) => {
		setQuantityRooms(quantity);
	}
	const handleQuantityBathrooms = (quantity) => {
		setQuantityBathrooms(quantity);
	}
	useEffect(() => {
		typeOfCleaning(typeCleaning);
		typeOfRoom(typeRoom);
		quantityOfCleaner(quantityCleaner);
		quantityOfRooms(quantityRooms);
		quantityOfBathroom(quantityBathrooms);
	}, [
		typeCleaning,
		typeRoom,
		quantityCleaner,
		quantityRooms,
		quantityBathrooms,
	]);
	
	return (
		<div className="col-md-9 calculator">
			<TypeOfCleaning onChange={handleTypeCleaning}/>
			<AddCleaners onClick={handlerQuantityCleaner}/>
			<TypeOfRoom onChange={handleTypeRoom}/>
			<QuantityRooms onChange={handleQuantityRooms}/>
			<QuantityBathrooms onChange={handleQuantityBathrooms}/>
			
			{/*<section className="calculator-wrapper">*/}
			{/*	<h2 className="t-s-bold t-4">*/}
			{/*		5. Кількість санвузлів*/}
			{/*	</h2>*/}
			{/*	<div className="numberBathRooms">*/}
			{/*		<label className="radio-text" htmlFor="numberBathRooms1">*/}
			{/*			<input type="radio" name="numberBathRooms" id="numberBathRooms1"/>*/}
			{/*			<span>1</span>*/}
			{/*		</label>*/}
			{/*		<label className="radio-text" htmlFor="numberBathRooms2">*/}
			{/*			<input type="radio" name="numberBathRooms" id="numberBathRooms2"/>*/}
			{/*			<span>2</span>*/}
			{/*		</label>*/}
			{/*		<label className="radio-text" htmlFor="numberBathRooms3">*/}
			{/*			<input type="radio" name="numberBathRooms" id="numberBathRooms3"/>*/}
			{/*			<span>3</span>*/}
			{/*		</label>*/}
			{/*		<label className="radio-text" htmlFor="numberBathRooms4">*/}
			{/*			<input type="radio" name="numberBathRooms" id="numberBathRooms4"/>*/}
			{/*			<span>4</span>*/}
			{/*		</label>*/}
			{/*		<label className="radio-text" htmlFor="numberBathRooms5">*/}
			{/*			<input type="radio" name="numberBathRooms" id="numberBathRooms5"/>*/}
			{/*			<span>5</span>*/}
			{/*		</label>*/}
			{/*		<label className="radio-text" htmlFor="numberBathRooms6">*/}
			{/*			<input type="radio" name="numberBathRooms" id="numberBathRooms6"/>*/}
			{/*			<span>6</span>*/}
			{/*		</label>*/}
			{/*		<label className="input" htmlFor="numberBathRoomsInput">*/}
			{/*			<input type="number" name="numberBathRoomsInput" id="numberBathRoomsInput"*/}
			{/*			       placeholder="Введіть власноруч, якщо більше"/>*/}
			{/*		</label>*/}
			{/*	</div>*/}
			{/*</section>*/}
			{/*<section className="calculator-wrapper">*/}
			{/*	<h2 className="t-s-bold t-4">*/}
			{/*		6. Загальний метраж приміщення*/}
			{/*	</h2>*/}
			{/*	<div className="total-square-footage">*/}
			{/*		<div className="total-square-footage-range">*/}
			{/*			min 10m2 max 200m2*/}
			{/*		</div>*/}
			{/*		<label className="input" htmlFor="totalSquareFootage">*/}
			{/*			<input type="number" name="totalSquareFootage" id="totalSquareFootage"*/}
			{/*			       placeholder="Введіть власноруч, якщо більше"/>*/}
			{/*		</label>*/}
			{/*	</div>*/}
			{/*</section>*/}
			{/*<section className="calculator-wrapper">*/}
			{/*	<h2 className="t-s-bold t-4">*/}
			{/*		7. Додаткові послуги*/}
			{/*	</h2>*/}
			{/*	<div className="additional-services">*/}
			{/*		<div className="additional-services-item">*/}
			{/*			<input type="checkbox" name="ovenWashing" id="ovenWashing"/>*/}
			{/*			<label className="services" htmlFor="ovenWashing">*/}
			{/*				<span className="services-card">*/}
			{/*					<picture>*/}
			{/*						<source srcSet="./img/additional-services/oven-washing.svg" type="image/webp"/>*/}
			{/*						<img src="./img/additional-services/oven-washing.svg" alt=""/>*/}
			{/*					</picture>*/}
			{/*					<span className="services-wrapper">*/}
			{/*						<span className="services-title t-s-bold t-8">Миття духової шафи</span>*/}
			{/*						<span className="services-text t-bold t-4">300 грн</span>*/}
			{/*					</span>*/}
			{/*				</span>*/}
			{/*			</label>*/}
			{/*		</div>*/}
			{/*		<div className="additional-services-item">*/}
			{/*			<input type="checkbox" name="hoodWashing" id="hoodWashing"/>*/}
			{/*			<label className="services" htmlFor="hoodWashing">*/}
			{/*				<span className="services-card">*/}
			{/*					<picture>*/}
			{/*						<source srcSet="./img/additional-services/hood-washing.svg" type="image/webp"/>*/}
			{/*						<img src="./img/additional-services/hood-washing.svg" alt=""/>*/}
			{/*					</picture>*/}
			{/*					<span className="services-wrapper">*/}
			{/*						<span className="services-title t-s-bold t-8">Миття витяжки </span>*/}
			{/*						<span className="services-text t-bold t-4">200 грн</span>*/}
			{/*					</span>*/}
			{/*				</span>*/}
			{/*			</label>*/}
			{/*		</div>*/}
			{/*		<div className="additional-services-item">*/}
			{/*			<input type="checkbox" name="kitchenCabinets" id="kitchenCabinets"/>*/}
			{/*			<label className="services" htmlFor="kitchenCabinets">*/}
			{/*				<span className="services-card">*/}
			{/*					<picture>*/}
			{/*						<source srcSet="./img/additional-services/kitchen-cabinets.svg" type="image/webp"/>*/}
			{/*						<img src="./img/additional-services/kitchen-cabinets.svg" alt=""/>*/}
			{/*					</picture>*/}
			{/*					<span className="services-wrapper">*/}
			{/*						<span className="services-title t-s-bold t-8">Прибирання в кухонних шафах</span>*/}
			{/*						<span className="services-text t-bold t-4">300 грн</span>*/}
			{/*					</span>*/}
			{/*				</span>*/}
			{/*			</label>*/}
			{/*		</div>*/}
			{/*		<div className="additional-services-item">*/}
			{/*			<input type="checkbox" name="washingDishes" id="washingDishes"/>*/}
			{/*			<label className="services" htmlFor="washingDishes">*/}
			{/*			<span className="services-card">*/}
			{/*				<picture>*/}
			{/*					<source srcSet="./img/additional-services/washing-dishes.svg"*/}
			{/*				                 type="image/webp">*/}
			{/*						<img src="./img/additional-services/washing-dishes.svg"*/}
			{/*				                                        alt="">*/}
			{/*					</picture>*/}
			{/*				<span className="services-wrapper">*/}
			{/*					<span className="services-title t-s-bold t-8">Миття посуду</span>*/}
			{/*					<span className="services-text t-bold t-4">160 грн</span>*/}
			{/*				</span>*/}
			{/*			</span>*/}
			{/*			</label>*/}
			{/*		</div>*/}
			{/*		<div className="additional-services-item">*/}
			{/*			<input type="checkbox" name="fridge" id="fridge"/>*/}
			{/*			<label className="services" htmlFor="fridge">*/}
			{/*			<span className="services-card">*/}
			{/*				<picture><source srcSet="./img/additional-services/fridge.svg" type="image/webp"><img*/}
			{/*					src="./img/additional-services/fridge.svg" alt=""></picture>*/}
			{/*				<span className="services-wrapper">*/}
			{/*					<span className="services-title t-s-bold t-8">Миття холодильника</span>*/}
			{/*					<span className="services-text t-bold t-4">270 грн</span>*/}
			{/*				</span>*/}
			{/*			</span>*/}
			{/*			</label>*/}
			{/*		</div>*/}
			{/*		<div className="additional-services-item">*/}
			{/*			<input type="checkbox" name="microwaves" id="microwaves"/>*/}
			{/*			<label className="services" htmlFor="microwaves">*/}
			{/*			<span className="services-card">*/}
			{/*			<picture><source srcSet="./img/additional-services/microwaves.svg" type="image/webp"><img*/}
			{/*				src="./img/additional-services/microwaves.svg" alt=""></picture>*/}
			{/*				<span className="services-wrapper">*/}
			{/*					<span className="services-title t-s-bold t-8">Миття мікрохвильовки</span>*/}
			{/*					<span className="services-text t-bold t-4">160 грн</span>*/}
			{/*				</span>*/}
			{/*			</span>*/}
			{/*			</label>*/}
			{/*		</div>*/}
			{/*		<div className="additional-services-item">*/}
			{/*			<input type="checkbox" name="balcony" id="balcony"/>*/}
			{/*			<label className="services" htmlFor="balcony">*/}
			{/*			<span className="services-card">*/}
			{/*				<picture><source srcSet="./img/additional-services/balcony.svg" type="image/webp"><img*/}
			{/*					src="./img/additional-services/balcony.svg" alt=""></picture>*/}
			{/*				<span className="services-wrapper">*/}
			{/*					<span className="services-title t-s-bold t-8">Прибирання балкона</span>*/}
			{/*					<span className="services-text t-bold t-4">160 грн</span>*/}
			{/*				</span>*/}
			{/*			</span>*/}
			{/*			</label>*/}
			{/*		</div>*/}
			{/*		<div className="additional-services-item active">*/}
			{/*			<input type="checkbox" name="windowWashing" id="windowWashing"/>*/}
			{/*			<label className="services" htmlFor="windowWashing">*/}
			{/*			<span className="services-card">*/}
			{/*				<picture><source srcSet="./img/additional-services/window-washing.svg"*/}
			{/*				                 type="image/webp"><img src="./img/additional-services/window-washing.svg"*/}
			{/*				                                        alt=""></picture>*/}
			{/*				<span className="services-wrapper">*/}
			{/*					<span className="services-title t-s-bold t-8">Миття вікон </span>*/}
			{/*					<span className="services-text t-bold t-4">70 грн</span>*/}
			{/*				</span>*/}
			{/*			</span>*/}
			{/*				<label className="services-input" htmlFor="windowWashingInput">*/}
			{/*					<span className="t-8">Вкажіть площу у м2:</span>*/}
			{/*					<input type="number" name="windowWashingInput"*/}
			{/*					       id="windowWashingInput"*/}
			{/*					       placeholder="34 м2"/>*/}
			{/*				</label>*/}
			{/*			</label>*/}
			{/*		</div>*/}
			{/*		<div className="additional-services-item">*/}
			{/*			<input type="checkbox" name="animalTray" id="animalTray"/>*/}
			{/*			<label className="services" htmlFor="animalTray">*/}
			{/*			<span className="services-card">*/}
			{/*				<picture><source srcSet="./img/additional-services/animal-tray.svg" type="image/webp"><img*/}
			{/*					src="./img/additional-services/animal-tray.svg" alt=""></picture>*/}
			{/*				<span className="services-wrapper">*/}
			{/*					<span className="services-title t-s-bold t-8">Прибирання лотка для тварин</span>*/}
			{/*					<span className="services-text t-bold t-4">150 грн</span>*/}
			{/*				</span>*/}
			{/*			</span>*/}
			{/*			</label>*/}
			{/*		</div>*/}
			{/*		<div className="additional-services-item">*/}
			{/*			<input type="checkbox" name="oneHour" id="oneHour"/>*/}
			{/*			<label className="services" htmlFor="oneHour">*/}
			{/*			<span className="services-card">*/}
			{/*				<picture><source srcSet="./img/additional-services/one-hour.svg" type="image/webp"><img*/}
			{/*					src="./img/additional-services/one-hour.svg" alt=""></picture>*/}
			{/*				<span className="services-wrapper">*/}
			{/*					<span className="services-title t-s-bold t-8">Додаткова година</span>*/}
			{/*					<span className="services-text t-bold t-4">200 грн</span>*/}
			{/*				</span>*/}
			{/*			</span>*/}
			{/*			</label>*/}
			{/*		</div>*/}
			{/*		<div className="additional-services-item">*/}
			{/*			<input type="checkbox" name="kitchen" id="kitchen"/>*/}
			{/*			<label className="services" htmlFor="kitchen">*/}
			{/*			<span className="services-card">*/}
			{/*				<picture><source srcSet="./img/additional-services/kitchen.svg" type="image/webp"><img*/}
			{/*					src="./img/additional-services/kitchen.svg" alt=""></picture>*/}
			{/*				<span className="services-wrapper">*/}
			{/*					<span className="services-title t-s-bold t-8">Генеральне прибирання кухні</span>*/}
			{/*					<span className="services-text t-bold t-4">1400 грн</span>*/}
			{/*				</span>*/}
			{/*			</span>*/}
			{/*			</label>*/}
			{/*		</div>*/}
			{/*		<div className="additional-services-item">*/}
			{/*			<input type="checkbox" name="wardrobe" id="wardrobe"/>*/}
			{/*			<label className="services" htmlFor="wardrobe">*/}
			{/*			<span className="services-card">*/}
			{/*				<picture><source srcSet="./img/additional-services/wardrobe.svg" type="image/webp"><img*/}
			{/*					src="./img/additional-services/wardrobe.svg" alt=""></picture>*/}
			{/*				<span className="services-wrapper">*/}
			{/*					<span className="services-title t-s-bold t-8">Гардеробна</span>*/}
			{/*					<span className="services-text t-bold t-4">130 грн</span>*/}
			{/*				</span>*/}
			{/*			</span>*/}
			{/*			</label>*/}
			{/*		</div>*/}
			{/*		<div className="additional-services-item">*/}
			{/*			<input type="checkbox" name="vacuumCleaner" id="vacuumCleaner"/>*/}
			{/*			<label className="services" htmlFor="vacuumCleaner">*/}
			{/*			<span className="services-card">*/}
			{/*				<picture><source srcSet="./img/additional-services/vacuum-cleaner.svg"*/}
			{/*				                 type="image/webp"><img src="./img/additional-services/vacuum-cleaner.svg"*/}
			{/*				                                        alt=""></picture>*/}
			{/*				<span className="services-wrapper">*/}
			{/*					<span className="services-title t-s-bold t-8">Пилосмок на замовлення</span>*/}
			{/*					<span className="services-text t-bold t-4">120 грн</span>*/}
			{/*				</span>*/}
			{/*			</span>*/}
			{/*			</label>*/}
			{/*		</div>*/}
			{/*		<div className="additional-services-item">*/}
			{/*			<input type="checkbox" name="stepladder" id="stepladder"/>*/}
			{/*			<label className="services" htmlFor="stepladder">*/}
			{/*			<span className="services-card">*/}
			{/*				<picture><source srcSet="./img/additional-services/stepladder.svg" type="image/webp"><img*/}
			{/*					src="./img/additional-services/stepladder.svg" alt=""></picture>*/}
			{/*				<span className="services-wrapper">*/}
			{/*					<span className="services-title t-s-bold t-8">Стремянка на замовлення</span>*/}
			{/*					<span className="services-text t-bold t-4">300 грн</span>*/}
			{/*				</span>*/}
			{/*			</span>*/}
			{/*			</label>*/}
			{/*		</div>*/}
			{/*		<div className="additional-services-item">*/}
			{/*			<input type="checkbox" name="deliveryOfKeysInOneDirection"*/}
			{/*			       id="deliveryOfKeysInOneDirection"/>*/}
			{/*			<label className="services" htmlFor="deliveryOfKeysInOneDirection">*/}
			{/*			<span className="services-card">*/}
			{/*				<picture><source srcSet="./img/additional-services/delivery-of-keys-in-one-direction.svg"*/}
			{/*				                 type="image/webp"><img*/}
			{/*					src="./img/additional-services/delivery-of-keys-in-one-direction.svg" alt=""></picture>*/}
			{/*				<span className="services-wrapper">*/}
			{/*					<span className="services-title t-s-bold t-8">Доставка ключів в одну сторону</span>*/}
			{/*					<span className="services-text t-bold t-4">250 грн</span>*/}
			{/*				</span>*/}
			{/*			</span>*/}
			{/*			</label>*/}
			{/*		</div>*/}
			{/*		<div className="additional-services-item">*/}
			{/*			<input type="checkbox" name="closet" id="closet"/>*/}
			{/*			<label className="services" htmlFor="closet">*/}
			{/*			<span className="services-card">*/}
			{/*				<picture><source srcSet="./img/additional-services/closet.svg" type="image/webp"><img*/}
			{/*					src="./img/additional-services/closet.svg" alt=""></picture>*/}
			{/*				<span className="services-wrapper">*/}
			{/*					<span className="services-title t-s-bold t-8">Прибирання в шафі</span>*/}
			{/*					<span className="services-text t-bold t-4">190 грн</span>*/}
			{/*				</span>*/}
			{/*			</span>*/}
			{/*			</label>*/}
			{/*		</div>*/}
			{/*		<div className="additional-services-item">*/}
			{/*			<input type="checkbox" name="bathroom" id="bathroom"/>*/}
			{/*			<label className="services" htmlFor="bathroom">*/}
			{/*			<span className="services-card">*/}
			{/*				<picture><source srcSet="./img/additional-services/bathroom.svg" type="image/webp"><img*/}
			{/*					src="./img/additional-services/bathroom.svg" alt=""></picture>*/}
			{/*				<span className="services-wrapper">*/}
			{/*					<span className="services-title t-s-bold t-8">+1 Санвузол (ванна/душова)</span>*/}
			{/*					<span className="services-text t-bold t-4">250 грн</span>*/}
			{/*				</span>*/}
			{/*			</span>*/}
			{/*			</label>*/}
			{/*		</div>*/}
			{/*		<div className="additional-services-item">*/}
			{/*			<input type="checkbox" name="toilet" id="toilet"/>*/}
			{/*			<label className="services" htmlFor="toilet">*/}
			{/*			<span className="services-card">*/}
			{/*				<picture><source srcSet="./img/additional-services/toilet.svg" type="image/webp"><img*/}
			{/*					src="./img/additional-services/toilet.svg" alt=""></picture>*/}
			{/*				<span className="services-wrapper">*/}
			{/*					<span className="services-title t-s-bold t-8">+Туалет (унітаз/рукомийник)</span>*/}
			{/*					<span className="services-text t-bold t-4">150 грн</span>*/}
			{/*				</span>*/}
			{/*			</span>*/}
			{/*			</label>*/}
			{/*		</div>*/}
			{/*	</div>*/}
			{/*</section>*/}
			{/*<section className="calculator-wrapper">*/}
			{/*	<h2 className="t-s-bold t-4">*/}
			{/*		8. Замовити хімчистку меблів та килимів*/}
			{/*	</h2>*/}
			{/*	<h3 className="t-s-bold t-6">*/}
			{/*		Замовити хімчистку одночасно з прибиранням та отримати 30% знижки*/}
			{/*	</h3>*/}
			{/*	<div className="additional-services">*/}
			{/*		<div className="additional-services-item">*/}
			{/*			<input type="checkbox" name="doubleSofa" id="doubleSofa">*/}
			{/*				<label className="services" htmlFor="doubleSofa">*/}
			{/*			<span className="services-card">*/}
			{/*				<picture><source srcSet="./img/additional-services/double-sofa.svg" type="image/webp"><img*/}
			{/*					src="./img/additional-services/double-sofa.svg" alt=""/></picture>*/}
			{/*				<span className="services-wrapper">*/}
			{/*					<span className="services-title t-s-bold t-8">Двомісний диван</span>*/}
			{/*					<span className="services-text t-bold t-4">450 грн</span>*/}
			{/*				</span>*/}
			{/*			</span>*/}
			{/*				</label>*/}
			{/*		</div>*/}
			{/*		<div className="additional-services-item">*/}
			{/*			<input type="checkbox" name="threeSeaterSofa" id="threeSeaterSofa">*/}
			{/*				<label className="services" htmlFor="threeSeaterSofa">*/}
			{/*			<span className="services-card">*/}
			{/*				<picture><source srcSet="./img/additional-services/three-seater-sofa.svg" type="image/webp"><img*/}
			{/*					src="./img/additional-services/three-seater-sofa.svg" alt=""></picture>*/}
			{/*				<span className="services-wrapper">*/}
			{/*					<span className="services-title t-s-bold t-8">Тримісний диван</span>*/}
			{/*					<span className="services-text t-bold t-4">600 грн</span>*/}
			{/*				</span>*/}
			{/*			</span>*/}
			{/*				</label>*/}
			{/*		</div>*/}
			{/*		<div className="additional-services-item">*/}
			{/*			<input type="checkbox" name="fourSeaterSofa" id="fourSeaterSofa">*/}
			{/*				<label className="services" htmlFor="fourSeaterSofa">*/}
			{/*			<span className="services-card">*/}
			{/*				<picture><source srcSet="./img/additional-services/four-seater-sofa.svg"*/}
			{/*				                 type="image/webp"><img src="./img/additional-services/four-seater-sofa.svg"*/}
			{/*				                                        alt=""></picture>*/}
			{/*				<span className="services-wrapper">*/}
			{/*					<span className="services-title t-s-bold t-8">Чотиримісний диван</span>*/}
			{/*					<span className="services-text t-bold t-4">900 грн</span>*/}
			{/*				</span>*/}
			{/*			</span>*/}
			{/*				</label>*/}
			{/*		</div>*/}
			{/*		<div className="additional-services-item">*/}
			{/*			<input type="checkbox" name="cornerSofa5-6Seats" id="cornerSofa5-6Seats">*/}
			{/*				<label className="services" htmlFor="cornerSofa5-6Seats">*/}
			{/*			<span className="services-card">*/}
			{/*				<picture><source srcSet="./img/additional-services/corner-sofa-5-6-seats.svg"*/}
			{/*				                 type="image/webp"><img*/}
			{/*					src="./img/additional-services/corner-sofa-5-6-seats.svg" alt=""></picture>*/}
			{/*				<span className="services-wrapper">*/}
			{/*					<span className="services-title t-s-bold t-8">Кутовий диван (5-6 місць)</span>*/}
			{/*					<span className="services-text t-bold t-4">1 000 грн</span>*/}
			{/*				</span>*/}
			{/*			</span>*/}
			{/*				</label>*/}
			{/*		</div>*/}
			{/*		<div className="additional-services-item">*/}
			{/*			<input type="checkbox" name="cornerSofa7PlusSeats" id="cornerSofa7PlusSeats">*/}
			{/*				<label className="services" htmlFor="cornerSofa7PlusSeats">*/}
			{/*			<span className="services-card">*/}
			{/*				<picture><source srcSet="./img/additional-services/corner-sofa-7plus-seats.svg"*/}
			{/*				                 type="image/webp"><img*/}
			{/*					src="./img/additional-services/corner-sofa-7plus-seats.svg" alt=""></picture>*/}
			{/*				<span className="services-wrapper">*/}
			{/*					<span className="services-title t-s-bold t-8">Кутовий диван (7+ місць)</span>*/}
			{/*					<span className="services-text t-bold t-4">1 100 грн</span>*/}
			{/*				</span>*/}
			{/*			</span>*/}
			{/*				</label>*/}
			{/*		</div>*/}
			{/*		<div className="additional-services-item">*/}
			{/*			<input type="checkbox" name="singleMattress1Side" id="singleMattress1Side">*/}
			{/*				<label className="services" htmlFor="singleMattress1Side">*/}
			{/*			<span className="services-card">*/}
			{/*				<picture><source srcSet="./img/additional-services/single-mattress-1-side.svg"*/}
			{/*				                 type="image/webp"><img*/}
			{/*					src="./img/additional-services/single-mattress-1-side.svg" alt=""></picture>*/}
			{/*				<span className="services-wrapper">*/}
			{/*					<span className="services-title t-s-bold t-8">Односпальний матрац 1 сторона</span>*/}
			{/*					<span className="services-text t-bold t-4">250 грн</span>*/}
			{/*				</span>*/}
			{/*			</span>*/}
			{/*				</label>*/}
			{/*		</div>*/}
			{/*		<div className="additional-services-item">*/}
			{/*			<input type="checkbox" name="singleMattress2Sides" id="singleMattress2Sides">*/}
			{/*				<label className="services" htmlFor="singleMattress2Sides">*/}
			{/*			<span className="services-card">*/}
			{/*				<picture><source srcSet="./img/additional-services/single-mattress-2-sides.svg"*/}
			{/*				                 type="image/webp"><img*/}
			{/*					src="./img/additional-services/single-mattress-2-sides.svg" alt=""></picture>*/}
			{/*				<span className="services-wrapper">*/}
			{/*					<span className="services-title t-s-bold t-8">Односпальний матрац 2 сторони</span>*/}
			{/*					<span className="services-text t-bold t-4">400 грн</span>*/}
			{/*				</span>*/}
			{/*			</span>*/}
			{/*				</label>*/}
			{/*		</div>*/}
			{/*		<div className="additional-services-item">*/}
			{/*			<input type="checkbox" name="twoBedMattress1Side" id="twoBedMattress1Side">*/}
			{/*				<label className="services" htmlFor="twoBedMattress1Side">*/}
			{/*			<span className="services-card">*/}
			{/*				<picture><source srcSet="./img/additional-services/two-bed-mattress-1-side.svg"*/}
			{/*				                 type="image/webp"><img*/}
			{/*					src="./img/additional-services/two-bed-mattress-1-side.svg" alt=""></picture>*/}
			{/*				<span className="services-wrapper">*/}
			{/*					<span className="services-title t-s-bold t-8">2-спальний матрац 1 сторона</span>*/}
			{/*					<span className="services-text t-bold t-4">400 грн</span>*/}
			{/*				</span>*/}
			{/*			</span>*/}
			{/*				</label>*/}
			{/*		</div>*/}
			{/*		<div className="additional-services-item">*/}
			{/*			<input type="checkbox" name="twoBedMattress2Side" id="twoBedMattress2Side">*/}
			{/*				<label className="services" htmlFor="twoBedMattress2Side">*/}
			{/*			<span className="services-card">*/}
			{/*				<picture><source srcSet="./img/additional-services/two-bed-mattress-2-side.svg"*/}
			{/*				                 type="image/webp"><img*/}
			{/*					src="./img/additional-services/two-bed-mattress-2-side.svg" alt=""></picture>*/}
			{/*				<span className="services-wrapper">*/}
			{/*					<span className="services-title t-s-bold t-8">2-спальний матрац 2 сторона</span>*/}
			{/*					<span className="services-text t-bold t-4">800 грн</span>*/}
			{/*				</span>*/}
			{/*			</span>*/}
			{/*				</label>*/}
			{/*		</div>*/}
			{/*		<div className="additional-services-item">*/}
			{/*			<input type="checkbox" name="chair" id="chair">*/}
			{/*				<label className="services" htmlFor="chair">*/}
			{/*			<span className="services-card">*/}
			{/*				<picture><source srcSet="./img/additional-services/chair.svg" type="image/webp"><img*/}
			{/*					src="./img/additional-services/chair.svg" alt=""></picture>*/}
			{/*				<span className="services-wrapper">*/}
			{/*					<span className="services-title t-s-bold t-8">Крісло</span>*/}
			{/*					<span className="services-text t-bold t-4">250 грн</span>*/}
			{/*				</span>*/}
			{/*			</span>*/}
			{/*				</label>*/}
			{/*		</div>*/}
			{/*		<div className="additional-services-item">*/}
			{/*			<input type="checkbox" name="stoolOrStool" id="stoolOrStool">*/}
			{/*				<label className="services" htmlFor="stoolOrStool">*/}
			{/*			<span className="services-card">*/}
			{/*				<picture><source srcSet="./img/additional-services/stool-or-a-stool.svg"*/}
			{/*				                 type="image/webp"><img src="./img/additional-services/stool-or-a-stool.svg"*/}
			{/*				                                        alt=""></picture>*/}
			{/*				<span className="services-wrapper">*/}
			{/*					<span className="services-title t-s-bold t-8">Стілець або табурет</span>*/}
			{/*					<span className="services-text t-bold t-4">90 грн</span>*/}
			{/*				</span>*/}
			{/*			</span>*/}
			{/*				</label>*/}
			{/*		</div>*/}
			{/*		<div className="additional-services-item">*/}
			{/*			<input type="checkbox" name="officeChair" id="officeChair">*/}
			{/*				<label className="services" htmlFor="officeChair">*/}
			{/*			<span className="services-card">*/}
			{/*				<picture><source srcSet="./img/additional-services/office-chair.svg" type="image/webp"><img*/}
			{/*					src="./img/additional-services/office-chair.svg" alt=""></picture>*/}
			{/*				<span className="services-wrapper">*/}
			{/*					<span className="services-title t-s-bold t-8">Офісний стілець</span>*/}
			{/*					<span className="services-text t-bold t-4">100 грн</span>*/}
			{/*				</span>*/}
			{/*			</span>*/}
			{/*				</label>*/}
			{/*		</div>*/}
			{/*		<div className="additional-services-item">*/}
			{/*			<input type="checkbox" name="softHeadboard" id="softHeadboard">*/}
			{/*				<label className="services" htmlFor="softHeadboard">*/}
			{/*			<span className="services-card">*/}
			{/*				<picture><source srcSet="./img/additional-services/soft-headboard.svg"*/}
			{/*				                 type="image/webp"><img src="./img/additional-services/soft-headboard.svg"*/}
			{/*				                                        alt=""></picture>*/}
			{/*				<span className="services-wrapper">*/}
			{/*					<span className="services-title t-s-bold t-8">Мʼяке узголівʼя ліжка</span>*/}
			{/*					<span className="services-text t-bold t-4">500 грн</span>*/}
			{/*				</span>*/}
			{/*			</span>*/}
			{/*				</label>*/}
			{/*		</div>*/}
			{/*		<div className="additional-services-item">*/}
			{/*			<input type="checkbox" name="babyCarriage" id="babyCarriage">*/}
			{/*				<label className="services" htmlFor="babyCarriage">*/}
			{/*			<span className="services-card">*/}
			{/*				<picture><source srcSet="./img/additional-services/baby-carriage.svg" type="image/webp"><img*/}
			{/*					src="./img/additional-services/baby-carriage.svg" alt=""></picture>*/}
			{/*				<span className="services-wrapper">*/}
			{/*					<span className="services-title t-s-bold t-8">Дитячій візок</span>*/}
			{/*					<span className="services-text t-bold t-4">500 грн</span>*/}
			{/*				</span>*/}
			{/*			</span>*/}
			{/*				</label>*/}
			{/*		</div>*/}
			{/*		<div className="additional-services-item active">*/}
			{/*			<input type="checkbox" name="carpet" id="carpet">*/}
			{/*				<label className="services" htmlFor="carpet">*/}
			{/*			<span className="services-card">*/}
			{/*				<picture><source srcSet="./img/additional-services/carpet.svg" type="image/webp"><img*/}
			{/*					src="./img/additional-services/carpet.svg" alt=""></picture>*/}
			{/*				<span className="services-wrapper">*/}
			{/*					<span className="services-title t-s-bold t-8">Килим (м2)</span>*/}
			{/*					<span className="services-text t-bold t-4">70 грн</span>*/}
			{/*				</span>*/}
			{/*			</span>*/}
			{/*					<label className="services-input" htmlFor="carpetInput">*/}
			{/*						<span className="t-8">Вкажіть площу у м2:</span>*/}
			{/*						<input type="number" name="carpetInput" id="carpetInput"*/}
			{/*						       placeholder="34 м2">*/}
			{/*					</label>*/}
			{/*				</label>*/}
			{/*		</div>*/}
			{/*		<div className="additional-services-item active">*/}
			{/*			<input type="checkbox" name="carpeting" id="carpeting">*/}
			{/*				<label className="services" htmlFor="carpeting">*/}
			{/*			<span className="services-card">*/}
			{/*				<picture><source srcSet="./img/additional-services/carpeting.svg" type="image/webp"><img*/}
			{/*					src="./img/additional-services/carpeting.svg" alt=""></picture>*/}
			{/*				<span className="services-wrapper">*/}
			{/*					<span className="services-title t-s-bold t-8">Килимове покриття (м2)</span>*/}
			{/*					<span className="services-text t-bold t-4">70 грн</span>*/}
			{/*				</span>*/}
			{/*			</span>*/}
			{/*					<label className="services-input" htmlFor="carpetingInput">*/}
			{/*						<span className="t-8">Вкажіть площу у м2:</span>*/}
			{/*						<input type="number" name="carpetingInput" id="carpetingInput"*/}
			{/*						       placeholder="34 м2">*/}
			{/*					</label>*/}
			{/*				</label>*/}
			{/*		</div>*/}
			{/*	</div>*/}
			{/*</section>*/}
			{/*<section className="calculator-wrapper">*/}
			{/*	<h2 className="t-s-bold t-4">*/}
			{/*		9. Послуги з прання білизни*/}
			{/*	</h2>*/}
			{/*	<div className="additional-services widthX2">*/}
			{/*		<div className="additional-services-item">*/}
			{/*			<input type="checkbox" name="bedLinenTowels" id="bedLinenTowels">*/}
			{/*				<label className="services" htmlFor="bedLinenTowels">*/}
			{/*			<span className="services-card">*/}
			{/*				<picture><source srcSet="./img/additional-services/bed-linen-towels.svg"*/}
			{/*				                 type="image/webp"><img src="./img/additional-services/bed-linen-towels.svg"*/}
			{/*				                                        alt=""></picture>*/}
			{/*				<span className="services-wrapper">*/}
			{/*					<span className="services-title t-s-bold t-8">Постільна білизна, рушники</span>*/}
			{/*					<span className="services-text t-bold t-4">75 грн / кг</span>*/}
			{/*				</span>*/}
			{/*			</span>*/}
			{/*					<label className="services-input" htmlFor="bedLinenTowelsInput">*/}
			{/*						<span className="t-8">Вкажіть вагу у кг:</span>*/}
			{/*						<input type="number" name="bedLinenTowelsInput"*/}
			{/*						       id="bedLinenTowelsInput"*/}
			{/*						       placeholder="5 кг">*/}
			{/*					</label>*/}
			{/*				</label>*/}
			{/*		</div>*/}
			{/*		<div className="additional-services-item">*/}
			{/*			<input type="checkbox" name="clothes" id="clothes">*/}
			{/*				<label className="services" htmlFor="clothes">*/}
			{/*			<span className="services-card">*/}
			{/*				<picture><source srcSet="./img/additional-services/clothes.svg" type="image/webp"><img*/}
			{/*					src="./img/additional-services/clothes.svg" alt=""></picture>*/}
			{/*				<span className="services-wrapper">*/}
			{/*					<span className="services-title t-s-bold t-8">Одяг - футболки, сорочки, джинси, реглани, махрові халати</span>*/}
			{/*					<span className="services-text t-bold t-4">70 грн / кг</span>*/}
			{/*				</span>*/}
			{/*			</span>*/}
			{/*					<label className="services-input" htmlFor="clothesInput">*/}
			{/*						<span className="t-8">Вкажіть вагу у кг:</span>*/}
			{/*						<input type="number" name="clothesInput" id="clothesInput"*/}
			{/*						       placeholder="5 кг">*/}
			{/*					</label>*/}
			{/*				</label>*/}
			{/*		</div>*/}
			{/*		<div className="additional-services-item">*/}
			{/*			<input type="checkbox" name="curtainsWithoutIroning"*/}
			{/*			       id="curtainsWithoutIroning">*/}
			{/*				<label className="services" htmlFor="curtainsWithoutIroning">*/}
			{/*			<span className="services-card">*/}
			{/*				<picture><source srcSet="./img/additional-services/curtains-without-ironing.svg"*/}
			{/*				                 type="image/webp"><img*/}
			{/*					src="./img/additional-services/curtains-without-ironing.svg" alt=""></picture>*/}
			{/*				<span className="services-wrapper">*/}
			{/*					<span className="services-title t-s-bold t-8">Штори, гардини (без прасування)</span>*/}
			{/*					<span className="services-text t-bold t-4">150 грн / кг</span>*/}
			{/*				</span>*/}
			{/*			</span>*/}
			{/*					<label className="services-input" htmlFor="curtainsWithoutIroningInput">*/}
			{/*						<span className="t-8">Вкажіть вагу у кг:</span>*/}
			{/*						<input type="number" name="curtainsWithoutIroningInput"*/}
			{/*						       id="curtainsWithoutIroningInput" placeholder="5 кг">*/}
			{/*					</label>*/}
			{/*				</label>*/}
			{/*		</div>*/}
			{/*		<div className="additional-services-item">*/}
			{/*			<input type="checkbox" name="blanketBlanketBedspread"*/}
			{/*			       id="blanketBlanketBedspread">*/}
			{/*				<label className="services" htmlFor="blanketBlanketBedspread">*/}
			{/*			<span className="services-card">*/}
			{/*				<picture><source srcSet="./img/additional-services/blanket-blanket-bedspread.svg"*/}
			{/*				                 type="image/webp"><img*/}
			{/*					src="./img/additional-services/blanket-blanket-bedspread.svg" alt=""></picture>*/}
			{/*				<span className="services-wrapper">*/}
			{/*					<span className="services-title t-s-bold t-8">Ковдра, плед, покривало</span>*/}
			{/*					<span className="services-text t-bold t-4">350 грн / кг</span>*/}
			{/*				</span>*/}
			{/*			</span>*/}
			{/*					<label className="services-input"*/}
			{/*					       htmlFor="blanketBlanketBedspreadInput">*/}
			{/*						<span className="t-8">Вкажіть вагу у кг:</span>*/}
			{/*						<input type="number" name="blanketBlanketBedspreadInput"*/}
			{/*						       id="blanketBlanketBedspreadInput" placeholder="5 кг">*/}
			{/*					</label>*/}
			{/*				</label>*/}
			{/*		</div>*/}
			{/*		<div className="additional-services-item">*/}
			{/*			<input type="checkbox" name="blanketBlanketBedspreadNaturalWoolFluff"*/}
			{/*			       id="blanketBlanketBedspreadNaturalWoolFluff">*/}
			{/*				<label className="services"*/}
			{/*				       htmlFor="blanketBlanketBedspreadNaturalWoolFluff">*/}
			{/*			<span className="services-card">*/}
			{/*				<picture><source*/}
			{/*					srcSet="./img/additional-services/blanket-blanket-bedspread-natural-wool-fluff.svg"*/}
			{/*					type="image/webp"><img*/}
			{/*					src="./img/additional-services/blanket-blanket-bedspread-natural-wool-fluff.svg" alt=""></picture>*/}
			{/*				<span className="services-wrapper">*/}
			{/*					<span*/}
			{/*						className="services-title t-s-bold t-8">Ковдра, плед, покривало (натур. вовна, пух)</span>*/}
			{/*					<span className="services-text t-bold t-4">450 грн / кг</span>*/}
			{/*				</span>*/}
			{/*			</span>*/}
			{/*					<label className="services-input"*/}
			{/*					       htmlFor="blanketBlanketBedspreadNaturalWoolFluffInput">*/}
			{/*						<span className="t-8">Вкажіть вагу у кг:</span>*/}
			{/*						<input type="number"*/}
			{/*						       name="blanketBlanketBedspreadNaturalWoolFluffInput"*/}
			{/*						       id="blanketBlanketBedspreadNaturalWoolFluffInput"*/}
			{/*						       placeholder="5 кг">*/}
			{/*					</label>*/}
			{/*				</label>*/}
			{/*		</div>*/}
			{/*		<div className="additional-services-item">*/}
			{/*			<input type="checkbox" name="laundryDelivery" id="laundryDelivery">*/}
			{/*				<label className="services" htmlFor="laundryDelivery">*/}
			{/*			<span className="services-card">*/}
			{/*				<picture><source srcSet="./img/additional-services/laundry-delivery.svg"*/}
			{/*				                 type="image/webp"><img src="./img/additional-services/laundry-delivery.svg"*/}
			{/*				                                        alt=""></picture>*/}
			{/*				<span className="services-wrapper">*/}
			{/*					<span className="services-title t-s-bold t-8">Доставка білизни</span>*/}
			{/*					<span className="services-text t-bold t-4">250 грн / кг</span>*/}
			{/*				</span>*/}
			{/*			</span>*/}
			{/*					<label className="services-input" htmlFor="laundryDeliveryInput">*/}
			{/*						<span className="t-8">Вкажіть вагу у кг:</span>*/}
			{/*						<input type="number" name="laundryDeliveryInput"*/}
			{/*						       id="laundryDeliveryInput"*/}
			{/*						       placeholder="5 кг">*/}
			{/*					</label>*/}
			{/*				</label>*/}
			{/*		</div>*/}
			{/*	</div>*/}
			{/*</section>*/}
			{/*<section className="calculator-wrapper">*/}
			{/*	<h2 className="t-s-bold t-4">*/}
			{/*		10. Дата та час*/}
			{/*	</h2>*/}
			{/*	<div className="calendar-time">*/}
			{/*		<div className="calendar-pick">*/}
			{/*		*/}
			{/*		</div>*/}
			{/*		<div className="time-pick">*/}
			{/*			<label className="radio-text" htmlFor="time1">*/}
			{/*				<input type="radio" name="time" id="time1">*/}
			{/*					<span>9:00</span>*/}
			{/*			</label>*/}
			{/*			<label className="radio-text" htmlFor="time2">*/}
			{/*				<input type="radio" name="time" id="time2">*/}
			{/*					<span>9:30</span>*/}
			{/*			</label>*/}
			{/*			<label className="radio-text" htmlFor="time3">*/}
			{/*				<input type="radio" name="time" id="time3">*/}
			{/*					<span>10:00</span>*/}
			{/*			</label>*/}
			{/*			<label className="radio-text" htmlFor="time4">*/}
			{/*				<input type="radio" name="time" id="time4">*/}
			{/*					<span>10:30</span>*/}
			{/*			</label>*/}
			{/*			<label className="radio-text" htmlFor="time5">*/}
			{/*				<input type="radio" name="time" id="time5">*/}
			{/*					<span>11:00</span>*/}
			{/*			</label>*/}
			{/*			<label className="radio-text" htmlFor="time6">*/}
			{/*				<input type="radio" name="time" id="time6">*/}
			{/*					<span>11:30</span>*/}
			{/*			</label>*/}
			{/*			<label className="radio-text" htmlFor="time7">*/}
			{/*				<input type="radio" name="time" id="time7">*/}
			{/*					<span>12:00</span>*/}
			{/*			</label>*/}
			{/*			<label className="radio-text" htmlFor="time8">*/}
			{/*				<input type="radio" name="time" id="time8">*/}
			{/*					<span>12:30</span>*/}
			{/*			</label>*/}
			{/*			<label className="radio-text" htmlFor="time9">*/}
			{/*				<input type="radio" name="time" id="time9">*/}
			{/*					<span>13:00</span>*/}
			{/*			</label>*/}
			{/*			<label className="radio-text" htmlFor="time10">*/}
			{/*				<input type="radio" name="time" id="time10">*/}
			{/*					<span>13:30</span>*/}
			{/*			</label>*/}
			{/*			<label className="radio-text" htmlFor="time11">*/}
			{/*				<input type="radio" name="time" id="time11">*/}
			{/*					<span>14:00</span>*/}
			{/*			</label>*/}
			{/*			<label className="radio-text" htmlFor="time12">*/}
			{/*				<input type="radio" name="time" id="time12">*/}
			{/*					<span>14:30</span>*/}
			{/*			</label>*/}
			{/*			<label className="radio-text" htmlFor="time13">*/}
			{/*				<input type="radio" name="time" id="time13">*/}
			{/*					<span>15:00</span>*/}
			{/*			</label>*/}
			{/*			<label className="radio-text" htmlFor="time14">*/}
			{/*				<input type="radio" name="time" id="time14">*/}
			{/*					<span>15:30</span>*/}
			{/*			</label>*/}
			{/*			<label className="radio-text" htmlFor="time15">*/}
			{/*				<input type="radio" name="time" id="time15">*/}
			{/*					<span>16:00</span>*/}
			{/*			</label>*/}
			{/*			<label className="radio-text" htmlFor="time16">*/}
			{/*				<input type="radio" name="time" id="time16">*/}
			{/*					<span>16:30</span>*/}
			{/*			</label>*/}
			{/*			<label className="radio-text" htmlFor="time17">*/}
			{/*				<input type="radio" name="time" id="time17">*/}
			{/*					<span>17:00</span>*/}
			{/*			</label>*/}
			{/*			<label className="radio-text" htmlFor="time18">*/}
			{/*				<input type="radio" name="time" id="time18">*/}
			{/*					<span>17:30</span>*/}
			{/*			</label>*/}
			{/*			<label className="radio-text" htmlFor="time19">*/}
			{/*				<input type="radio" name="time" id="time19">*/}
			{/*					<span>18:00</span>*/}
			{/*			</label>*/}
			{/*			<label className="radio-text" htmlFor="time20">*/}
			{/*				<input type="radio" name="time" id="time20">*/}
			{/*					<span>18:30</span>*/}
			{/*			</label>*/}
			{/*			<label className="radio-text" htmlFor="time21">*/}
			{/*				<input type="radio" name="time" id="time21">*/}
			{/*					<span>19:00</span>*/}
			{/*			</label>*/}
			{/*		</div>*/}
			{/*	</div>*/}
			{/*</section>*/}
			{/*<section className="calculator-wrapper">*/}
			{/*	<h2 className="t-s-bold t-4">*/}
			{/*		11. Вкажіть вашу адресу*/}
			{/*	</h2>*/}
			{/*	<div className="address">*/}
			{/*		<label className="input" htmlFor="street">*/}
			{/*			<input type="text" name="street" id="street" placeholder="Вулиця" required/>*/}
			{/*		</label>*/}
			{/*		<label className="input" htmlFor="apartmentNo">*/}
			{/*			<input type="tel" name="apartmentNo" id="apartmentNo" placeholder="№ квартири"*/}
			{/*			       required/>*/}
			{/*		</label>*/}
			{/*		<label className="input" htmlFor="houseNo">*/}
			{/*			<input type="email" name="houseNo" id="houseNo" placeholder="№ будинку"*/}
			{/*			       required/>*/}
			{/*		</label>*/}
			{/*		<label className="input" htmlFor="caseNo">*/}
			{/*			<input type="text" name="caseNo" id="caseNo" placeholder="№ корпусу" required/>*/}
			{/*		</label>*/}
			{/*		<label className="input" htmlFor="entranceNo">*/}
			{/*			<input type="tel" name="entranceNo" id="entranceNo" placeholder="№ підʼїзду"*/}
			{/*			       required/>*/}
			{/*		</label>*/}
			{/*		<label className="input" htmlFor="floorNo">*/}
			{/*			<input type="email" name="floorNo" id="floorNo" placeholder="№ Поверх" required/>*/}
			{/*		</label>*/}
			{/*		<label className="input" htmlFor="intercomCode">*/}
			{/*			<input type="email" name="intercomCode" id="intercomCode"*/}
			{/*			       placeholder="Код домофона"*/}
			{/*			       required/>*/}
			{/*		</label>*/}
			{/*	</div>*/}
			{/*</section>*/}
			{/*<section className="calculator-wrapper">*/}
			{/*	<h2 className="t-s-bold t-4">*/}
			{/*		12. Вкажіть ваші контактні дані*/}
			{/*	</h2>*/}
			{/*	<div className="contact-data">*/}
			{/*		<label className="input" htmlFor="userName">*/}
			{/*			<input type="text" name="userName" id="userName" placeholder="Ваше імʼя"*/}
			{/*			       required/>*/}
			{/*		</label>*/}
			{/*		<label className="input" htmlFor="userTel">*/}
			{/*			<input type="tel" name="userTel" id="userTel"*/}
			{/*			       placeholder="+38 (0 _ _ ) - _ _ _ - _ _ - _ _" required/>*/}
			{/*		</label>*/}
			{/*		<label className="input" htmlFor="userEmail">*/}
			{/*			<input type="email" name="userEmail" id="userEmail" placeholder="Email"*/}
			{/*			       required/>*/}
			{/*		</label>*/}
			{/*		<label className="textarea" htmlFor="comment">*/}
			{/*			<textarea name="comment" id="comment" cols="30" rows="10" placeholder="Коментар (опціонно)"/>*/}
			{/*		</label>*/}
			{/*		<p className="contact-text">*/}
			{/*			Наш менеджер звʼяжеться з вами для уточнення деталей або для підтвердження*/}
			{/*			замовлення.*/}
			{/*			Або чекайте повідомлення з підтвердженням замовлення у ваших месенджерах.*/}
			{/*		</p>*/}
			{/*	</div>*/}
			{/*</section>*/}
		</div>
	);
}
export default Calculator;