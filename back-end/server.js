const http=require("http")
const fs=require("fs")
const url=require("url")
const PORT=3009
const path=require("path")
const queryString=require("querystring")
const {MongoClient, ObjectId}=require("mongodb")
const { error } = require("console")
const client=new MongoClient("mongodb://127.0.0.1:27017/")


const app=http.createServer(async(req,res)=>{
    const db=client.db("mern");
    const collection=db.collection("employe");


const {pathname}=url.parse(req.url);
console.log(pathname);

if(pathname=="/"){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(fs.readFileSync("../index.html"))
}
else if(pathname=="/front-end/style.css"){
    res.writeHead(200,{"Content-Type":"text/css"});
    res.end(fs.readFileSync("../front-end/style.css"))
 }
else if(pathname=="/JS/index.js"){
    res.writeHead(200,{"Content-Type":"text/js"});
    res.end(fs.readFileSync("../front-end/JS/index.js"))
}
else if(pathname=="/Assets/bg.jpg"){
    res.writeHead(200,{"Content-Type":"text/assets"});
    res.end(fs.readFileSync("../front-end/Assets/bg.jpg"))
}
else if(pathname=="/front-end/assets/pngtree-employee-logo-and-icon-graphic-template-png-image_3555578.jpg"){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(fs.readFileSync("../front-end/assets/pngtree-employee-logo-and-icon-graphic-template-png-image_3555578.jpg"))
}
else if(pathname=="/front-end/assets/images.jpeg"){
    res.writeHead(200,{"Content-Type":"image/jpeg"});
    res.end(fs.readFileSync("../front-end/assets/images.jpeg"))
}
else if(pathname=="/front-end/pages/add.html"){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(fs.readFileSync("../front-end/pages/add.html"))
}
else if(pathname=="/Pages/edit.html"){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(fs.readFileSync("../front-end/Pages/edit.html"))
}

if(pathname=="/submit"&&req.method=="POST"){
    let body="";
    req.on("data",(chunks)=>{
        body+=chunks.toString();
        console.log(body);
    })
    req.on("end",async()=>{
        const formData=queryString.parse(body);
        console.log(formData);
        collection.insertOne(formData).then(()=>{
            console.log("successfully inserted..");
            
        }).catch((error)=>{
            console.log(error);
        })
    })
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end(fs.readFileSync("../index.html"))
    }

})

client.connect().then((msg)=>{
    console.log("database connected!");

    app.listen(PORT,()=>{
        console.log("server created....");
        console.log("starting.....");
        
        
    })
    
}).catch((error)=>{
    console.log(error);
    
});
