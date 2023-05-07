import express from "express";

const app = express();

app.get("/user", (req, res) => {
  res.json({ name: "facundo", age: 26 });
});

app.post("/products", (req, res) => {
  res.end("creando productos");
});

app.put("/products", (req, res) => {
  res.end("modificando producto");
});

app.delete("/products", (req, res) => {
  res.sendStatus(204);
});

app.patch("/products", (req, res) => {
  res.end("modificando caracteristica del producto");
});

app.use((req, res) => {
  res.status(404).send("No se encontro tu pagina");
});

app.listen(3000);
console.log("Server listening on port 3000");
