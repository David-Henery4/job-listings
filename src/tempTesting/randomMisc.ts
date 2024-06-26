
interface User {
  name: string,
  age: number
}

const user: User = {
  name: "hello",
  age: 22
}

interface Point {
  x: number,
  y: number
}

const logpoint = (p: Point) => {
  console.log(p)
}

const point = {x: 12, y: 23}

logpoint(point)

const point3 = { x: 12, y: 26, z: 89 };
logpoint(point3)

const rect = { x: 33, y: 3, width: 30, height: 80 };
logpoint(rect)

const nameId = {nameId: "Steve"}
// logpoint(nameId) // error

const nameIdWithExtras = {nameId: "Steve", x: 32, y: 23}
logpoint(nameIdWithExtras);

//

const userData = {
  name: "Daniel",
  age: 26,
};
userData.surname = "hello"
console.log(userData)

//

interface UserData2 {
  name: string,
  age: number
}

const userData2: UserData2 = {
  name: "Daniel",
  age: 26,
};
const newUserData: UserData2 = {
  ...userData2,
  surname: "hello"
}
console.log(userData)