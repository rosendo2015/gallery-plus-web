# Galeria+

Aplicação web para organizar fotos em álbuns. Inclui um frontend em React e um servidor Fastify no mesmo repositório, com persistência em arquivo JSON e upload de imagens.

## Funcionalidades

- Listar fotos, filtrar por álbum e buscar por texto
- Cadastrar foto com título, arquivo e álbuns
- Ver detalhes da foto, navegar entre itens, associar a álbuns e excluir
- Criar e listar álbuns
- Upload de imagem (até 50 MB) servida em `/images/`

## Stack

| Camada   | Tecnologias                                                                        |
| -------- | ---------------------------------------------------------------------------------- |
| Frontend | React 19, React Router, TanStack Query, React Hook Form, Zod, Tailwind CSS 4, Vite |
| Backend  | Fastify, `@fastify/multipart`, `@fastify/static`, `@fastify/cors`                  |
| Dados    | `data/db.json` + arquivos em `data/images/`                                        |

## Pré-requisitos

- Node.js 20+
- [pnpm](https://pnpm.io/)

## Como executar

1. Instale as dependências:

```bash
pnpm install
```

2. Confira o arquivo `.env` na raiz (já esperado pelo Vite):

```env
VITE_API_URL=http://localhost:5799
VITE_IMAGES_URL=http://localhost:5799/images
```

3. Suba o backend em um terminal:

```bash
pnpm dev-server
```

O servidor sobe em `http://localhost:5799` (porta `PORT` ou `5799`). Dados ficam em `data/` (criado automaticamente). Health check: `GET /health`.

4. Suba o frontend em outro terminal:

```bash
pnpm dev
```

Abra a URL que o Vite imprimir (em geral `http://localhost:5173`).

Há uma collection Postman em `Gallery+.postman_collection.json` para testar a API.

## Scripts

| Script            | Descrição                                               |
| ----------------- | ------------------------------------------------------- |
| `pnpm dev`        | Frontend em modo desenvolvimento                        |
| `pnpm dev-server` | Backend com watch (`tsup` + Node)                       |
| `pnpm build`      | Compila o servidor e gera o build do Vite               |
| `pnpm run-server` | Executa o servidor já compilado (`server/dist/main.js`) |
| `pnpm preview`    | Preview do build do frontend                            |
| `pnpm lint`       | ESLint                                                  |

## Rotas da interface

- `/` — galeria (filtros, busca, lista)
- `/fotos/:id` — detalhes da foto
- `/components` — vitrine de componentes de UI

## API (resumo)

**Fotos**

- `GET /photos` — query opcional: `albumId`, `q`
- `GET /photos/:id`
- `POST /photos` — cria foto (título)
- `POST /photos/:id/image` — upload multipart
- `PATCH /photos/:id` — atualiza título
- `DELETE /photos/:id`
- `PUT /photos/:id/albums` — vincula/desvincula álbuns

**Álbuns**

- `GET /albums`
- `GET /albums/:id`
- `POST /albums`
- `DELETE /albums/:id`

## Estrutura

```
src/                 # frontend (páginas, componentes, contexts de fotos/álbuns)
server/              # API Fastify (rotas, serviços, models)
data/                # banco JSON e imagens (gerado em runtime)
```

## Contato

Entre em contato ou acompanhe meu trabalho:

- **Nome:** Francisco Rosendo
- **E-mail:** [rosendc30@gmail.com](mailto:rosendc30@gmail.com)
- **GitHub:** [github.com/rosendo2015](https://github.com/rosendo2015)
- **LinkedIn:** [linkedin.com/in/francisco-rosendo-coelho](https://www.linkedin.com/in/francisco-rosendo-coelho/)
