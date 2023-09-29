import { useMemo } from "react";
import WrapperCalculator from "./components/WrapperCalculator";

const App = () => {
	const memoizedWrapperCalculator = useMemo(() => {
		return (
			<WrapperCalculator/>
		);
	}, []);
	console.log('2')
	return (
		<div className="container-xxl">
			<section className="works-reviews">
				<h2 className="text-center t-bold t-2">
					Розрахуйте вартість ідеальної чистоти
				</h2>
				<div className="row">
					{memoizedWrapperCalculator}
				</div>
			</section>
		</div>
	);
}

export default App;
