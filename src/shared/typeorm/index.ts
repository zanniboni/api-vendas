/* Módulo responsável por criar a conexão do typeorm */

import { createConnection } from 'typeorm';

/* Função irá percorrer todo o projeto para encontrar as

definições de configuração com o banco de dados

localizadas no arquivo 'ormconfig.json' */

createConnection();
