import {useEffect, useMemo, useState} from 'react';

import TypeOfCleaning from "./TypeOfCleaning";
import TypeOfRoom from "./TypeOfRoom";
import AddCleaners from "./AddCleaners";
import QuantityRooms from "./QuantityRooms";
import QuantityBathrooms from "./QuantityBathrooms";
import TotalAreaRoom from "./TotalAreaRoom";
import ContactData from "./ContactData";
import AddressData from "./AddressData";
import DataOfTime from "./DataOfTime";
import LaundryServices from "./LaundryServices";
import OrderDryCleaning from "./OrderDryCleaning";
import AdditionalServices from "./AdditionalServices";
import TypeOfContract from "./TypeOfContract";

const Calculator = ({
	                    typeOfContract,
	                    typeOfCleaning,
	                    typeOfRoom,
	                    quantityOfCleaner,
	                    quantityOfRooms,
	                    quantityOfBathroom,
	                    areaOfRoom,
	                    additionalOfServices,
	                    orderOfDryCleaning,
	                    laundryOfServices,
	                    formOfContact,
	                    formOfAddress,
	                    dataInp,
	                    timeInp,
	                    numeration,
	                    typeOfContractResetRoom,
	                    validInput,
                    }) => {
	const [typeContract, setTypeContract] = useState({});
	useEffect(() => {
		typeOfContract(typeContract);
	}, [typeContract]);
	const memoizedCalculator = useMemo(() => {
		return (typeContract.type === 'dryCleaning') ? <>
			<TypeOfContract onChange={setTypeContract} onChange2={typeOfContractResetRoom} numeration={numeration.one}/>
			<AdditionalServices onChange={additionalOfServices} numeration={numeration.two}/>
			<OrderDryCleaning onChange={orderOfDryCleaning} numeration={numeration.three}/>
			<LaundryServices onChange={laundryOfServices} numeration={numeration.four}/>
			<DataOfTime onChangeTime={timeInp} onChangeData={dataInp} numeration={numeration.five}/>
			<AddressData getInfo={formOfAddress} numeration={numeration.six}/>
			<ContactData getData={formOfContact} numeration={numeration.seven} validInput={validInput}/>
		</> : <>
			<TypeOfContract onChange={setTypeContract} onChange2={typeOfContractResetRoom} numeration={numeration.one}/>
			<TypeOfCleaning onChange={typeOfCleaning} numeration={numeration.two}/>
			<AddCleaners onClick={quantityOfCleaner} numeration={numeration.three}/>
			<TypeOfRoom onChange={typeOfRoom} numeration={numeration.four}/>
			<QuantityRooms onChange={quantityOfRooms} numeration={numeration.five}/>
			<QuantityBathrooms onChange={quantityOfBathroom} numeration={numeration.six}/>
			<TotalAreaRoom onChange={areaOfRoom} numeration={numeration.seven}/>
			<AdditionalServices onChange={additionalOfServices} numeration={numeration.eight}/>
			<OrderDryCleaning onChange={orderOfDryCleaning} numeration={numeration.nine}/>
			<LaundryServices onChange={laundryOfServices} numeration={numeration.ten}/>
			<DataOfTime onChangeTime={timeInp} onChangeData={dataInp} numeration={numeration.eleven}/>
			<AddressData getInfo={formOfAddress} numeration={numeration.twelve}/>
			<ContactData getData={formOfContact} numeration={numeration.thirteen} validInput={validInput}/>
		</>;
		
	}, [typeContract,validInput]);
	return (
		<div className="calculator">
			{memoizedCalculator}
		</div>
	);
}
export default Calculator;