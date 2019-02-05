class ProdutoDAO
{
    constructor(_connection)
    {
        this.connection = _connection;
    }

    listar(callback)// não precisa declarar que é function
    {
        this.connection.query("SELECT * FROM produto WHERE produto_status = 1 LIMIT 100;", callback);
    }

    mostrar_registro(id, callback)
    {
        let sql_1 =  "SELECT * FROM produto WHERE  id = ? ";
        let consulta = this.connection.query(sql_1 , id, callback);
        console.log(consulta.sql);
    }

    editar(produto,callback)
    {

    }

}

module.exports = ()=>ProdutoDAO;