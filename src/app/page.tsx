import Navbar from "@/sections/Navbar";
import ToasterProvider from "./providers/ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser";

export default async function Home() {
  const currentUser = await getCurrentUser();

  return (
    <>
      <ToasterProvider />
      <Navbar currentUser={currentUser} />
    </>
  );
}
