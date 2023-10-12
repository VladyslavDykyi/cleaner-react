import React, {useState, useEffect, memo} from 'react';



const AddressData = ({getInfo,numeration}) => {
	const [addressData, setAddressData] = useState({
		street: '',
		apartmentNo: '',
		houseNo: '',
		caseNo: '',
		entranceNo: '',
		floorNo: '',
		intercomCode: '',
		city: 'Дніпро',
	});
	
	useEffect(() => {
		(() => {
			getInfo(addressData);
		})();
	}, [addressData]);
	const handlerChange = (event) => {
		const {value, name} = event.target;
		setAddressData({
			...addressData,
			[name]: value,
		});
	}
	return (
		<section className="calculator-wrapper">
			<div className='justify-content-start align-items-center mb-3' >
				<h2 className="t-s-bold t-4">
					{numeration}. Вкажіть вашу адресу
				</h2>
				<label className="input mx-3" htmlFor="street">
					<input type="text" name="city" id="city" placeholder="Місто"
					       onChange={handlerChange}
					       value={addressData.city}
					       disabled={true}
					       title="Зараз працюємо тільки у межах міста Дніпро"
					/>
				</label>
			</div>
			<div className="address">
				<label className="input" htmlFor="street">
					<input type="text" name="street" id="street" placeholder="Вулиця"
					       onChange={handlerChange}
					       value={addressData.street}
					       />
				</label>
				<label className="input" htmlFor="apartmentNo">
					<input type="tel" name="apartmentNo" id="apartmentNo" placeholder="№ квартири"
					       onChange={handlerChange}
					       value={addressData.apartmentNo}
					       />
				</label>
				<label className="input" htmlFor="houseNo">
					<input type="email" name="houseNo" id="houseNo" placeholder="№ будинку"
					       onChange={handlerChange}
					       value={addressData.houseNo}
					       />
				</label>
				<label className="input" htmlFor="caseNo">
					<input type="text" name="caseNo" id="caseNo" placeholder="№ корпусу"
					       onChange={handlerChange}
					       value={addressData.caseNo}
					       />
				</label>
				<label className="input" htmlFor="entranceNo">
					<input type="tel" name="entranceNo" id="entranceNo" placeholder="№ підʼїзду"
					       onChange={handlerChange}
					       value={addressData.entranceNo}
					       />
				</label>
				<label className="input" htmlFor="floorNo">
					<input type="email" name="floorNo" id="floorNo" placeholder="№ Поверх"
					       onChange={handlerChange}
					       value={addressData.floorNo}
					       />
				</label>
				<label className="input" htmlFor="intercomCode">
					<input type="email" name="intercomCode" id="intercomCode" placeholder="Код домофона"
					       onChange={handlerChange}
					       value={addressData.intercomCode}
					       />
				</label>
			</div>
		</section>
	);
}
export default memo(AddressData);