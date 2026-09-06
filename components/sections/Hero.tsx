import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative flex flex-col justify-center h-79.25 md:h-127.75 w-full gap-12 px-16 py-28">
      <Image
        src="/images/hero.jpg"
        alt="Professional working with digital technology"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-(--black)/70" />

      <div className="relative z-10 flex flex-col text-center items-center text-(--background) max-w-full md:h-full md:gap-3 md:px-4">
        <span className=" rounded-full bg-(--background)/10 px-8 py-2 text-[12px] mb-2 md:text-[14px] lg:mb-4">
          WHAT WE DO
        </span>

        <span className="hidden md:block md:text-[46px] lg:text-[56px] font-bold">
          Training and Development
        </span>
        <span className="md:hidden text-[24px] font-bold">
          Learning and Development
        </span>

        <p className="text-[14px] md:mt-4 md:max-w-6xl md:text-[18px]">
          Our comprehensive range of programs and resources is designed to
          enhance skills, broaden knowledge, and propel careers forward in
          today&apos;s ever-evolving landscape.
        </p>

        <div className="mt-6">
          <Button href="#consultation">Book a Consultation</Button>
        </div>
      </div>
    </section>
  );
}
