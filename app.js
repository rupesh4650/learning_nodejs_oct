const express=require("express")//Requiring express packages.
const app=express()//Storing it in app, app vanne variable throughout use garxum
//ma ejs use garna aate ko as a view engine
app.set("view engine","ejs")

//'/' halda home page dekhaune
app.get('/',(req,res) =>{
    //views vitra ko file render garxa
    res.render("home",{name:"Manish"})
})

// '/about' halda about page dekhaune
app.get('/about',(req,res) =>{
    res.render("about")
})

app.get('/contact',(req,res) =>{
    res.send("From contact page")
})






//port number ->room number for certain time
app.listen(3000,function(){
    console.log("nodejs project has started on port 3000 ")
})