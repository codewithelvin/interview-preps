### Call stack in js

The call stack in JavaScript is a mechanism **used to track the execution of function calls in a program**. It keeps track of the current point of execution and the order in which functions are called. When a function is **invoked**, a **new frame is pushed** onto the call stack to represent the function's **execution context**, including its arguments and local variables. When the function completes execution, its frame is popped off the call stack, allowing the program to return to the previous point of execution.

Here's a brief overview of how the call stack works in JavaScript:

1. **Function Invocation**:

    When a function is called in JavaScript, a new frame representing that function's execution context is **created** and **pushed** onto the call stack. This includes the *function's arguments* and *local variables*.

2. **Execution**:

    The JavaScript engine **executes the code within the function**, following the order of statements. If the function calls other functions, their execution contexts are pushed onto the call stack as well.

3. **Function Completion**:
    
    When the function completes execution (reaches the end of its code or encounters a return statement), its execution context is **popped off** the call stack, and control returns to the point in the code where the function was called.

4. **Stack Unwinding**:

    As functions complete execution and their execution contexts are **popped off** the call stack, the program "unwinds" back to the initial point of execution, typically the global scope.

Here's a simple example to illustrate the call stack in JavaScript:

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}

function sayHello() {
  console.log("Starting sayHello function...");
  greet("Alice");
  console.log("Ending sayHello function...");
}

console.log("Starting program...");
sayHello();
console.log("Ending program...");
```

When this code is executed, the sequence of function calls and their corresponding frames on the call stack looks like this:

```bash
Starting program...
Starting sayHello function...
Hello, Alice!
Ending sayHello function...
Ending program...
```

In this example, the call stack tracks the execution of the `sayHello` function, which calls the greet function, before eventually unwinding and completing execution. Understanding the call stack is crucial for debugging and understanding the flow of execution in JavaScript programs.

#### Execution context in JavaScript

Execution context in JavaScript refers to the environment in which JavaScript code is executed. It includes details such as variable scope, function declarations, and the value of the `this` keyword. Understanding execution context is crucial for understanding how JavaScript code behaves, especially in terms of variable access and function invocation.

There are three types of execution contexts in JavaScript:

1. **Global Execution Context**:

    The global execution context is the *default context* in which JavaScript code is executed. It represents the entire script or module and contains global variables and functions. It is created *when the script is first loaded into the browser* or *when a Node.js module is executed*.

2. **Function Execution Context**:

    Function execution contexts are created whenever a function is called or invoked. **Each function call creates a new execution context**, which includes *the function's arguments*, *local variables*, and references to its outer lexical environment (lexical scope). When a function completes execution, its execution context is removed from the call stack.

3. **Eval Function Execution Context**:
    
    The `eval` function in JavaScript can be used *to execute code dynamically*. When code is executed using `eval`, it creates a new execution context similar to a function execution context. However, `eval` is generally discouraged due to *security* and *performance concerns*.

Each *execution context* has associated with it a set of key components:

* **Variable Environment**:

    The variable environment of an execution context contains the variables declared within the context, including function arguments, local variables, and function declarations (hoisted). It also contains references to outer variable environments for lexical scoping.

* **Lexical Environment**:

    The lexical environment is similar to the variable environment but also includes **information about the outer lexical environment** (outer scope). This **allows functions to access variables from their surrounding lexical scope**, even after the outer function has completed execution.

    ```js
        function outerFunction() {
            const outerVariable = 'I am from outer function';

            function innerFunction() {
                // Accessing the outerVariable from the lexical environment
                console.log(outerVariable);
            }

            // Returning the inner function
            return innerFunction;
        }

        // Calling outerFunction and assigning the returned inner function to a variable
        const innerFunc = outerFunction();

        // Calling the inner function, which still has access to outerVariable
        innerFunc(); // Output: "I am from outer function"
    ```

* **Scope Chain**:

    The scope chain is a list of variable objects that represent the variable scope hierarchy. It is used to resolve variable references by searching through each scope in the chain, starting from the innermost scope and moving outward.

* `This` **Binding**:

    The value of the `this` keyword within an execution context is determined by **how a function is called**. In the global context, `this` refers to the global object (window in browsers, global in Node.js). In a function context, this can be explicitly set using function methods like `call`, `apply`, or `bind`.

Understanding execution context is essential for understanding *variable scope*, *function invocation*, and *the behavior of JavaScript code in different contexts*. It forms the basis for understanding closures, lexical scoping, and the JavaScript runtime environment.

#### Why variable and function is `undefined` in execution context?

In JavaScript, during the creation phase of the execution context, variables and functions are initialized with a default value of `undefined`. This is part of the process known as *variable hoisting*.

#### Is **Function Execution Context** and **Local Execution Context** are the same?

The terms "**Function Execution Context**" and "**Local Execution Context**" are often used interchangeably because they both refer to the context in which a function's code is executed. However, there is a subtle difference in their usage:

1. **Function Execution Context**:
    
    This term refers to the specific execution context created when a function is invoked. It encompasses *the entire environment in which the function's code is executed*, including *the function's arguments, local variables, this binding, and references to outer lexical environments*. The function execution context represents **the scope in which the function operates**.

2. **Local Execution Context**:

    This term is **more general** and can refer to any execution context that is local in scope, not just those created for function execution. While function execution contexts are a common type of local execution context, there can be other scenarios where code is executed within a limited scope, such as within a block statement (e.g., if, for, while), a try-catch block, or an arrow function.

In summary, **all function execution contexts** are **local execution contexts**, but **not all local execution contexts** are **function execution contexts**. 

The term "Function Execution Context" is often used specifically when discussing the execution context created for function calls, while "Local Execution Context" is a broader term that encompasses any limited scope of execution.