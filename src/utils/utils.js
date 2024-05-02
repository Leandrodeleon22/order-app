import { redirect } from "next/navigation";

export default function protectedPage() {
  const tableNumber = true;

  if (tableNumber) {
    return redirect("/");
  }
}
