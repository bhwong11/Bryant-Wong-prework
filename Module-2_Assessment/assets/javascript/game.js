


const word_bank = ['hello','modanna','state','joe','matt'];

const word_guess = document.querySelector('#current_word_guess');

let dash_length = '';

const randomNum = Math.floor(Math.random() * 5); 

for (let i= 0;i<word_bank[randomNum].length; i++){
    dash_length = dash_length + "-";
};

word_guess.innerText = dash_length;

const Guess_Function = function(event){
    input_key = event.key;
    for(let i = 0; i< dash_length.length;i++){
        if(dash_length[i] == '-'){
            dash_length[i] = input_key;
        }
        else{dash_length[i] = "-"};
    }

    word_guess.innerText = dash_length;
}

/*for(let i = 0; i< dash_length.length;i++){
    if(dash_length[i] == '-'){
        dash_length[i] = input_key;
    }
    else{dash_length[i] = "-"};
}*/


document.addEventListener('keyup', Guess_Function);





//word_guess.innerText = 