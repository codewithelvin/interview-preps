console.clear()
console.log("varVariable before init =>", varVariable);
var varVariable = 'I am var!';
console.log(varVariable);

{
    const constVariable = "I am const variable in block scope!"
    console.log(constVariable)
    var varVariable = 'I am var in block scope!';
}

function someFunc(argument1, argument2 = argument1){
    console.log(argument1, argument2)
    console.log("varVariable before init in function =>", varVariable)
    var varVariable = 'I am var in function scope!';
    const constVariable = "I am const variable in function scope!"
    console.log(constVariable)
}


console.log(varVariable);
// console.log(constVariable) - ReferenceError: constVariable is not defined
someFunc("argument")