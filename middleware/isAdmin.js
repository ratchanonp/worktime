/* eslint-disable camelcase */

import jwt_decode from "jwt-decode";

export default function ({ app, error }) {
	const token = app.$apolloHelpers.getToken();
	if (!token) {
		error({ errorCode: 503, message: "You are not allowed to see this" });
	}
	const decoded = jwt_decode(token);

	if (!decoded.role.includes("ADMIN")) {
		error({ errorCode: 503, message: "You are not allowed to see this" });
	}
}
