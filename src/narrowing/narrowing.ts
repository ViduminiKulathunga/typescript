function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toLocaleString();
  }
  return val + 3;
}

function provideId(id: string | null) {
  if (!id) {
    console.log("Please provide ID");
    return;
  }
  id.toLowerCase();
}

interface Users {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(account: Users | Admin) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
}

// instance of narrowing
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString);
  }
}

// type prdicating
type Fish = {
  swim: () => void;
};

type Bird = {
  fly: () => void;
};

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    return "Fish Food";
  } else {
    pet;
    return "Bird Food";
  }
}

//discriminated unions
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}
interface Rectangle {
  kind: "reqtangle";
  length: number;
  width: number;
}

type Shape = Circle | Square;

function getShape(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
  return shape.side * shape.side;
}

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side * shape.side;
    default:
      const _defaultShape: never = shape;
      return _defaultShape;
  }
}
