const express = require('express');
const app = express();
const cors = require("cors")
const port = 5000;
const mongoDb = require("./db");


app.use(cors());

mongoDb();

app.get('/',(req,res)=>{
    res.send("Hello World!");
})

app.use(express.json());
app.use("/api",require("./routes/CreateUser"))

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)
})