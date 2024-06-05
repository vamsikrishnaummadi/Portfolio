import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Image from "next/image";
import {FaHome} from "react-icons/fa";
import Approach from "@/components/Approach";
<<<<<<< HEAD
import Footer from "@/components/Footer";
=======
>>>>>>> 8456e75 (my Approach Section)

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col justify-center items-center mx-auto px-5 sm:px-10 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav  navItems={navItems}/>
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
<<<<<<< HEAD
        <Footer />
=======
>>>>>>> 8456e75 (my Approach Section)
      </div>
    </main>
  );
}
