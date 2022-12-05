function addTwo(num: number): number {
  return num + 2;
}

function getUpper(val: string): string {
  return val.toUpperCase();
}

function signUp(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean) => {};

let login = (name: string, email: string, isPaid: boolean = true) => {};

addTwo(5);
getUpper("Vidumini");
signUp("Vidumini", "vidu@gmail.com", true);
loginUser("Vidumini", "vidu@gmail.com", false);
login("Vidumini", "vidu@gmail.com");

function getValue(myVal: number): boolean {
  if (myVal > 5) {
    return true;
  }
  return true;
}

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "spiderpam", "ironman"];

heros.map((hero: string): string => {
  return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}

function handleError(msg: string): never {
  throw new Error(msg);
}

export {};
