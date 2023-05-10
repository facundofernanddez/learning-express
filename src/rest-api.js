import express from "express";
import morgan from "morgan";

const app = express();

const products = [
  {
    id: 1,
    name: "laptop",
    color: "black",
  },
  {
    id: 2,
    name: "smartphone",
    color: "white",
  },
];

app.use(morgan("dev"));
app.use(express.json());

app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/products", (req, res) => {
  products.push({ id: products.length + 1, ...req.body });
  res.send("creando productos");
});

app.put("/products", (req, res) => {
  res.send("actualizando productos");
});

app.delete("/products", (req, res) => {
  res.send("eliminando productos");
});

app.get("/products/:id", (req, res) => {
  res.send("obteniendo un producto");
});

app.listen(3000);
console.log("server on port 3000");
