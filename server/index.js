const express = require("express");
const app = express();
const connectDatabase = require("./config/db");
const userRoute = require("./routes/user.routes");
const snippetRoute = require("./routes/snippet.routes")
connectDatabase();
app.use(express.json());
app.use("/api/user", userRoute);
app.use("/api/snippet",snippetRoute)
app.listen(4400, function () {
  console.log("app listening on port 4400");
});

