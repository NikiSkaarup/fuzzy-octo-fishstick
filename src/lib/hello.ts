export default (event) => {
	return {
		statusCode: 200,
		body: JSON.stringify({ message: 'Hello world!' })
	};
};
