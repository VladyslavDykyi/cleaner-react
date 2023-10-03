import React, {useState, useEffect, memo, useCallback} from 'react';

const AddressData = ({getData}) => {
	const [addressData, setAddressData] = useState({
		street: '',
		apartmentNo: '',
		houseNo: '',
		caseNo: '',
		entranceNo: '',
		floorNo: '',
		intercomCode: '',
	});
	useEffect(() => {
		(() => {
			getData(addressData);
		})();
	}, [addressData]);
	
	const handlerChange = useCallback((event) => {
		const {value, name} = event.target;
		setAddressData({
			...addressData,
			[name]: value,
		});
	})
	return (
		<section className="calculator-wrapper">
			<h2 className="t-s-bold t-4">
				12. Вкажіть вашу адресу
			</h2>
			<div className="address">
				<label className="input" htmlFor="street">
					<input type="text" name="street" id="street" placeholder="Вулиця"
					       onChange={handlerChange}
					       value={addressData.street}
					       required/>
				</label>
				<label className="input" htmlFor="apartmentNo">
					<input type="tel" name="apartmentNo" id="apartmentNo" placeholder="№ квартири"
					       onChange={handlerChange}
					       value={addressData.apartmentNo}
					       required/>
				</label>
				<label className="input" htmlFor="houseNo">
					<input type="email" name="houseNo" id="houseNo" placeholder="№ будинку"
					       onChange={handlerChange}
					       value={addressData.houseNo}
					       required/>
				</label>
				<label className="input" htmlFor="caseNo">
					<input type="text" name="caseNo" id="caseNo" placeholder="№ корпусу"
					       onChange={handlerChange}
					       value={addressData.caseNo}
					       required/>
				</label>
				<label className="input" htmlFor="entranceNo">
					<input type="tel" name="entranceNo" id="entranceNo" placeholder="№ підʼїзду"
					       onChange={handlerChange}
					       value={addressData.entranceNo}
					       required/>
				</label>
				<label className="input" htmlFor="floorNo">
					<input type="email" name="floorNo" id="floorNo" placeholder="№ Поверх"
					       onChange={handlerChange}
					       value={addressData.floorNo}
					       required/>
				</label>
				<label className="input" htmlFor="intercomCode">
					<input type="email" name="intercomCode" id="intercomCode" placeholder="Код домофона"
					       onChange={handlerChange}
					       value={addressData.intercomCode}
					       required/>
				</label>
			</div>
		</section>
	);
}
export default memo(AddressData);