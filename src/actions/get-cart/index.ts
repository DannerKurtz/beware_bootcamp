"use server";

import { db } from "@/db";
import { cartTable } from "@/db/schema";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const getCart = async () => {
	const session = await auth.api.getSession({
		headers: await headers(),
	});
	if (!session?.user) {
		throw new Error("Unauthorized");
	}

	const cart = await db.query.cartTable.findFirst({
		where: (cartTable, { eq }) => eq(cartTable.userId, session.user.id),
		with: {
			items: {
				with: {
					productVariant: {
						with: {
							product: true,
						},
					},
				},
			},
		},
	});
	if (!cart) {
		const [newCart] = await db
			.insert(cartTable)
			.values({ userId: session.user.id })
			.returning();
		return { ...newCart, items: [], totalInCents: 0 };
	}
	return {
		...cart,
		totalInCents: cart.items.reduce(
			(acc, item) => acc + item.productVariant.priceInCents * item.quantity,
			0,
		),
	};
};
