const userForm = document.querySelector(".user")
const firstName = document.querySelector("#firstName")
const lastName = document.querySelector("#lastName")
const ageInput = document.querySelector("#age")
const submitButton = document.querySelector("#submit")
//======================== Task 1 =========
// submitButton.addEventListener("click", function(event){
//     event.preventDefault()
//     let firstNameValue = firstName.value
//     let lastNameValue = lastName.value
//     let ageValue = age.value
//     console.log(`Name: ${firstNameValue}, Last Name: ${lastNameValue}, Age: ${ageValue}`);
//     userForm.reset()
// })
//========================= Task 2 =============
// submitButton.addEventListener("click", function(event){
//     event.preventDefault()
//     let firstNameValue = firstName.value
//     let lastNameValue = lastName.value
//     let ageValue = ageInput.value
//     const user = 
//     {
//         firstName: firstNameValue,
//         lastName: lastNameValue,
//         age: ageValue
//     }
//     users.push(user)
//     console.log(users);
//     userForm.reset()
// })
//========================= Task 3 ===============
// const userContainerDiv = document.querySelector(".user-container")
// let users = []

// function renderUserCards(userArray){
//     userContainerDiv.innerHTML = ""

//     for (let user of userArray){
//         const card = document.createElement("div")
//         card.classList.add("card")

//         const name = document.createElement("h3")
//         name.textContent = `${user.firstName} ${user.lastName}`

//         const age = document.createElement("p")
//         age.textContent = `Age: ${user.age}`

//         card.append(name, age)
//         userContainerDiv.append(card)
//     }
// }

// submitButton.addEventListener("click", function(event){
//     event.preventDefault()
//     let firstNameValue = firstName.value
//     let lastNameValue = lastName.value
//     let ageValue = ageInput.value
//     const user = 
//     {
//         firstName: firstNameValue,
//         lastName: lastNameValue,
//         age: ageValue
//     }
//     users.push(user)
//     renderUserCards(users);
//     userForm.reset()
// })
// renderUserCards(users)
//====================== Task 4 ===================
// let users = []
// function renderUserCards(){
//     const userContainerDiv = document.querySelector(".user-container")
//     userContainerDiv.innerHTML = ""

//     for(let i = 0; i < users.length; i++){
//     const user = users[i]

//         const card = document.createElement("div")
//         card.classList.add("user-card")
//         card.innerHTML = `<p>${user.firstName} ${user.lastName}, ${user.age}</p>`
        
//         card.addEventListener("dblclick", () =>{
//             for (let i = 0; i < users.length; i++) {
//                 if (users[i].id === user.id){
//                     users.splice(i, 1)
//                     break
//                 }
//             }
//             renderUserCards()
//         })
//         userContainerDiv.append(card)
//     }
// }

// submitButton.addEventListener("click", function(event){
//     event.preventDefault()
//     let firstNameValue = firstName.value
//     let lastNameValue = lastName.value
//     let ageValue = ageInput.value
//     const user = 
//     {
//         firstName: firstNameValue,
//         lastName: lastNameValue,
//         age: ageValue
//     }
//     users.push(user)
//     renderUserCards(users);
//     userForm.reset()
// })
// renderUserCards(users)

//=================== Task * ========================
const userInput = document.querySelector("#userInput")
const uploadButton = document.querySelector("#uploadButton")
const prevButton = document.querySelector("#prevButton")
const nextButton = document.querySelector("#nextButton")
const thumbnailsDiv = document.querySelector("#thumbnails")
const previewDiv = document.querySelector("#preview")
const emptyImgElem = document.createElement("img")
const buttonDiv = document.querySelector(".button-container")
previewDiv.append(emptyImgElem)

let images = ['https://assets-jpcust.jwpsrv.com/thumbnails/8j4ej0ei-720.jpg', 'https://e0.pxfuel.com/wallpapers/214/608/desktop-wallpaper-black-templars-warhammer-40-000-game-30103.jpg', 'https://wh40k.lexicanum.com/mediawiki/images/thumb/1/14/CustodesArt9th.jpg/250px-CustodesArt9th.jpg', 'https://wallpapercave.com/wp/wp2791030.jpg', 'https://qph.cf2.quoracdn.net/main-qimg-20c63e8ef6562c6db5ca8b729af31a33-lq', 'https://c4.wallpaperflare.com/wallpaper/401/978/493/space-wolves-chaos-space-marines-demons-warhammer-40-000-hd-wallpaper-preview.jpg', 'https://i.redd.it/7lql1vhmv7i71.jpg', 'https://i.pinimg.com/originals/62/e3/05/62e305bd60475bb45a79b20851ec0971.jpg', 'https://rare-gallery.com/thumbnail/452445-Warhammer-40000-Games-Workshop-Space-Marine-space-marines.jpg', 'https://i.pinimg.com/originals/b8/c9/b3/b8c9b3b1c4dc31f364a7e27be97811e9.jpg'];
let i = 0
for (let i = 0; i < images.length; i++) {
  const thumbnailContainer = document.createElement("div");
  thumbnailContainer.classList.add("thumbnail-container");  
  const newImg = document.createElement("img")
    newImg.setAttribute("src", images[i])
    newImg.addEventListener("click", function() {
      emptyImgElem.setAttribute("src", images[i])
      const imageInfo = document.querySelector("#imageInfo");
      imageInfo.textContent = `Image ${i + 1} of ${images.length}: ${images[i]}`;
    })
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button")
   deleteButton.addEventListener("click", function() {
    images.splice(i, 1);
    thumbnailsDiv.remove(thumbnailContainer);
    thumbnailsDiv.remove(deleteButton);
    if (i === images.length) {
      i--;
    }
    emptyImgElem.setAttribute("src", images[i]);
    const imageInfo = document.querySelector("#imageInfo");
    imageInfo.textContent = `Image ${i + 1} of ${images.length}: ${images[i]}`;
});
thumbnailContainer.append(newImg, deleteButton);  
thumbnailsDiv.append(thumbnailContainer);
}
nextButton.addEventListener('click', function() {
    i++;
    if (i >= images.length) {
      i = 0;
    }
    emptyImgElem.setAttribute("src", images[i]);
      const imageInfo = document.querySelector("#imageInfo");
      imageInfo.textContent = `Image ${i + 1} of ${images.length}: ${images[i]}`;
  });
  
prevButton.addEventListener('click', function() {
    i--;
    if (i < 0) {
      i = images.length - 1;
    }
    emptyImgElem.setAttribute("src", images[i]);
      const imageInfo = document.querySelector("#imageInfo");
      imageInfo.textContent = `Image ${i + 1} of ${images.length}: ${images[i]}`;
});

uploadButton.addEventListener('click', function() {
  event.preventDefault()  
  const imageUrl = prompt("Enter the image URL:");
    const imageDescription = prompt("Enter a description for the image:");
    
    images.push(imageUrl);
    
    const newImg = document.createElement("img");
    newImg.setAttribute("src", imageUrl);
    newImg.addEventListener("click", function() {
        emptyImgElem.setAttribute("src", imageUrl);
        const imageInfo = document.querySelector("#imageInfo");
        const imageIndex = images.indexOf(imageUrl);
        imageInfo.textContent = `Image ${imageIndex + 1} of ${images.length}: ${imageUrl}`;
});
    thumbnailsDiv.append(newImg);
    
    emptyImgElem.setAttribute("src", imageUrl);
    const imageInfo = document.querySelector("#imageInfo");
    const imageIndex = images.indexOf(imageUrl);
    imageInfo.textContent = `Image ${imageIndex + 1} of ${images.length}: ${imageUrl} - ${imageDescription}`;
})