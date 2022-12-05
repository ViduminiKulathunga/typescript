interface User {
  readonly dbId: number;
  email: string;
  id: number;
  googleId?: string;
  startTrial: () => string;
  endTrial(): string;
  getCoupon(name: string, value: number): number;
}

// Re-opening of interfaces
interface User {
  githubToken: string;
}

interface Facilities {
  discount: boolean;
}

//Interface inheritence
interface Admin extends User, Facilities {
  role: "admin" | "user" | "learner";
}

const user: Admin = {
  dbId: 123,
  email: "vidu@gmail.com",
  id: 1,
  role: "admin",
  githubToken: "code1",
  discount: true,
  startTrial: () => "Trial Started",
  endTrial: () => {
    return "Success";
  },
  getCoupon: (name: "code", value: 100) => {
    return 10;
  },
};

user.googleId = "google";

export {}
