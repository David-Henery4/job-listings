interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "hello",
  age: 22,
};

interface Point {
  x: number;
  y: number;
}

const logpoint = (p: Point) => {
  console.log(p);
};

const point = { x: 12, y: 23 };

logpoint(point);

const point3 = { x: 12, y: 26, z: 89 };
logpoint(point3);

const rect = { x: 33, y: 3, width: 30, height: 80 };
logpoint(rect);

const nameId = { nameId: "Steve" };
// logpoint(nameId) // error

const nameIdWithExtras = { nameId: "Steve", x: 32, y: 23 };
logpoint(nameIdWithExtras);

//

const userData = {
  name: "Daniel",
  age: 26,
};
userData.surname = "hello";
console.log(userData);

//

interface UserData2 {
  name: string;
  age: number;
}

const userData2: UserData2 = {
  name: "Daniel",
  age: 26,
};
const newUserData: UserData2 = {
  ...userData2,
  surname: "hello",
};
console.log(userData);

// Explicit Types

function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}`);
}

greet("steve", new Date());

// ImplicitAny
function greeting(person: string, date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}`);
}

greeting("steve", new Date());

//

function helloUser(username: string) {
  console.log(`Hello ${username.toUpperCase()}`);
}

helloUser();
helloUser(23);
helloUser("hello", 34);

//

function getFavNumber(num: number): number {
  return num;
  // return `${num}`
}
getFavNumber(73);
getFavNumber("");

//

async function newFavNum(num: number): Promise<number> {
  return num;
}

//

const names = ["Alice", "Bob", "Eve"];

const wrongNames = ["Alice", { id: 1 }, 23, true];

names.forEach(function (n) {
  // n elements types infered from array items
  console.log(n.toUpperCase());
});

names.forEach((n) => {
  return n.toLowerCase();
});

wrongNames.forEach((n) => {
  return n.toLowerCase();
});

//

function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 3, y: 7 });
printCoord({ x: 3, y: 7, g: 23 });

interface coords {
  x: number;
  y: number;
}

function printCoordInter(pt: coords) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoordInter({ x: 3, y: 7 });
printCoordInter({ x: 3, y: 7, g: 23 });

////////////////////////////////////

// Optional Properties

function printNames(names: { firstName: string; secondName?: string }) {
  console.log(`Hello my name is ${names.firstName} ${names.secondName}`);
}

printNames({ firstName: "steve", secondName: "bishopo" });
printNames({ firstName: "Mandy" });

interface namesCheck {
  firstName: string;
  secondName?: string;
}

function printNamesOptional(names: namesCheck) {
  console.log(`Hello my name is ${names.firstName} ${names.secondName}`);
}

printNamesOptional({ firstName: "steve", secondName: "bishopo" });
printNamesOptional({ firstName: "Mandy" });

// check for and usiong optional property
function printNamesOptionalCheck(names: namesCheck) {
  console.log(`Hello my name is ${names.firstName} ${names.secondName}`);
  console.log(names.secondName.toUpperCase()); // names.secondName is possibly 'undefined'

  // checks for undefined
  console.log(names.secondName?.toUpperCase());

  if (names.secondName !== undefined) {
    console.log(names.secondName.toUpperCase());
  }
}

printNamesOptional({ firstName: "steve", secondName: "bishopo" });
printNamesOptional({ firstName: "Mandy" });

////////////////////

// Union Types

// Defining a Union Type

function printId(id: number | string) {
  console.log("Your ID is: " + id);
}

printId(101);
printId("101");
printId({ id: "12121" });

function printDoorState(state: "open" | "closed" | number) {
  console.log(`The door is currently ${state}`);
  if (typeof state === "number") {
    console.log(`Door number is ${state}`);
  }
}

printDoorState("open");
printDoorState("closed");
printDoorState("Doors blown off");
printDoorState(20);
printDoorState("20");

// Working with Union Types

// It’s easy to provide a value matching a union type - simply provide a type matching any of the union’s members. If you have a value of a union type, how do you work with it?

// TypeScript will only allow an operation if it is valid for every member of the union. For example, if you have the union string | number, you can’t use methods that are only available on string:

function printIdAgain(id: number | string) {
  console.log(id.toUpperCase());
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    console.log("Hello, " + x.join(" and "));
  } else {
    console.log("Welcome lone traveler " + x);
  }
}

