const num = prompt("Please enter your number")
console.log("10% from your number is " + num * 0.1)

//=============================================

 const number1 = prompt("Please enter your first number")
 const number2 = prompt("Please enter your second number")
 if(number1 < number2){
     console.log(number1)
 }
 else {
     console.log(number2)
 }

//===============================================

 const number = prompt("Please enter your number")
 if(number > 100){
     console.log("Your number is bigger than 100")
 }
 else if(number < 100){
     console.log("Your number is smaller than 100")
 }
 else{
     console.log("Your number is equal to 100")
 }

//======================================================

const name = prompt("Please enter your name")
const age = prompt("Please enter your age in numbers")
if(age > 18){
    console.log("Hello " + name)
}
else{
    console.log("Hi " + name)
}