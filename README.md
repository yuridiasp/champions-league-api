# Champions League API

## Descrição

A Champions League API é uma aplicação Node.js desenvolvida com TypeScript para gerenciar informações sobre clubes e jogadores da liga. Esta API fornece endpoints para realizar operações CRUD (Criar, Ler, Atualizar e Deletar) em dados de clubes e jogadores.

## Estrutura do Projeto

```plaintext
CHAMPIONS-LEAGUE-API/
├── node_modules/
├── src/
│   ├── controller/
│   │   ├── clubs-controller.ts
│   │   ├── players-controller.ts
│   ├── data/
│   │   ├── clubs.json
│   │   ├── players.json
│   ├── model/
│   │   ├── club-model.ts
│   │   ├── http-response-model.ts
│   │   ├── player-model.ts
│   │   ├── statistics-model.ts
│   ├── repositories/
│   │   ├── clubs/
│   │   │   ├── find-all-clubs-repository.ts
│   │   ├── players/
│   │   │   ├── delete-one-player-repository.ts
│   │   │   ├── find-all-players-repository.ts
│   │   │   ├── find-and-modify-player-repository.ts
│   │   │   ├── find-player-by-id-repository.ts
│   │   │   ├── insert-player-repository.ts
│   ├── routes/
│   │   ├── routes.ts
│   ├── services/
│   │   ├── clubs/
│   │   │   ├── get-clubs-service.ts
│   │   ├── players/
│   │   │   ├── delete-player-service.ts
│   │   │   ├── get-player-by-id-service.ts
│   │   │   ├── get-players-service.ts
│   │   │   ├── post-player-service.ts
│   │   │   ├── update-player-service.ts
│   ├── utils/
│   │   ├── data-utils.ts
│   │   ├── http-helper.ts
│   │   ├── validation-utils.ts
│   ├── app.ts
│   ├── server.ts
├── .env
├── .env.example
├── .gitignore
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
```

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/yuridiasp/champions-league-api.git
cd champions-league-api
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:

Crie um arquivo `.env` baseado no arquivo `.env.example` e configure as variáveis necessárias.

## Scripts Disponíveis

No arquivo `package.json`, você encontrará os seguintes scripts:

- `dist`: Compila o código TypeScript para JavaScript usando o `tsup`.
- `start:dev`: Inicia o servidor em modo de desenvolvimento.
- `start:watch`: Inicia o servidor e observa mudanças no código-fonte para recarregar automaticamente.
- `start:dist`: Compila o código e inicia o servidor a partir da versão compilada.

## Executando a Aplicação

Para iniciar a aplicação em modo de desenvolvimento:

```bash
npm run start:dev
```

Para compilar o código e iniciar a versão distribuída:

```bash
npm run start:dist
```

## Endpoints da API

### Jogadores

- `GET /api/players`: Retorna todos os jogadores.
- `GET /api/players/:id`: Retorna um jogador pelo ID.
- `POST /api/players`: Cria um novo jogador.
- `DELETE /api/players/:id`: Deleta um jogador pelo ID.
- `PATCH /api/players/:id`: Atualiza um jogador pelo ID.

### Clubes

- `GET /api/clubs`: Retorna todos os clubes.

## Licença

Este projeto está licenciado sob a licença ISC. Consulte o arquivo LICENSE para obter mais informações.

## Desenvolvedor

<p>
    <a href="https://github.com/yuridiasp">
        <img
          align=left
          margin=10
          width=80
          src="https://avatars.githubusercontent.com/u/81938754?v=4"
        />
    </a>
      <p>
        <p>&nbsp&nbsp<a style="color: white;" href="https://github.com/yuridiasp">Yuri Dias</a><br>
        &nbsp&nbsp&nbsp
    </p>
</p>

<br>

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/yuridiasp/) [![Discord](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)](https://discord.com/channels/@yuridiasp/) [![Facebook](https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/yuri.dias.7739/) [![X](https://img.shields.io/badge/X-000?style=for-the-badge&logo=x)](https://x.com/YuriDias_P) [![Instagram](https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/yuridiasp/) [![E-mail](https://img.shields.io/badge/-Email-000?style=for-the-badge&logo=microsoft-outlook&logoColor=007BFF)](mailto:yuristardias@hotmail.com)