export default class MyCalculator {
	constructor () {
	}
	sumPriceAdditional(data, subtractPercentage = false) {// Ціна Додаткових послуг, Хімчистки, Прання
		if (data === null) return 0;
		return data.reduce((accumulator, { price, quantityKilograms }) => {
			const itemPrice = +price * (!isNaN(+quantityKilograms) ? +quantityKilograms : 1);
			console.log(data);
			if (subtractPercentage) {
				const percentageValue = (subtractPercentage / 100) * itemPrice;
				accumulator += itemPrice - percentageValue;
			} else {
				accumulator += itemPrice;
			}
			return accumulator;
		}, 0);
	}
	priceTimeServices (defaultValue, step, current, start) {// Ціна на базовую послугу
		return defaultValue + (step * (current - start));
	}
	priceDopCleaners (salaryAdditionalCleaner, numberCleaners) { // Ціна на додаткових Прибиральників
		return salaryAdditionalCleaner * numberCleaners;
	}
	priceM2 = (currentM2, currentPrice) => { // Ціна за метр 2, грн
		return (currentPrice / currentM2);
	}
	discountAreaM2 = (priceAreaM2Default, currentArea) => { // Знижка за метр 2, грн
		return ((priceAreaM2Default / currentArea) - 1) * 100;
	}
}