import express from "express";

const app = express();
// let port = process.env.PORT || 3000;
let port = 3000;

app.get("/api/users", (req, res, next) => {
  res.status(200).json([
    {
      id: 1,
      name: "Suraj",
    },
    {
      id: 2,
      name: "Vishal",
    },
    {
      id: 3,
      name: "Suman",
    },
    {
      id: 4,
      name: "Animo",
    },
  ]);
});

app.get("/api", (req, res) => res.status(200).send("Hello World!"));

app.listen(port, () => {
  console.log(`Listening on server ${port}`);
});
