<h1 align="center">AWS Lambda - GraphQL-DynamoDB</h1>

# Sobre
**Este projeto tem como objetivo a utilização de GraphQL integrado com**
**o banco de dados DynamoDB. A implementação foi dividia em quatro partes,**
**sendo a implementação final contida na pasta *graphql-dynamodb-pt4***
<br>
<br>
**Três padrões de projeto foram utilizados e eles são**:
- **Repository**
- **Factory**
- **Dependency Injection**
<br>
<br>

**As ferramentas utilizadas para o desenvolvimento são:**
- **localstack**: Emula o ambiente de execução de lambda functions da AWS localmente
- **serverless-offline**: Plugin serverless que permite a execução de lambda functions localmente, em conjunto com o **localstack** de forma rápida.
- **serverless-dynamodb-local**: Plugin serverless que permite o uso local do DynamoDB, em conjunto com o **localstack**
- **dynamoose**: ORM para uso do DynamoDB
- **apollo-server-lambda**: Server GraphQL para ambientes aws lambda
<br>

# Execuçao do projeto
## Localstack
**Para a execução local do projeto, é obrigatória a execução do localstack. Para inicializá-lo,**
**na pasta raiz do projeto, usaremos o docker compose**
```
docker-compose up -d localstack
```
## Yarn
**Uma vez que o container esteja executando:**

```
yarn start
```



