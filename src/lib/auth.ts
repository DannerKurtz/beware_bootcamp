import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./../db/index"; // your drizzle instance
import * as schema from "./../db/schema"; // your drizzle schema

export const auth = betterAuth({
	emailAndPassword: {
		enabled: true,
	},
	database: drizzleAdapter(db, {
		provider: "pg",
		schema,
	}),
	user: {
		modelName: "userTable",
	},
	session: {
		modelName: "sessionTable",
	},
	account: {
		modelName: "accountTable",
	},
});
