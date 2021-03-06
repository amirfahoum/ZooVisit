// Part 1. Fill in any missing parts of the todoFunction object!
// you can access these on todo.todoFunctions
// For part one we expect you to use tdd

var todoFunctions = {
  // todoFunctions.generateId() will give you a unique id
  // You do not need to understand the implementation of this function.
  generateId: (function () {
    var idCounter = 0;

    function incrementCounter() {
      return (idCounter += 1);
    }

    return incrementCounter;
  })(),

  //cloneArrayOfObjects will create a copy of the todos array 
  //changes to the new array don't affect the original
  cloneArrayOfObjects: function (todos) {
    return todos.map(function (todo) {
      return JSON.parse(JSON.stringify(todo));
    });
  },

  addTodo: function (todos, newTodo) {
    var newarr2 = this.cloneArrayOfObjects(todos);
    if (!checkdup(newarr2, newTodo)) {
      var newarr = this.cloneArrayOfObjects(todos);
      let id1 = this.generateId();
      newObj = { id: id1, description: newTodo, done: false }
      newarr.push(newObj);
      return this.sortTodos(newarr);
    }
return todos;
    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // returns a new array, it should contain todos with the newTodo added to the end.
    // add an id to the newTodo. You can use the generateId function to create an id.
    // hint: array.concat
  },
  deleteTodo: function (todos, idToDelete) {
    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // return a new array, this should not contain any todo with an id of idToDelete
    // hint: array.filter

    var newarr = this.cloneArrayOfObjects(todos);
    newarr = newarr.filter(function (obj) {
      return obj.id != idToDelete;
    });
    return newarr
  },

  markTodo: function (todos, idToMark) {
    var newarr = this.cloneArrayOfObjects(todos);
    newarr = newarr.map((obj) => {
      if (obj.id == idToMark) {
        if (obj.done != true) {
          obj.done = true;
        } else obj.done = false;
      }
      return obj;
    });

    return newarr;

  },
  // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
  // in the new todo array, all elements will remain unchanged except the one with id: idToMark
  // this element will have its done value toggled
  // hint: array.map
  sortTodos: function (todos, sortFunction) {
    var newarr = this.cloneArrayOfObjects(todos)
    newarr = newarr.sort(sortFunction);
    return newarr;
    // stretch goal! Do this last
    // should leave the input arguement todos unchanged (you can use cloneArrayOfObjects)
    // sortFunction will have same signature as the sort function in array.sort
    // hint: array.slice, array.sort
  },
};
function checkdup(todos, newstr) {
  
  var newstr=newstr.toUpperCase();
  console.log("checkfunc");
  return todos.filter(function(val){
    return val.description.toUpperCase()==(newstr);
  }).length>0;


}
//todos.description.toUpperCase
//if(todos.includes(newstr))
// {
//  return true;
//}
//  return false;


function sortFunction(a, b) { return (a.description < b.description); }
// Why is this if statement necessary?
// The answer has something to do with needing to run code both in the browser and in Node.js
// See this article for more details: 
// http://www.matteoagosti.com/blog/2013/02/24/writing-javascript-modules-for-both-browser-and-node/
if (typeof module !== 'undefined') {
  module.exports = todoFunctions;
}
