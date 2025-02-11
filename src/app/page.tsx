import Navbar from "@/sections/Navbar";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";

export default function Home() {
  return (
    <>
      <ToasterProvider />
      <LoginModal />
      <RegisterModal />
      <Navbar />
    </>
  );
}
