export default class MyCalculator {
	constructor () {
	}
	cleaningDefault2 (
		priceDefault,
		startM2,
		numberCleaners,
		salaryAdditionalCleaner,
		step,
		currentM2,
	) { // розрахунок дефолтної ціни
		const priceAreaM2 = this.priceAreaM2(
			priceDefault,
			step,
			startM2,
			currentM2);
		return this.cleaningDefault(priceAreaM2,
			salaryAdditionalCleaner,
			numberCleaners,
		);
	}
	priceAreaM2  (priceDefault, step, startM2, currentM2) {// Цена на базовую услугу
		return priceDefault + (step * (currentM2 - startM2));
	}
	cleaningDefault  (
		priceAreaM2,
		salaryAdditionalCleaner,
		numberCleaners,
		variousServicesSum = 0,
		dryCleaning = 0
	) { // Остаточна ціна дефолтна ціна
		return priceAreaM2 + variousServicesSum + dryCleaning + (salaryAdditionalCleaner * numberCleaners);
	}
	priceM2 = (currentM2, currentPrice) => { //Стоимость за метр, грн
		return (currentPrice / currentM2);
	}
	discountAreaM2 = (priceAreaM2Default, currentArea) => {
		return ((priceAreaM2Default / currentArea) - 1) * 100;
	}
}