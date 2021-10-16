const express = require('express');
const multer = require('multer'); //multer é para eu um pacote para eu configurar arquivos para upload.
const router = express.Router();
const path = require('path');
const fs = require('fs');

//usado para direcionar e nomear o arquivo
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        if (path.extname(file.originalname) === ".jpg" || path.extname(file.originalname) === ".png" || path.extname(file.originalname) === ".jpeg" || path.extname(file.originalname) === ".svg" || path.extname(file.originalname) === ".gif") {
            callback(null, "uploads/img/");
        }

        else if (path.extname(file.originalname) === ".mp4" || path.extname(file.originalname) === ".mkv" || path.extname(file.originalname) === ".avi" || path.extname(file.originalname) === ".wmv") {
            callback(null, "uploads/vid/");
        }

        else if (path.extname(file.originalname) === ".txt" || path.extname(file.originalname) === ".zip" || path.extname(file.originalname) === ".exe" || path.extname(file.originalname) === ".doc" || path.extname(file.originalname) === ".pdf" || path.extname(file.originalname) === ".mp3") {
            callback(null, "uploads/files/");
        }
    },

    filename: function (req, file, callback) {

        callback(null, file.originalname);
    }
});

const upload = multer({ storage });



router.post("/upload", upload.single("file"), (req, res) => {
    res.render("app");
});


router.get("/", (req, res) => {
    res.render("app");
});

router.get("/img", (req, res) => {
    res.render("img");
})


module.exports = router;