const express = require("express");
const app = express();
const fs = require("fs");
var cors = require("cors");
const router = express.Router();
const port = 1235;

app.use(express.json());
app.use(cors());

router.get("/oio", (req, res) => {
    fs.readFile("./data.json", (err, json) => {
        let obj = JSON.parse(json);
        res.json(obj);
    });
});

app.use("/api", router);
app.listen(port);
