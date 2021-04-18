const createSticky=()=>{
    let sticky=document.createElement("div");
   
   let stickyHeader=document.createElement("div");
   
   let minimize=document.createElement("div");
   
   let close=document.createElement("div");
   
   let stickyContent=document.createElement("div");
   
  // let textArea=document.createElement("textarea");
   sticky.setAttribute("class", "sticky");
   stickyHeader.setAttribute("class","header");
   minimize.setAttribute("class","minimize");
   close.setAttribute("class","close");
   stickyContent.setAttribute("class","sticky-content");

   stickyHeader.appendChild(minimize);
   stickyHeader.appendChild(close);
   sticky.appendChild(stickyHeader);
   sticky.appendChild(stickyContent);
   document.body.appendChild(sticky);
   close.addEventListener("click",()=>{
    
     sticky.remove();
           
   })
   minimize.addEventListener("click",()=>{
        stickyContent.style.display=stickyContent.style.display=="none"?"block":"none";


   })

   let initialX;
   let initialY;
   let stickyHold=false;
   stickyHeader.addEventListener("mousedown",(e)=>{
       stickyHold=true;
       initialX=e.clientX;
       initialY=e.clientY; 
   })
    window.addEventListener("mousemove",(e)=>{
       if(stickyHold)
       {
           let finalX=e.clientX;
           let finalY=e.clientY;
           let dx=finalX-initialX;
           let dy=finalY-initialY;

        //    let top=sticky.style.top;
        //    let left=sticky.style.left;
           let {top,left}=sticky.getBoundingClientRect();
           sticky.style.top=top+dy+"px";
           sticky.style.left=left+dx+"px";
           initialX=finalX;
           initialY=finalY;   


       }
   })
   stickyHeader.addEventListener("mouseup",(e)=>{
               stickyHold=false;
   })
   return stickyContent;


}