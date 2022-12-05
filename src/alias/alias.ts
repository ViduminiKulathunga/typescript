type User = {
  name: string;
  email: string;
  isActive: boolean;
};

type Person = {
    readonly _id: string;
    name: string;
    email: string;
    isActive?: boolean;
  };

type cardNumber = {
    cardnumber: string;
}

type cardDate = {
    cardDate: string;
}

type cardDetails = cardNumber & cardDate & {
    cvv: number;
}

function createUser(user: User): User {
  return { name: "", email: "", isActive: true };
}

createUser({ name: "", email: "", isActive: true });

let myUser: Person = {
    _id: "1234",
    name: "Vidu",
    email: "vidu@gmail.com",
    isActive: true
}

myUser.name = "Amila";

let myAccount: cardDetails;

export {}