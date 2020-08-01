// O sucrase me permite usar essa sintaxe de import e export
// e o nodemon monitora alterações nos arquivos pra reiniciar o servidor
import express from 'express';
import path from 'path';
import cors from 'cors';
import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();

    // se não chamar aqui os metodos nunc serão executados
    this.middlewares();
    this.routes();
  }

  middlewares() {
    // permite que outras aplicações acessem a API
    this.server.use(cors());
    // para receber requisições em formato json
    this.server.use(express.json());
    // pra conseguir acessar as imagens quando ir no link
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;

// Não fiz as alterações do video 21 pq é mais pra ambiente de produção,
// vc recebe os erros no Sentry, que é quem monitora os erros da aplicação
// mas tbm é um debugador pra mostrar o erro no imnsonia ao invés de ter que ir no terminal

// Tbm não fiz do 22 pq mostra as variaveis ambientes, que são aquelas variaveis que podem alterar
// dependendo de onde a app ta rodando. Aí como essa é só minha não preciso do .env
