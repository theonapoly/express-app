// ---------------------------------------------------- import app.js
const app = require("./app");

// ---------------------------------------------------- def port
const port = 8000;

// ---------------------------------------------------- listen port
app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });
