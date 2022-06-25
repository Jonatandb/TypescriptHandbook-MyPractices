/*

Run "tsc hello.ts" to compile to javascript.
Run "node hello.js" to run the program.

To target to a specific version of the typescript compiler,
  use the --target flag.
    example: tsc --target es5 hello.ts
  So, the code will be transpiled to ES5. A new version of JavaScript.

*/

function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Jonatandb", new Date());