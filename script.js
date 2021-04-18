let canvas =document.querySelector("#canvas");
let points=[];
//MDN WEBSITE
 canvas.height=window.innerHeight;//height;
 canvas.width=window.innerWidth;//width;
//2D Drawing API
 let ctx=canvas.getContext("2d");
ctx.fillStyle="black";
ctx.lineCap="round";


window.addEventListener("resize",()=>{
    canvas.height=window.innerHeight;
    canvas.width=window.innerWidth;//width;
    reDraw();
})


// ctx.beginPath();
// ctx.moveTo(10,10);
// ctx.lineTo(50,10);
// ctx.lineTo(50,50);
// ctx.lineTo(10,50);
// ctx.lineTo(10,10)
// ctx.stroke();
let isPenDown=false;

canvas.addEventListener("mousedown",async (event)=>{

    
     isPenDown=true;
    // console.log(event);
     let {top,left}=canvas.getBoundingClientRect();
     let x=event.clientX-left;
     let y=event.clientY-top;
     ctx.beginPath();
     ctx.moveTo(x,y);
     let point={
         id:"md",
         x:x,
         y:y,
         color:ctx.strokeStyle
     }
     points.push(point);  
     //console.log(x,y);
})

canvas.addEventListener("mousemove",async (event)=>{
    if(isPenDown){
        redoPoints=[];
        console.log(event);
        let {top,left}=canvas.getBoundingClientRect();
        let x=event.clientX-left;
        let y=event.clientY-top;
        ctx.lineTo(x,y);
        ctx.stroke();
        let point={
            id:"mm",
            x:x,
            y:y,
            color:ctx.strokeStyle
        }
        points.push(point);
      //  console.log(points);
        //console.log(x,y);
    
    }
    })

canvas.addEventListener("mouseup",async (event)=>{
    
     isPenDown=false;
     console.log(points);
})



const reDraw=()=>{
       
    for(let i=0;i<points.length;i++)
    {
          if(points[i]===undefined)
          {
              break;
          }

        if(points[i].id=="md")
        {
            ctx.strokeStyle=points[i].color;
            ctx.beginPath();
            ctx.moveTo(points[i].x,points[i].y);
        }
        else
        {
            ctx.strokeStyle=points[i].color;
            ctx.lineTo(points[i].x,points[i].y);
            ctx.stroke();
        }
    }

}
