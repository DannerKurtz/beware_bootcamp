"user client";

import { getCart } from "@/actions/get-cart";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { useQuery } from "@tanstack/react-query";
import { ShoppingBasketIcon } from "lucide-react";
import Image from "next/image";

const Cart = () => {
	const { data: cart, isPending: cartIsPending } = useQuery({
		queryKey: ["cart"],
		queryFn: () => getCart(),
	});
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant={"outline"} size={"icon"}>
					<ShoppingBasketIcon />
				</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Carrinho</SheetTitle>
				</SheetHeader>
				<div>
					{cartIsPending && <p>Loading...</p>}
					{cart?.items.map((item) => (
						<div key={item.id}>
							<Image
								src={item.productVariant.imageUrl}
								alt={item.productVariant.product.name}
								width={100}
								height={100}
							/>
							{item.productVariant.product.name} - {item.quantity}
						</div>
					))}
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default Cart;
