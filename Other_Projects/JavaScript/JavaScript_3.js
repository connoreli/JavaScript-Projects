function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " is the best player on the " + character.innerHTML + ".");
}
