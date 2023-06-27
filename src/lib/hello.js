
/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export default (event) => {
	return {
		statusCode: 200,
		body: { message: event.request.url }
	};
};
