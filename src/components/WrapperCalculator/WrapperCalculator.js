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
	const handlerData = (data) => {
		seData(data);
	}
	const handlerTime = (time) => {
		setTime(time);
	}
	const handleTypeCleaning = (typeData) => {
		setTypeDataCleaning(typeData);
	};
	const handlerQuantityCleaner = (quantityData) => {
		setDataQuantityCleaner(quantityData);
	}
	const handleTypeRoom = (typeData) => {
		setTypeDataRoom(typeData);
	};
	const handleQuantityRoom = (typeData) => {
		setDataQuantityRoom(typeData)
	};
	const handleQuantityBathroom = (typeData) => {
		setDataQuantityBathroom(typeData);
	};
	const handleAreaRoom = (typeData) => {
		setDataAreaRoom(typeData);
	};
	const handleContact = (...data) => {
		setFormContact(...data);
	}
	const handleAddress = (...data) => {
		setFormAddress(...data);
	}
	const memoizedCalculator = useMemo(() => {
		return (
			<>
				<Calculator
					typeOfCleaning={handleTypeCleaning}
					typeOfRoom={handleTypeRoom}
					quantityOfCleaner={handlerQuantityCleaner}
					quantityOfRooms={handleQuantityRoom}
					quantityOfBathroom={handleQuantityBathroom}
					areaOfRoom={handleAreaRoom}
					formOfContact={handleContact}
					formOfAddress={handleAddress}
					dataInp={handlerData}
					timeInp={handlerTime}
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
		);
	}, []);
	return (
		<>
			{memoizedCalculator}
		</>
	)
}
export default memo(WrapperCalculator);
