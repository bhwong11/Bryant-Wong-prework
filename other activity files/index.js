let list_1 = [1,4,6];


function sum_list(array1) {
    let sum1 = 0

    for(let i = 0;i< array1.length;i++){
        sum1 = sum1 + array1[i]};
    return(sum1)
    };
sum_list(list_1);

let contacts = {    
    dan: "555-330-2289",
    dante: "555-660-2295"
};

let prop = prompt('enter name');
console.log(contacts[prop]);

let dog = {
    isSleepy: false,
    isHungry: true,
    sound: "Woof!",
    name: "Spot",
    makeSound: function(){
        console.log(this.sound);
    },
    sleep: function(){
        this.isSleepy = false;
        this.ishungry = true;
        console.log(this.isSleepy + " "+this.isHungry);},
    feed: function(){
        this.isSleepy = true;
        this.isHungry = false;
        console.log(this.isSleepy + " "+this.isHungry);
    }
    }

