import express from "express";
import { readFile, writeFile } from "fs/promises";
import { v4 as uuidv4 } from "uuid";
import fetch from "node-fetch";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const Product = mongoose.model("Product", {
  title: String,
  image: String,
  price: Number,
  category: String,
  description: String,
});

app.get("/products", async (req, res) => {
  const product = await Product.find();

  res.send(product);
});

app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.send(product);
});

// app.get("/products", async (req, res) => {
//   const { term } = req.query;
//   try {
//     const data = await readFile("./products.json", "utf8");
//     let products = JSON.parse(data);
//     if (term) {
//       products = products.filter((product) => product.title.includes(term));
//     }
//     res.send(products);
//   } catch (e) {
//     throw e;
//   }
// });

// app.get("/products", async (req, res) => {
//   const { term } = req.query;
//   let data = await readFile("./products.json", "utf8");
//   let products = JSON.parse(data);
//   if (term) {
//     products = products.filter((product) => product.title.includes(term));
//   }
//   res.send(products);
// });

// app.post("/products", async (req, res) => {
//   const { title, price, description, category, image } = req.body;
//   const data = await readFile("./products.json", "utf8");
//   let products = JSON.parse(data);
//   const newProduct = {
//     id: uuidv4(),
//     title,
//     price,
//     description,
//     category,
//     image,
//   };
//   products.push(newProduct);
//   await writeFile("./products.json", JSON.stringify(products));
//   res.send(newProduct);
// });
app.post("/products", async (req, res) => {
  const { title, price, description, category, image } = req.body;

  const product = new Product({
    title,
    image,
    price,
    category,
    description,
  });
  await product.save(product);

  res.send(product);
});

// app.put("/products/:id", async (req, res) => {
//   const body = req.body;
//   const { id } = req.params;
//   const data = await readFile("./products.json", "utf8");
//   let products = JSON.parse(data);

//   const productIndex = products.findIndex((product) => product.id === +id);
//   for (const prop in body) {
//     products[productIndex] = { ...products[productIndex], [prop]: body[prop] };
//   }
//   await writeFile("./products.json", JSON.stringify(products));
//   res.send(products);
// });

async function initProducts() {
  const productsFromDb = await Product.find();
  if (!productsFromDb.length) {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();
    const mapProducts = products.map((product) => ({
      ...product,
      id: null,
    }));

    await Product.insertMany(mapProducts);
  }
}

// app.delete("/products/:id", async (req, res) => {
//   const body = req.body;
//   const { id } = req.params;
//   const data = await readFile("./products.json", "utf8");
//   let products = JSON.parse(data);

//   const productIndex = products.findIndex((product) => product.id === +id);
//   products.splice([productIndex], 1);

//   await writeFile("./products.json", JSON.stringify(products));
//   res.send(products);
// });
app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndDelete(id);
  res.send("the product is delete");
});

app.put("/products/:id", async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = await Product.findByIdAndUpdate(id, body);
  res.send(product);
});

const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;

mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
  () => {
    app.listen(process.env.PORT || 8090);
    initProducts();
  }
);
