var input = document.getElementById("name");
var typeInDiv= document.getElementById("text1");
function changeDiv(){ 
typeInDiv.innerHTML = input.value;
}
input.addEventListener("keydown", changeDiv);