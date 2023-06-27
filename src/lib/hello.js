import { json } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').RequestHandler} */
export const hello = (event) => {
	return json({ hello: 'world', url: event.request.url })
};
