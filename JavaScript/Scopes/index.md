### Scopes in JavaScript

In JavaScript, scopes refer to the regions of your code where *variables*, *functions*, and *objects* are accessible. Understanding scopes is crucial for **managing variable visibility** and **preventing naming conflicts**. There are mainly two types of scopes in JavaScript: **Global** and **Local** scopes.

1. **Global Scope**:
    * Variables declared **outside** of any *function* or *block* have global scope. They are accessible from anywhere in your code, including inside functions and blocks.
    * Global variables are accessible by all scripts and functions on a web page, which can sometimes lead to naming conflicts and unintended consequences if not managed properly.
    * Variables declared with `var` keyword at the top level are implicitly assigned to the global scope.

```js
var globalVar = 10;

function foo() {
    console.log(globalVar); // Output: 10
}

console.log(globalVar); // Output: 10
```

2. **Local Scope**:
    * Variables declared **inside** a function or block have local scope. They are accessible only within the function or block in which they are declared.
    * Local variables are *created when the function or block is invoked* and *destroyed when the function or block exits*, making them temporary and isolated from other parts of the code.
    * Variables declared with `let` and `const` keywords within a block (e.g., `if`, `for`, `while` statements) have block scope, which means they are only accessible within that block.

```js
function foo() {
    var localVar = 20;
    console.log(localVar); // Output: 20
}

foo();
//console.log(localVar); // ReferenceError: localVar is not defined
```

### Lexical scope, function scope, and block scope all refer to local scopes:

1. **Lexical Scope**:
    * Lexical scope, also known as **static scope**, is a concept where the visibility of variables is determined by their location within the source code.
    * In lexical scope, the accessibility of variables is based on where they are defined in the code, rather than where they are executed.
    * JavaScript uses lexical scoping, which means the scope of a variable is defined by its location in the source code when the function is defined, not when it is executed.

```js
function outerFunction() {
    var outerVar = 'I am outer';

    function innerFunction() {
        console.log(outerVar); // Accessible because of lexical scope
    }

    innerFunction();
}

outerFunction(); // Output: I am outer
```

2. **Function Scope**:
    * Function scope refers to the visibility and accessibility of variables **declared within a function**.
    * Variables declared using `var` keyword inside a function have function scope, meaning they are accessible only within that function, not outside it.
    * Function scope applies to variables declared as parameters or using var within the function body.

```js
function foo() {
    var localVar = 'I am local to foo';
    console.log(localVar); // Output: I am local to foo
}

foo();
//console.log(localVar); // ReferenceError: localVar is not defined
```

3. **Block Scope**:
    * Block scope refers to the visibility and accessibility of variables declared within a block, such as `if`, `for`, `while` statements, or a block enclosed by curly braces `{}`.
    * Variables declared using `let` and `const` keywords within a block have block scope, meaning they are accessible only within that block and not outside it.
    * Block scope helps prevent naming conflicts and leakage of variables to the outer scope.

```js
if (true) {
    let blockVar = 'I am block-scoped';
    console.log(blockVar); // Output: I am block-scoped
}

//console.log(blockVar); // ReferenceError: blockVar is not defined
```