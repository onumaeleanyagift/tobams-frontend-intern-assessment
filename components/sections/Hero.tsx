import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    // Hero section that contains the background image, text, and CTA button
    <section className="relative flex flex-col justify-center h-79.25 md:h-127.75 w-full gap-12 px-16 py-28">
      {/* Hero background image */}
      <Image
        src="/images/hero.jpg"
        alt="Professional working with digital technology"
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay placed on top of the background image */}
      <div className="absolute inset-0 bg-(--black)/70" />

      {/* Hero content placed above the background and overlay */}
      <div className="relative z-10 flex flex-col text-center items-center text-(--white) md:max-w-full md:h-full md:gap-3 md:px-4">
        {/* Small label above the main heading */}
        <span className=" rounded-full bg-(--white)/10 px-8 py-2 text-[12px] my-2 md:text-[14px] lg:mb-4">
          WHAT WE DO
        </span>

        {/* Desktop heading */}
        <span className="hidden md:block md:text-[46px] lg:text-[56px] font-bold">
          Training and Development
        </span>

        {/* Mobile heading */}
        <span className="md:hidden w-max max-w-[90vw] text-center text-[24px] font-bold pb-3.75">
          Learning and Development
        </span>

        {/* Short description of the services */}
        <p className="text-[14px] w-max max-w-[90vw] text-center md:mt-4 md:max-w-6xl md:text-[18px]">
          Our comprehensive range of programs and resources is designed to
          enhance skills, broaden knowledge, and propel careers forward in
          today&apos;s ever-evolving landscape.
        </p>

        {/* Call-to-action button */}
        <div className="mt-6">
          <Button href="#consultation">Book a Consultation</Button>
        </div>
      </div>
    </section>
  );
}
