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

