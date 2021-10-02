const express = require('express');
const multer = require('multer'); //multer é para eu um pacote para eu configurar arquivos para upload.
const router = express.Router();
const path = require('path');

 //usado para direcionar e nomear o arquivo
const storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, "uploads/");
    },

    filename: function(req, file, callback){
        callback(null, file.originalname + Date.now() + path.extname(file.originalname));
    }
});     

const upload = multer({storage});



router.post("/post", upload.single("file"),(req, res) => {
    res.render('index');
});


router.get("/", (req, res) => {
    res.render("index");
});


module.exports = router;