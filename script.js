document.getElementById("userForm").addEventListener("submit",(event)=>{ 
    event.preventDefault(); 
    const nameField=document.getElementById("name"); 
    const emailField=document.getElementById("email"); 
    const ageField=document.getElementById("age"); 
    const successMessage=document.getElementById("successMessage"); 
    const successData=document.getElementById("successData"); 
    const nameError=document.getElementById("nameError"); 
    document.getElementById("nameError").classList.add("d-none"); 
     document.getElementById("emailError").classList.add("d-none"); 
    document.getElementById("ageError").classList.add("d-none"); 
           
    let valid=true; 
 
    if(nameField.value.trim()===""){ 
        nameField.classList.add("is-invalid"); 
        nameError.classList.remove("d-none");   
        valid=false; 
    } else{ 
        nameField.classList.remove("is-invalid"); 
        document.getElementById("nameError").classList.add("d-none");   
 
    } 
 
 
    const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
 
    if(!emailPattern.test(emailField.value) || !emailField.value.endsWith(".com")){ 
         
        emailField.classList.add("is-invalid"); 
        document.getElementById("emailError").classList.remove("d-none");   
        valid=false; 
    } else{ 
        emailField.classList.remove("is-invalid"); 
        document.getElementById("emailError").classList.add("d-none");  } 
 
    const age=parseInt(ageField.value); 
     
    if(isNaN(age) || age<18 || age>150){ 
        ageField.classList.add("is-invalid"); 
        document.getElementById("ageError").classList.remove("d-none");   
        valid=false; 
    } else{ 
        ageField.classList.remove("is-invalid"); 
        document.getElementById("ageError").classList.add("d-none");   
 
    } 
 
 
    if(valid){ 
        successData.innerHTML=`Name : ${nameField.value}<br> 
                     Email : ${emailField.value}<br> 
                    Age : ${ageField.value}`; 
         
         
        successMessage.classList.remove("d-none"); 
        document.getElementById("userForm").reset();             
         
    }else{ 
        successMessage.classList.add("d-none"); 
    } 
 
 
}) 
WEEK-5 CHALLENGE YOURSELF 
 
<!-- write you code here --> 
<!DOCTYPE html> 
<html lang="en"> 
<head> 
    <meta charset="UTF-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <title>Document</title> 
    <link rel="stylesheet" 
href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"> 
    <link rel="stylesheet" href="./style.css"> 
</head> 
<body> 
    <h1>Suresh's Kids's Sketch Pad</h1> 
    <canvas id="sketchPad" width="500" height="300" style="border:1px solid black"></canvas> 
    <div> 
    <button id="blackBtn" type="button" class="btn btn-dark">Default</button> 
    <button id="redBtn" type="button" class="btn btn-danger">Red</button> 
    <button id="blueBtn" type="button" class="btn btn-primary">Blue</button> 
    <button id="greenBtn" type="button" class="btn btn-success">Green</button> 
    <button id="eraserBtn" type="button" class="btn btn-secondary">Eraser</button> 
    <button id="clearBtn" type="button" class="btn btn-warning">Clear Canvas</button> 
</div> 
 
<p>Current Drawing Color: <span style="font-weight: bold;" 
id="currentColor">Black</span></p> 
 
<script src="./script.js"></script> 
</body> 
</html> 
 
 
 
 
/* write you stylings here */ 
 
body{ 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    flex-direction: column; 
} 
 
div{ 
    margin-top: 2%; 
} 
 
 
// write you Scripts here 
 
const canvas=document.getElementById("sketchPad"); 
const ctx=canvas.getContext("2d"); 
const redBtn=document.getElementById("redBtn"); 
const blueBtn=document.getElementById("blueBtn"); 
const eraserBtn=document.getElementById("eraserBtn"); 
const greenBtn=document.getElementById("greenBtn"); 
const blackBtn=document.getElementById("blackBtn"); 
let drawing=false; 
let currentColorDisplay="black"; 
const currentColor=document.getElementById("currentColor"); 
const setColor=(color)=>{ 
 
    currentColorDisplay=color; 
    if(color=="white"){ 
        currentColor.textContent="White (Eraser)"; 
    } 
     
    else{ 
    currentColor.textContent=(color.charAt(0).toUpperCase()+color.slice(1)).trim();} 
 
} 
 
blackBtn.addEventListener("click",()=>{ 
    setColor("black"); 
}) 
 
redBtn.addEventListener("click",()=>{ 
    setColor("red"); 
}) 
blueBtn.addEventListener("click",()=>{ 
    setColor("blue"); 
}) 
greenBtn.addEventListener("click",()=>{ 
    setColor("green"); 
}) 
 
eraserBtn.addEventListener("click",()=>{ 
    setColor("white"); 
}) 
 
 
document.getElementById("clearBtn").addEventListener("click",()=>{ 
    ctx.clearRect(0,0,canvas.width,canvas.height); 
    ctx.fillStyle="#ffffff"; 
    ctx.fillRect(0,0,canvas.width,canvas.height); 
 
}) 
 
canvas.addEventListener("mousedown",(e)=>{ 
    drawing=true; 
    ctx.beginPath(); 
    ctx.moveTo(e.offsetX,e.offsetY); 
}) 
 
 
canvas.addEventListener("mousemove",(e)=>{ 
    if(drawing) 
    { 
        ctx.lineTo(e.offsetX,e.offsetY); 
        ctx.strokeStyle=currentColorDisplay; 
        ctx.lineWidth=2; 
        ctx.stroke(); 
    } 
}) 
 
canvas.addEventListener("mouseup",()=>{ 
    drawing=false; 
}) 
 
canvas.addEventListener("mouseleave",()=>{ 
    drawing=false;})
