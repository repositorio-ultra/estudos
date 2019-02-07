// Funciona perfeitamente
// const http = require("http");

// const server = http.createServer((request, response)=>{
//     response.statusCode = 200;
//     response.setHeader("Content-Type", "text/plain");
//     response.end("Hello World!");
// });

//     server.listen(3000, (resquest, response)=>{
//         console.log("Mais uma vez funcionou!");
//     });

const app = require("./custom-express")();

app.listen(3000,(request, response)=>{
    console.log("Funcionando bem...");
});