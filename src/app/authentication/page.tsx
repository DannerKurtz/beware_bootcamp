import Header from "@/components/common/header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignInForm from "./components/sign-in-form";
import SignUpForm from "./components/sign-up-form";

const Authentication = () => {
	return (
		<>
			<Header />
			<div className="flex h-auto w-full items-center justify-center">
				<div className="lex max-w-sm flex-col gap-6 p-5">
					<Tabs defaultValue="sign-in" className="w-full">
						<TabsList>
							<TabsTrigger value="sign-in">Entrar</TabsTrigger>
							<TabsTrigger value="sign-up">Criar conta</TabsTrigger>
						</TabsList>
						<TabsContent value="sign-in">
							<SignInForm />
						</TabsContent>
						<TabsContent value="sign-up">
							<SignUpForm />
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</>
	);
};

export default Authentication;
