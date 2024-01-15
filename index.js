import express from "express";

const app = express();
let port = process.env.PORT || 3000;

app.get("/api/users", (req, res, next) => {
  res.status(200).json([
    {
      id: 1,
      name: "Suraj",
    },
    {
      id: 2,
      name: "Sukhi",
    },
    {
      id: 3,
      name: "Suman",
    },
    {
      id: 4,
      name: "Ruchitha",
    },
  ]);
});

app.get("/api", (req, res) => res.status(200).send("Hello World!"));

app.listen(port, () => {
  console.log(`Listening on server ${port}`);
});
