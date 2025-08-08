"use client";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const formSchema = z.object({
	email: z.email("Digite um e-mail válido").min(1),
	password: z
		.string("Senha inválida")
		.min(6, "Senha inválida (6 caracteres mínimo)"),
});

type formValues = z.infer<typeof formSchema>;

const SingInForm = () => {
	const form = useForm<formValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});
	function onSubmit(values: formValues) {
		console.log("Form submitted with values:");
		console.log(values);
	}
	return (
		<Card>
			<CardHeader>
				<CardTitle>Entrar</CardTitle>
				<CardDescription>Faça o login para continuar</CardDescription>
			</CardHeader>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
					<CardContent className="grid gap-6">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>E-mail</FormLabel>
									<FormControl>
										<Input placeholder="Digite seu e-mail" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input
											placeholder="Digite sua senha"
											{...field}
											type="password"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</CardContent>
					<CardFooter>
						<Button type="submit">Entrar</Button>
					</CardFooter>
				</form>
			</Form>
		</Card>
	);
};

export default SingInForm;
