


const word_bank = ['hello','modanna','state','joe','matt'];

const word_guess = document.querySelector('#current_word_guess');

const wrong_letters = document.querySelector('#letters_already_guessed');

const wins_n = document.querySelector('#wins_num');

const r_guess_num = document.querySelector('#remaining_guesses_content');

let dash_length = '';

const randomNum = Math.floor(Math.random() * 5); 

let word_present = word_bank[randomNum];

for (let i= 0;i<word_present.length; i++){
    dash_length = dash_length + "-";
};

let word_present_split = word_present.split("");

word_guess.innerText = dash_length;

let new_guess = dash_length.split("");

let new_word_list = dash_length.split("");

let wrong_guesses = [];

let remain_guesses = 12;

const Guess_Function = function(event){
    input_key = event.key;
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
        wrong_guesses += input_key + ", ";
        remain_guesses += -1;
    }
        
   /* for(let i = 0; i< new_guess.length;i++){
        if(new_guess[i] == '-'&&(i == 0 || (i>0&&new_guess[i-1] != "-"))){
            new_guess[i] = input_key;
        }
        else{new_guess[i] = "-"};
    }*/

    wrong_letters.innerText = wrong_guesses;
    word_guess.innerText = new_word_list;
    r_guess_num.innerText = remain_guesses;

    if (remain_guesses <= 0){
        alert('loss');
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

wrong_letters.innerText = wrong_guesses;
word_guess.innerText = new_word_list;
r_guess_num.innerText = remain_guesses;

//reset
    };



    let win_letter = 0;
    let wins_v = 0;
    for (var i = 0; i < word_present_split.length; ++i) {
        if (word_present_split[i] == new_word_list[i]&&remain_guesses >0) {
            win_letter+=1
        };
      }
    if (win_letter == word_present_split.length){
        alert('win');
        wins_v += 1;
                //reset
                let dash_length = '';

                const randomNum = Math.floor(Math.random() * 5); 
                
                let word_present = word_bank[randomNum];
                
                for (let i= 0;i<word_present.length; i++){
                    dash_length = dash_length + "-";
                };
                
                let word_present_split = word_present.split("");
                
                word_guess.innerText = dash_length;
                
                let new_guess = dash_length.split("");
                
                let new_word_list = dash_length.split("");
                
                let wrong_guesses = [];
                
                let remain_guesses = 12;

                let win_letter = 0;
                //reset

    }
    wins_n.innerText = wins_v;


}

/*for(let i = 0; i< dash_length.length;i++){
    if(dash_length[i] == '-'){
        dash_length[i] = input_key;
    }
    else{dash_length[i] = "-"};
}*/


document.addEventListener('keyup', Guess_Function);





//word_guess.innerText = 