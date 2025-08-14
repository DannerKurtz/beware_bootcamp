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
import CartItem from "./cart-item";

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
				<div className="space-y-4 px-5 ">
					{cartIsPending && <p>Loading...</p>}
					{cart?.items.map((item) => (
						<CartItem
							key={item.id}
							id={item.id}
							productName={item.productVariant.product.name}
							productVariantName={item.productVariant.name}
							productVariantImageUrl={item.productVariant.imageUrl}
							productVariantPriceInCents={item.productVariant.priceInCents}
							quantity={item.quantity}
						/>
					))}
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default Cart;
