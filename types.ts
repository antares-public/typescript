export {};

let message: string = "Hello World";
console.log(`Message: ${message}`);

let age: number = 12;
console.log(`Age: ${age}`);

let isAuth: boolean = false;
isAuth = true;
console.log(`isAuth: ${isAuth}`);

// =====================

const numberArray: number[] = [1, 2, 3];
// const numberArray2: Array<number> = [1, 2, 3];
console.log(`[${numberArray}] - Array`);

// Tuple
const contact: [string, number] = ["Vladilen", 1234567];

// Any
let variable: any = 42; // all
// ...
variable = "New String";
variable = true;

// =====================
function sayMyName(name: string): void {
  console.log(name); // return
}

// Never
function throwError(message: string): never {
  throw new Error(message);
}

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
