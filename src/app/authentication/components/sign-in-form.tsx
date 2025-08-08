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
import { authClient } from "@/lib/auth-client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const formSchema = z.object({
	email: z.email("Digite um e-mail válido").min(1),
	password: z
		.string("Senha inválida")
		.min(6, "Senha inválida (6 caracteres mínimo)"),
});

type formValues = z.infer<typeof formSchema>;

const SignInForm = () => {
	const router = useRouter();
	const form = useForm<formValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});
	async function onSubmit(values: formValues) {
		await authClient.signIn.email({
			email: values.email,
			password: values.password,
			fetchOptions: {
				onSuccess: () => {
					toast.success("Login realizado com sucesso!");
					router.push("/");
				},
				onError: (ctx) => {
					if (
						ctx.error.code === "INVALID_PASSWORD" ||
						ctx.error.code === "USER_NOT_FOUND" ||
						ctx.error.code === "INVALID_EMAIL_OR_PASSWORD"
					) {
						toast.error("E-mail ou senha inválidos.");
						form.setError("email", {
							message: "E-mail ou senha inválidos.",
						});
						form.setError("password", {
							message: "E-mail ou senha inválidos.",
						});
					}
				},
			},
		});
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

export default SignInForm;
