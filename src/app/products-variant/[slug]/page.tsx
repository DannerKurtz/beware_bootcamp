import Footer from "@/app/common/footer";
import Header from "@/app/common/header";
import ProductList from "@/app/common/product-list";
import { Button } from "@/components/ui/button";
import { db } from "@/db";
import { productTable, productVariantTable } from "@/db/schema";
import { formatCentsToBRL } from "@/helpers/money";
import { eq } from "drizzle-orm";
import Image from "next/image";
import { notFound } from "next/navigation";
import QuantitySelector from "./components/quantity-selector";
import VariantSelector from "./components/variant-selector";

interface ProductVariantPageProps {
	params: Promise<{ slug: string }>;
}

const ProductVariantPage = async ({ params }: ProductVariantPageProps) => {
	const { slug } = await params;
	const productVariant = await db.query.productVariantTable.findFirst({
		where: eq(productVariantTable.slug, slug),
		with: {
			product: {
				with: {
					variants: true,
				},
			},
		},
	});
	if (!productVariant) {
		return notFound();
	}
	const likelyProducts = await db.query.productTable.findMany({
		where: eq(productTable.categoryId, productVariant.product.categoryId),
		with: {
			variants: true,
		},
	});
	return (
		<>
			<Header />
			<div className="flex flex-col space-y-6">
				<Image
					src={productVariant.imageUrl}
					alt={productVariant.name}
					width={0}
					height={0}
					sizes="100vw"
					className="h-auto w-full object-cover"
				/>
				<div className="px-5">
					{/*variantes*/}
					<VariantSelector
						selectorVariantSlug={productVariant.slug}
						variants={productVariant.product.variants}
					/>
				</div>
				<div className="px-5">
					<h2 className="text-lg font-semibold">
						{productVariant.product.name}
					</h2>
					<h3 className="text-sm text-muted-foreground">
						{productVariant.name}
					</h3>
					<h3 className="text-lg font-semibold">
						{formatCentsToBRL(productVariant.priceInCents)}
					</h3>
				</div>
				<div className="px-5">
					{/*quantidades*/}
					<QuantitySelector />
				</div>
				<div className="flex flex-col px-5 space-y-4">
					{/* BOTÕES*/}
					<Button className="rounded-full" variant={"outline"}>
						Adicionar a sacola
					</Button>
					<Button className="rounded-full" size={"lg"}>
						Comprar agora
					</Button>
				</div>
				<div className="px-5">
					<p className="text-sm">{productVariant.product.description}</p>
				</div>
				<ProductList title="Talvez você goste" products={likelyProducts} />
				<Footer />
			</div>
		</>
	);
};

export default ProductVariantPage;
