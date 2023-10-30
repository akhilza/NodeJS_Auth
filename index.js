const express = require("express")
const jwtweb = require("jsonwebtoken")
const secretKey = "secretKey"

const app = express();

app.get("/",(req, res)=>{
    res.send(" Hello NodeJS ")
})

app.post("/login",(req, res)=>{
     const user ={
        id: 1,
        name: "ram"
     }
     jwtweb.sign({user}, secretKey, {expiresIn : "1000s"}, (err, token)=> {
        res.json({
            token
        })
     })
})
app.listen(4000, ()=>{console.log("4000 Port Running")})
