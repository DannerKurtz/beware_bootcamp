import { relations } from "drizzle-orm";
import { integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const userTable = pgTable("user", {
	id: uuid().primaryKey().defaultRandom(),
	name: text().notNull(),
});

export const categoryTable = pgTable("category", {
	id: uuid().primaryKey().defaultRandom(),
	name: text().notNull(),
	slug: text().notNull().unique(),
	createdAt: timestamp("create_at").notNull().defaultNow(),
});

export const categoryRelations = relations(categoryTable, ({ many }) => {
	return {
		product: many(productTable),
	};
});

export const productTable = pgTable("product", {
	id: uuid().primaryKey().defaultRandom(),
	categoryId: uuid("category_id")
		.references(() => categoryTable.id)
		.notNull(),
	name: text().notNull(),
	slug: text().notNull().unique(),
	description: text().notNull(),
	createdAt: timestamp("create_at").notNull().defaultNow(),
});

export const productRelations = relations(productTable, ({ one, many }) => {
	return {
		category: one(categoryTable, {
			fields: [productTable.categoryId],
			references: [categoryTable.id],
		}),
		variants: many(productVariantTable),
	};
});

export const productVariantTable = pgTable("product_variant", {
	id: uuid().primaryKey().defaultRandom(),
	productId: uuid("product_id")
		.references(() => productTable.id)
		.notNull(),
	name: text().notNull(),
	slug: text().notNull().unique(),
	color: text().notNull(),
	priceInCents: integer("price_in_cents").notNull(),
	imageUrl: text("image_url").notNull(),
	createdAt: timestamp("create_at").notNull().defaultNow(),
});

export const productVariantRelations = relations(
	productVariantTable,
	({ one }) => {
		return {
			product: one(productTable, {
				fields: [productVariantTable.productId],
				references: [productTable.id],
			}),
		};
	},
);
