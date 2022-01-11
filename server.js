const express = require("express");
const path = require("path");

const app = express();

//When path has /static, serve static directory as per usual
app.use("/static", express.static(path.resolve(__dirname, "docs", "static")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "docs", "index.html"));
});

app.listen(process.env.PORT || 8080, () => console.log("Server running..."));