const User = {
  name: "Vidumini",
  email: "vidu@gmail.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

createUser({ name: "Vidumini", isPaid: false });

let newUSer = { name: "Vidumini", isPaid: false, email: "user@gmail.com" };
createUser(newUSer);

function createCourse(): { name: string; isPaid: boolean } {
  return { name: "Vidumini", isPaid: false };
}

export {};
