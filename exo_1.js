const express = require("express");

const app = express();

const port = 5001;

// app.get("/", (req, res) => {
//   res.send("Welcome to express");
// });

app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });

// ---------------------------------------------------- route 1 : "/"

const handler = (req, res) => {
  res.send("Welcome to express, kiss !");
};

app.get("/", handler);

// ---------------------------------------------------- route 2 : "users/:name"

const helloguys = (req, res) => {
  res.send(`Hello ${req.params.name}`);
};

app.get("/users/:name", helloguys);

// ----------------------------------------------------

const cocktails = [
  {
    id: 1,
    name: "Margarita",
  },
  {
    id: 2,
    name: "Mojito",
  },
  {
    id: 3,
    name: "Cuba Libre",
  },
];

const getCocktails = (req, res) => {
  res.status(200).json(cocktails);
};

app.get("/api/cocktails", getCocktails);
