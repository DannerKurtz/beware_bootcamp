import type { productTable, productVariantTable } from "@/db/schema";
import { formatCentsToBRL } from "@/helpers/money";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface ProductsListProps {
	product: typeof productTable.$inferSelect & {
		variants: (typeof productVariantTable.$inferSelect)[];
	};
	textContainerClassName?: string;
}

const ProductItem = ({ product }: ProductsListProps) => {
	const firstVariant = product.variants[0];
	return (
		<Link
			href={`/products-variant/${firstVariant.slug}`}
			className="flex flex-col gap-4"
		>
			<Image
				src={firstVariant.imageUrl}
				alt={firstVariant.name}
				sizes="100vw"
				height={0}
				width={0}
				className="rounded-3xl h-auto w-full"
			/>
			<div className={cn("flex flex-col gap-1 max-w-[200px]")}>
				<p className="truncate text-sm font-medium">{product.name}</p>
				<p className="truncate text-xs font-medium text-muted-foreground">
					{product.description}
				</p>
				<p className="truncate text-sm font-semibold">
					{formatCentsToBRL(firstVariant.priceInCents)}
				</p>
			</div>
		</Link>
	);
};

export default ProductItem;
