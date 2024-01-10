const express = require("express")
const app = express();
app.use((res,req)=>{
        res.json({message:"Hiiii-----.."})
})
const PORT= "9000"
app.listen(PORT,()=>{
    console.log("app is running on port ",PORT)
})