const texte = document.getElementById("texte");
function visible(something){
    if(something==="appear"){
        texte.style.display="grid";
        texte.style.gridTemplateColumns="50%";
        texte.style.transform="rotate(270deg)";
    } 
    else if(something==="disappear"){
        texte.style.display="none";
    };
};