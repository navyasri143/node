const express=require("express")
const dotEnv=require('dotenv')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const employeeRoutes=require('./routes/employeeRoutes')

const app= express()
const PORT = process.env.PORT ||5000


dotEnv.config()
app.use(bodyParser.json())
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("mongodb connected successfully")

})
.catch((error)=>{
    console.log("Error",error)
})

app.use('/employees',employeeRoutes)
console.log(process.env)

app.listen(PORT,()=>{
    console.log("server running successfully")
})