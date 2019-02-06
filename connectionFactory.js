function connectionFactory()
{
    const mysql = require("mysql");

    const connection = mysql.createConnection({
            hostname : "localhost",
            user : "root",
            password :"",
            database :"ecommerce2"
    });

    return connection;
}

module.exports = ()=>connectionFactory;