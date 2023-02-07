const express = require("express");
const app = express();
const path = require("path");
const indexRouter = require("./routers/main");

app.use(express.static(path.join("public")));

app.use("/", indexRouter);


app.listen(3000,() => {
    console.log("servidor funcionando");
});