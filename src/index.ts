import path from 'path'
import fs from 'fs'

import http from 'http';
import api from './api'

import Logger from './logger'
import { pool } from './database/mysql'

(async () => {

    //@ts-ignore
    const CONFIG = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'config.json')));

    Logger.info("Iniciando servidor REST...")

    pool.query("CREATE TABLE IF NOT EXISTS comments (_id INTEGER PRIMARY KEY AUTO_INCREMENT, author VARCHAR(10) NOT NULL, comment VARCHAR(255))", (error, result, fields) => {
        if (!error) {
            Logger.info("Database inicializada com sucesso!")

            const server = http.createServer(api);
            server.listen(CONFIG.SERVER_PORT);

            Logger.info("Servidor aberto na porta " + CONFIG.SERVER_PORT + "!")
        }
    });
})()

