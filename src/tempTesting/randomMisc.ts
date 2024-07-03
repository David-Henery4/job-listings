// keywords used every now and then (is, in, as)

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

const point = {y: 23, x: 12 };

logpoint(point);

const point3 = { y: 26, x: 12, z: 89 };
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

const myCanvasTwo = <HTMLCanvasElement>(
  document.getElementById("main_canvas_two")
);

// Reminder: Because type assertions are removed at compile-time, there is no runtime checking associated with a type assertion. There won’t be an exception or null generated if the type assertion is wrong.

// TypeScript only allows type assertions which convert to a more specific or less specific version of a type. This rule prevents “impossible” coercions like:

const x = "hello" as number;

// Sometimes this rule can be too conservative and will disallow more complex coercions that might be valid. If this happens, you can use two assertions, first to any (or unknown, which we’ll introduce later), then to the desired type:

// const a = expr as any as T;
const a = "hello" as any as number;

// Literal Types

// Infered as type: "string"
// because let values can change, it can be any string
let changingString = "Hello World";
changingString = "Olá Mundo";

// Infered as specific type string: "Hello World"
// because const values can't change, can only be this specific value
const constantString = "Hello World";
constantString;

// By themselves, literal types aren’t very valuable:
let popper: "hello" = "hello";
popper = "hello";
popper = "hi";
// It’s not much use to have a variable that can only have one value!

// But by combining literals into unions, you can express a much more useful concept - for example, functions that only accept a certain set of known values:
function printText(name: string, alignment: "left" | "right" | "straight") {
  console.log(`Hello ${name}, Go ${alignment}`);
}
printText("Steve", "straight");
printText("Steve", "up");

// Same with number unions:
function compareThese(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}

//can combine these with non-literal types:

interface Options {
  width: number;
}
function configure(x: Options | "auto") {
  return x;
}

configure({ width: 100 });
configure("auto");
configure("manual");

// There’s one more kind of literal type: boolean literals. There are only two boolean literal types, and as you might guess, they are the types true and false. The type boolean itself is actually just an alias for the union true | false.

// Literal Inference

// When you initialize a variable with an object, TypeScript assumes that the properties of that object might change values later. For example, if you wrote code like this:

const obj = { counter: 0 };
if (true) {
  obj.counter = 1;
}

// TypeScript doesn’t assume the assignment of 1 to a field which previously had 0 is an error. Another way of saying this is that obj.counter must have the type number, not 0, because types are used to determine both reading and writing behavior.

// The same applies to strings:

declare function handleRequest(url: string, method: "GET" | "POST"): void;

const req = { url: "https://example.com", method: "GET" };

handleRequest(req.url, req.method);

// In the above example req.method is inferred to be string, not "GET". Because code can be evaluated between the creation of req and the call of handleRequest which could assign a new string like "GUESS" to req.method, TypeScript considers this code to have an error.

// There are two ways to work around this.

// Change #1:
const reqTwo = { url: "https://example.com", method: "GET" as "GET" };
// Change #2
handleRequest(reqTwo.url, reqTwo.method as "GET");

// Change 1 means “I intend for req.method to always have the literal type "GET"”, preventing the possible assignment of "GUESS" to that field after. Change 2 means “I know for other reasons that req.method has the value "GET"“.

// OR

// You can use "as const" to convert the entire object to be type literals:

const reqThree = { url: "https://example.com", method: "GET" } as const;
handleRequest(reqThree.url, reqThree.method);

// The "as const" suffix acts like const but for the type system, ensuring that all properties are assigned the literal type instead of a more general version like string or number.

// null and undefined

// JavaScript has two primitive values used to signal absent or uninitialized value: null and undefined.

// TypeScript has two corresponding types by the same names. How these types behave depends on whether you have the strictNullChecks option on.

// strictNullChecks :off
// With strictNullChecks off, values that might be null or undefined can still be accessed normally, and the values null and undefined can be assigned to a property of any type. This is similar to how languages without null checks (e.g. C#, Java) behave. The lack of checking for these values tends to be a major source of bugs; we always recommend people turn strictNullChecks on if it’s practical to do so in their codebase.

