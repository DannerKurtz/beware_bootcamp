"use client";
import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";
import AddToCartButton from "./add-to-cart-button";

interface ProductActionsProps {
	productVariantId: string;
}
const ProductActions = ({ productVariantId }: ProductActionsProps) => {
	const [quantity, setQuantity] = useState(1);

	const handleDecrement = () => {
		setQuantity((prev) => (prev <= 1 ? 1 : prev - 1));
	};

	const handleIncrement = () => {
		setQuantity((prev) => prev + 1);
	};
	return (
		<>
			{" "}
			<div className="px-5">
				{/*quantidades*/}
				<div className="space-y-4">
					<h3 className="font-medium">Quantidade</h3>
					<div className="flex w-[100px] items-center border justify-between rounded-lg">
						<Button size={"icon"} variant={"ghost"} onClick={handleDecrement}>
							<MinusIcon />
						</Button>
						<p>{quantity}</p>
						<Button size={"icon"} variant={"ghost"} onClick={handleIncrement}>
							<PlusIcon />
						</Button>
					</div>
				</div>
			</div>
			<div className="flex flex-col px-5 space-y-4">
				{/* BOTÕES*/}
				<AddToCartButton
					productVariantId={productVariantId}
					quantity={quantity}
				/>
				<Button className="rounded-full" size={"lg"}>
					Comprar agora
				</Button>
			</div>{" "}
		</>
	);
};

export default ProductActions;
