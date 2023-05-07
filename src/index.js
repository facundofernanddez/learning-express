import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.end("hello world");
});

app.use((req, res) => {
  res.status(404).send("No se encontro tu pagina");
});

app.listen(3000);
console.log("Server listening on port 3000");
