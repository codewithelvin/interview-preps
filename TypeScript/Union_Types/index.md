### Union Types in TypeScript

**Union Types** in TypeScript allow a variable to hold values of different types. This means you can specify multiple types for a single variable, and TypeScript will allow the variable to hold values of any of those specified types. Here's an explanation of union types with examples:

```typescript
let myVariable: string | number;
```

#### Usage

1. Variable Declaration:
```typescript
let myVariable: string | number;
myVariable = "Hello"; // Valid
myVariable = 123;      // Valid
```

2. Function Parameters:
```typescript
function displayValue(value: string | number) {
    console.log(value);
}

displayValue("Hello"); // Valid
displayValue(123);      // Valid
```

3. Return Types:
```typescript
function getValue(): string | number {
    return Math.random() < 0.5 ? "Hello" : 123;
}
```
4. Arrays:
```typescript
let myArray: (string | number)[] = ["Hello", 123];
```

5. Objects:
```typescript
type MyObj = {
    name: string;
    age: number;
};

let obj: MyObj | null = { name: "Alice", age: 30 }; 
// Can be an object of type MyObj or null
```

#### Benefits:

* **Flexibility**: Union types provide flexibility by allowing variables to hold values of different types, making code more adaptable to various scenarios.
* **Type Safety**: TypeScript still provides type checking for values within the union types, ensuring type safety even when dealing with multiple types.
* **Expressiveness**: Union types make the code more expressive by explicitly indicating the possible types a variable can hold.

Example:

```typescript
type Result = string | number;

function processResult(result: Result) {
    if (typeof result === "string") {
        console.log(result.toUpperCase());
    } else {
        console.log(result.toFixed(2));
    }
}

processResult("Hello"); // Outputs: HELLO
processResult(3.14159); // Outputs: 3.14
```
In this example, the `processResult` function accepts a parameter of type `Result`, which can be either a `string` or a `number`. Depending on the type of the value passed to the function, different operations can be performed, demonstrating the flexibility and safety provided by union types.