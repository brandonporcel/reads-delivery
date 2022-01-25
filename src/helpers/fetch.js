export const fetchHttps = async (endpoint, options = {}) => {
	const controller = new AbortController();
	options.signal = controller.signal;
	setTimeout(() => controller.abort(), 3000);

	try {
		const res = await fetch(endpoint, options);
		if (!res.ok) {
			Promise.reject({
				err: true,
				status: res.status || '00',
				statusText: res.statusText || 'ocurrio un errr',
			});
		}
		const data = await res.json();
		return data;
	} catch (err) {
		console.log(err);
	}
};
