

const word_bank = ['redwood','maple','peach','oak','coconut'];

const word_guess = document.querySelector('#current_word_guess');

const wrong_letters = document.querySelector('#letters_already_guessed');

const wins_n = document.querySelector('#wins_num');

const r_guess_num = document.querySelector('#remaining_guesses_content');

const tree_image = document.querySelector('#tree_image');


// create first dashed line
let dash_length = '';

let randomNum = Math.floor(Math.random() * 5); 

let word_present = word_bank[randomNum];

for (let i= 0;i<word_present.length; i++){
    dash_length = dash_length + "_ ";
};

let tree_num = randomNum;

tree_image.innerHTML = '<img src = "/Users/Bryant1/Desktop/Bryant-Wong-prework/Module-2_Assessment/assets/images/tree' + tree_num + '.jpg">'


let word_present_split = word_present.split("");

word_guess.innerText = dash_length;

let new_guess = dash_length.split(" ");

let new_word_list = dash_length.split(" ");

let wrong_guesses = "";

let remain_guesses = 12;

let input_count = 0;

let wins_v = 0;

wrong_letters.innerText = wrong_guesses;
wins_n.innerText = wins_v;
r_guess_num.innerText = remain_guesses;

const Guess_Function = function(event){
    input_key = event.key;
    if(input_count > 0){
    if (word_present_split.includes(input_key) == true){
    for (let i = 0; i<word_present.length;i++){
        if(input_key == word_present[i]){
            new_word_list[i] = input_key;
        }
        else{
            //wrong_guesses.push(input_key);
        }
        }
    }
    else{
        wrong_guesses += input_key + " ";
        remain_guesses += -1;
    }
        

    wrong_letters.innerText = wrong_guesses;
    word_guess.innerText = new_word_list;
    r_guess_num.innerText = remain_guesses;



// check if loss//
    if (remain_guesses < 0 || remain_guesses == 0){
        //reset
        dash_length = '';

randomNum = Math.floor(Math.random() * 5); 

word_present = word_bank[randomNum];

for (let i= 0;i<word_present.length; i++){
    dash_length = dash_length + "-";
};

word_present_split = word_present.split("");

word_guess.innerText = dash_length;

new_guess = dash_length.split("");

new_word_list = dash_length.split("");

wrong_guesses = "";

remain_guesses = 12;

win_letter = 0;

wrong_letters.innerText = wrong_guesses;
word_guess.innerText = new_word_list;
r_guess_num.innerText = remain_guesses;

//reset
    };



//check if won//
    let win_letter = 0;
    for (var i = 0; i < word_present_split.length; ++i) {
        if (word_present_split[i] == new_word_list[i]&&remain_guesses >0) {
            win_letter+=1
        };
      }
    if (win_letter == word_present_split.length){
                //reset
                dash_length = '';

                randomNum = Math.floor(Math.random() * 5); 
                
                word_present = word_bank[randomNum];
                
                for (let i= 0;i<word_present.length; i++){
                    dash_length = dash_length + "-";
                };
                
                word_present_split = word_present.split("");
                
                word_guess.innerText = dash_length;
                
                new_guess = dash_length.split("");
                
                new_word_list = dash_length.split("");
                
                wrong_guesses = [];
                
                remain_guesses = 12;

                win_letter = 0;
                //reset
                wins_v += 1;

    }
    wins_n.innerText = wins_v;
    r_guess_num.innerText = remain_guesses;
    wrong_letters.innerText = wrong_guesses;
    }
    else{

    input_count += 1;
    alert('Game Started! Press keys to input guesses');
};

}

/*for(let i = 0; i< dash_length.length;i++){
    if(dash_length[i] == '-'){
        dash_length[i] = input_key;
    }
    else{dash_length[i] = "-"};
}*/


document.addEventListener('keyup', Guess_Function);





