export const orderValidation = (order: OrderObj) => {
  const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  if (
    order.email === " " ||
    order.email === "" ||
    !order.email.includes("@") ||
    !order.email.includes(".com") ||
    !emailRegex.test(order.email)
  ) {
    return "Invalid email address";
  } else if (
    order.first_name === "" ||
    order.first_name === " " ||
    order.last_name === "" ||
    order.first_name === " "
  ) {
    return "Invalid first or last name";
  } else if (order.address === "" || order.address === " ") {
    return "Invalid address";
  } else if (!order.apartment) {
    return "Invalid apartment number";
  } else if (order.city === "" || order.city === " ") {
    return "Invalid city";
  } else if (order.governrate === "" || order.governrate === " ") {
    return "Invalid governrate";
  } else if (order.phone?.toString().length !== 11) {
    return "Invalid phone number";
  } else {
    return true;
  }
};
