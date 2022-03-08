# Faithful management
**Sistema feito para igrejas. O sistema consiste em um cadastro de fiéis**

- [Faithful management](#faithful-management)
  - [Sobre o projeto](#sobre)
  - [Execução local](#execução-local)
    - [Pré-requisitos](#pré-requisitos)
    - [Executando o projeto](#executando-o-projeto)
  - [Lint](#lint)

---

## Sobre o projeto
Esse projeto foi criado para ajudar igrejas a gerenciarem o seus fiéis. Além disso, está servindo de base para aumentar meu conhecimento em [Docker](./Dockerfile) e [Docker Compose](./docker-compose.yml).

### Tecnologias utilizadas
- Node
- Express
- Jest como ferramenta de testes automatizados
- Eslint para padronizar alguns aspectos do código como aspas simples e ponto-vírgula
- Husky e lint-staged para garantir que o desenvolvedor não suba o código sem executar os testes e lint
- Typeorm para manipulação de banco de dados


### Estrutura de diretórios

```
src/
 ├─ application/
 |   ├─ controllers/
 |   └─ http/
 ├─ domain/
 |   ├─ entities/
 |   ├─ features/
 |   └─ repositories/
 ├─ infra/
 |   ├─ http/
 |   └─ typeorm/
 ├─ main/
 |   ├─ api/
 |   ├─ config/
 |   ├─ factories/
 ├─ test/
 |   ├─ integration/
 |   └─ unit/
 └─ package.json
```

Cada pasta, com exceção de `tests`, representa uma camada da aplicação.

- **application**: Nessa pasta ficam as regras da aplicação como o tipo de comunicação com o mundo externo (http).
- **domain**: Aqui vão as regras de negócio além das interfaces que servirão como portas para essa camada.
- **infra**: Pasta com os detalhes da implementação (bibliotecas externas) como o typeorm, express, manipuladores de data, etc.
- **main**: Única camada que conhece todas as outras. A aplicação é iniciada a partir dela.
- **test**: Dir com todos os testes unitarios e integração.


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
1. Um banco de dados postgresql
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
