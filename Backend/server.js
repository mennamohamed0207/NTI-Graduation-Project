const express = require("express");
const dotenv = require("dotenv");
const morgan=require('morgan')
const apiError = require("./utils/apiError");
dotenv.config({
  path: ".env",
});
const dbConnection = require("./config/database.js");
//routes
const skillsRoute = require("./routes/skillRoute");
const globalError = require("./middleware/errorMiddleware");
const port = 3000;
dbConnection();
const app = express();
app.use(express.json());
app.use(morgan('dev'))

//Mount Routes
app.use("/api/v1/skills", skillsRoute);

app.all("*", (req, res, next) => {
  next(new apiError(`can't find ${req.originalUrl} on this server`, 404));
});
app.use(globalError);

app.listen(3000, () => console.log(`listening on port ${port}`));
