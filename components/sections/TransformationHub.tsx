import Image from "next/image";
import Button from "@/components/ui/Button";
import { Zap, ArrowUpRight } from "lucide-react";

// Features available in the Transformation Hub
const features = [
  "Strategic Career Guidance",
  "Leadership Development",
  "CV Development",
  "Sustainability Leadership",
  "Communication Skills",
  "Business Model",
];

export default function TransformationHub() {
  return (
    // Transformation Hub section
    <section className="px-4 py-10 bg-(--white) md:px-8 lg:px-16 lg:py-20">
      <div className="mx-auto flex w-full max-w-328 flex-col gap-16 rounded-xl bg-(--secondary)/20 px-4 py-6 lg:flex-row lg:gap-16 lg:rounded-2xl lg:p-10">
        {/* Section content */}
        <div className="flex w-full flex-col gap-3 md:gap-6">
          {/* Small section label */}
          <p className="text-[14px] italic text-[#1671D9] md:text-[20px]">
            Learning With Our CEO:
          </p>

          {/* Section heading */}
          <h2 className="text-[20px] font-semibold italic text-(--primary) md:text-[32px]">
            Transformation Hub With Jite Newton
          </h2>

          {/* Section description */}
          <p className="text-[14px] text-(--main-text) md:text-[18px]">
            Transformation Hub with Jite Newton is a flagship webinar series
            curated by the CEO, Dr. Jite Newton. Designed to elevate career
            trajectories and leadership capabilities, this exclusive event
            offers invaluable insights and strategies for personal and
            professional growth. Whether you&apos;re seeking to advance your
            career or enhance your leadership skills, the Transformation Hub
            provides a transformative learning experience to unlock your full
            potential and drive success in your endeavours.
          </p>

          {/* Image and feature list */}
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-8">
            {/* Transformation Hub image */}
            <div className="w-full lg:w-1/2">
              <Image
                src="/images/transformation-hub.jpg"
                alt="Professional participating in the Transformation Hub"
                width={560}
                height={340}
                className="h-58 w-full rounded-lg object-cover md:h-85 lg:w-140"
              />
            </div>

            {/* Feature list and button */}
            <div className="flex w-full flex-col gap-6 bg-(--white)/30 rounded-lg px-5 py-5 md:px-5 lg:py-14 lg:w-1/2">
              <ul className="grid grid-cols-1 gap-3 w-full md:grid-cols-2">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-2 rounded-xl bg-(--white) p-5 md:px-3 md:py-2 text-[14px] text-(--main-text) md:items-center md:text-[18px]"
                  >
                    {/* Feature icon */}
                    <Zap
                      size={18}
                      fill="#DDD0DA"
                      className="shrink-0 text-(--primary)"
                    />

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Learn More button */}
              <div className="self-start text-[18px]">
                <Button href="#training-services">
                  Learn More
                  <ArrowUpRight size={24} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
