class Services {
	_apiBase = 'http://clean.webgenerator.com.ua/api/v1';
	
	async getResource (url) {
		const res = await fetch(`${this._apiBase}${url}`);
		
		if ( !res.ok) {
			throw new Error(`Could not fetch ${url}` + `, received ${res.status}`)
		}
		return await res.json();
	}
	
	async getLaundryServicesAll () {
		const res = await this.getResource(`/laundry-services/all`);
		return res.data;
	}
	async getDryCleanSofaCarpetsAll () {
		const res = await this.getResource(`/dry-clean-sofa-carpets/all`);
		return res.data;
	}
	async getExtraServicesAll () {
		const res = await this.getResource(`/extra-services/all`);
		return res.data;
	}
	async getAreaFloorsAll () {
		const res = await this.getResource(`/area-floors/all`);
		return res.data;
	}
	async getMaxQuantitiesRooms() {
		const res = await this.getResource(`/max-quantities/rooms`);
		return res.data;
	}
	async getMaxQuantitiesBathrooms() {
		const res = await this.getResource(`/max-quantities/bathrooms`);
		return res.data;
	}
	async getCleaningTypesAll() {
		const res = await this.getResource(`/cleaning-types/all`);
		return res.data;
	}
	async getRoomTypesAll() {
		const res = await this.getResource(`/room-types/all`);
		return res.data;
	}
	async getCalculatorSettingsAll() {
		const res = await this.getResource('/calculator-settings/all');
		return res;
	}
}

export default Services;