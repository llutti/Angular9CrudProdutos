# Projeto do Curso "Angular 9 - Essencial" ministrado pela Cod3rs

  Este projeto está sendo desenvolvido durante o treinamento fornecido pela [Cod3rs](https://www.cod3r.com.br/)

  ![](/screenshots/frontend-2020-05-08 08_57_54.png)

## Comandos utilizados para a criação do Backend
  - Criar uma pasta chamada `backend`
  - `npm init -y`
  - `npm i json-server`
  - Criar um arquivo `db.json` para servir com base de dados que será utilizado pelo **json-server**
  - Configurar o arquivo `package.json` o seguinte script para inicialização:
    > `"start": "json-server --watch db.json --port 3001"`
  - Para iniciar a utilização do servidor de backend executar o comando:
    > `npm start`
  - Adicionar o seguinte conteúdo como carga inicial no arquivo `db.json`
    ``` json
      {
        "products": [
          {
            "id": 1,
            "name": "Canceta BIC Preta",
            "price": 5.89
          },
          {
            "id": 2,
            "name": "Notebook Mac PRO",
            "price": 12000.89
          },
          {
            "id": 3,
            "name": "Sansung S20+",
            "price": 5000.89
          }
        ]
      }
    ```

## Comandos utilizados para a criação do Frontend

  - Criação do projeto
    - `ng new frontend --minimal`
      > - Routing - Yes
      > - SCSS - Yes

  - Dependencias adicionadas
    - `ng add @angular/material`
      > Para melhor organização foi criado um módulo específico para declarar os "Material Components" utilizados
      > - `ng g m Material --flat`
      > - Adicionar este novo módulo ao `app.module.ts`
      > - Configurar os "Material Components" dentro do arquivo `material.module.ts`

    - `npm i -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser`
      > Realizar a configuração do ESLint, pois o TSLint está sendo descontinuado

  - Criação dos componentes
    - Templates
      > - `ng g c components/templates/nav --module app`
      > - `ng g c components/templates/header --module app`
      > - `ng g c components/templates/footer --module app`

    - Views
      > - `ng g c components/views/home --module app`
      > - `ng g c components/views/product-crud --module app`