// strictNullChecks on
// With strictNullChecks on, when a value is null or undefined, you will need to test for those values before using methods or properties on that value. Just like checking for undefined before using an optional property, we can use narrowing to check for values that might be null:

function doSomething(x: string | null) {
  if (x === null) {
    return null;
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}
// doSomething(null)

// ~~~~~~~~~~~~ //

// Non-null Assertion Operator (Postfix "!")

// TypeScript also has a special syntax for removing null and undefined from a type without doing any explicit checking. Writing ! after any expression is effectively a type assertion that the value isn’t null or undefined:

function liveDangerously(x?: number | null) {
  // no error
  console.log(x!.toFixed());
}

// Just like other type assertions, this doesn’t change the runtime behavior of your code, so it’s important to only use "!" when you know that the value can’t be null or undefined.

// Enums

// Enums are a feature added to JavaScript by TypeScript which allows for describing a value which could be one of a set of possible named constants. Unlike most TypeScript features, this is not a type-level addition to JavaScript but something added to the language and runtime. Because of this, it’s a feature which you should know exists, but maybe hold off on using unless you are sure. You can read more about enums in the Enum reference page.

// ~~~~~~~~~~~~~~~~~~~~~~~~~ //

// Less Common Primitives

// It’s worth mentioning the rest of the primitives in JavaScript which are represented in the type system.

// bigint -

// From ES2020 onwards, there is a primitive in JavaScript used for very large integers, BigInt:

// Creating a bigint via the BigInt function
const oneHundred: bigint = BigInt(100);

// Creating a BigInt via the literal syntax (BigInt literals are not available when targeting lower than ES2020.)
const anotherHundred: bigint = 100n;

// symbol
// There is a primitive in JavaScript used to create a globally unique reference via the function Symbol():

const firstName = Symbol("name");
const secondName = Symbol("name");

if (firstName === secondName) {
  // Can't ever happen
}

// ~~~~ Narrowing ~~~~ //

// Handling things that can have different types.

function padLeft(padding: number | string, input: string): string {
  if (typeof padding === "number") {
    return "".repeat(padding) + input;
  }
  return padding + input;
}

// While it might not look like much, there’s actually a lot going on under the covers here. Much like how TypeScript analyzes runtime values using static types, it overlays type analysis on JavaScript’s runtime control flow constructs like if/else, conditional ternaries, loops, truthiness checks, etc., which can all affect those types.

// Within our if check, TypeScript sees typeof padding === "number" and understands that as a special form of code called a type guard. TypeScript follows possible paths of execution that our programs can take to analyze the most specific possible type of a value at a given position. It looks at these special checks (called type guards) and assignments, and the process of refining types to more specific types than declared is called narrowing. In many editors we can observe these types as they change, and we’ll even do so in our examples.

// "typeof" type guards

// this operator comes up pretty often in a number of JavaScript libraries, and TypeScript can understand it to narrow types in different branches.

// In TypeScript, checking against the value returned by typeof is a type guard. Because TypeScript encodes how typeof operates on different values, it knows about some of its quirks in JavaScript.
// For example, typeof doesn’t return the string null.

function printAll(strs: string | string[] | null) {
  // if (strs === "" || !strs) return // handling null as falsy
  if (typeof strs === "object") {
    for (const s of strs) {
      console.log(strs);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  } else {
    // do nothing
  }
}

// In the printAll function, we try to check if strs is an object to see if it’s an array type (now might be a good time to reinforce that arrays are object types in JavaScript). But it turns out that in JavaScript, typeof null is actually "object"! This is one of those unfortunate accidents of history.

// Users with enough experience might not be surprised, but not everyone has run into this in JavaScript; luckily, TypeScript lets us know that strs was only narrowed down to string[] | null instead of just string[].

// This might be a good segue into what we’ll call “truthiness” checking.

// ~~~~ Truthiness narrowing ~~~~ //

// Truthiness might not be a word you’ll find in the dictionary, but it’s very much something you’ll hear about in JavaScript.

// In JavaScript, we can use any expression in conditionals, &&s, ||s, if statements, Boolean negations (!), and more. As an example, if statements don’t expect their condition to always have the type boolean.

// Can use truthy/falsy values fro narrowing

// In JavaScript, constructs like if first “coerce” their conditions to booleans to make sense of them, and then choose their branches depending on whether the result is true or false. Values like

// 0
// NaN
// "" (the empty string)
// 0n (the bigint version of zero)
// null
// undefined
// all coerce to false, and other values get coerced to true. You can always coerce values to booleans by running them through the Boolean function, or by using the shorter double-Boolean negation. (The latter has the advantage that TypeScript infers a narrow literal boolean type true, while inferring the first as type boolean.)

// both of these result in 'true'
Boolean("hello"); // type: boolean, value: true
!!"world"; // type: true,    value: true

// It’s fairly popular to leverage this behavior, especially for guarding against values like null or undefined. As an example, let’s try using it for our printAll function.

function printAllAgain(strs: string | string[] | null) {
  if (strs && typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  }
}

// Keep in mind though that truthiness checking on primitives can often be error prone. As an example, consider a different attempt at writing printAll

// We wrapped the entire body of the function in a truthy check, but this has a subtle downside: we may no longer be handling the empty string case correctly.

// TypeScript doesn’t hurt us here at all, but this behavior is worth noting if you’re less familiar with JavaScript. TypeScript can often help you catch bugs early on, but if you choose to do nothing with a value, there’s only so much that it can do without being overly prescriptive. If you want, you can make sure you handle situations like these with a linter.

function printAllWrong(strs: string | string[] | null) {
  //  DON'T DO THIS!
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

// One last word on narrowing by truthiness is that Boolean negations with ! filter out from negated branches.

function multiplyAll(
  values: number[] | undefined,
  factor: number
): number[] | undefined {
  if (!values) {
    return values;
  } else {
    return values.map((x) => x * factor);
  }
}

// Equality narrowing

// TypeScript also uses switch statements and equality checks like ===, !==, ==, and != to narrow types.

function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // We can now call any 'string' method on 'x' or 'y'.
    // Because the types crossover (only common type is string).
    // only time they can be equal, is if both their types are a string.
    x.toUpperCase();
    y.toUpperCase();
  } else {
    console.log(x);
    console.log(y);
  }
}

// Checking against specific literal values (as opposed to variables) works also. In our section about truthiness narrowing, we wrote a printAll function which was error-prone because it accidentally didn’t handle empty strings properly. Instead we could have done a specific check to block out nulls, and TypeScript still correctly removes null from the type of strs.

function printAllWithoutNulls(strs: string | string[] | null) {
  if (strs !== null) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

// JavaScript’s looser equality checks with == and != also get narrowed correctly. If you’re unfamiliar, checking whether something == null actually not only checks whether it is specifically the value null - it also checks whether it’s potentially undefined. The same applies to == undefined: it checks whether a value is either null or undefined.

interface Container {
  value: number | null | undefined;
}

function multiplyValue(container: Container, factor: number) {
  // Remove both "null" and "undefined" from the type.
  if (container.value != null) {
    console.log(container.value);
    // Now we can safely multiply 'container.value'.
    container.value *= factor;
  }
}

// The "in" operator narrowing

// JavaScript has an operator for determining if an object or its prototype chain has a property with a name: the in operator. TypeScript takes this into account as a way to narrow down potential types.

// For example, with the code: "value" in x. where "value" is a string literal and x is a union type. The “true” branch narrows x’s types which have either an optional or required property value, and the “false” branch narrows to types which have an optional or missing property value.

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
  return animal.fly();
}
move({ swim: () => "swim away" });

// To reiterate, optional properties will exist in both sides for narrowing. For example, a human could both swim and fly (with the right equipment) and thus should show up in both sides of the in check:

type FishOne = { swim: () => void };
type BirdOne = { fly: () => void };
type Human = { fly?: () => void; swim?: () => void };

function moveAgain(animal: Fish | Bird | Human) {
  if ("swim" in animal) {
    return animal;
  }
  return animal;
}

// "instanceof" narrowing

// JavaScript has an operator for checking whether or not a value is an “instance” of another value. More specifically, in JavaScript x instanceof Foo checks whether the prototype chain of x contains Foo.prototype. While we won’t dive deep here, and you’ll see more of this when we get into classes, they can still be useful for most values that can be constructed with new. As you might have guessed, instanceof is also a type guard, and TypeScript narrows in branches guarded by instanceofs.

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

// Assignments

// As we mentioned earlier, when we assign to any variable, TypeScript looks at the right side of the assignment and narrows the left side appropriately.

let xt12 = Math.random() < 0.5 ? 10 : "hello world";
xt12 = 1;
xt12 = "Yes";
xt12 = true;
xt12 = [];

// Notice that each of these assignments is valid. Even though the observed type of x changed to number after our first assignment, we were still able to assign a string to x. This is because the declared type of x - the type that x started with - is string | number, and assignability is always checked against the declared type.

// Control flow analysis:

// Up until this point, we’ve gone through some basic examples of how TypeScript narrows within specific branches. But there’s a bit more going on than just walking up from every variable and looking for type guards in ifs, whiles, conditionals, etc. For example

function padRight(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}

// This analysis of code based on reachability is called control flow analysis, and TypeScript uses this flow analysis to narrow types as it encounters type guards and assignments. When a variable is analyzed, control flow can split off and re-merge over and over again, and that variable can be observed to have a different type at each point.

function exampleFour() {
  let xyzr: string | number | boolean;

  xyzr = Math.random() < 0.5;

  console.log(xyzr);

  if (Math.random() < 0.5) {
    xyzr = "hello";
    console.log(xyzr);
  } else {
    xyzr = 100;
    console.log(xyzr);
  }

  return x;
}

// Using type predicates

// We’ve worked with existing JavaScript constructs to handle narrowing so far, however sometimes you want more direct control over how types change throughout your code.

// To define a user-defined type guard, we simply need to define a function whose return type is a type predicate:

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

// pet is Fish is our type predicate in this example. A predicate takes the form parameterName is Type, where parameterName must be the name of a parameter from the current function signature.

// Any time isFish is called with some variable, TypeScript will narrow that variable to that specific type if the original type is compatible.

const getSmallPet = (petType: "fish" | "bird") => {
  if (petType === "fish") {
    return {
      swim: () => "Fish!",
    };
  }
  return {
    fly: () => "Bird!",
  };
};

let pet = getSmallPet("fish");

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}

