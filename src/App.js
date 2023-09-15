import React,{useState} from "react";
import Aside from "./components/Aside";
import Calculator from "./components/Calculator";

const App = () => {
	const [typeDataCleaning, setTypeDataCleaning] = useState({});
	const [typeDataRoom, setTypeDataRoom] = useState({});
	const handleTypeCleaning = (typeData) => {
		setTypeDataCleaning(typeData);
	};
	const handleTypeRoom = (typeData) => {
		setTypeDataRoom(typeData);
	};
	return (
		<div className="container-xxl">
			<section className="works-reviews">
				<h2 className="text-center t-bold t-2">
					Розрахуйте вартість ідеальної чистоти
				</h2>
				<div className="row">
					<Calculator typeOfCleaning={handleTypeCleaning} typeOfRoom={handleTypeRoom}/>
					<Aside typeOfCleaning={typeDataCleaning} typeOfRoom={typeDataRoom}/>
				</div>
			</section>
		</div>
	);
}

export default App;
