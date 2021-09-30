const express = require('express');
const path = require('path');
const app = express();
const multer = require('multer');
const PORT = 3000;

app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');

const storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, "uploads/");
    },

    filename: function(req, file, callback){
        callback(null, file.originalname + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({storage});


app.post("/upload", upload.single("file"),(req, res) => {
    res.send("arquivo adicionado com suceso.");
})


app.get("/", (req, res) => {
    res.render("index");
});


app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`);
});