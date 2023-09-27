import {useMemo, useState,memo} from "react";
import Calculator from "../Calculator";
import Aside from "../Aside";

const WrapperCalculator = () => {
	const [typeDataCleaning, setTypeDataCleaning] = useState({});
	const [dataQuantityCleaner, setDataQuantityCleaner] = useState({});
	const [typeDataRoom, setTypeDataRoom] = useState({});
	const [dataQuantityRoom, setDataQuantityRoom] = useState({});
	const [dataQuantityBathroom, setDataQuantityBathroom] = useState({});
	const [dataAreaRoom, setDataAreaRoom] = useState({});
	const [formContact, setFormContact] = useState({});
	const [formAddress, setFormAddress] = useState({});
	const [data, seData] = useState('');
	const [time, setTime] = useState({});
	const objForm = {
		...formContact,
		...formAddress,
	}
	return (
		<>
			<Calculator
				typeOfCleaning={setTypeDataCleaning}
				typeOfRoom={setTypeDataRoom}
				quantityOfCleaner={setDataQuantityCleaner}
				quantityOfRooms={setDataQuantityRoom}
				quantityOfBathroom={setDataQuantityBathroom}
				areaOfRoom={setDataAreaRoom}
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
				data={data}
				time={time}
			/>
		</>
	)
}
export default memo(WrapperCalculator);
