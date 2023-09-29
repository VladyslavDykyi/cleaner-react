import {useMemo, useState, memo} from "react";
import Calculator from "../Calculator";
import Aside from "../Aside";

const WrapperCalculator = () => {
	const [typeDataCleaning, setTypeDataCleaning] = useState({});
	const [dataQuantityCleaner, setDataQuantityCleaner] = useState({});
	const [typeDataRoom, setTypeDataRoom] = useState({});
	const [dataQuantityRoom, setDataQuantityRoom] = useState({});
	const [dataQuantityBathroom, setDataQuantityBathroom] = useState({});
	const [dataAreaRoom, setDataAreaRoom] = useState({});
	const [dataAdditionalServices, setDataAdditionalServices] = useState(null);
	const [dataOrderDryCleaning, setOrderDryCleaning] = useState(null);
	const [dataLandryServices, setDataLandryServices] = useState(null);
	const [data, seData] = useState('');
	const [time, setTime] = useState({});
	const [formContact, setFormContact] = useState({});
	const [formAddress, setFormAddress] = useState({});
	
	const objForm = {
		...formContact,
		...formAddress,
	}
	console.log('3');
	
	return (
		<>
			<Calculator
				typeOfCleaning={setTypeDataCleaning}
				typeOfRoom={setTypeDataRoom}
				quantityOfCleaner={setDataQuantityCleaner}
				quantityOfRooms={setDataQuantityRoom}
				quantityOfBathroom={setDataQuantityBathroom}
				areaOfRoom={setDataAreaRoom}
				additionalOfServices={setDataAdditionalServices}
				orderOfDryCleaning={setOrderDryCleaning}
				laundryOfServices={setDataLandryServices}
				formOfContact={setFormContact}
				formOfAddress={setFormAddress}
				dataInp={seData}
				timeInp={setTime}
			/>
			<Aside
				typeOfCleaning={typeDataCleaning}
				typeOfRoom={typeDataRoom}
				quantityOfCleaner={dataQuantityCleaner}
				quantityOfRooms={dataQuantityRoom}
				quantityOfBathroom={dataQuantityBathroom}
				areaOfRoom={dataAreaRoom}
				additionalOfServices={dataAdditionalServices}
				orderOfDryCleaning={dataOrderDryCleaning}
				laundryOfServices={dataLandryServices}
				data={data}
				time={time}
				contactAndAddress={objForm}
			/>
		</>
	)
}
export default memo(WrapperCalculator);
