# Controle de membros
**Sistema feito para igrejas. O sistema consiste em um cadastro de fiéis**

- [Maithful management](#maithful-management)
  - [Execução local](#execução-local)
    - [Pré-requisitos](#pré-requisitos)
    - [Executando o projeto](#executando-o-projeto)

---

## Execução local

### Pré-requisitos

- [Docker](https://docs.docker.com/get-docker/) e [Docker-Compose](https://docs.docker.com/compose/install/) instalados.

### Executando o projeto

Para executar o projeto, você deverá clonar e entrar na pasta do projeto. Segue exemplo utilizando SSH. Você também pode baixar usando a CLI do github

```sh
git clone git@github.com:murilomaiaa/faithful-management.git && cd faithful-management

```

Execute a API com [docker-compose](./docker-compose.yml)

```sh
cp .env.example .env && \
docker-compose up -d
```
O docker-compose irá iniciar 3 serviços
1. Um banco de dados postgres
2. Uma API Node. Quando essa API iniciar, ela executará as migrations
3. Nginx para proxy reverso

### Documentação

Após iniciar a aplicação, a documentação de toda a api estará disponível a partir do endereço <http://localhost/docs-api>.

## Lint

É importante que o código mantenha um padrão e, para isso, o Eslint está sendo utilizado junto com o Husky e o LintStaged para garantir que todos os commits vão passar por padronização.
Caso queira executar o eslint antes de fazer o commit
```sh
yarn lint
```
