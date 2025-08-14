import { Button } from "@/components/ui/button";
import { formatCentsToBRL } from "@/helpers/money";
import { MinusIcon, PlusIcon, TrashIcon } from "lucide-react";
import Image from "next/image";

interface CartItemProps {
	id: string;
	productName: string;
	productVariantName: string;
	productVariantImageUrl: string;
	productVariantPriceInCents: number;
	quantity: number;
}

const CartItem = ({
	id,
	productName,
	productVariantName,
	productVariantImageUrl,
	productVariantPriceInCents,
	quantity,
}: CartItemProps) => {
	return (
		<div className="flex items-center justify-between border-b-2 border-solid pb-4">
			<div className="flex items-center gap-4">
				<Image
					src={productVariantImageUrl}
					alt={productVariantName}
					width={78}
					height={78}
					className="rounded-md"
				/>
				<div className="flex flex-col gap-1">
					<p className="text-sm font-semibold">{productName}</p>
					<p className="text-xs text-muted-foreground font-medium">
						{productVariantName}
					</p>

					{/*quantidades*/}

					<div className="flex w-[100px] items-center border justify-between rounded-lg">
						<Button className="h-4 w-4" variant={"ghost"}>
							<MinusIcon />
						</Button>
						<p className="text-xs">{quantity}</p>
						<Button className="h-4 w-4" variant={"ghost"}>
							<PlusIcon />
						</Button>
					</div>
				</div>
			</div>
			<div className="flex flex-col justify-center items-end gap-1">
				<Button variant={"outline"} size={"icon"}>
					<TrashIcon />
				</Button>
				<p className="text-sm font-bold">
					{formatCentsToBRL(productVariantPriceInCents)}
				</p>
			</div>
		</div>
	);
};

export default CartItem;
