const express = require("express");
const Book = require("../models/book.model");
const crudController = require("./crud.controller");
const router = express.Router();

router.get("", async (req, res) => {
  try {
    // console.log(req.query)
    const items = await Book.find(req.query).lean().exec();

    return res.send(items);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.post("", crudController(Book).post);

router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).lean().exec();

    if (book) {
      return res.send(book);
    } else {
      return res.status(404).send({ message: "Book not found" });
    }
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
