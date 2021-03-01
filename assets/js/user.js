const url= " https://pokeapi.co/api/v2/pokemon"


// FOR THE MOVEMENT OF THE SLIDES OF THE CARDS
// FROM LEFT TO RIGHT
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () =>
container.classList.add('right-panel-active'));

signInButton.addEventListener('click', () =>
container.classList.remove('right-panel-active'));