// Notice that TypeScript not only knows that pet is a Fish in the if branch; it also knows that in the else branch, you don’t have a Fish, so you must have a Bird.

// You may use the type guard isFish to filter an array of Fish | Bird and obtain an array of Fish:

const zoo: (Fish | Bird)[] = [
  getSmallPet("fish"),
  getSmallPet("bird"),
  getSmallPet("fish"),
];

const underWater1: Fish[] = zoo.filter(isFish);
const underWater2: Fish[] = zoo.filter(isFish) as Fish[];

// The predicate may need repeating for more complex examples:

const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
  if (pet.name === "sharkey") return false;
  return isFish(pet);
});

// In addition, classes can use this is Type to narrow their type.

// Assertion functions (Types can also be narrowed using Assertion functions.)

// Discriminated unions

// Most of the examples we’ve looked at so far have focused around narrowing single variables with simple types like string, boolean, and number. While this is common, most of the time in JavaScript we’ll be dealing with slightly more complex structures.

// For some motivation, let’s imagine we’re trying to encode shapes like circles and squares. Circles keep track of their radiuses and squares keep track of their side lengths. We’ll use a field called kind to tell which shape we’re dealing with. Here’s a first attempt at defining Shape.

interface Shape {
  kind: "circle" | "square";
  radious?: number;
  sideLength?: number;
}

