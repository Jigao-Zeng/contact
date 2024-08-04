import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

export async function action({ params }) {
  throw newError("oh damn");
  await deleteContact(params.contactId);
  return redirect("/");
}
