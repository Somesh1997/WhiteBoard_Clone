
      let imgUpload=document.querySelector("#img-upload");
      imgUpload.addEventListener("change",()=>{
              console.log("Hello");
              let files=imgUpload.files;
              console.log(files[0]);
              let img=document.createElement("img");
              console.log(img);
              let url=URL.createObjectURL(files[0]);
              console.log(url);
              img.src=url;
              let stickyContent=createSticky();
              img.setAttribute("class","sticky-img");
              stickyContent.appendChild(img);
      })


let download=document.querySelector("#download");


download.addEventListener("click",()=>{
    let url= canvas.toDataURL("image/png");
    let a=document.createElement("a");
    a.setAttribute("href",url);
    var date=new Date();
    var time=date.getTime();
    let fileName="canvas "+time+".png";
    a.setAttribute("download",fileName);
    a.click();
    a.remove();
})