// Notice we’re using a union of string literal types: "circle" and "square" to tell us whether we should treat the shape as a circle or square respectively. By using "circle" | "square" instead of string, we can avoid misspelling issues.

function handleShape(shape: Shape) {
  if (shape.kind === "rect") {
  }
}

// We can write a getArea function that applies the right logic based on if it’s dealing with a circle or square. We’ll first try dealing with circles.

function getArea(shape: Shape) {
  return Math.PI * shape.radious ** 2;
}

// Under strictNullChecks that gives us an error - which is appropriate since radius might not be defined. But what if we perform the appropriate checks on the kind property?

function getAreaNow(shape: Shape) {
  if (shape.kind === "circle") {
    // return Math.PI * shape.radious ** 2;

    // TypeScript still doesn’t know what to do here. We’ve hit a point where we know more about our values than the type checker does. We could try to use a non-null assertion (a ! after shape.radius) to say that radius is definitely present.

    return Math.PI * shape.radious! ** 2;
  }
}

// But this doesn’t feel ideal. We had to shout a bit at the type-checker with those non-null assertions (!) to convince it that shape.radius was defined, but those assertions are error-prone if we start to move code around. Additionally, outside of strictNullChecks we’re able to accidentally access any of those fields anyway (since optional properties are just assumed to always be present when reading them). We can definitely do better.

