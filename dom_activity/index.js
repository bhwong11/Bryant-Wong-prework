// Prompt the user for some information
const name = prompt('What is your name?');

const color = prompt('What is your favorite color?');
const season = prompt('What is your favorite season?');
let interests = prompt('What are you interested in?\nSeperate interests with a comma.\ne.g. hiking, fishing golf, etc.');

// Split is a built-in method that turns a string into an array of smaller strings, splitting them by a specified seperator (', in this case')
interests = interests.split(',');

// 1. Get references to the #name, #color, #season, and #interests elements
const name_1 = document.querySelector('#name');
const color_1 = document.querySelector('#color');
const season_1 = document.querySelector('#season');
const interest_1 = document.querySelector('#interests');

// 2. Set the `innerText` of the #name, #color, and #season elements to their corresponding collected values

name_1.innerText = name;
color_1.innerText = color;
season_1.innerText = season;

// 3. Use a for-loop and the `innerText` property to create a string of li tags containing each collected intererst
let i_list = '';

for (let i = 0; i< interests.length; i++){
    const i_1 = interests[i];
    i_list += `<li>${i_1}</li>`;
}
// Insert the string of interest li tags inside of the #interests element
interest_1.innerHTML = i_list;

//let interestHTML = '';

// For each character, add an li element string to the characterHTML string
//for (let i = 0; i < interests.length; i++) {
//    const interest = interests[i];
//    interestHTML += `<li>${interest}</li>`;
//}

// Set the inner HTML of the character list to the characterHTML string
//interest_1.innerHTML = interestHTML;