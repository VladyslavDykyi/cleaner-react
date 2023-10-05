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
		dataDopAdditional,
		discountAdditional
	) { // розрахунок дефолтної ціни
		const priceAreaM2 = this.priceAreaM2(
			priceDefault,
			step,
			startM2,
			currentM2);
		const sumCleaners = this.priceDopCleaners(salaryAdditionalCleaner, numberCleaners);
		if ( !!dataDopAdditional.length) return priceAreaM2 +
			this.sumPriceAdditional(dataDopAdditional,discountAdditional) +
			sumCleaners;
		return priceAreaM2 + sumCleaners;
	}
	sumPriceAdditional(data, subtractPercentage = false) { // розрахунок ціни доп послуг
		return data.reduce((accumulator, { price, quantityKilograms }) => {
			const itemPrice = +price * (!isNaN(+quantityKilograms) ? +quantityKilograms : 1);
			
			// Если subtractPercentage равен true, вычитаем процент
			if (subtractPercentage) {
				const percentageToSubtract = 10; // Здесь задайте нужный процент
				const percentageValue = (percentageToSubtract / 100) * itemPrice;
				accumulator += itemPrice - percentageValue;
			} else {
				accumulator += itemPrice;
			}
			
			return accumulator;
		}, 0);
	}
	priceAreaM2 (priceDefault, step, startM2, currentM2) {// Цена на базовую услугу
		return priceDefault + (step * (currentM2 - startM2));
	}
	
	priceDopCleaners (salaryAdditionalCleaner, numberCleaners) {
		return salaryAdditionalCleaner * numberCleaners;
	}
	
	priceM2 = (currentM2, currentPrice) => { //Стоимость за метр, грн
		return (currentPrice / currentM2);
	}
	discountAreaM2 = (priceAreaM2Default, currentArea) => {
		return ((priceAreaM2Default / currentArea) - 1) * 100;
	}
}