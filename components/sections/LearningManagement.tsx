import Image from "next/image";
import Button from "@/components/ui/Button";
import { Circle, ArrowUpRight } from "lucide-react";

// List of courses offered by TG Academy
const courses = [
  "Business Analysis",
  "Design Thinking",
  "Effective Communication",
  "Entrepreneurship",
  "Career Development",
  "Business Model",
];

export default function LearningManagement() {
  return (
    <section className="bg-(--primary)/10 px-4 py-8 my-10 md:px-16 md:py-12">
      <div className="mx-auto flex max-w-360 flex-col items-center gap-8 lg:flex-row lg:gap-20">
        {/* Mobile heading */}
        <h2 className="font-semibold text-(--primary) text-[20px] md:text-[35px] lg:hidden">
          Learning Management System
        </h2>

        {/* Learning Management image */}
        <div className="shrink-0">
          <Image
            src="/images/learning-management.jpg"
            alt="Professionals standing together"
            width={556.88}
            height={568}
            className="h-81.75 w-81.75 rounded-[357.57] object-cover md:h-112 md:w-[456.88px] lg:h-142 lg:w-[556.88px]"
          />
        </div>

        {/* Text and course content */}
        <div className="flex w-full flex-col gap-6">
          {/* Desktop heading */}
          <h2 className="hidden text-[24px] font-semibold text-(--primary) md:text-[40px] lg:block">
            Learning Management System
          </h2>

          {/* Academy description and course list */}
          <div className="rounded bg-(--primary)/10 p-4 text-[14px] text-(--main-text) md:p-5 md:text-[18px]">
            <p>
              TG Academy is a hub of knowledge and skill-building resources
              designed to empower tech talents on their learning journey. From
              technical courses covering the latest programming languages and
              development frameworks to soft skills training in leadership,
              effective communication and project management, TG Academy offers
              a wide range of courses to cater to diverse learning needs. With
              accessible and interactive learning materials, individuals can
              enhance their skills and stay ahead in today&apos;s competitive
              tech landscape.
            </p>

            {/* Course list heading */}
            <p className="mt-4 font-semibold text-(--primary) text-[16px] md:text-[18px]">
              Some of our courses include:
            </p>

            {/* Courses offered by TG Academy */}
            <ul className="mt-2 grid grid-cols-1 gap-2 md:grid-cols-2">
              {courses.map((course) => (
                <li
                  key={course}
                  className="flex items-center gap-2 text-(--main-text) text-[14px] md:text-[16px]"
                >
                  {/* Bullet point */}
                  <span aria-hidden="true">
                    <Circle size={6} fill="currentColor" />
                  </span>
                  <span>{course}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn More button */}
          <div className="self-start">
            <Button href="#training-services">
              Learn More <ArrowUpRight size={24} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
