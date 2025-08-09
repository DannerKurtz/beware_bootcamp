/** biome-ignore-all assist/source/organizeImports: <explanation> */

import { db } from "@/db";
import Image from "next/image";
import CategorySelector from "./common/category-selector";
import Header from "./common/header";
import ProductList from "./common/product-list";

export default async function Home() {
	const products = await db.query.productTable.findMany({
		with: {
			variants: true,
		},
	});
	const categories = await db.query.categoryTable.findMany({});
	console.log(products);
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
			</div>
		</div>
	);
}
