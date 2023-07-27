const express = require('express');
const mongoose = require('mongoose');

const PORT  = process.env.PORT | 3001;

const app = express();

const DB= "mongodb+srv://rubayet211:NatsuandZeref@cluster0.jciudgm.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB).then(() => {
    console.log("Connection Successful!");
}).catch((err) => {
    console.log(err);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Connected at port ${PORT}`);
})