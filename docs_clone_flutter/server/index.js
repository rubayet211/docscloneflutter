const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./routes/auth');

const PORT  = process.env.PORT | 3001;

const app = express();

app.use(authRouter);

const DB= "mongodb+srv://rubayet211:NatsuandZeref@cluster0.jciudgm.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB).then(() => {
    console.log("Connection Successful!");
}).catch((err) => {
    console.log(err);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Connected at port ${PORT}`);
})