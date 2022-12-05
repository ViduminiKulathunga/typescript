function getSearchProducts<T>(products: T[]): T {
  const myIndex = 3;
  //one of the value from array
  return products[3];
}

// <T,> common sign for generic function
const getMoreSearchProducts = <T,>(product: T[]): T => {
  return product[1];
};
