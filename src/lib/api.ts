import { error } from '@sveltejs/kit';

const baseUrl = 'https://api.sso.7db.shop/v1';

type SendProps = {
	method: 'POST' | 'GET';
	path: string;
	data?: unknown;
	token?: string;
};

async function send({ method, path, data, token }: SendProps) {
	const opts: Record<string, any> = { method, headers: {}, rejectUnauthorized: false };

	if (data) {
		opts.headers['content-type'] = 'application/json; charset=utf-8';
		opts.body = JSON.stringify(data);
	}

	if (token) {
		opts.headers['authorization'] = `Bearer ${token}`;
	}

	const res = await fetch(`${baseUrl}/${path}`, opts);
	const response = await res.json();
	if (res.status === 200) {
		return response;
	}

	throw error(res.status);
}

export function get(path: string, token?: string) {
	return send({ method: 'GET', path, token });
}

export function post(path: string, data?: unknown, token?: string) {
	return send({ method: 'POST', path, data, token });
}
