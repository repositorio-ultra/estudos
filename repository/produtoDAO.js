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

    }

    editar(produto,callback)
    {
        
    }

}

module.exports = ()=>ProdutoDAO;