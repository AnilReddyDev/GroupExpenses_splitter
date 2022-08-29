//these variables used to take names as input from user
let firstname = prompt("First Name :")
let secondname = prompt("Second Name :")
let thirdname = prompt("Third Name :")
let fourthname = prompt("Fourth Name :")

//these variables are output div elements
let totalEl = document.getElementById("total-el")
let perpersonEl = document.getElementById("perperson-el")
let firstpersonEl = document.getElementById("firper-el")
let secondpersonEl = document.getElementById("secper-el")
let thirdpersonEl = document.getElementById("thiper-el")
let fourthpersonEl = document.getElementById("fouper-el")

//these variables are input div elements
let firstnameEl = document.querySelector("label[for=first]")
let secondnameEl = document.querySelector("label[for=second]")
let thirdnameEl = document.querySelector("label[for=third]")
let fourthnameEl = document.querySelector("label[for=fourth]")

//pushing names beside input boxs 
firstnameEl.innerHTML += firstname
secondnameEl.innerHTML += secondname
thirdnameEl.innerHTML += thirdname
fourthnameEl.innerHTML += fourthname

//funxtionto calculate the given input values
function cal(){

    //these variables are elements used to fetch input data from inputelements
    let firstInput = document.querySelector("#firint").value;
    let secondInput = document.querySelector("#secint").value;
    let thirdInput = document.querySelector("#thirint").value;
    let fourthInput = document.querySelector("#fouint").value;

    let total = parseInt(firstInput) + parseInt(secondInput) + parseInt(thirdInput) + parseInt(fourthInput);
    
    let count = 0
    if (firstInput != ""){
        count = count + 1
    }
    if(firstInput == 0){
        count = count - 1
    }

    if (secondInput != ""){
        count = count + 1
    }
    if(secondInput == 0){
        count = count - 1
    }

    if (thirdInput != ""){
        count = count + 1
    }
    if(thirdInput == 0){
        count = count - 1
    }

    if (fourthInput != ""){
        count = count + 1
    }
    if(fourthInput == 0){
        count = count - 1
    }

    totalEl.textContent = "Total : " + "₹ " + total;
    let perperson = total/count
    perpersonEl.textContent = "Per Person : " + "₹ " + perperson;
    if(firstInput != 0 ){
    var firstperson =  parseInt(firstInput) - perperson
    }
    if(secondInput != 0 ){
    var secondperson = parseInt(secondInput) - perperson
    }
    if(thirdInput != 0 ){
    var thirdperson = parseInt(thirdInput) - perperson
    }
    if (fourthInput != 0  ){
        var fourthperson = parseInt(fourthInput) - perperson
    }
    
    //displaying output data on screen
    firstpersonEl.textContent = firstname + " : " + "₹ " + firstperson
    secondpersonEl.textContent = secondname + " : " + "₹ " + secondperson
    thirdpersonEl.textContent = thirdname + " : " + "₹ " + thirdperson
    fourthpersonEl.textContent = fourthname + " : " + "₹ " + fourthperson
    
}