// The problem with this encoding of Shape is that the type-checker doesn’t have any way to know whether or not radius or sideLength are present based on the kind property. We need to communicate what we know to the type checker. With that in mind, let’s take another swing at defining Shape.

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type ShapeTwo = Circle | Square;

// Here, we’ve properly separated Shape out into two types with different values for the kind property, but radius and sideLength are declared as required properties in their respective types.

// Let’s see what happens here when we try to access the radius of a Shape.

// Like with our first definition of Shape, this is still an error. When radius was optional, we got an error (with strictNullChecks enabled) because TypeScript couldn’t tell whether the property was present. Now that Shape is a union, TypeScript is telling us that shape might be a Square, and Squares don’t have radius defined on them! Both interpretations are correct, but only the union encoding of Shape will cause an error regardless of how strictNullChecks is configured.

function getNewArea(shape: ShapeTwo) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
}

// That got rid of the error! When every type in a union contains a common property with literal types, TypeScript considers that to be a discriminated union, and can narrow out the members of the union.

// In this case, kind was that common property (which is what’s considered a discriminant property of Shape). Checking whether the kind property was "circle" got rid of every type in Shape that didn’t have a kind property with the type "circle". That narrowed shape down to the type Circle.

// The same checking works with switch statements as well. Now we can try to write our complete getArea without any pesky ! non-null assertions.

function getANewArea(shape: ShapeTwo) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
  }
}

// The important thing here was the encoding of Shape. Communicating the right information to TypeScript - that Circle and Square were really two separate types with specific kind fields - was crucial. Doing that lets us write type-safe TypeScript code that looks no different than the JavaScript we would’ve written otherwise. From there, the type system was able to do the “right” thing and figure out the types in each branch of our switch statement.

// As an aside, try playing around with the above example and remove some of the return keywords. You’ll see that type-checking can help avoid bugs when accidentally falling through different clauses in a switch statement.

// Discriminated unions are useful for more than just talking about circles and squares. They’re good for representing any sort of messaging scheme in JavaScript, like when sending messages over the network (client/server communication), or encoding mutations in a state management framework.

// ~~~~ The "never" type ~~~~

// When narrowing, you can reduce the options of a union to a point where you have removed all possibilities and have nothing left. In those cases, TypeScript will use a never type to represent a state which shouldn’t exist.

// ~~~~ Exhaustiveness checking ~~~~

// The never type is assignable to every type; however, no type is assignable to never (except never itself). This means you can use narrowing and rely on never turning up to do exhaustive checking in a switch statement.

