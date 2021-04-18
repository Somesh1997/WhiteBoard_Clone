{/* <div class="sticky">
<div class="header">
   <div class="minimize">

   </div>
   <div class="close">

   </div>
</div>
<div class="sticky-content">
   <textarea name="" id="" cols="30" rows="10"></textarea>
</div>
</div> */}


let sticky=document.querySelector("#sticky-content");


sticky.addEventListener("click",()=>{


   
   let textArea=document.createElement("textarea");
   textArea.setAttribute("rows","10");
   textArea.setAttribute("cols","30");
   let stickyContent=createSticky();
   stickyContent.appendChild(textArea);
   


})