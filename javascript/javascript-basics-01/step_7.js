
function getshoes(){
    const shoe = document.getElementById("shoe_size").value;
    const birthday = document.getElementById("year").value;
    const result = (((((shoe*2)+5)*50)- birthday)+1766)
    alert(result);
}; 