// For example, adding a default to our getArea function which tries to assign the shape to never will not raise an error when every possible case has been handled.

function getAreaAgain(shape: ShapeTwo) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

// Adding a new member to the Shape union, will cause a TypeScript error,
// In the above example:

// interface Triangle {
// kind: "triangle";
// sideLength: number;
// }

// type Shape = Circle | Square | Triangle;

// Type 'Triangle' is not assignable to type 'never'.

// #### ~~~~~~~~ MORE ON FUNCTIONS ~~~~~~~~ #### //

// Functions are the basic building block of any application, whether they’re local functions, imported from another module, or methods on a class. They’re also values, and just like other values, TypeScript has many ways to describe how functions can be called. Let’s learn about how to write types that describe functions.

// Function Type Expressions

// The simplest way to describe a function is with a function type expression. These types are syntactically similar to arrow functions:
// (a: string) => void
function greeter(fn: (a: string) => void) {
  fn("Hello, World");
}

function printToConsole(s: string) {
  console.log(s);
}

greeter(printToConsole);

// "void" when returned from function type means: NO RETURNED VALUE

// The syntax "(a: string) => void" means “a function with one parameter, named a, of type string, that doesn’t have a return value”. Just like with function declarations, if a parameter type isn’t specified, it’s implicitly any.

// Note that the parameter name is required. The function type "(string) => void" means “a function with a parameter named string of type any“!

// Of course, we can use a type alias to name a function type:

type GreetFunction = (a: string) => void;
function greetAgain(fn: GreetFunction) {
  fn("hello");
}

// Call Signatures

// In JavaScript, functions can have properties in addition to being callable. However, the function type expression syntax doesn’t allow for declaring properties. If we want to describe something callable with properties, we can write a call signature in an object type:

type DescribableFunction = {
  description: string;
  (arg: number): boolean;
  // (arg: number): boolean
};
function doSomethingPlease(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}

function myFunc(arg: number) {
  return arg > 3;
}

myFunc.description = "default description";
doSomethingPlease(myFunc);

// Note that the syntax is slightly different compared to a function type expression - use : between the parameter list and the return type rather than =>.

// ~~ Construct Signatures

// JavaScript functions can also be invoked with the new operator. TypeScript refers to these as constructors because they usually create a new object. You can write a construct signature by adding the "new" keyword in front of a "call signature":

type SomeConstructor = {
  new (s: string): {};
};

function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}

// Some objects, like JavaScript’s Date object, can be called with or without new. You can combine call and construct signatures in the same type arbitrarily:

interface CallOrConstruct {
  (n?: number): string;
  new (s: string): Date;
}

// ~~~~ GENERIC FUNCTIONS ~~~~ //

// It’s common to write a function where the types of the input relate to the type of the output, or where the types of two inputs are related in some way. Let’s consider for a moment a function that returns the first element of an array:

function firstElement(arr: any[]) {
  return arr[0];
}

// This function does its job, but unfortunately has the return type any. It’d be better if the function returned the type of the array element.

// In TypeScript, generics are used when we want to describe a correspondence between two values. We do this by declaring a type parameter in the function signature:

// function firstEle<String>(arr: string[]): string | undefined {
//   return arr[0];
// }

function firstEle<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}

// By adding a type parameter "Type" to this function and using it in two places, we’ve created a link between the input of the function (the array) and the output (the return value). Now when we call it, a more specific type comes out:

const s = firstEle(["a", "b", "c"]);
const n = firstEle([1, 2, 3]);
const u = firstEle([]);

// Inference

// Note that we didn’t have to specify Type in this sample. The type was inferred - chosen automatically - by TypeScript.

// We can use multiple type parameters as well. For example, a standalone version of map would look like this:

function map<Input, Output>(
  arr: Input[],
  func: (arg: Input) => Output
): Output[] {
  return arr.map(func);
}

// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(["1", "2", "3"], (n) => parseInt(n));

// In this example, TypeScript could infer both the type of the Input type parameter (from the given string array), as well as the Output type parameter based on the return value of the function expression (number).

