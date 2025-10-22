# Bewear Bootcamp 🛍️

Uma aplicação de e-commerce moderna desenvolvida com Next.js 15, focada em fornecer uma experiência de compra fluida e intuitiva.

## 🚀 Tecnologias

Este projeto foi construído utilizando as seguintes tecnologias:

- **[Next.js 15](https://nextjs.org)** - Framework React para produção
- **[React 19](https://react.dev)** - Biblioteca JavaScript para interfaces
- **[TypeScript](https://www.typescriptlang.org)** - Superset JavaScript com tipagem estática
- **[Drizzle ORM](https://orm.drizzle.team)** - ORM TypeScript-first para PostgreSQL
- **[PostgreSQL](https://www.postgresql.org)** - Banco de dados relacional
- **[Better Auth](https://www.better-auth.com)** - Sistema de autenticação
- **[Tailwind CSS](https://tailwindcss.com)** - Framework CSS utilitário
- **[Radix UI](https://www.radix-ui.com)** - Componentes UI acessíveis
- **[React Hook Form](https://react-hook-form.com)** - Gerenciamento de formulários
- **[Zod](https://zod.dev)** - Validação de esquemas TypeScript

## ✨ Funcionalidades

- 🛒 Carrinho de compras completo
- 👤 Autenticação de usuários
- 📦 Catálogo de produtos com variantes
- 🏷️ Sistema de categorias
- 📍 Gerenciamento de endereços de entrega
- 🎨 Interface responsiva e moderna
- 🌙 Suporte a temas (claro/escuro)

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org) (versão 20 ou superior)
- [npm](https://www.npmjs.com) ou outro gerenciador de pacotes
- [PostgreSQL](https://www.postgresql.org) (versão 12 ou superior)

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/DannerKurtz/beware_bootcamp.git
cd beware_bootcamp
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/bewear_bootcamp"
BETTER_AUTH_SECRET="seu-secret-aqui"
BETTER_AUTH_URL="http://localhost:3000"
```

4. Execute as migrações do banco de dados:
```bash
npx drizzle-kit push
```

5. (Opcional) Popule o banco de dados com dados iniciais:
```bash
npm run db:seed
```

## 🏃 Executando o Projeto

### Modo de Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

### Build para Produção

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

## 📁 Estrutura do Projeto

```
beware_bootcamp/
├── src/
│   ├── actions/          # Server actions
│   ├── app/              # Páginas e rotas (App Router)
│   ├── components/       # Componentes React reutilizáveis
│   ├── db/               # Configuração e schemas do banco de dados
│   ├── helpers/          # Funções auxiliares
│   ├── lib/              # Bibliotecas e configurações
│   └── providers/        # Context providers
├── public/               # Arquivos estáticos
├── drizzle/              # Migrações do banco de dados
└── ...arquivos de configuração
```

## 🗄️ Banco de Dados

O projeto utiliza **Drizzle ORM** com **PostgreSQL**. O schema inclui:

- **Usuários**: Gerenciamento de contas e autenticação
- **Produtos**: Catálogo de produtos com variantes
- **Categorias**: Organização de produtos
- **Carrinho**: Sistema de carrinho de compras
- **Endereços**: Endereços de entrega dos usuários

Para visualizar e gerenciar o banco de dados:

```bash
npx drizzle-kit studio
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## 📝 Licença

Este projeto foi desenvolvido como parte do Bewear Bootcamp.

## 🔗 Links Úteis

- [Documentação do Next.js](https://nextjs.org/docs)
- [Documentação do Drizzle ORM](https://orm.drizzle.team/docs/overview)
- [Documentação do Better Auth](https://www.better-auth.com/docs)
- [Documentação do Tailwind CSS](https://tailwindcss.com/docs)
