"user client";

import { getCart } from "@/actions/get-cart";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { formatCentsToBRL } from "@/helpers/money";
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
				<div className="flex h-full flex-col">
					<div className="flex-1 px-5">
						<ScrollArea className="h-full">
							<div className="flex flex-col gap-8">
								{cart?.items.map((item) => (
									<CartItem
										key={item.id}
										id={item.id}
										productName={item.productVariant.product.name}
										productVariantName={item.productVariant.name}
										productVariantImageUrl={item.productVariant.imageUrl}
										productVariantPriceInCents={
											item.productVariant.priceInCents
										}
										quantity={item.quantity}
									/>
								))}
							</div>
						</ScrollArea>
					</div>
					{cart?.items && cart?.items.length > 0 && (
						<div className="mt-auto p-5">
							<Separator className="my-4" />
							<div className="flex items-center justify-between text-xs font-medium">
								<p>Subtotal</p>
								<p>{formatCentsToBRL(cart?.totalInCents ?? 0)}</p>
							</div>
							<Separator className="my-4" />
							<div className="flex items-center justify-between text-xs font-medium">
								<p>Entrega: </p>
								<p>Grátis</p>
							</div>
							<Separator className="my-4" />
							<div className="flex items-center justify-between text-xs font-medium">
								<p>Total</p>
								<p>{formatCentsToBRL(cart?.totalInCents ?? 0)}</p>
							</div>
							<Separator className="my-4" />

							<Button className="w-full rounded-full">Finalizar pedido</Button>
						</div>
					)}
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default Cart;
