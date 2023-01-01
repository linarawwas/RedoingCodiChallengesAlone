document.getElementById("div").addEventListener('mouseover',(changeImage)=>{
    var image1 = document.querySelector('#image1').src="./images/image1_2.jpg";
    var image2 = document.querySelector('#image2').src="./images/image2_2.jpg";
    var image3 = document.querySelector('#image3').src="./images/image3_2.jpg";
    var image4 = document.querySelector('#image4').src="./images/image4_2.jpg";
    var image5 = document.querySelector('#image5').src="./images/image5_2.jpg";
 });
document.getElementById("div").addEventListener('mouseout',(returnImage)=>{
    var image1 = document.querySelector('#image1').src="./images/image1.jpg";
    var image2 = document.querySelector('#image2').src="./images/image2.jpg";
    var image3 = document.querySelector('#image3').src="./images/image3.jpg";
    var image4 = document.querySelector('#image4').src="./images/image4.jpg";
    var image5 = document.querySelector('#image5').src="./images/image5.jpg";
 });