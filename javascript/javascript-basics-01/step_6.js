function remainder(){
    const num1 = document.getElementById('first_number').value;
    const num2 = document.getElementById('second_number').value;
    const remainder = num1 % num2;
    
    alert (`The remainder of ${num1} and ${num2} is ${remainder}`);}