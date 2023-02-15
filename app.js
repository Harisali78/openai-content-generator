require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/openAi", require("./routes/openaiRoutes"));
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
