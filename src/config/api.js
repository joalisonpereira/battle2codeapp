import { create } from 'axios';

const api = create({
	baseURL : 'http://192.168.0.106/battle2code/public',
	headers : {
		'Api-Token':'9d740eaa-8737-4d59-b018-018293d047a8'
	}
});

export default api;