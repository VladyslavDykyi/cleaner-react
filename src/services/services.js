class Services {
	_apiBase = 'https://green-gloves.com.ua/api/v1';
	_city = null;
	constructor (city) {
		this._city = city;
	}
	async getResource (url, key) {
		try {
			const storedData = sessionStorage.getItem(key);
			if (storedData) {
				const data = JSON.parse(storedData);
				return data;
			} else {
				const res = await fetch(`${this._apiBase}${url}`);
				
				if (!res.ok) {
					throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
				}
				
				const data = await res.json();
				
				const jsonData = JSON.stringify(data);
				sessionStorage.setItem(key, jsonData);
				
				return data;
			}
		} catch (error) {
			throw new Error(`Помилка при отриманні даних з сервера: ${error}`);
		}
	}
	
	async getLaundryServicesAll () {
		const res = await this.getResource(`/laundry-services/all`,"LAUNDRY_SERVICES_ALL");
		return res.data;
	}
	async getDryCleanSofaCarpetsAll () {
		const res = await this.getResource(`/dry-clean-sofa-carpets/all`,"DRY_CLEAN_SOFA_CARPETS_ALL");
		return res.data;
	}
	async getExtraServicesAll () {
		const res = await this.getResource(`/extra-services/all`,"EXTRA_SERVICES_ALL");
		return res.data;
	}
	async getAreaFloorsAll () {
		const res = await this.getResource(`/area-floors/all`,"AREA_FLOORS_ALL");
		return res.data;
	}
	async getMaxQuantitiesRooms() {
		const res = await this.getResource(`/max-quantities/rooms`,"MAX_QUANTITIES_ROOMS");
		return res.data;
	}
	async getMaxQuantitiesBathrooms() {
		const res = await this.getResource(`/max-quantities/bathrooms`,"MAX_QUANTITIES_BATHROOMS");
		return res.data;
	}
	async getCleaningTypesAll() {
		const res = await this.getResource(`/cleaning-types/all`,"CLEANING_TYPES_ALL");
		return res.data;
	}
	async getRoomTypesAll() {
		const res = await this.getResource(`/room-types/all`,"ROOM_TYPES_ALL");
		return res.data;
	}
	async getCitiesAll() {
		const res = await this.getResource(`/cities/all`,"CITIES_ALL");
		return res.data;
	}
	async getCalculatorSettingsAll() {
		const res = await this.getResource('/calculator-settings/all',"CALCULATOR_SETTINGS_ALL");
		return res;
	}
}
export default Services;