export default class MyCalculator {
	constructor () {
	}
	
	sumPriceAdditional (data, subtractPercentage = false) {// Ціна Додаткових послуг, Хімчистки, Прання
		if (data === null) return 0;
		return data.reduce((accumulator, {price, quantityKilograms}) => {
			const itemPrice = +price * (!isNaN(+quantityKilograms) ? +quantityKilograms : 1);
			if (subtractPercentage) {
				const percentageValue = (subtractPercentage / 100) * itemPrice;
				accumulator += itemPrice - percentageValue;
			} else {
				accumulator += itemPrice;
			}
			return accumulator;
		}, 0);
	}
	
	sumTimeAdditional (data) {
		if (data === null) return 0;
		return data.reduce((accumulator, {timeCleaning, quantityKilograms}) => {
			const itemTime = +timeCleaning * (!isNaN(+quantityKilograms) ? +quantityKilograms : 1);
			accumulator += itemTime;
			return accumulator;
		}, 0);
	}
	
	priceTimeServices (
		defaultValue,
		step,
		current,
		start,
		coefficientClean,
		coefficientRoom
	) {// Ціна на базовую послугу
		return (defaultValue * (coefficientClean * coefficientRoom) + (step * (current - start)));
	}
	
	priceBathroom (price, quantityRooms) {
		if (quantityRooms === '') return 0;
		return price * Number(quantityRooms);
	}
	
	timeBathroom (time, quantityRooms) {
		if (quantityRooms === '') return 0;
		return time * Number(quantityRooms);
	}
	
	priceDopCleaners (salaryAdditionalCleaner, numberCleaners) { // Ціна на додаткових Прибиральників
		return salaryAdditionalCleaner * numberCleaners;
	}
	priceDefaultM2 (defaultValue, step, current, start) {// Ціна на базовую послугу
		return defaultValue + (step * (current - start));
	}
	salaryCleaner (
		defaultValue,
		coefficientClean,
		coefficientRoom,
		cleanerInterestRate,
		priceAdditional,
		priceDryCleaning,
		numberCleaners,
		salaryCleanerOnHands,
		numberDopCleaners,
		max,
	) {
		const res = (((defaultValue * (coefficientClean * coefficientRoom)) * (cleanerInterestRate / 100)) + (priceAdditional + priceDryCleaning)  + (numberDopCleaners * salaryCleanerOnHands)) / (numberDopCleaners + numberCleaners);
		
		return res < max ? res : max;
	}
	salaryDopCleaner (
		priceDop,
		numberCleaners,
		salaryCleanerOnHands,
		numberDopCleaners,
		max,
	) {
		console.log(priceDop,
			numberCleaners,
			salaryCleanerOnHands,
			numberDopCleaners,
			max,'111111111111111111111')
		const res = (priceDop  + (numberDopCleaners * salaryCleanerOnHands)) / (numberDopCleaners + numberCleaners);
		
		return res < max ? res : max;
	}
}