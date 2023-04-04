//==================Task 1
// const divNumbers = document.querySelector(".numbers")
// for (let index = 100; index > 50; index -= 10) {
//    const newParagraph = document.createElement("p")
//    newParagraph.textContent = index;
//    divNumbers.append(newParagraph)
// }
//==================Task 2
//const strings_container = document.createElement("div")
//strings_container.classList.add("strings_container")
// const stringArr = ["Warhammer is brutal", "Space Marines", "Orks are green", "Give me my Shoota", "I gona chop you with ma Chopa", "For The Emperor"]
// for (let index = 0; index < stringArr.length; index++) {
//     const par = document.createElement("p")
//     par.innerText = stringArr[index]
//     strings_container.append(par)
// }
// document.body.append(strings_container)
//============================Task 3
// const usersContainerDiv = document.createElement("div")
// usersContainerDiv.classList.add("users_container")
// document.body.append(usersContainerDiv)
// const users = [
//     {
//         first_name: "Gabriel",
//         last_name: "Angelos",
//         age: 400
//     },
//     {
//         first_name: "Vasili",
//         last_name: "Pupkin",
//         age: 19
//     },
//     {
//         first_name: "Muster",
//         last_name: "Mustermann",
//         age: 15
//     },
//     {
//         first_name: "Cem",
//         last_name: "Erol",
//         age: 25
//     },
//     {
//         first_name: "Postman",
//         last_name: "Pechkin",
//         age: 12
//     }
// ]
// for (let index = 0; index < users.length; index++){
//     if (users[index].age >= 18) {
//         const userCard = document.createElement("div")
//         userCard.classList.add("user_card")
//         const pFirstName = document.createElement("p")
//         pFirstName.innerText = `First name: ${users[index].first_name}`
//         const pLastName = document.createElement("p")
//         pLastName.innerText = `Last name: ${users[index].last_name}`
//         const pAge = document.createElement("p")
//         pAge.innerText = `Age: ${users[index].age}`
//         userCard.append(pFirstName, pLastName, pAge)
//         usersContainerDiv.append(userCard)
//     }
// }
//===================Task*
// const button = document.createElement("button")
// button.innerText = "Lets roll"
// document.body.append(button)
// const table = document.createElement("table")
// for (let i = 0; i < 3; i++) {
//     const row = document.createElement("tr")
//     for (let j = 0; j < 3; j++) {
//         const cell = document.createElement("td")
//         row.append(cell)
//     }
//     table.append(row)
// }
// document.body.append(table)

// function randomText(){
//     const text = ["Текст 1", "Текст 2", "Текст 3", "Текст 4", "Текст 5", "Текст 6", "Текст 7", "Текст 8", "Текст 9"]
//     return text[Math.floor(Math.random() * text.length)]
// }
// function randomColor(){
//     const r = Math.floor(Math.random() * 256)
//     const g = Math.floor(Math.random() * 256)
//     const b = Math.floor(Math.random() * 256)
//     return "rgb(" + r + ", " + g + ", " + b + ")"
// }
// function updateCells(){
//     const cells = document.querySelectorAll("td")
//     for (let i = 0; i < cells.length; i++) {
//         cells[i].style.background = randomColor()
//         cells[i].innerText = randomText()
//     }
// }
// button.addEventListener("click", function(){
//     updateCells()
// })
//===============Task**
const button = document.createElement("button")
button.innerText = "Without Remorse"
document.body.append(button)

const textDiv = document.createElement("div")
textDiv.style.width = "400px"
textDiv.style.height = "200px"
textDiv.style.marginTop = "20px"
textDiv.style.padding = "20px"
textDiv.style.textAlign = "center"
textDiv.style.fontSize = "24px"
document.body.append(textDiv)
const strings = ["Warhammer 40K", "Space Marines", "Orks", "Shoota", "Chopa", "The Emperor", "Bolter"]

function setRandomColor(){
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    
    textDiv.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")"
}
function setRandomString(){
    const randomText = Math.floor(Math.random() * strings.length)
    textDiv.innerText = strings[randomText]
}
button.addEventListener("click", function(){
    setRandomColor()
    setRandomString()
})