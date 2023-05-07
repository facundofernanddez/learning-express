import express from "express";

const app = express();

app.get("/products", (req, res) => {
  res.end("lista de productos");
});

app.post("/products", (req, res) => {
  res.end("creando productos");
});

app.put("/products", (req, res) => {
  res.end("modificando producto");
});

app.delete("/products", (req, res) => {
  res.end("eliminando producto");
});

app.patch("/products", (req, res) => {
  res.end("modificando caracteristica del producto");
});

app.use((req, res) => {
  res.status(404).send("No se encontro tu pagina");
});

app.listen(3000);
console.log("Server listening on port 3000");
