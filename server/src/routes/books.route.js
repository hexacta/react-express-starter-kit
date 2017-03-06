import { Router } from "express";

export default ({ config, db }) => {
  const api = Router();

  api.get("/", (req, res) => {
    res.json(db.books);
  });

  api.get("/:bookTitle", (req, res) => {
    const title = req.params.bookTitle;
    const book = db.books.find(book => book.title == title);
    res.json(book);
  });

  return api;
};
