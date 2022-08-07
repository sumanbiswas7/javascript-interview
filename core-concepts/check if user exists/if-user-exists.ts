//? check if user with the given name exists in this users array
interface User {
  name: string,
  age: number
}
const users = [
  { name: "paul", age: 22 },
  { name: "jerry", age: 18 },
  { name: "rita", age: 25 },
  { name: "max", age: 21 },
  { name: "harry", age: 21 },
];

// approach - 1
// use filter method

function isUserExists(users: User[], name: string) {
  const user = users.filter((user) => user.name === name);
  if (user.length > 0) return true;
  return false;
}

console.log(isUserExists(users, "ma2x"));

// optimal approach
// use array.some
const nameInput = "harry2";
const isExist = users.some((user) => user.name === nameInput);

console.log(isExist);


