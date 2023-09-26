import React from "react";

const Aside = ({
	               typeOfRoom,
	               typeOfCleaning,
	               quantityOfCleaner,
	               quantityOfRooms,
	               quantityOfBathroom,
	               areaOfRoom,
	               data,
	               time,
               }) => {
	console.log(areaOfRoom)
	const renderData = (content) => {
		return (
			<span>
				{content}
			</span>
		);
	}
	const renderTime = (content) => {
		return (
			<span>
				{content.time}
			</span>
		);
	}
	const renderElem = ({content}) => {
		if ( !content) return;
		return (
			<li className="aside-list-item">
				{content}
			</li>
		);
	}
	const renderAreaRoom = (content) => {
		return (
			<li className="aside-list-item">
				{content.areaRoom} м2
			</li>
		);
	}
	const renderQuantityRoom = (content, text, texts) => {
		if ( !content.quantityRooms) return;
		return (
			<li className="aside-list-item">
				{(content.quantityRooms > 5 ? `${content.quantityRooms} ${text}` : `${content.quantityRooms} ${texts}`)}
			</li>
		);
	}
	const renderQuantityCleaner = (obj) => {
		return (
			<span>
				{obj.quantity} працівника
			</span>
		)
	}
	return (
		<aside className="col-md-3">
			<div className="aside">
				<h3 className="aside-title t-bold t-5">Ви обрали:</h3>
				<p className="aside-wrapper">
					<i className="bi bi-calendar"/>
					{renderData(data)}
				</p>
				<p className="aside-wrapper">
					<i className="bi bi-clock"/>
					{renderTime(time)}
				</p>
				<ul className="aside-list">
					{renderElem(typeOfCleaning)}
					{renderElem(typeOfRoom)}
					{renderQuantityRoom(quantityOfRooms, 'кімнат', 'кімнати')}
					{renderQuantityRoom(quantityOfBathroom, 'санвузлів', 'санвузла')}
					{renderAreaRoom(areaOfRoom)}
				</ul>
				<h3 className="aside-title t-s-bold t-5">
					Додаткові послуги:
				</h3>
				<ul className="aside-list">
					<li className="aside-list-item">
						Гардеробна
					</li>
					<li className="aside-list-item">
						Прибирання в шафі
					</li>
				</ul>
				<h3 className="aside-title t-s-bold t-5">
					Хімчистка:
				</h3>
				<ul className="aside-list">
					<li className="aside-list-item">
						Крісло (1)
					</li>
					<li className="aside-list-item">
						Килим (12м2)
					</li>
				</ul>
				<h3 className="aside-title t-s-bold t-5">
					Прання:
				</h3>
				<ul className="aside-list">
					<li className="aside-list-item">
						Постільна білизна (3 кг)
					</li>
				</ul>
				<p className="aside-wrapper">
					<i className="bi bi-clock"/>
					<span>
						≈ 4 год 30 хв
					</span>
				</p>
				<p className="aside-wrapper">
					<i className="bi bi-people"/>
					{renderQuantityCleaner(quantityOfCleaner)}
				</p>
				<p className="aside-wrapper">
					<i className="bi bi-arrow-repeat"/>
					<span>
						одноразове прибирання
					</span>
				</p>
				<h3 className="aside-title t-bold t-5">
					До сплати:
					<span className="aside-prise t-e-bold t-3">
						1739 грн
					</span>
				</h3>
				<p className="aside-min-price t-bold t-7">
					*МІНІМАЛЬНА сума замовлення 1000 грн
				</p>
				<label className="my-checkbox" htmlFor="checkbox">
					<input className="visually-hidden" type="checkbox" name="politick" id="checkbox"/>
					<span className="t-8">
						Я приймаю
						<a href="#">Політику</a>
						та
						<a href="#">Умови використання</a>
						даним сайтом та послугами
					</span>
				</label>
				<button className="btn btn-pink" type="button">
					Замовити Чистоту
				</button>
			</div>
		</aside>
	);
}
Aside.defaultProps = {
	typeOfCleaning: null,
	typeOfRoom: null,
	quantityOfCleaner: 1,
	quantityOfRooms: null,
}
export default Aside;