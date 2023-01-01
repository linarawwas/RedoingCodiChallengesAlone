const img = document.getElementById("image1")
img.addEventListener('mouseover',(borderRed)=>{
    img.style.border="3px solid red";
})
img.addEventListener('mouseout',(noBorder)=>{
    img.style.borderWidth="0px";
})
