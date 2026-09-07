import Button from "@/components/ui/Button";
import { ArrowUpRight, ChevronRight } from "lucide-react";

const consultantTraining = [
  {
    title: "Expert-Led Learning",
    description:
      "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.",
  },
  {
    title: "Comprehensive Curriculum",
    description:
      "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.",
  },
  {
    title: "Interactive Workshops",
    description:
      "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.",
  },
  {
    title: "Global Recognition",
    description:
      "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.",
  },
];

export default function ConsultantTraining() {
  return (
    <section className="bg-(--primary)/10 px-4 py-10 my-10 md:px-8 lg:px-16 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col">
        {/* Section heading */}
        <h2 className="text-[24px] font-semibold text-(--primary) md:text-[40px]">
          Training The Consultant
        </h2>

        {/* Section subtitle */}
        <p className="mt-2 text-[14px] font-semibold text-(--primary) md:text-[18px]">
          Maximise Your Potential as a Certified Trainer:
        </p>

        {/* Section description */}
        <p className="mt-5 max-w-auto text-justify text-[14px] text-(--main-text) md:text-[18px]">
          With the help of our Business Analysis Training Consultants program,
          take a revolutionary step toward becoming a distinguished certified
          training consultant. Learn from professionals in the field, immerse
          yourself in a thorough curriculum, and hone your training methods
          through interactive workshops. Participating in our program will
          enable you to gain expertise in diverse courses while also developing
          the abilities to mentor and encourage others in their career
          advancement.
        </p>

        {/* Consultant training options */}
        <div className="mt-6 grid grid-cols-1 gap-6 rounded-[8px] bg-(--primary) p-5 text-(--white) md:grid-cols-2 md:gap-8 md:p-6 lg:mt-8 lg:gap-x-10 lg:gap-y-6 lg:p-6">
          {consultantTraining.map((item) => (
            <div key={item.title}>
              <h3 className="text-[14px] font-semibold md:text-[18px]">
                {item.title}
              </h3>

              <p className="mt-3 text-[12px] md:text-[16px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Learn More button */}
        <div className="mt-6 self-start">
          <Button href="#consultation">
            <span className="hidden md:block">Learn More</span>
            <span className=" md:hidden">Learn more</span>
            <ArrowUpRight size={24} className="hidden md:block" />
            <ChevronRight size={24} className=" md:hidden" />
          </Button>
        </div>
      </div>
    </section>
  );
}