import {useState} from "react";
import Calculator from "../Calculator";
import Aside from "../Aside";

const WrapperCalculator = ({modal}) => {
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
	const [validInput, setValidInput] = useState({
		nameValid: false,
		telValid: false
	});
	const [typeContract, setTypeContract] = useState({});
	const objForm = {
		...formContact,
		...formAddress,
	}
	
	const render = (typeContract.type === 'dryCleaning') ? <Aside
		typeOfContract={typeContract}
		additionalOfServices={dataAdditionalServices}
		orderOfDryCleaning={dataOrderDryCleaning}
		laundryOfServices={dataLandryServices}
		data={data}
		time={time}
		contactAndAddress={objForm}
		setValidInput={setValidInput}
	/> : <Aside
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
		setValidInput={setValidInput}
		modalBtn={modal}
	/>;
	return (
		<>
			<Calculator
				numeration={{
						one: 1,
						two: 2,
						three: 3,
						four: 4,
						five: 5,
						six: 6,
						seven: 7,
						eight: 8,
						nine: 9,
						ten: 10,
						eleven: 11,
						twelve: 12,
						thirteen: 13,
					}}
				typeOfContract={setTypeContract}
				typeOfContractResetRoom={setDataQuantityRoom}
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
				validInput={validInput}
			/>
			{render}
		</>
	)
}
export default WrapperCalculator;
