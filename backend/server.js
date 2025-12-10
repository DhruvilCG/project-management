import express, { Router } from "express" ;
import cors from "cors" ;
import 'dotenv/config'
import { connectDB } from "./config/db.js";

const app = express() ;
const port = process.env.PORT || 4000 ;

app.use(cors()) ;
app.use(express.json()) ;
app.use(express.urlencoded({extended: true})) ;

connectDB() ;

app.get('/' , (req , res)=>{
    res.send("API working") ;
})

app.listen(port , ()=> {
    console.log(`Server started on http://localhost:${port}`)
})