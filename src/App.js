import {useMemo, useState,useEffect} from "react";
import WrapperCalculator from "./components/WrapperCalculator";

const App = () => {
	const memoizedWrapperCalculator = useMemo(() => {
		return (
			<WrapperCalculator/>
		);
	}, []);
	
	return (
		<div className="container-xxl">
			<section className="works-reviews">
				<h2 className="text-center t-bold t-2">
					Розрахуйте вартість ідеальної чистоти
				</h2>
				<div className="d-flex flex-wrap">
					{memoizedWrapperCalculator}
				</div>
			</section>
		</div>
	);
}

export default App;
