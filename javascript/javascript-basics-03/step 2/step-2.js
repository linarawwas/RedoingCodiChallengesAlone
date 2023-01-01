document.getElementById("show").addEventListener('click',showHide("yes"))
document.getElementById("hide").addEventListener('click',showHide("no"))
var variable;
function showHide(variable){
   if(variable==  "yes"){ document.getElementById("text").style.display="none";}
   else if(variable=="no") {
    document.getElementById("text").style.display="block";
   }else{            document.getElementById("text").style.display="block";
}
    }    