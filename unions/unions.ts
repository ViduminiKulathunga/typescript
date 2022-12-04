let score: number | string = 33;

score = 40;
score = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let person: User | Admin = { name: "Vidumini", id: 10 };
person = { username: "Amila", id: 10 };

function getDbid(id: number | string) {
  console.log(`DB id is: ${id}`);
}

getDbid(3);
getDbid("3");
