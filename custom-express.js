const express    = require("express");
const consign    = require("consign");
const bodyParser = require("body-parser");
const expressValidator  = require("express-validator");

module.exports = ()=>{

        const app = express();

        app.set("view engine", "ejs");

        app.use("/static",express.static("./node_modules/bootstrap/dist/"));

        app.use(bodyParser.urlencoded({extended: false}));

        app.use(bodyParser.json());

        app.use(expressValidator());

        consign()
        .include('./routes')
        .then("./config")
        .then("./repository")
        .into(app);

        app.use((request, response, next)=>{
                let erro = request.originalUrl ;
                const objeto = [
                                        {titulo: erro, body: "esta página está com erro"},
                                        {titulo: "Segundo Título", body: "esta página está com erro também"},
                                ];
                console.log(erro);
                response.status(400).render("erro" , {erro, objeto});
        })

        app.use((erro, request, response, next)=>{
                response.status(500).render("erro" , {erro});
                (error)=>{ console.log(error)}
        })


        return app;

}
