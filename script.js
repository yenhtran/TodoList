console.log("Connected!");

var todos = [],
    input = prompt("What would you like to do?");

while (input !== "quit") {
    if (input === "list") {
    		console.log("************");
        todos.forEach(function(todo, i) {
        	console.log(i + ": " + todo);
        });
        console.log("************");
    } else if (input === "new") {
        var newTodo = prompt("Enter a new todo");
        todos.push(newTodo);
        console.log("Added Todo");
    } else if (input === "delete"){
    		var deleteIndex = prompt("Enter index of todo to delete");
    				todos.splice(deleteIndex, 1);
    				console.log("Deleted Todo");
    }
    input = prompt("What would you like to do?");
};

console.log("OK, YOU QUIT THE APP");
