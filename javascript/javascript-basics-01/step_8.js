function getAge(){
    var age = document.getElementById("age").value 
    if (age>18){
        var msg= 'you are over 18'
    }else{
        var msg='you are under 18'
    }
    alert( msg)
}
