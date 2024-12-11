// const http=require("http")
// const fs=require("fs")
// const url=require("url")
// const PORT=3000
// const path=require("path")
// const queryString=require("querystring")
// const {MongoClient, ObjectId}=require("mongodb")
// const { error } = require("console")
// const client=new MongoClient("mongodb://127.0.0.1:27017/")


// const app=http.createServer(async(req,res)=>{
//     const db=client.db("projects");
//     const collection=db.collection("employees");


// const {pathname}=url.parse(req.url);
// console.log(pathname);

// if(pathname=="/"){
//     res.writeHead(200,{"Content-Type":"text/html"});
//     res.end(fs.readFileSync("../Front-end/index.html"))
// }
// else if(pathname=="/CSS/index.css"){
//     res.writeHead(200,{"Content-Type":"text/css"});
//     res.end(fs.readFileSync("../Front-end/CSS/index.css"))
// }
// else if(pathname=="/JS/index.js"){
//     res.writeHead(200,{"Content-Type":"text/js"});
//     res.end(fs.readFileSync("../Front-end/JS/index.js"))
// }
// else if(pathname=="/Assets/bg.jpg"){
//     res.writeHead(200,{"Content-Type":"text/assets"});
//     res.end(fs.readFileSync("../Front-end/Assets/bg.jpg"))
// }
// else if(pathname=="/Pages/reg.html"){
//     res.writeHead(200,{"Content-Type":"text/html"});
//     res.end(fs.readFileSync("../Front-end/Pages/reg.html"))
// }
// else if(pathname=="/CSS/reg.css"){
//     res.writeHead(200,{"Content-Type":"text/css"});
//     res.end(fs.readFileSync("../Front-end/CSS/reg.css"))
// }
// else if(pathname=="/JS/reg.js"){
//     res.writeHead(200,{"Content-Type":"text/js"});
//     res.end(fs.readFileSync("../Front-end/JS/reg.js"))
// }
// else if(pathname=="/Pages/edit.html"){
//     res.writeHead(200,{"Content-Type":"text/html"});
//     res.end(fs.readFileSync("../Front-end/Pages/edit.html"))
// }
// else if(pathname=="/CSS/edit.css"){
//     res.writeHead(200,{"Content-Type":"text/css"});
//     res.end(fs.readFileSync("../Front-end/CSS/edit.css"))
// }
// else if(pathname=="/JS/edit.js"){
//     res.writeHead(200,{"Content-Type":"text/js"});
//     res.end(fs.readFileSync("../Front-end/JS/edit.js"))
// }

// if(pathname=="/submit"&&req.method=="POST"){
//     let body="";
//     req.on("data",(chunks)=>{
//         body+=chunks.toString();
//         console.log(body);
        
//     })
//     req.on("end",async()=>{
//         const formData=queryString.parse(body);
//         console.log(formData);
//         collection.insertOne(formData).then(()=>{
//             console.log("successfully inserted..");
            
//         }).catch((error)=>{
//             console.log(error);
//         })
        
//     })
//     res.writeHead(200,{"Content-Type":"text/html"});
//     res.end(fs.readFileSync("../Front-end/index.html"))
// }

// })

// client.connect().then((msg)=>{
//     console.log("database connected!");

//     app.listen(PORT,()=>{
//         console.log("server created....");
        
//     })
    
// }).catch((error)=>{
//     console.log(error);
    
// })





// async function addemploye() {
//     const res=await fetch("http://localhost:3000/getemployee")
//     if(res.status==200){
//         const employee=await res.json();
//         console.log(employee);
//         let str1=""
//         employee.forEach((employee,index)=>{
//             str1+=`
//                     <div class="card">
//           <div class="photodiv">
//             <div class="photo">
//               <img
//                 src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"alt="person"/>
//             </div>
//           </div>
//           <div class="detailsdiv">
//             <div class="name-div">
//               <h3>${employee.name}</h3>
//             </div>
//             <div class="det-divs">
//               <h4 class="det-names">Date-of-Birth</h4>
//               <h4 class="det-val">: ${employee.dob}</h4>
//             </div>
//             <div class="det-divs">
//               <h4 class="det-names">Gender</h4>
//               <h4 class="det-val">: ${employee.gender}</h4>
//             </div>
//             <div class="det-divs">
//               <h4 class="det-names">Address</h4>
//               <h4 class="det-val">: ${employee.address}</h4>
//             </div>
//             <div class="det-divs">
//               <h4 class="det-names">E-mail</h4>
//               <h4 class="det-val">: ${employee.email}</h4>
//             </div>

//             <div class="det-divs">
//               <h4 class="det-names">Phone</h4>
//               <h4 class="det-val">: ${employee.phone}</h4>
//             </div>
//             <div class="button-div">
//               <a href="./Pages/edit.html"><button class="editbutton">edit</button></a>
//               <button class="deletebutton">delete</button>
//             </div>
//           </div>
//         </div>
               
//             `
//         });
//         document.getElementById("contentdiv").innerHTML=str1
        
//     }
// }
// regemployee();
async function addemploye() {
    const res=await fetch("http://localhost:3000/getemployee")
    if(res.status==200){
        const employee=await res.json();
        console.log(employee);}}


