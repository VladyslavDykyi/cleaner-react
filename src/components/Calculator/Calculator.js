import React, {useEffect, useState} from 'react';

import TypeOfCleaning from "./TypeOfCleaning";
import TypeOfRoom from "./TypeOfRoom";
import AddCleaners from "./AddCleaners";
import QuantityRooms from "./QuantityRooms";
import QuantityBathrooms from "./QuantityBathrooms";
import TotalAreaRoom from "./TotalAreaRoom";
import ContactData from "./ContactData";
import AddressData from "./AddressData";
import DataOfTime from "./DataOfTime";

const Calculator = ({
	                    typeOfCleaning,
	                    typeOfRoom,
	                    quantityOfCleaner,
	                    quantityOfRooms,
	                    quantityOfBathroom,
	                    areaOfRoom,
	                    formOfContact,
	                    formOfAddress,
	                    dataInp,
						timeInp,
                    }) => {
	return (
		<div className="col-md-9 calculator">
			<TypeOfCleaning onChange={typeOfCleaning}/>
			<AddCleaners onClick={quantityOfCleaner}/>
			<TypeOfRoom onChange={typeOfRoom}/>
			<QuantityRooms onChange={quantityOfRooms}/>
			<QuantityBathrooms onChange={quantityOfBathroom}/>
			<TotalAreaRoom onChange={areaOfRoom}/>
			<DataOfTime onChangeTime={timeInp} onChangeData={dataInp}/>
			<AddressData getData={formOfAddress}/>
			<ContactData getData={formOfContact}/>
			
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
		
		
		</div>
	);
}
export default Calculator;