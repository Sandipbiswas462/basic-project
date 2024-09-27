let todo = [];

let req = prompt("Enter your request");

while(true){
    if(req == "quit"){
        let h3 = document.createElement('h3');
        h3.innerText = "quitting app";
        document.querySelector('body').append(h3);
        console.log("quitting app");
        break;
    }
    if(req == "list"){
        console.log("-----------");
        for(let i=0; i<todo.length; i++){
            let h3 = document.createElement('h3');
            h3.innerText = todo[i];
            document.querySelector('body').append(h3);
            console.log(todo[i]);
        }
        console.log("-----------");
    }
    if(req == "add"){
        let list = prompt("Enter your task what you want add");
        let p =document.createElement('p');
        p.innerText = todo.push(list);
        document.querySelector('body').append(p);
        console.log("task add");
        
    }
    else if(req == "delete"){
        console.log("-----------");
        let idx = prompt("Enter your task what you want delete");
        // let p =document.createElement('p');
        // p.innerText = todo.slice(ldx, 1);
        // document.querySelector('body').prepend(p);
        todo.splice(idx, 1);
        console.log("task delete");
    }
    req = prompt("Enter your request");
}