// Change all character settings when select the other buttom on menu, and show the new character settings..

const buttons = document.querySelectorAll('.buttom') //pick the buttons for verify
const characters = document.querySelectorAll('.character') //pick the characters for verify

buttons.forEach((buttom, index) => {
    buttom.addEventListener("click", () => { 
        deselectbuttom ()
        deselectcharacter ()
        buttom.classList.add("selected") //add "selected" to clicked buttom.
        characters[index].classList.add("selected") //the index marks the character selected in characters list
    }) //Cath the click event and do an action.
})  //select a unique buttom inside the buttons list.

function deselectbuttom () {
    const buttomselected = document.querySelector(".buttom.selected") //create a variable to pick the selected buttom.
        buttomselected.classList.remove("selected") //remove the "selected" from the unclicked buttom.
}

function deselectcharacter () {
        const characterselected = document.querySelector(".character.selected")
        characterselected.classList.remove("selected")
}
