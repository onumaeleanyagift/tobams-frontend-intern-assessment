import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from "@/components/ui/TestimonialCard";

const testimonials = [
  {
    name: "Aisha Yusuf",
    role: "Founder, CraftHub NG",
    image: "/images/aisha-yusuf.png",
    text: "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
  },
  {
    name: "John Davies",
    role: "Marketing Manager, E-Commerce Emporium",
    image: "/images/john-davies.png",
    text: "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
  },
  {
    name: "Chinonso Nwankwo",
    role: "HR Director, FutureTech Solutions",
    image: "/images/chinonso-nwankwo.png",
    text: "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
  },
  {
    name: "Sarah Johnson",
    role: "CEO of Tech Innovations Inc.",
    image: "/images/sarah-johnson.png",
    text: "Tobams Group is a true partner in our journey to digital excellence. Their creativity and technical expertise have propelled our projects to new heights. Their work is top-notch, and the results speak for themselves.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-(--white)/30 px-4 py-10 md:px-8 md:py-12 lg:px-16 lg:py-16">
      <div className="mx-auto w-full max-w-[1440px]">
        {/* Section heading */}
        <h2 className="text-center text-[20px] font-bold text-(--main-text) md:text-[40px]">
          Testimonials
        </h2>

        {/* Testimonial cards */}
        <div className="mt-6 overflow-hidden md:mt-10">
          <div className="flex gap-5 overflow-x-auto pb-2 scrollbar-none md:gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                name={testimonial.name}
                role={testimonial.role}
                image={testimonial.image}
                text={testimonial.text}
              />
            ))}
          </div>
        </div>

        {/* Slider controls */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            aria-label="Previous testimonial"
            className="flex size-8 items-center justify-center rounded-[4px] bg-(--secondary)/10 text-(--secondary)"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            aria-label="Next testimonial"
            className="flex size-8 items-center justify-center rounded-[4px] bg-(--secondary)/10 text-(--secondary)"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}