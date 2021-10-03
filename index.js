const express = require('express');
const path = require('path');
const app = express();
const router = require('./routes/api');
const PORT = 3000;


app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');

app.use("/", router);

app.use(express.static(path.join(__dirname, "public")));


app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`);
});