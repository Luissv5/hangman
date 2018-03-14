var wordsToGuess = ["Pablo", "Leon", "Gustavo", "Quica", "Limon", "Gato", "Carrillo", "Javier", "Tata", "Jorge", "Valeria"];
var randoIndex = Math.floor(Math.random() * wordsToGuess.length);
var randoWord = wordsToGuess[randoIndex];
exports.randoWord = randoWord;
