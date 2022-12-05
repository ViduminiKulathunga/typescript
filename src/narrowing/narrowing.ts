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
