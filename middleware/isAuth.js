/* eslint-disable camelcase */


export default function ({ app, redirect  }) {
	const hasToken = !!app.$apolloHelpers.getToken();
	if (!hasToken) {
		redirect('/');
	}
}
