import express from "express";

const router = express.Router();

router.get("/user", (req, res) => {
  res.json({ name: "facundo", age: 26 });
});

router.get("/profile", (req, res) => {
  res.send("profile page");
});

export default router;
