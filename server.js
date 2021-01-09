const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("Api Running"));

//Define Route
app.use("/api/translate", require("./routes/api/translate"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server strated on port ${PORT}`));
