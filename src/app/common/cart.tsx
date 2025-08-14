"user client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingBasketIcon } from "lucide-react";

const Cart = () => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant={"outline"} size={"icon"}>
					<ShoppingBasketIcon />
				</Button>
			</SheetTrigger>
			<SheetContent></SheetContent>
		</Sheet>
	);
};

export default Cart;
