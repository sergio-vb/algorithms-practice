console.log("Hello World!");

/* -------- Option 1: Normal constructor with methods on the prototype ---------
---- Pros: Methods are instantiated only once, shared by all instances of the class Stack
---- Cons: The data property is not private, it can be accessed directly and changed.
*/
// function Stack(){
//     this.data = [];
// }
// Stack.prototype.push = function(value){
//     this.data.push(value);
// }
// Stack.prototype.pop = function(){
//     return (this.data.length > 0 ? this.data.splice(this.data.length - 1, 1)[0] : null);
// }
// Stack.prototype.peek = function(){
//     return (this.data.length > 0 ? this.data[this.data.length - 1] : null);
// }
// Stack.prototype.peekAll = function(){
//     return this.data;
// }


/* -------- Option 2: Using variables (not properties) and methods inside the constructor ---------
---- Pros: The class can really have private data that cannot be accessed directly externally
---- Cons: All of the methods will be instantiated once per instance of the class
*/
function Stack(){
    var data = [];

    this.push = function(value){
        data.push(value);
    }
    this.pop = function(){
        return (data.length > 0 ? data.splice(data.length - 1, 1)[0] : null);
    }
    this.peek = function(){
        return (data.length > 0 ? data[data.length - 1] : null);
    }
    this.peekAll = function(){
        return data;
    }
}

// function Node(){
//     this.data;
//     this.next;
// }


var theStack = new Stack();