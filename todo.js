let todo=[]; 


let req=prompt("please enter your request");


while (true){
    if(req == "quit") {
        console.log("quitting the app");
        break;
    }
     
    if(req == "list"){
        console.log("----------------------");
        for(let i=0; i<todo.length; i++){
          console.log(i,todo[i]);
        }
           console.log("---------------------");
    }else if(req=="add"){
        let task = prompt("add your task");
        todo.push(task);
        console.log("task is added successfully");

    }else if(req == "delete"){
        let idx = prompt("please enter the index you want to delete");\
        todo.splice(idx,1);
        console.log("task deleted")
    }
    req = prompt("please enter your request"); 
}


    else if(req == "delete"){
        let idx = prompt("please enter the index you want to delete");\
        todo.splice(idx,1);}