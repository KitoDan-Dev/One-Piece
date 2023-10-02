// Change all character settings when select the other buttom on menu, and show the new character settings..

const buttons = document.querySelectorAll('.button') //pick the buttons for verify
const characters = document.querySelectorAll('.character') //pick the characters for verify

buttons.forEach((button, index) => {
    button.addEventListener("click", () => { 
        deselectbutton ()
        deselectcharacter ()
        button.classList.add("selected") //add "selected" to clicked buttom.
        characters[index].classList.add("selected") //the index marks the character selected in characters list
    }) //Cath the click event and do an action.
})  //select a unique buttom inside the buttons list.

function deselectbutton () {
    const buttonselected = document.querySelector(".button.selected") //create a variable to pick the selected buttom.
        buttonselected.classList.remove("selected") //remove the "selected" from the unclicked buttom.
}

function deselectcharacter () {
        const characterselected = document.querySelector(".character.selected")
        characterselected.classList.remove("selected")
}
