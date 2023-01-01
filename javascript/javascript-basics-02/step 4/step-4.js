var button = document.getElementById("button")
button.addEventListener('click', reset)
function reset() {
    if(confirm("do you want to Clear the form?")){
        document.getElementById("name").value="";
        document.getElementById("surname").value="";
        document.getElementById("city").value="";
    }
}
