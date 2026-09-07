import Image from "next/image";
import { Zap } from "lucide-react";

const features = [
  "Enhanced Leadership Skills",
  "Improved Employee Engagement",
  "Stronger Organisational Culture",
  "Sustainable Growth",
];

export default function ManagementDevelopment() {
  return (
    <section className="px-4 py-10 md:px-8 lg:px-16 lg:py-20">
      <div className="mx-auto flex max-w-328 flex-col items-center gap-6 rounded-4xl bg-(--primary-dark) md:p-10 lg:flex-row lg:gap-10">
        {/* Management Development Title for mobile */}
        <h2 className="text-[16px] text-(--white) text-center font-semibold pt-6 md:pt-2 md:text-[30px] lg:hidden">
          Management Development Program
        </h2>

        {/* Management Development image */}
        <div className="lg:w-1/2">
          <Image
            src="/images/management-development.jpg"
            alt="Professionals participating in a management development session"
            width={592}
            height={639}
            className="h-58 w-71.75 rounded-lg object-cover md:h-[539] md:w-[592] lg:h-[639] lg:w-[592]"
          />
        </div>

        {/* Management Development content */}
        <div className="flex w-full flex-col gap-2.5 px-4 py-4 text-(--white) lg:w-1/2 lg:px-0 lg:py-0">
          <h2 className="hidden font-semibold md:text-[40px] lg:block">
            Management Development Program
          </h2>

          <p className="text-[14px] text-(--white) md:text-[18px]">
            Tobams Group offers a comprehensive Management Development Program
            designed to equip corporate organisations with the high-performing
            leaders they need to thrive.
          </p>

          <p className="text-[14px] text-(--white)/90 md:text-[16px]">
            Our program includes workshops, seminars, coaching sessions, online
            courses, and experiential learning opportunities designed to improve
            leadership, strategic thinking, communication, and other essential
            managerial competencies for corporate organisations.
          </p>

          {/* Management development features */}
          <ul className="mt-2 flex flex-col gap-3">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 rounded-lg bg-[#8F6182] px-3 py-2 my-2 text-[14px] text-(--white) md:text-[18px]"
              >
                <Zap size={18} fill="currentColor" className="shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
