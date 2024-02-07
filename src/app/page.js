import Footer from "@/components/Footer";
import Header from "@/components/Header";
import House from "@/components/House";
import Materials from "@/components/Materials";
import Navbar from "@/components/Navbar";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <House />
      <Materials/>
      <Footer />
    </>
  );
}
