/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. GLOBAL/WINDOW BINDING: If none of the other rules apply, the 'this' keyword defaults to the window object. Unless you are in strict mode, then the case is undefined. Strict mode prevents window binding from breaking our code but will return undefined.
* 2. IMPLICIT BINDING: This is the most common binding (80% of all cases). When the function is invoked, you look to the left of the dot - that's what the 'this' keyword is referring to (only applies to objects with methods).
* 3. NEW BINDING: using the 'new' keyword constructs a new object and this points to it
* 4. EXPLICIT BINDING:
    -call: will immediately invoke the function / ,call passes arguments in one by one
    -apply: will immediately invoke the function / .apply passes the argument in as an array
    -bind: you pass arguments in one by one but it does not immediately invoke the function; it returns a brand new function that can be invoked later.
    ALL of the above allow us to explicitly state what the 'this' keyword is in any given function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// Principle 2

// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding