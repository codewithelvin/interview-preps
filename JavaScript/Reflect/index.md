### Reflect

In JavaScript, `Reflect` is a built-in object that *provides methods for interceptable JavaScript operations*. It allows you to perform meta-programming tasks, such as defining custom behaviors for fundamental operations like property lookup, property assignment, function invocation, and more.

Here are some key aspects of the `Reflect` object:

1. **Static Methods**:

    `Reflect` provides static methods that correspond to various JavaScript operations. These methods can be used to perform operations in a more controlled and predictable manner compared to their counterparts in the global object (Object). Some commonly used methods include:
    * `Reflect.get(target, propertyKey[, receiver])`: Retrieves the value of the specified property from the target object.
    * `Reflect.set(target, propertyKey, value[, receiver])`: Sets the value of the specified property on the target object.
    * `Reflect.has(target, propertyKey)`: Checks if the target object has the specified property.
    * `Reflect.deleteProperty(target, propertyKey)`: Deletes the specified property from the target object.
    * `Reflect.apply(target, thisArg, argumentsList)`: Calls the target function with the specified arguments.

2. **Proxy Integration**:

    `Reflect` is often used in conjunction with the `Proxy` object to define custom behavior for intercepted operations. The methods provided by `Reflect` are often used inside trap functions (handlers) of a `Proxy` object to delegate intercepted operations to the target object or to customize their behavior.

3. **Consistent API**:
    
    The methods provided by `Reflect` offer a consistent and unified API for performing meta-programming tasks. This makes it easier to reason about and maintain code that relies on meta-programming techniques.

4. **Reflective Operations**:
    
    Reflective operations are operations that involve inspecting or modifying the behavior of JavaScript objects. `Reflect` provides a standardized way to perform these operations, making it easier to work with meta-programming features in JavaScript.

Overall, `Reflect` is a powerful tool for meta-programming in JavaScript, providing a standardized API for performing reflective operations on objects. It is commonly used in combination with Proxy objects to define custom behavior for intercepted operations, enabling developers to implement advanced features and patterns in their applications.

#### Why we should use Reflect instead of direct object manipulation?

Using `Reflect` instead of *direct object manipulation* promotes better code organization, security, and compatibility. It encourages best practices in meta-programming and helps maintain a clean and maintainable codebase.

`Reflect` methods are often used in conjunction with `Proxy` objects to define custom behavior for intercepted operations. By using `Reflect` alongside `Proxy`, you can implement powerful *meta-programming patterns*, such as intercepting property access, assignment, and method invocation.

#### Code Examples

1. Using `Reflect.get()` to Retrieve Property Values:
```javascript
const obj = {
  name: 'John',
  age: 30
};

const propertyName = 'name';
const propertyValue = Reflect.get(obj, propertyName);
console.log(propertyValue); // Output: John
```

2. Using `Reflect.set()` to Set Property Values:
```javascript
const obj = {
  name: 'John',
  age: 30
};

const propertyName = 'age';
const newValue = 35;
Reflect.set(obj, propertyName, newValue);
console.log(obj.age); // Output: 35
```

3. Using `Reflect.has()` to Check for Property Existence:
```javascript
const obj = {
  name: 'John',
  age: 30
};

const propertyName = 'gender';
const propertyExists = Reflect.has(obj, propertyName);
console.log(propertyExists); // Output: false
```

4. Using `Reflect.deleteProperty()` to Delete Properties:
```javascript
const obj = {
  name: 'John',
  age: 30
};

const propertyName = 'age';
Reflect.deleteProperty(obj, propertyName);
console.log(obj); // Output: { name: 'John' }
```

5. Using `Reflect.apply()` to Invoke Functions:
```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

const args = ['John'];
const result = Reflect.apply(greet, null, args);
console.log(result); // Output: Hello, John!
```