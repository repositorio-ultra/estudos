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
            produtosDAO.listar(function(erro,resultados){
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

}