import { db } from "@/db";
import { productTable } from "@/db/schema";
import { desc } from "drizzle-orm";
import Image from "next/image";
import CategorySelector from "./common/category-selector";
import Footer from "./common/footer";
import Header from "./common/header";
import ProductList from "./common/product-list";

export default async function Home() {
	const products = await db.query.productTable.findMany({
		with: {
			variants: true,
		},
	});
	const newlyCreatedProducts = await db.query.productTable.findMany({
		orderBy: [desc(productTable.createdAt)],
		limit: 10,
		with: {
			variants: true,
		},
	});
	const categories = await db.query.categoryTable.findMany({});
	return (
		<div>
			<Header />
			<div className="space-y-6 ">
				<Image
					src={"/Banner-01.png"}
					alt="Leve uma vida com estilo"
					height={0}
					width={0}
					sizes="100vw"
					className="h-auto w-full px-5"
				/>
				<ProductList title="Mais vendidos" products={products} />
				<div className="px-5">
					<CategorySelector categories={categories} />
				</div>
				<Image
					src={"/Banner-02.png"}
					alt="Leve uma vida com estilo"
					height={0}
					width={0}
					sizes="100vw"
					className="h-auto w-full px-5"
				/>
				<ProductList title="Novos Produtos" products={newlyCreatedProducts} />
			</div>
			<Footer />
		</div>
	);
}
