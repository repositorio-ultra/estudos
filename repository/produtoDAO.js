class ProdutoDAO
{
    constructor(_connection)
    {
        this.connection = _connection;
    }

    listar(callback)// não precisa declarar que é function
    {
        this.connection.query("SELECT * FROM produto WHERE produto_status = 2 LIMIT 100;", callback);
    }

    mostrar_registro(id, callback)
    {
        let sql_1 =  "SELECT * FROM produto WHERE  id = ? ";
        let consulta = this.connection.query(sql_1 , id, callback);
    }

    editar(produto,callback)
    {

    }

    salvar_edicao(id,produto, callback)
    {
        let sql       =  `update produto set 
                            nome_completo = ?,
                            produto_laboratorio = ?,
                            peso = ?,
                            produto_atributo = ?,
                            produto_status = ?,
                            produto_lib_entrega = ?,
                            frete_gratis = ?,
                            data_atualizacao = ?,
                            imagem = ?,
                            comissao = ?,
                            tipo_comissao = ?
                            where id = ?
                            `;
        let atualizar = this.connection.query(
            sql,
            [produto.nome_completo,produto.produto_laboratorio,produto.peso,produto.produto_atributo,produto.produto_status,
                produto.produto_lib_entrega,produto.frete_gratis,produto.data_atualizacao,produto.imagem,produto.comissao,produto.tipo_comissao, id],
                callback
            );
    }

}

module.exports = ()=>ProdutoDAO;