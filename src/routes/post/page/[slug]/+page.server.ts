import type { PageServerLoad } from './$types';
import * as api from '$lib/api';

export const load = (async ({ locals, params }) => {
	// console.log(locals.user, params, api, 123);
	const res = await api.get(
		`company/list?page=${params.slug}&limit=10&type=0`,
		'eyJzdWIiOjEsImF1ZCI6InNzbyIsImlzcyI6InNzbyIsImV4cCI6IjIwMjItMDMtMTlUMDg6MzA6MzYuNDQ3WiIsInVybCI6Imh0dHBzOi8vYXBpLnNzby43ZGIuc2hvcC92MSJ9.r++R3W8RcZRzlUnVHCIj5cdm7xdPF2NHeMJ/2jDYmGw='
	);
	console.log(res, 67666);
	return { posts: res.data.list, total: res.data.total };
	// return { posts: [] };
}) satisfies PageServerLoad;