// ######

// Constraints

// We’ve written some generic functions that can work on any kind of value. Sometimes we want to relate two values, but can only operate on a certain subset of values. In this case, we can use a constraint to limit the kinds of types that a type parameter can accept.

// Let’s write a function that returns the longer of two values. To do this, we need a length property that’s a number. We constrain the type parameter to that type by writing an extends clause:

// extends {length: number} = Means we are expecting a type that can access the
// length method from it's prototype, which means it can only be,
// a "string" or an "array" type
// The length method is then expected to return a number

// This creates a relatation between the types that can access the length method.

function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

const longerArray = longest([1, 2], [1, 2, 3]);
const longerString = longest("alice", "bob");
const notOK = longest(10, 100);

// There are a few interesting things to note in this example. We allowed TypeScript to infer the return type of longest. Return type inference also works on generic functions.

// Because we constrained Type to { length: number }, we were allowed to access the .length property of the a and b parameters. Without the type constraint, we wouldn’t be able to access those properties because the values might have been some other type without a length property.

// The types of "longerArray" and "longerString" were inferred based on the arguments. Remember, generics are all about relating two or more values with the same type!

// Finally, just as we’d like, the call to longest(10, 100) is rejected because the number type doesn’t have a .length property.

// ~~~~ Working with Constrained Values ~~~~ //

// Here’s a common error when working with generic constraints:

function minimumLength<Type extends { length: number }>(
  obj: Type,
  minimum: number
): Type {
  if (obj.length >= minimum) {
    return obj;
  } else {
    return { length: minimum };
  }
}

// It might look like this function is OK - Type is constrained to { length: number }, and the function either returns Type or a value matching that constraint. The problem is that the function promises to return the same kind of object as was passed in, not just some object matching the constraint. If this code were legal, you could write code that definitely wouldn’t work:

// 'arr' gets value { length: 6 }
const arr = minimumLength([1, 2, 3], 6);
// and crashes here because arrays have
// a 'slice' method, but not the returned object!
console.log(arr.slice(0));

// ~~~~ Specifying Type Arguments ~~~~ //

// TypeScript can usually infer the intended type arguments in a generic call, but not always. For example, let’s say you wrote a function to combine two arrays:

function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}

// Normally it would be an error to call this function with mismatched arrays:
const arrayish = combine([1, 2, 3], ["hello"]);

// If you intended to do this, however, you could manually specify Type:
const arrayishTwo = combine<string | number>([1, 2, 3], ["hello"]);

// Guidelines for Writing Good Generic Functions

// Writing generic functions is fun, and it can be easy to get carried away with type parameters. Having too many type parameters or using constraints where they aren’t needed can make inference less successful, frustrating callers of your function.

// Push Type Parameters Down

// Here are two ways of writing a function that appear similar:

function firstElement1<Type>(arr: Type[]) {
  return arr[0];
}

function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0];
}

// a: number (good)
const g = firstElement1([1, 2, 3]);
const gd = firstElement1(["hello", "hello", "hello"]);
// b: any (bad)
const b = firstElement2([1, 2, 3]);
const bd = firstElement2(["hello", "hello", "hello"]);

// These might seem identical at first glance, but firstElement1 is a much better way to write this function. Its inferred return type is Type, but firstElement2’s inferred return type is any because TypeScript has to resolve the arr[0] expression using the constraint type, rather than “waiting” to resolve the element during a call.

// Rule: When possible, use the type parameter itself rather than constraining it


// Use Fewer Type Parameters

// Here’s another pair of similar functions:

function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
  return arr.filter(func);
}

function filter2<Type, Func extends (arg: Type) => boolean>(
  arr: Type[],
  func: Func
): Type[] {
  return arr.filter(func);
}

// We’ve created a type parameter Func that doesn’t relate two values. That’s always a red flag, because it means callers wanting to specify type arguments have to manually specify an extra type argument for no reason. Func doesn’t do anything but make the function harder to read and reason about!

// Rule: Always use as few type parameters as possible 