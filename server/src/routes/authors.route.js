import { Router } from "express";

export default ({ config, db }) => {
  const api = Router();

  api.get("/", (req, res) => {
    res.json(db.authors);
  });

  api.get("/:name", (req, res) => {
    const name = req.params.name;
    const author = db.authors.find(author => author.name == name);
    res.json(author);
  });

  return api;
};
