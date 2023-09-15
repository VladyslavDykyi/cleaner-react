import React from "react";

const Aside = ({typeOfRoom, typeOfCleaning}) => {
	const renderElem = ({content}) => {
		if ( !content) return;
		return (
			<li className="aside-list-item">
				{content}
			</li>
		);
	}
	return (
		<aside className="col-md-3">
			<div className="aside">
				<h3 className="aside-title t-bold t-5">Ви обрали:</h3>
				<p className="aside-wrapper">
					<i className="bi bi-calendar"/>
					<span>
						18 травня 2023
					</span>
				</p>
				<p className="aside-wrapper">
					<i className="bi bi-clock"/>
					<span>
						10:00
					</span>
				</p>
				<ul className="aside-list">
					{renderElem(typeOfCleaning)}
					{renderElem(typeOfRoom)}
					<li className="aside-list-item">
						3 кімнати
					</li>
					<li className="aside-list-item">
						1 санвузол
					</li>
					<li className="aside-list-item">
						105 м2
					</li>
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
					<span>
						3 працівника
					</span>
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
						<>Я приймаю </>
						<a href="#">Політику</a>
						<>та </>
						<a href="#">Умови використання</a>
						<>даним сайтом та послугами</>
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
}
export default Aside;