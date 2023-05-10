import express from "express";
import morgan from "morgan";

const app = express();

app.use(express.json());

app.use(morgan());

app.get("/user", (req, res) => {
  res.json({ name: "facundo", age: 26 });
});

app.use((req, res, next) => {
  console.log("paso por aqui");

  next();
});

app.use((req, res, next) => {
  if (req.query.login === "facundofernanddez@gmail.com") {
    next();
  } else {
    res.send("No autorizado");
  }

  next();
});

app.get("/profile", (req, res) => {
  res.send("profile page");
});

app.get("/dashboard", (req, res) => {
  res.send("dashboard");
});

app.get("/user/:user", (req, res) => {
  if (req.query.q === "javascript libros") {
    res.send(`Libros de javascript`);
  } else {
    res.send(`Hola ${req.params.user}`);
  }
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
