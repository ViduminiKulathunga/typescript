class User {
  public email: string;
  private name: string;
  private readonly city: string = "";

  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const vidumini = new User("vidu@gmail.com", "Vidumini");
