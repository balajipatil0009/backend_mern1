const express = require('express');

const app = express();

const PORT = process.env.PORT || 8001;

app.get("/",(req, res)=>{
  res.send("done");
});

app.listen(PORT,()=>{
    console.log("connected");
});
