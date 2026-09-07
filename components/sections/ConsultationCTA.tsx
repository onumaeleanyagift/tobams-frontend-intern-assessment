import Button from "@/components/ui/Button";

export default function ConsultationCTA() {
  return (
    <section className="px-5 md:px-16">
      <div className="mx-auto flex flex-col w-full max-w-[327px] items-center justify-center gap-6 rounded-[8px] bg-(--primary) px-6 py-8 text-center text-(--white) md:max-w-[1134px] md:gap-8 md:px-16 md:py-10">
        {/* Desktop CTA text */}
        <p className="hidden text-[18px] md:block lg:text-[20px]">
          Want to accelerate professional growth and development at your
          organisation?
          <br />
          See how we can help.
        </p>

        {/* Mobile CTA text */}
        <p className="text-[16px] md:hidden">
          Don&apos;t just dream it-let&apos;s build it!
          <br />
          Click now and start your project
          <br />
          with Tobams Group. Your journey to
          <br />
          digital excellence begins here.
        </p>

        {/* Consultation button */}
        <Button href="#consultation" variant="white">
          Book a Consultation
        </Button>
      </div>
    </section>
  );
}
