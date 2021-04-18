let undo=document.querySelector("#undo");
let redo=document.querySelector("#redo");
let pencil=document.querySelector("#pencil");
let eraser=document.querySelector("#eraser");
let pencilOptions=document.querySelector("#pencil-options");
let eraserOptions=document.querySelector("#eraser-options");
let black=document.querySelector(".black");
let red=document.querySelector(".red");
let blue=document.querySelector(".blue");
let yellow=document.querySelector(".yellow");
let pencilSlider=document.querySelector("#pencil-slider");
let eraserSlider=document.querySelector("#eraser-slider");



let activeTool="pencil";

let pencilWidth=ctx.lineWidth;
let eraserWidth=ctx.lineWidth;
pencil.addEventListener("click",()=>{
    activeTool="pencil";
    console.log("helloosos");
    if(pencil.classList.contains("active-tool")){
        if(pencilOptions.classList.contains("tool-options-active"))
        {
            pencilOptions.classList.remove("tool-options-active");
            
        }    
        else{
        pencilOptions.classList.add("tool-options-active");
        }           
    }
    else
    {
        eraser.classList.remove("active-tool");
        eraserOptions.classList.remove("tool-options-active");
        pencil.classList.add("active-tool");
        ctx.strokeStyle="black";
        ctx.lineWidth=pencilWidth;
  
    }
   
})

canvas.addEventListener("click",()=>{

    //pencil.classList.remove("active-tool");
    pencilOptions.classList.remove("tool-options-active");
    eraserOptions.classList.remove("tool-options-active");
})
eraser.addEventListener("click",()=>{
   // console.log("White");
    activeTool="eraser";
    if(eraser.classList.contains("active-tool"))
    {
        if(eraser.classList.contains("tool-options-active")){
            eraserOptions.classList.remove("tool-options-active");

        }else
        eraserOptions.classList.add("tool-options-active");
    }
    else{
    pencil.classList.remove("active-tool");
    pencilOptions.classList.remove("tool-options-active");
    eraser.classList.add("active-tool");
    ctx.strokeStyle="white";
    ctx.lineWidth=eraserWidth;
       
}
    
})
let redoPoints=[];

redo.addEventListener("click",()=>{
     if(redoPoints.length>=1){
    let lastLine=redoPoints.pop();
    for(let i=0;i<lastLine.length;i++){
        points.push(lastLine[i]);
        if(lastLine[i].id=="md"){
            ctx.strokeStyle=lastLine[i].color;
            ctx.beginPath();
            ctx.moveTo(lastLine[i].x,lastLine[i].y);
        }
        else
        {
            ctx.strokeStyle=lastLine[i].color;
            ctx.lineTo(lastLine[i].x,lastLine[i].y);
            ctx.stroke();
        }
    }}
})


undo.addEventListener("click",()=>{
    removeLastLine();
    UIClear();
    reDraw();
    //1. Remove last line from points
    //2. UI clear
    //3. reDraw line using points
})

const removeLastLine=()=>{
    if(points.length==0){
        return;
    } 
    
    let linePoints=[];
    let idx=points.length-1;
     if(idx>=0){
     while(points[idx].id!='md')
     {
        // pop from points and addFirst to points 
        linePoints.unshift(points.pop());
         idx--;
     }
     linePoints.unshift(points.pop());
    // points.pop();
     redoPoints.push(linePoints);

    }
}

const UIClear=()=>{
     ctx.clearRect(0,0,canvas.width,canvas.height);
     
}


black.addEventListener("click",()=>{
    ctx.strokeStyle="black";
})
blue.addEventListener("click",()=>{
    ctx.strokeStyle="blue";
})

red.addEventListener("click",()=>{
    ctx.strokeStyle="red";
})
yellow.addEventListener("click",()=>{
    ctx.strokeStyle="yellow";
})





pencilSlider.addEventListener("change",()=>{
    console.log(pencilSlider.value);
    pencilWidth =pencilSlider.value;
    ctx.lineWidth=pencilWidth;
})


eraserSlider.addEventListener("change",()=>{
    console.log(eraserSlider.value);
    eraserWidth=eraserSlider.value;
    ctx.lineWidth=eraserWidth;
    
    //ctx.lineWidth=eraserSlider.value;
})









