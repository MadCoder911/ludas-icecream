import { after } from "node:test";

export const setCart = (itemsObject: CartObj, operation: string) => {
  //Get items from storage
  const itemsArr = JSON.parse(localStorage.getItem("cart"));

  //Check if no items
  if (!itemsArr) {
    return localStorage.setItem("cart", JSON.stringify([itemsObject]));
  } else if (itemsArr.find((e: CartObj) => e.name === itemsObject.name)) {
    if (operation === "new") {
      const item = itemsArr.find((e: CartObj) => e.name === itemsObject.name);
      itemsArr.pop(item);
      itemsArr.push(itemsObject);
      return localStorage.setItem("cart", JSON.stringify(itemsArr));
    } else if (operation === "dec") {
      let itemFiltered = itemsArr.find(
        (e: CartObj) => e.name === itemsObject.name
      );
      const indexOfObject = itemsArr.findIndex((object: CartObj) => {
        return object.id === itemsObject.id;
      });

      if (itemFiltered.quantity > 1) {
        const itemIncIndex = itemsArr.findIndex(
          (e: CartObj) => e.name === itemsObject.name
        );
        itemsArr[itemIncIndex].quantity -= 1;
        return localStorage.setItem("cart", JSON.stringify(itemsArr));
      } else if (itemFiltered.quantity === 1) {
        const itemIncIndex = itemsArr.findIndex(
          (e: CartObj) => e.name === itemsObject.name
        );
        itemsArr.splice(itemIncIndex, 1);
        return localStorage.setItem("cart", JSON.stringify(itemsArr));
      }
    } else if (!operation || operation === "inc") {
      const itemIncIndex = itemsArr.findIndex(
        (e: CartObj) => e.name === itemsObject.name
      );
      itemsArr[itemIncIndex].quantity += 1;
      return localStorage.setItem("cart", JSON.stringify(itemsArr));
    }
  } else if (!itemsArr.find((e: CartObj) => e.name === itemsObject.name)) {
    itemsArr.push(itemsObject);
    return localStorage.setItem("cart", JSON.stringify(itemsArr));
  }
};

export const getCart = () => {
  const items = JSON.parse(localStorage.getItem("cart"));
  console.log(items, "items");
  return items;
};
