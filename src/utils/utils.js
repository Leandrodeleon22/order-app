import { redirect } from "next/navigation";

export function protectedPage(tableNum) {
  const tableNumber = tableNum;

  if (!tableNumber) {
    return redirect("/");
  }
}

export function formattedPrice(cents) {
  const cadDollars = cents / 100;

  const formattedPrice = cadDollars.toFixed(2);

  return formattedPrice;
}
