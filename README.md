<h1 align="center">
  <img alt="GoBarber" title="GoBarber" src="https://github.com/lucaslamar/gym-point-api/blob/master/src/img/68747470733a2f2f726f636b6574736561742d63646e2e73332d73612d656173742d312e616d617a6f6e6177732e636f6d2f626f6f7463616d702d6865616465722e706e67.png" width="200px" />
</h1>

# GoBarber-api
> O GoBarber é um sistema de gerenciamento de agendamementos

Com o Gobarber é possivel cadastrar com foto um usuario e dizer se o mesmo é um provedor de serviços ou não. O usuario comum pode cadastrar um agedamento para um dia especifico a um provider especifico o provider pode cancelar esse agendamento

 ## Começando

 <h3>Pré-requisitos</h3>

<ul>
    <li> <a href="https://nodejs.org/en/download/package-manager/"> NodeJS </a></li>
    <li> <a href="https://yarnpkg.com/en/docs/getting-started">Yarn</a> </li>
    <li> <a href="https://www.docker.com/get-started"> Docker </a> </li>
    <li> <a href="https://hub.docker.com/_/postgres">PostgreSQL</a> </li>
    <li> <a href="https://hub.docker.com/_/mongo">MongoDB</a> </li>
    <li> <a href="https://hub.docker.com/_/redis"> Redis </a> </li>
</ul>

<h4>REST API Client</h4>
<ul>
  <li><a href="https://insomnia.rest/">Insomnia</a></li>
  <li><a href="https://www.getpostman.com/">Postman</a></li>
  <li><a href="https://install.advancedrestclient.com/install">Advanced REST Client</a></li>
</ul>


## Configuração para Desenvolvimento

Depois de clonar repositorio e instalar os pre requisitos

- Run **`yarn`** to install dependencies;
- Crie uma **postgres** database;
- Crie uma **redis** database;
- Crie umm arquivo **`.env`** baseado **`.env.example`**;
- Ponha suas credencias **`.env`**;
- Rode **`yarn sequelize db:migrate`** para criar as migraçoes ;
- rode **`yarn sequelize db:seed:all`** para criar uma seed;
- rode **`yarn dev`** para iniciar a aplicação;
- rode **`yarn queue`** em outro terminal para iniciar as filas.

Agora você pode usar a REST API Client para testar "**GoBarber**".

## Construido com
<ul>
  <li>NodeJS</li>
  <li>Docker</li>
  <li>PostgreSQL</li>
  <li>Mailtrap.io</li>
  <li>Redis</li>
  <li>MongoDB</li>
</ul>

## Ferramentas
<ul>
  <li>Sucrase + Nodemon;</li>
  <li>ESLint + Prettier + EditorConfig;</li>
  <li>Sequelize</li>
</ul>




