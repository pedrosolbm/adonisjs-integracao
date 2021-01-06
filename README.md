# Autenticação AdonisJs

Projeto final de integração. Utiliza as seguintes dependencias

1. Bodyparser
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds

## Setup
1. `npm install`
2. Criar banco de dados manualmente
3. Configure o `.env` com as informações de conexão do seu banco e configurações do seu servidor SMTP(Se não trocar, não recebe o email de confirmação)
4. `adonis serve --run`

## Migrations
1. Criar as tabelas `adonis migration:run`
