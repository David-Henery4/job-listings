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
  pet.fly()
}

// Notice that TypeScript not only knows that pet is a Fish in the if branch; it also knows that in the else branch, you don’t have a Fish, so you must have a Bird.

// You may use the type guard isFish to filter an array of Fish | Bird and obtain an array of Fish: 

const zoo: (Fish | Bird)[] = [getSmallPet("fish"), getSmallPet("bird"), getSmallPet("fish")]

const underWater1: Fish[] = zoo.filter(isFish)
const underWater2: Fish[] = zoo.filter(isFish) as Fish[]

// The predicate may need repeating for more complex examples:

const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
  if (pet.name === "sharkey") return false
  return isFish(pet)
})

// In addition, classes can use this is Type to narrow their type.

// Assertion functions