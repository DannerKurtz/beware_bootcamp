import { Copyright } from "lucide-react";

const Footer = () => {
	return (
		<div className="bg-accent w-full gap-1 p-8">
			<p className="text-xs font-medium">
				<Copyright /> 2025 Copyright BEWAR
			</p>
			<p className="text-muted-foreground text-xs font-medium">
				Todos direitos reservados.
			</p>
		</div>
	);
};

export default Footer;
