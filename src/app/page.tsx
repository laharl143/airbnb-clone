import Navbar from "@/sections/Navbar";
import Modal from "./components/modals/Modal";

export default function Home() {
  return (
    <>
      <Modal actionLabel="Submit" title="Hello world" isOpen />
      <Navbar />
    </>
  );
}
