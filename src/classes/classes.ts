class Person {
  private readonly city: string = "";
  private _courseCount: number = 1;

  constructor(public email: string, public name: string) {}

  get getEmail(): string {
    return `Email apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set setCourseCount(courseNumber: number) {
    if (courseNumber <= 1) {
      throw new Error("Course count should be more than one!");
    }
    this._courseCount = courseNumber;
  }

  private deleteToken(): void {
    console.log("Token Deleted.");
  }
}

const person1 = new Person("vidu@gmail.com", "Vidumini");
