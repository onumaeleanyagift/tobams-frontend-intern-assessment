import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import LearningManagement from "@/components/sections/LearningManagement";
import TrainingServices from "@/components/sections/TrainingServices";
import ManagementDevelopment from "@/components/sections/ManagementDevelopment";
import TransformationHub from "@/components/sections/TransformationHub";
import ConsultantTraining from "@/components/sections/ConsultantTraining";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-19 md:pt-33.5">
        <Hero />
        <LearningManagement />
        <TrainingServices />
        <ManagementDevelopment />
        <TransformationHub />
        <ConsultantTraining />
      </main>

      <Footer />
    </>
  );
}
