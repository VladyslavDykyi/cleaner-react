import {useMemo} from 'react';



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
                    }) => {

	const memoizedCalculator = useMemo(() => {
		return (
			<>
				<TypeOfContract/>
				<TypeOfCleaning onChange={typeOfCleaning}/>
				<AddCleaners onClick={quantityOfCleaner}/>
				<TypeOfRoom onChange={typeOfRoom}/>
				<QuantityRooms onChange={quantityOfRooms} />
				<QuantityBathrooms onChange={quantityOfBathroom}/>
				<TotalAreaRoom onChange={areaOfRoom}/>
				<AdditionalServices onChange={additionalOfServices}/>
				<OrderDryCleaning onChange={orderOfDryCleaning}/>
				<LaundryServices onChange={laundryOfServices}/>
				<DataOfTime onChangeTime={timeInp} onChangeData={dataInp}/>
				<AddressData getData={formOfAddress}/>
				<ContactData getData={formOfContact}/>
			</>
		);
	}, []);
	
	return (
		<div className="col-md-9 calculator">
			{memoizedCalculator}
		</div>
	);
}
export default Calculator;