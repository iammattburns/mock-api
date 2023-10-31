const express = require("express");
const cors = require("cors");
const path = require("path");
const figuresRouter = require("./src/routes/figures");

const app = express();
const port = 3000;

require("dotenv").config();

const corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/", express.static(path.join(__dirname, "/src/docs")));

app.use("/figures", figuresRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });

  return;
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
