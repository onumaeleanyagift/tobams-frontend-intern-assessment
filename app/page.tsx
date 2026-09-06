import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import LearningManagement from "@/components/sections/LearningManagement";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <LearningManagement />
      </main>
    </>
  );
}
