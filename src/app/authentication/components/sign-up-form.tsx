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

const formSchema = z
	.object({
		name: z.string("Nome inválido").trim().min(1, "Nome inválido"),
		email: z.email("Digite um e-mail válido").min(1),
		password: z
			.string("Senha inválida")
			.min(6, "Senha inválida (6 caracteres mínimo)"),
		passwordConfirmation: z
			.string("Confirmação de senha inválida")
			.min(6, "Confirmação de senha inválida (6 caracteres mínimo)"),
	})
	.refine((data) => data.password === data.passwordConfirmation, {
		message: "As senhas não conferem",
		path: ["passwordConfirmation"],
	});

type formValues = z.infer<typeof formSchema>;

const SignUpForm = () => {
	const router = useRouter();
	const form = useForm<formValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			passwordConfirmation: "",
		},
	});
	async function onSubmit(values: formValues) {
		const { data, error } = await authClient.signUp.email({
			name: values.name, // required
			email: values.email, // required
			password: values.password, // required
			fetchOptions: {
				onSuccess: () => {
					toast.success("Cadastro realizado com sucesso!");
					router.push("/");
				},
				onError: (ctx) => {
					if (ctx.error.code === "USER_ALREADY_EXISTS") {
						toast.error("E-mail já cadastrado");
						form.setError("email", {
							message: "E-mail já cadastrado",
						});
					}
				},
			},
		});
	}
	return (
		<Card>
			<CardHeader>
				<CardTitle>Cadastrar</CardTitle>
				<CardDescription>Cadastre sua conta para continuar já</CardDescription>
			</CardHeader>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
					<CardContent className="grid gap-6">
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Nome</FormLabel>
									<FormControl>
										<Input
											placeholder="Digite seu nome"
											{...field}
											type="text"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>E-mail</FormLabel>
									<FormControl>
										<Input
											placeholder="Digite seu e-mail"
											{...field}
											type="email"
										/>
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
									<FormLabel>Senha</FormLabel>
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
						<FormField
							control={form.control}
							name="passwordConfirmation"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Confirmação de senha</FormLabel>
									<FormControl>
										<Input
											placeholder="Digite sua senha novamente"
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
						<Button type="submit">Cadastrar</Button>
					</CardFooter>
				</form>
			</Form>
		</Card>
	);
};

export default SignUpForm;
