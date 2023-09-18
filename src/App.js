import React,{useState} from "react";
import Aside from "./components/Aside";
import Calculator from "./components/Calculator";

const App = () => {
	const [typeDataCleaning, setTypeDataCleaning] = useState({});
	const [dataQuantityCleaner, setDataQuantityCleaner] = useState({});
	const [typeDataRoom, setTypeDataRoom] = useState({});
	const [dataQuantityRoom, setDataQuantityRoom] = useState({});
	const [dataQuantityBathroom, setDataQuantityBathroom] = useState({});
	const [dataAreaRoom, setDataAreaRoom] = useState({});
	
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
		setDataQuantityRoom(typeData);
	};
	const handleQuantityBathroom = (typeData) => {
		setDataQuantityBathroom(typeData);
	};
	const handleAreaRoom = (typeData) => {
		setDataAreaRoom(typeData);
	};
	return (
		<div className="container-xxl">
			<section className="works-reviews">
				<h2 className="text-center t-bold t-2">
					Розрахуйте вартість ідеальної чистоти
				</h2>
				<div className="row">
					<Calculator
						typeOfCleaning={handleTypeCleaning}
						typeOfRoom={handleTypeRoom}
						quantityOfCleaner={handlerQuantityCleaner}
						quantityOfRooms={handleQuantityRoom}
						quantityOfBathroom={handleQuantityBathroom}
						areaOfRoom={handleAreaRoom}
					/>
					<Aside
						typeOfCleaning={typeDataCleaning}
						typeOfRoom={typeDataRoom}
						quantityOfCleaner={dataQuantityCleaner}
						quantityOfRooms={dataQuantityRoom}
						quantityOfBathroom={dataQuantityBathroom}
						areaOfRoom={dataAreaRoom}
					/>
				</div>
			</section>
		</div>
	);
}

export default App;
