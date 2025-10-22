# Beware Bootcamp - E-commerce

Projeto de e-commerce desenvolvido com Next.js, focado em venda de produtos com sistema de variantes (cores, tamanhos), carrinho de compras e autenticação de usuários.

## 🚀 Tecnologias Utilizadas

### Frontend
- **[Next.js 15.4.1](https://nextjs.org)** - Framework React com renderização server-side
- **[React 19.1.0](https://react.dev)** - Biblioteca JavaScript para interfaces de usuário
- **[TypeScript 5](https://www.typescriptlang.org)** - Superset JavaScript com tipagem estática
- **[TailwindCSS 4](https://tailwindcss.com)** - Framework CSS utilitário
- **[Radix UI](https://www.radix-ui.com)** - Componentes UI acessíveis e não estilizados
- **[Lucide React](https://lucide.dev)** - Biblioteca de ícones

### Backend & Database
- **[PostgreSQL](https://www.postgresql.org)** - Banco de dados relacional
- **[Drizzle ORM 0.44.4](https://orm.drizzle.team)** - ORM TypeScript-first para Node.js
- **[Better Auth 1.2.12](https://www.better-auth.com)** - Solução completa de autenticação

### State Management & Data Fetching
- **[TanStack Query 5.85.0](https://tanstack.com/query)** - Gerenciamento de estado assíncrono e cache
- **[React Hook Form 7.62.0](https://react-hook-form.com)** - Gerenciamento de formulários
- **[Zod 4.0.15](https://zod.dev)** - Validação de schemas TypeScript-first

### UI Components
- **[Sonner](https://sonner.emilkowal.ski)** - Notificações toast
- **[Next Themes](https://github.com/pacocoursey/next-themes)** - Gerenciamento de temas
- **[class-variance-authority](https://cva.style)** - Utilitário para variantes de componentes
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Mesclagem inteligente de classes Tailwind

## 📋 Funcionalidades

- ✅ Catálogo de produtos com categorias
- ✅ Sistema de variantes de produtos (cores, tamanhos, etc.)
- ✅ Carrinho de compras
- ✅ Autenticação de usuários
- ✅ Gerenciamento de endereços de entrega
- ✅ Interface responsiva
- ✅ Listagem de produtos mais vendidos e novos produtos

## 🏗️ Estrutura do Projeto

```
src/
├── actions/           # Server actions do Next.js
│   ├── add-cart-product/
│   └── get-cart/
├── app/              # Rotas e páginas (App Router)
│   ├── api/          # API routes
│   ├── authentication/
│   ├── category/
│   ├── common/       # Componentes compartilhados
│   └── products-variant/
├── components/       # Componentes UI reutilizáveis
│   └── ui/
├── db/              # Configuração e schemas do banco
│   ├── index.ts
│   ├── schema.ts
│   └── seed.ts
├── helpers/         # Funções auxiliares
├── lib/            # Bibliotecas e configurações
└── providers/      # Context providers
```

## 🎯 Como Funciona o Projeto

### Arquitetura

O projeto utiliza o **Next.js App Router** com renderização híbrida (SSR + CSR):

1. **Páginas Server-Side**: A página inicial (`app/page.tsx`) busca produtos e categorias diretamente no servidor usando Drizzle ORM
2. **Client Components**: Componentes interativos como Header, Cart e ProductList são renderizados no cliente
3. **Server Actions**: Ações do servidor gerenciam operações como adicionar produtos ao carrinho
4. **Database**: PostgreSQL com Drizzle ORM para queries type-safe

### Fluxo de Dados

```
Cliente → Server Component → Drizzle ORM → PostgreSQL
Cliente → Server Action → Validação (Zod) → Database → TanStack Query
```

### Banco de Dados

O projeto utiliza as seguintes tabelas principais:

- **user**: Usuários do sistema
- **category**: Categorias de produtos
- **product**: Produtos base
- **product_variant**: Variantes de produtos (cores, tamanhos)
- **cart**: Carrinhos de compras
- **cart_item**: Itens dentro do carrinho
- **shipping_address**: Endereços de entrega

## 🚀 Como Executar

### Pré-requisitos

- Node.js 20+
- PostgreSQL instalado e rodando
- npm, yarn, pnpm ou bun

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/DannerKurtz/beware_bootcamp.git
cd beware_bootcamp
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Configure as variáveis de ambiente:
```bash
# Crie um arquivo .env na raiz do projeto
DATABASE_URL=postgresql://usuario:senha@localhost:5432/beware_bootcamp
```

4. Execute as migrações do banco de dados:
```bash
npx drizzle-kit push
```

5. (Opcional) Popule o banco com dados de exemplo:
```bash
npm run seed
```

6. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

7. Abra [http://localhost:3000](http://localhost:3000) no navegador

## 📜 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter do Next.js

## 🔧 Configuração do Banco de Dados

O projeto utiliza Drizzle ORM. A configuração está em `drizzle.config.ts`:

```typescript
{
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL
  }
}
```

## 📦 Deploy

O projeto pode ser facilmente deployado na [Vercel](https://vercel.com):

1. Faça push do código para o GitHub
2. Importe o projeto na Vercel
3. Configure a variável de ambiente `DATABASE_URL`
4. Deploy automático!

Para outros ambientes, execute `npm run build` e depois `npm start`.

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## 📄 Licença

Este projeto está sob a licença MIT.
