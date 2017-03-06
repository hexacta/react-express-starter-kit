const books = [
  { title: "Walden", author: "H. D. Thoreau" },
  { title: "Dune", author: "Frank Herbert" },
  { title: "Flatland", author: "Edwin A. Abbott" }
];

const authors = [
  { name: "H. D. Thoreau", country: "USA" },
  { name: "Frank Herbert", country: "USA" },
  { name: "Edwin A. Abbott", country: "UK" }
];

export default async () => {
  // connect to a database if needed
  const db = { books, authors };
  return Promise.resolve(db);
};
