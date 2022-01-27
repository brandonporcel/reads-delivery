export const fetchHttps = async (endpoint, options = {}) => {
	const controller = new AbortController();
	options.signal = controller.signal;
	setTimeout(() => controller.abort(), 3000);
	let data = [];
	try {
		const res = await fetch(endpoint, options);
		if (!res.ok) {
			Promise.reject({
				err: true,
				status: res.status || '00',
				statusText: res.statusText || 'ocurrio un errr',
			});
		}
		data = await res.json();
	} catch (err) {
		console.log(err);
	}
	return data;
};
