class Services  {
	_apiBase = 'http://clean.webgenerator.com.ua/api/v1';
	async getResource(url) {
		const res = await fetch(`${this._apiBase}${url}`);
		
		if (!res.ok) {
			throw new Error(`Could not fetch ${url}` + `, received ${res.status}`)
		}
		return await res.json();
	}
	// async getLaundryServices() {
	// 	const res = await this.getResource(`/laundry-services/`);
	// 	return res.data;
	// }
	async getLaundryServicesAll() {
		const res = await this.getResource(`/laundry-services/all`);
		return res.data;
	}
}
export default Services;