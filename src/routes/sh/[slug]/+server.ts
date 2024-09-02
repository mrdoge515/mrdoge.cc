import { error, redirect } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = ({ url }) => {
	switch (url.pathname) {
		case "/sh/github": {
			return redirect(302, "https://github.com/mrdoge515");
		}
	}

	return error(404, {
		message: "link not found",
	});
};
