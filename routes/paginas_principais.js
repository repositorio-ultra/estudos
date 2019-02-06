module.exports = function(app){
    app.get("/", function(request,response, next){
        console.log("Home via custom express e routes/index");
        response.render("home");
    });

    app.get("/produtos", function(request,response, next){
        console.log("Home via custom express e routes/index");
        response.render("produtos");
    });

    app.get("/estes_produtos", function(request,response,next){
            const connection = app.config.connectionFactory(); //caminho do arquivo
            const produtosDAO  = new app.repository.produtoDAO(connection); //caminho do arquivo
            produtosDAO.listar(function(erro,resultados, fields){
                //console.log(fields); funciona
                console.log("Usando o middleware");
                if(erro) return next({erro}); // tem que enviar como objeto o retorno
                // Enviando mais de um tipo de resposta de um mesmo end point
                // html e json
                response.format({
                    html: function(){
                        response.render("produtos",{produtos: resultados});
                    }
                    ,
                    json: function()
                    {
                        response.json(resultados);
                    }
                });
            });
            connection.end();
        }
    );

    app.get("/produtos/editar/:id", function(request,response,next){
        const connection = app.config.connectionFactory(); //caminho do arquivo
        const produtosDAO  = new app.repository.produtoDAO(connection); //caminho do arquivo
        // não precisa escapar o params.id se a query ao banco for feita com ?
        produtosDAO.mostrar_registro(request.params.id,function(erro,produto){
            if(erro) return next({erro}); // tem que enviar como objeto o retorno
            // Enviando mais de um tipo de resposta de um mesmo end point
            // html e json
            response.format({
                html: function(){
                    response.render("registro",{produto});
                }
                ,
                json: function()
                {
                    response.json(produto);
                }
            });
        });
        connection.end();
    });

    app.post("/produtos/salvar_edicao/:id", function(request,response,next){
        const dados = request.body;
        console.log(dados.nome_completo);
    });

}