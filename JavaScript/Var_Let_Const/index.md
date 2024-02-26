### var, let, and const in Javascript


In JavaScript, **var**, **let**, and **const** are used for variable declarations, but they have some important differences. Here's a breakdown of each:

1. **var**:
    * Variables declared with `var` are **function-scoped** or **globally scoped**, but ***not block-scoped***. This means they are accessible throughout the entire function in which they are declared, regardless of the block in which they appear.
    * They can be re-declared and updated within their scope.
    * They are hoisted to the top of their function or global scope during compilation. And automatically gets of value of `undefined`.
    * `var` declarations are not restricted by block scope, which can sometimes lead to unexpected behavior, especially in loops and conditional statements.

Example:

```javascript
function example() {
    var x = 10;
    if (true) {
        var x = 20; // This will override the previous declaration of 'x'
        console.log(x); // Output: 20
    }
    console.log(x); // Output: 20
}
```

2. **let**:
    * Variables declared with `let` are **block-scoped**, meaning they are only accessible within the block in which they are declared (e.g., within a *loop* or an *if* statement).
    * They **cannot be re-declared** within **the same block scope**, but they can be updated.

Example:

```javascript
function example() {
    let x = 10;
    if (true) {
        let x = 20; // This creates a new variable 'x' that shadows the outer one
        console.log(x); // Output: 20
    }
    console.log(x); // Output: 10
}
```

3. **const**:
    * Constants declared with `const` are also **block-scoped** like `let`.
    * They must be initialized with a value upon declaration and cannot be reassigned a new value.
    * If the value assigned to a `const` variable is an **object** or **array**, its properties or elements **can be modified**, but the variable itself cannot be reassigned.

Example:

```javascript
function example() {
    const x = 10;
    // x = 20; // Error: Assignment to constant variable
    if (true) {
        const x = 20; // This creates a new variable 'x' that shadows the outer one
        console.log(x); // Output: 20
    }
    console.log(x); // Output: 10
}
```

#### Temporal Dead Zone
Variables (declared with `var`) are hoisted with a default initialization which is undefined. That’s why if we try to access a variable (with the `var` keyword), it’ll not throw an error. Rather, it’ll give us `undefined`.

On the other hand, variables using (`let` and `const`) also do hoist but without a **default initialization**. That’s why accessing before initialization a variable (with `let` and `const`) will **throw a reference error**. It’s also known as the **temporal dead zone** where compilers know its existence but can’t access it because it’s uninitialized.

```javascript
var a; // Compilers Read and hoist like: var a = undefined
let b; // Compilers Read and hoist like: var b
```