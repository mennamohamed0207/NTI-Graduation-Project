const express = require("express");
const globalError = require("./middleware/errorMiddleware");
const dotenv = require("dotenv");
const apiError = require("./utils/apiError");
const port = 3000;
dotenv.config({
  path: ".env",
});
const app = express();
const dbConnection = require("./config/database.js");
dbConnection();
//routes
const skillsRoute = require("./routes/skillRoute");

//Mount Routes
app.use("/api/v1/skills", skillsRoute);

app.all("*", (req, res, next) => {
  next(new apiError(`can't find ${req.originalUrl} on this server`, 404));
});
app.use(globalError);

app.listen(3000, () => console.log(`listening on port ${port}`));
