### Closure in JavaScript

A closure in JavaScript is a feature that **allows a function to remember and access its lexical scope even when it is executed outside that scope**. This means that a function retains access to variables from its outer scope, even after the outer function has finished executing.

Here's an explanation of closures with an example:

```javascript
function outerFunction() {
  const outerVariable = 'I am from outer function';

  function innerFunction() {
    // Accessing the outerVariable from the lexical scope
    console.log(outerVariable);
  }

  // Returning the inner function
  return innerFunction;
}

// Calling outerFunction and assigning the returned inner function to a variable
const innerFunc = outerFunction();

// Calling the inner function, which is a closure and still has access to outerVariable
innerFunc(); // Output: "I am from outer function"
```

In this example:

* `outerFunction` defines a local variable `outerVariable`.
* Inside `outerFunction`, an inner function `innerFunction` is defined. This inner function is a closure because it retains access to variables from its lexical scope (in this case, outerVariable) even after `outerFunction` has completed execution.
* When `outerFunction` is called and `innerFunction` is returned, `innerFunc` now holds a reference to `innerFunction` along with its closure scope.
* When `innerFunc` is called outside of `outerFunction`, it still has access to `outerVariable`. This is because the closure allows `innerFunction` to retain access to its surrounding lexical scope, including variables like `outerVariable`.