const favMovie = "avatar";

let guess = prompt("Enter the right movie name");

while((guess != favMovie) && (guess != "quit")){
   guess = prompt("wrong guess !, please try again");
}
if(guess == favMovie){
    let h2 = document.createElement('h2');
    h2.innerText =`Congratulations the right movie name is ${favMovie}`;
    document.querySelector('body').append(h2);
    console.log("Congratulations");
}
if(guess == "quit"){
    let h3 = document.createElement('h3');
    h3.innerText = "you are quitting game";
    document.querySelector('body').append(h3);
    console.log("quitting app")
}