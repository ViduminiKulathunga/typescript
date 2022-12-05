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
