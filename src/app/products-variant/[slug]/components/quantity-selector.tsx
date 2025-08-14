"use client";

import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

const QuantitySelector = () => {
	const [quantity, setQuantity] = useState(1);

	const handleDecrement = () => {
		setQuantity((prev) => (prev <= 1 ? 1 : prev - 1));
	};

	const handleIncrement = () => {
		setQuantity((prev) => prev + 1);
	};

	return (
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
	);
};
export default QuantitySelector;
