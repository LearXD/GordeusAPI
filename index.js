const mysql = require('mysql')

try {
    const connection = mysql.createPool({
        host: 'mysql.learxd.mee',
        user: 'root',
        password: 'suasenha123',
        database: 'gordeusapp',
    })

    console.log(connection._protocol)
} catch (e) {
    console.log(e)
}
