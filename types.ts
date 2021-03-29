export {};

let message: string = "Hello World";
console.log(message);

const numberArray: number[] = [1, 2, 3]; // array
const numberArray2: Array<number> = [1, 2, 3]; // array

// number
// string
// boolean

// Tuple
const contact: [string, number] = ["Vladilen", 1234567];

// Any
let variable: any = 42; // all
// ...
variable = "New String";
variable = true;

// ====
function sayMyName(name: string): void {
  console.log(name);
}

function Fn(a: number, b: number): number {
  return a + b;
}

// Never

function throwError(message: string): never {
  throw new Error(message);
}

// console.log(throwError("kel"));
console.log(Fn(1, 2));

function infinite(): never {
  while (true) {}
}

// Type
type Login = string;

const login: Login = "admin";

type ID = string | number;
const id1: ID = 1234;
const id2: ID = "1234";

type SomeType = string | null | undefined;
