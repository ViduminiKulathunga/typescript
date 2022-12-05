interface Database {
  connection: string;
  username: string;
  password: string;
}

function genericFunction<T, U extends Database>(valeOne: T, valTwo: U): object {
  return { valeOne, valTwo };
}

genericFunction(3, { connection: "", username: "", password: "" });

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: Array<T> = [];

  addToCart(products: T) {
    this.cart.push(products);
  }
}
