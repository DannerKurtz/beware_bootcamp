import type { productVariantTable } from "@/db/schema";
import Image from "next/image";
import Link from "next/link";

interface VariantSelectorProps {
	selectorVariantSlug: string;
	variants: (typeof productVariantTable.$inferSelect)[];
}

const VariantSelector = ({
	selectorVariantSlug,
	variants,
}: VariantSelectorProps) => {
	return (
		<div className="flex items-center gap-4">
			{variants.map((variant) => (
				<Link
					key={variant.id}
					href={`/products-variant/${variant.slug}`}
					className={
						selectorVariantSlug === variant.slug
							? "border-primary border-2 border-solid rounded-xl"
							: ""
					}
				>
					<Image
						src={`${variant.imageUrl}`}
						alt={variant.slug}
						width={68}
						height={68}
						className="rounded-xl"
					/>
				</Link>
			))}
		</div>
	);
};

export default VariantSelector;
