// Servidor estático mínimo — apenas para visualização local do site
const http = require("http");
const fs = require("fs");
const path = require("path");

const tipos = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
};

http
  .createServer((req, res) => {
    let caminho = decodeURIComponent(req.url.split("?")[0]);
    if (caminho === "/") caminho = "/index.html";
    const arquivo = path.join(__dirname, caminho);
    fs.readFile(arquivo, (erro, dados) => {
      if (erro) {
        res.writeHead(404);
        res.end("Não encontrado");
        return;
      }
      res.writeHead(200, { "Content-Type": tipos[path.extname(arquivo)] || "application/octet-stream" });
      res.end(dados);
    });
  })
  .listen(8931, () => console.log("Servindo em http://localhost:8931"));
