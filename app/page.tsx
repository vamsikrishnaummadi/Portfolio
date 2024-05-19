import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Image from "next/image";
import {FaHome} from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col justify-center items-center overflow-hidden mx-auto px-5 sm:px-10">
      <div className="max-w-7xl w-full">
        <FloatingNav  navItems={[{name: "Home", icon: <FaHome />, link : "/"}]}/>
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
