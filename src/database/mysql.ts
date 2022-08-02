import path from 'path'
import fs from 'fs'

import mysql from 'mysql';
import Logger from '../logger';

//@ts-ignore
const { MYSQL_DATA: { HOST, PORT, USER, PASSWORD, DATABASE }} = JSON.parse(fs.readFileSync(path.join(__dirname, '..', '..', 'config.json')));

Logger.info("Iniciando conexão com o MySQL...");

const pool = mysql.createPool({
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE,
    port: PORT
})

pool.getConnection((error) => {
    if(error) {
        Logger.error('Houve um erro ao se conectar com o MySQL!')
        Logger.alert('Erro: ' + error)
        return
    }
    Logger.info('Conexão bem sucedida com o servidor MySQL!')
})

export { pool };