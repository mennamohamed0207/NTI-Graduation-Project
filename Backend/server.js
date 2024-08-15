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
const expRoute = require("./routes/expRoute.js");
const educationRoute = require("./routes/educationRoute.js");
const aboutRoute = require("./routes/aboutRoute.js");



const globalError = require("./middleware/errorMiddleware");
const port = 3000;
dbConnection();
const app = express();
app.use(express.json());
app.use(morgan('dev'))

//Mount Routes
app.use("/api/v1/skills", skillsRoute);
app.use("/api/v1/exp", expRoute);
app.use("/api/v1/edu", educationRoute);
app.use("/api/v1/about", aboutRoute);

app.all("*", (req, res, next) => {
  next(new apiError(`can't find ${req.originalUrl} on this server`, 404));
});
app.use(globalError);

app.listen(3000, () => console.log(`listening on port ${port}`));
