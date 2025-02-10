import Navbar from "@/sections/Navbar";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";

export default function Home() {
  return (
    <>
      <ToasterProvider />
      <RegisterModal />
      <Navbar />
    </>
  );
}
