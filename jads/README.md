# Basic JavaScript

"*Data* is anything that is meaningful to the computer".

--- 

Eight JS Data Types

1. `undefined`
2. `null`
3. `boolean`
4. `string`
5. `symbol`
6. `bigint`
7. `number`
8. `object`

- [link](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/declare-javascript-variables)

---

The *remainder operator* `%` is sometimes incorrectly referred to as the modulus
operator. It is very similar to modulus, but does not work properly with
negative numbers.

- [link](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/finding-a-remainder-in-javascript)

---

`String` values are *immutable*. 

Example:

```javascript

let myStr = "Bob";
myStr[0] = "J";

// produces an error
```
---

Basic array methods:

* `push() // add as last element`
* `pop() // pop off last element`
* `shift() // pop off first element` 
* `unshift() // add as first element`

---

In Computer Science a *queue* is an abstract Data Structure where items are
kept in order. New items can be added at the back of the queue and old items
are taken off from the front of the queue.

- [link](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/stand-in-line)

---

*type coercion* - in order for JS to compare to different data types, it must
convert one type to another.

- [link](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-equality-operator)

Strict equality (===) is the counterpart to the equality operator (==).
However, unlike the equality operator, which attempts to convert both values
being compared to a common type, the strict equality operator does not perform
a type conversion.

- [link](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-strict-equality-operator)

---

*radix* - an integer between 2 and 36 that specifies the base of the number in the string.

- [link](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-the-parseint-function-with-a-radix)

---

JavaScript provides a function Object.freeze to prevent data mutation.

- [link](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/prevent-object-mutation)

```javascript

let obj = {
  name: "FreeCodeCamp",
  review: "Awesome",
};
Object.freeze(obj);
obj.review = "bad"; // this will result in an error

```
---

With the *rest parameter*, you can create functions that take a variable number of arguments.

- [link](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-the-rest-parameter-with-function-parameters)

```javascript

function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}

```

---

*Lookaheads* are patterns that tell JavaScript to look-ahead in your string to check for patterns further along. This can be useful when you want to search for multiple patterns over the same string.

There are two kinds of lookaheads: *positive* lookahead and *negative* lookahead.

-[link](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/positive-and-negative-lookahead)

---

JavaScript recognizes seven primitive (immutable) data types: `Boolean`,
`Null`, `Undefined`, `Number`, `String`, `Symbol` (new with ES6), and `BigInt`
(new with ES2020), and one type for mutable items: `Object`. Note that in
JavaScript, arrays are technically a type of object.

- [link](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/debugging/use-typeof-to-check-the-type-of-a-variable)

---

The simplest way to make this public property private is by creating a variable
within the constructor function. This changes the scope of that variable to be
within the constructor function versus available globally. This way, the
variable can only be accessed and changed by methods also within the
constructor function.

```javascript

function ContructorFn() {
  let privateVar = 10;

  this.getValue = () => privateVar;
}

let obj = new ContructorFn();
obj.getValue();
```

- [link](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-closure-to-protect-properties-within-an-object-from-being-modified-externally)

---

Functional programming is about:

Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change

Pure functions - the same input always gives the same output

Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled

- [link](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/learn-about-functional-programming)

---

The functions that take a function as an argument, or return a function as a return value, are called *higher order functions*.

When functions are passed in to or returned from another function, then those functions which were passed in or returned can be called a *lambda*.

- [link](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/understand-functional-programming-terminology)

---

Hint: using something like const newArr = arrVar, where arrVar is an array will
simply create a reference to the existing variable and not a copy. So changing
a value in newArr would change the value in arrVar.

- [link](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/refactor-global-variables-out-of-functions)

---

The arity of a function is the number of arguments it requires. Currying a
function means to convert a function of N arity into N functions of arity 1.

- [link](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/introduction-to-currying-and-partial-application)

---
