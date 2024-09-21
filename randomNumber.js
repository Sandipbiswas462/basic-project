let max = prompt("Enter the max number");
console.log(max);

let random = Math.floor(Math.random()*max)+1;
console.log(random);
let guess = prompt("guess the right number");


while(true){
    if(guess == "quit"){
        let h2 = document.createElement('h2');
        h2.innerText = "quitting game";
        document.querySelector('body').append(h2);
        console.log("quitting game");
        break;
    }
    else if(guess == random){
        let h3 = document.createElement('h3');
        h3.innerText = `congratulations! your number is ${random}`;
        document.querySelector('body').append(h3);
        console.log("congrass!")
        break;
    }
    else if(guess > random){
        guess = prompt("Wrong guess ! the number is bigger");
    }
    else if(guess < random){
        guess = prompt("Wrong guess ! the number is smaller");
    }
    else{
        guess = prompt("you are wrong type");
    }
}