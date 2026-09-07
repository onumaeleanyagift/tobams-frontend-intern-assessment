import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import LearningManagement from "@/components/sections/LearningManagement";
import TrainingServices from "@/components/sections/TrainingServices";
import ManagementDevelopment from "@/components/sections/ManagementDevelopment";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-19 md:pt-33.5">
        <Hero />
        <LearningManagement />
        <TrainingServices />
        <ManagementDevelopment />
      </main>
    </>
  );
}
