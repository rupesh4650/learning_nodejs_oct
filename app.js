const express=require("express")//Requiring express packages.
const app=express()//Storing it in app, app vanne variable throughout use garxum

//'/' halda home page dekhaune
app.get('/',(req,res) =>{
    res.send("<h1>Home page</h1>")
})

// '/about' halda about page dekhaune
app.get('/about',(req,res) =>{
    res.send("About page")
})

app.get('/contact',(req,res) =>{
    res.send("From contact page")
})






//port number ->room number for certain time
app.listen(3001,function(){
    console.log("nodejs project has started on port 3001 ")
})