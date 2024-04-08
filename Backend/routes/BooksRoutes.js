import express, { Router } from "express";
import { Book } from "../models/bookModels.js";

const router = express.Router();


// Route to save a new book
router.post("/", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publisher
    ) {
      return response.status(400).send({
        message: "Send all the required fields: title, author, publisher",
      });
    }
    const newBook = {
      title: request.body.title,
      author: request.body.author,
      publisher: request.body.publisher,
    };

    const book = await Book.create(newBook);

    return response.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route to Get all the books from the database

router.get("/", async (request, response) => {
  try {
    const allBooks = await Book.find({}).lean();

    return response.status(200).json({
      count: Book.length,
      data: allBooks,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const oneBook = await Book.findById(id);

    // if (!oneBook) {
    //   return response.status(404).send({ message: "Book not found" });
    // }

    return response.status(200).json(oneBook);
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

//Route for update we use put to updata a book
router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publisher
    ) {
      return response
        .status(400)
        .send({ message: "send all the required feilds" });
    }
    const { id } = request.params;
    const result = await Book.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: "book not found" });
    }

    return response.status(200).send({ message: "book updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//route to delete a book

router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const deleteBook = await Book.findByIdAndDelete(id);

    if (!deleteBook) {
      return response.status(500).send({ message: "book not found" });
    } else {
      return response.status(200).send({ message: "Book deleted" });
    }
  } catch (error) {
    console.log(error.message);
    response.status(400).send({ message: error.message });
  }
});

export default router;