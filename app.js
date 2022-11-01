let howmanypeoples = prompt("Enter how many peope(max-6)")
//these variables used to take names as input from user
var pname ={}

for(var i=1;i <= howmanypeoples;i++){
    switch(i){
        case 1:
            pname.first = prompt("First Name :")
            break
        case 2:
            pname.second = prompt("Second Name :")
            break
        case 3:
            pname.third = prompt("Third Name :")
            break
        case 4:
            pname.fourth = prompt("Fourth Name :")
            break
        case 5:
            pname.fifth = prompt("Fifth Name :")
            break
        case 6:
            pname.sixth = prompt("sixth Name")
        default:
            console.log("loop workig!")
    }
}
if(pname.third==undefined){
    pname.third=null
}
if(pname.fourth==undefined){
    pname.fourth= null
}
if(pname.fifth==undefined){
    pname.fifth= null
}
if(pname.sixth==undefined){
    pname.sixth= null
}
// let firstname = prompt("First Name :")
// let secondname = prompt("Second Name :")
// let thirdname = prompt("Third Name :")
// let fourthname = prompt("Fourth Name :")
// let fifthname = prompt("Fifth Name")

//these variables are output div elements
let totalEl = document.getElementById("total-el")
let perpersonEl = document.getElementById("perperson-el")
let firstpersonEl = document.getElementById("firper-el")
let secondpersonEl = document.getElementById("secper-el")
let thirdpersonEl = document.getElementById("thiper-el")
let fourthpersonEl = document.getElementById("fouper-el")
let fifthpersonEl = document.getElementById("fifper-el")
let sixthpersonEl = document.getElementById("sixper-el")

//these variables are input div elements
let firstnameEl = document.querySelector("label[for=firint]")
let secondnameEl = document.querySelector("label[for=secint]")
let thirdnameEl = document.querySelector("label[for=thirint]")
let fourthnameEl = document.querySelector("label[for=fouint]")
let fifthnameEl = document.querySelector("label[for=fifint]")
let sixthnameEl = document.querySelector("label[for=sixint]")

//pushing names beside input boxs 
firstnameEl.innerHTML += pname.first 
secondnameEl.innerHTML += pname.second
thirdnameEl.innerHTML += pname.third
fourthnameEl.innerHTML += pname.fourth
fifthnameEl.innerHTML += pname.fifth
sixthnameEl.innerHTML += pname.sixth

//funxtionto calculate the given input values
function cal(){

    //these variables are elements used to fetch input data from inputelements
    let firstInput = document.querySelector("#firint").value;
    let secondInput = document.querySelector("#secint").value;
    let thirdInput = document.querySelector("#thirint").value;
    let fourthInput = document.querySelector("#fouint").value;
    let fifthInput = document.querySelector("#fifint").value;
    let sixthInput = document.querySelector("#sixint").value;

    let total = parseInt(firstInput) + parseInt(secondInput) + parseInt(thirdInput) + parseInt(fourthInput) + parseInt(fifthInput) + parseInt(sixthInput);
    
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

    if (fifthInput != ""){
        count = count + 1
    }
    if(fifthInput == 0){
        count = count - 1
    }

    if (sixthInput != ""){
        count = count + 1
    }
    if(sixthInput == 0){
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
    if (fifthInput != 0  ){
        var fifthperson = parseInt(fifthInput) - perperson
    }
    if (sixthInput != 0  ){
        var sixthperson = parseInt(sixthInput) - perperson
    }
    
    //displaying output data on screen
    firstpersonEl.textContent = pname.first + " : " + "₹ " + firstperson
    secondpersonEl.textContent = pname.second + " : " + "₹ " + secondperson
    thirdpersonEl.textContent = pname.third + " : " + "₹ " + thirdperson
    fourthpersonEl.textContent = pname.fourth + " : " + "₹ " + fourthperson
    fifthpersonEl.textContent = pname.fifth + " : " + "₹ " + fifthperson
    sixthpersonEl.textContent = pname.sixth + " : " + "₹ " + sixthperson
    
}
