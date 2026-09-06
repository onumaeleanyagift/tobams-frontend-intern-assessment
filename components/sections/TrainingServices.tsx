import Image from "next/image";
import { Zap } from "lucide-react";

// Training services displayed on the page
const trainingServices = [
  {
    title: "Corporate Trainings",
    description:
      "Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's goals and values.",
    image: "/images/corporate-training.jpg",

    // Different image sizes and corner radii for mobile and desktop
    imageClass:
      "w-[327px] h-[229px] rounded-tl-[30px] rounded-tr-[24px] rounded-br-[23px] rounded-bl-[40px] md:w-[602px] md:h-[346px] md:rounded-tl-[56px] md:rounded-tr-[24px] md:rounded-br-[23px] md:rounded-bl-[12px]",

    items: [
      "Leadership Training",
      "Strategic Planning and Implementation",
      "Project Management",
      "Sustainability Training",
      "Customised Training",
    ],
  },
  {
    title: "Personalised Individual Training",
    description:
      "Begin a journey of lifelong learning and professional development with Tobams Group's diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today's professionals.",
    image: "/images/individual-training.jpg",

    imageClass:
      "w-[327px] h-[240px] rounded-tl-[33px] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px] md:w-[599px] md:h-[378px] md:rounded-tl-[33px] md:rounded-tr-[8px] md:rounded-br-[8px] md:rounded-bl-[8px]",

    items: [
      "Leadership Development",
      "Soft Skills Development",
      "Industry Specific Knowledge",
      "Technical Skills Enhancement",
      "Time Management and Productivity",
      "Career Development",
    ],
  },
  {
    title: "Capacity Development",
    description:
      "At Tobams Group, we empower individuals and organisations through tailored training programs, expert-led workshops, and personalised mentorship.",
    image: "/images/capacity-development.jpg",

    imageClass:
      "w-[324px] h-[232px] rounded-tl-[33px] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px] md:w-[601px] md:h-[405px] md:rounded-tl-[40px] md:rounded-tr-[8px] md:rounded-br-[8px] md:rounded-bl-[8px]",

    items: [
      "Tailored Training Programs",
      "Expert-Led Workshops",
      "Personalised Mentorship",
      "Technical Skills Enhancement",
      "Collaborative Learning Environment",
      "Ongoing Support and Resources",
    ],
  },
];

export default function TrainingServices() {
  return (
    <section className="bg-(--white) mx-6 py-10 lg:py-20 lg:rounded-2xl lg:px-4">
      <div className="flex flex-col gap-12 lg:gap-30">
        {trainingServices.map((service, index) => (
          // Each service contains text and an image
          <div
            key={service.title}
            className={`flex flex-col items-center justify-around lg:flex-row lg:gap-12 ${
              // Reverse the layout of the second service on desktop
              index === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full md:w-161.5">
              <h2 className="pb-4 text-[20px] text-(--main-text) font-semibold md:text-[40px] lg:pb-0">
                {service.title}
              </h2>
              {/* Show the image here only on smaller screens */}
              <div className="lg:hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={602}
                  height={346}
                  className={`w-full h-auto object-cover ${service.imageClass}`}
                />
              </div>
              {/* Service description */}
              <p className="mt-3 text-[14px] md:text-[18px] text-(--subdued)">
                {service.description}
              </p>
              {/* List of training areas */}
              <ul className="mt-4 space-y-2">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center text-(--subdued) gap-2 text-[14px] md:text-[18px] lg:px-5"
                  >
                    <Zap
                      size={18.5}
                      fill="var(--black)"
                      className="text-(--primary)"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Show the image separately on desktop */}
            <div className="hidden w-full lg:w-auto lg:block">
              <Image
                src={service.image}
                alt={service.title}
                width={602}
                height={346}
                className={`w-full h-auto object-cover ${service.imageClass}`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
