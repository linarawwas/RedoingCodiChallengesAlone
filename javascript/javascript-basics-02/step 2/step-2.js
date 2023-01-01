// instead of adding onblur or onclick inside the html Element,
//  you specify it here and define 
// your function here aswell using addEventListener

const name1 =document.querySelector("#name");
name1.addEventListener('blur',(thanks)=>{
    document.getElementById("demo").innerHTML = "thank you for participating :)";
});