welcomePeople(["Hello", "friends"]);
welcomePeople(["Hello", 22]);
welcomePeople("Hello  there");
welcomePeople(23);
welcomePeople(true);

//

function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}

// Type Aliases

type Points = {
  x: number;
  y: number;
};

function printCoordFour(coords: Points) {
  console.log("The coordinate's x value is " + coords.x);
  console.log("The coordinate's y value is " + coords.y);
}

printCoordFour({ x: 22, y: 22 });

// You can actually use a type alias to give a name to any type at all, not just an object type. For example, a type alias can name a union type:
type ID = number | string;

// Note that aliases are only aliases - you cannot use type aliases to create different/distinct “versions” of the same type. When you use the alias, it’s exactly as if you had written the aliased type. In other words, this code might look illegal, but is OK according to TypeScript because both types are aliases for the same type:

type UserInputSanitizedString = string;

function sanitizeInput(str: string): UserInputSanitizedString {
  return sanitize(str);
}

// Create a sanitized input
let userInput = sanitizeInput(getInput());

// Can still be re-assigned with a string though
userInput = "new input";

//****************************//

// Interfaces

// An interface declaration is another way to name an object type:
interface PointLookout {
  x: number;
  y: number;
}
function printLookoutCoords(coords: PointLookout) {
  console.log("The coordinate's x value is " + coords.x);
  console.log("The coordinate's y value is " + coords.y);
}

// Just like when we used a type alias above, the example works just as if we had used an anonymous object type. TypeScript is only concerned with the structure of the value we passed to printCoord - it only cares that it has the expected properties. Being concerned only with the structure and capabilities of types is why we call TypeScript a structurally typed type system.
printLookoutCoords({ x: 234, y: 4323 });
printLookoutCoords({ x: 234, y: 4323, z: 234 });

// Duck typing || structural typing
const testPoint = { x: 234, y: 4323 };
const testPoint2 = { x: 234, y: 4323, z: 234 };
printLookoutCoords(testPoint);
printLookoutCoords(testPoint2);

// Differences Between Type Aliases and Interfaces
// Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

// (Interface) Extending an interface

interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

// "Bear" can also be used in place of "Animal" inside params
function getBear(ani: Animal): Bear {
  return { name: ani.name, honey: true };
}

const bear = getBear({ name: "steve" });
bear.name;
bear.honey;

// (Interface) Adding new fields to an existing interface

interface Window {
  title: string;
}
interface Window {
  ts: TypeScriptAPI;
}
const src = 'const a = "Hello World"';
window.ts.transpileModule(src, {});

// (Type) Extending a type via intersections

type AnimalTwo = {
  name: string;
};

type Bear2 = Animal & {
  honey: boolean;
};

const getBear2 = (bearDetails: Bear2): Bear2 => {
  return bearDetails;
};

const bearDetails = getBear2({ name: "Ivan", honey: false });
bearDetails.name;
bearDetails.honey;

// (Type) A type cannot be changed after being created

type WindowTwo = {
  title: string;
};

type WindowTwo = {
  ts: TypeScriptAPI;
};

///////////////////////////////////////////////////////

// Type Assertions

// Sometimes you will have information about the type of a value that TypeScript can’t know about.

// For example, if you’re using document.getElementById, TypeScript only knows that this will return some kind of HTMLElement, but you might know that your page will always have an HTMLCanvasElement with a given ID.

// In this situation, you can use a type assertion to specify a more specific type:

const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

// Like a type annotation, type assertions are removed by the compiler and won’t affect the runtime behavior of your code.

// You can also use the angle-bracket syntax (except if the code is in a .tsx file), which is equivalent:

const myCanvasTwo = <HTMLCanvasElement>document.getElementById("main_canvas_two");

// Reminder: Because type assertions are removed at compile-time, there is no runtime checking associated with a type assertion. There won’t be an exception or null generated if the type assertion is wrong.

// TypeScript only allows type assertions which convert to a more specific or less specific version of a type. This rule prevents “impossible” coercions like:

const x = "hello" as number

// Sometimes this rule can be too conservative and will disallow more complex coercions that might be valid. If this happens, you can use two assertions, first to any (or unknown, which we’ll introduce later), then to the desired type:

// const a = expr as any as T;
const a = "hello" as any as number

// Literal Types

