import type { Actions } from "./$types";
import { DISCORD_WEBHOOK } from "$env/static/private";

export const actions = {
	default: async ({ request }) => {
		try {
			await fetch(DISCORD_WEBHOOK, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ content: "Example" }),
			});

			return { success: true };
		} catch (e) {
			return { success: false };
		}
	},
} satisfies Actions;
