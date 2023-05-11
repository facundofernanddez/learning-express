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

app.get("/products/:id", (req, res) => {
  const findedProduct = products.find((p) => p.id === parseInt(req.params.id));

  if (!findedProduct) {
    return res.status(404).send("Product not found");
  }

  console.log(findedProduct);
  res.send(findedProduct);
});

app.post("/products", (req, res) => {
  const newProduct = { id: products.length + 1, ...req.body };
  products.push(newProduct);
  res.send(newProduct);
});

app.put("/products", (req, res) => {
  res.send("actualizando productos");
});

app.delete("/products", (req, res) => {
  res.send("eliminando productos");
});

app.listen(3000);
console.log("server on port 3000");
