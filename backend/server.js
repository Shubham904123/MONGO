const express=require('express')
const dotenv=require('dotenv').config()
const connectDB=require('./config/db')

const port=process.env.PORT || 5000

connectDB()
const app=express()

app.get("/api/goals",(req,res)=>{
    res.status(200).json({
        message:'get goals'
    })
})
app.listen(port,()=>console.log(`server started on  port ${port}`))

