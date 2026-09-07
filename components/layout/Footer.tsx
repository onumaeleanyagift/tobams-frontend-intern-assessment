import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Button from "@/components/ui/Button";

const whatWeDoLinks = [
  "Sustainability Services",
  "Strategy Planning and Implementation",
  "Tech Talent Solutions",
  "Training and Development",
  "IT Consulting Services",
  "Social Impact",
  "Talent Recruitment",
];

const companyLinks = [
  "About",
  "Jobs",
  "Projects",
  "Our Founder",
  "Business Model",
  "The Team",
  "Contact Us",
  "Blog",
  "FAQs",
  "Testimonials",
];

const solutionLinks = [
  "Tobams Group Academy",
  "Help a Tech Talent",
  "Campus Ambassadors Program",
  "Join Our Platform",
  "Pricing",
  "Book a Consultation",
  "Join Our Slack Community",
];

export default function Footer() {
  return (
    <footer className="bg-(--footer) text-(--white)">
      {/* Footer CTA */}
      <section className="border-b border-[#C4C4C4] px-4 py-6 md:px-8 lg:px-10 lg:py-8">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[14px] lg:text-[18px]">
              Ready to be a part of something extraordinary?
            </p>

            <h2 className="mt-2 max-w-[300px] text-[20px] font-semibold md:max-w-none md:text-[24px] lg:text-[32px]">
              Let&apos;s work together to create a difference
            </h2>
          </div>

          <div className="w-fit">
            <Button href="#contact">Get In Touch</Button>
          </div>
        </div>
      </section>

      {/* Main footer */}
      <div className="px-4 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14">
        <div className="mx-auto flex flex-col max-w-[1440px] gap-8 md:grid md:grid-cols-[1fr_auto] lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-12">
          {/* Tobams Group information */}
          <div>
            <Image
              src="/images/Logo.svg"
              alt="Tobams Group logo"
              width={188}
              height={72.61}
              className="h-auto w-auto"
            />

            <p className="mt-5 max-w-[327px] text-[14px] text-[#F8F8F8] md:max-w-[280px] md:text-[16px]">
              Tobams Group is an innovative consultancy firm reshaping the
              future of tech talent development in Africa, specializing in
              talent acquisition, internships, and skill development with a
              global perspective.
            </p>

            {/* Social links */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="flex items-center justify-center rounded-full bg-(--white) text-(--main-text) p-2.5 transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-(--white)"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="#instagram"
                aria-label="Instagram"
                className="flex items-center justify-center rounded-full bg-(--white) text-(--main-text) p-2.5 transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-(--white)"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="#x"
                aria-label="X"
                className="flex items-center justify-center rounded-full bg-(--white) text-(--main-text) p-2.5 transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-(--white)"
              >
                <FaXTwitter size={22} />
              </a>
            </div>
          </div>

          {/* What We Do */}
          <div>
            <h3 className="text-[18px] font-semibold md:text-[20px]">
              What We Do
            </h3>

            <ul className="mt-4 space-y-2.5">
              {whatWeDoLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[14px] text-(--white)/70 transition-colors hover:text-(--white) md:text-[16px]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[18px] font-semibold md:text-[20px]">
              Company
            </h3>

            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[14px] text-(--white)/70 transition-colors hover:text-(--white) md:text-[16px]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div>
            <h3 className="text-[18px] font-semibold md:text-[20px]">
              Solution
            </h3>

            <ul className="mt-4 space-y-2.5">
              {solutionLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[14px] text-(--white)/70 transition-colors hover:text-(--white) md:text-[16px]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact and registered offices */}
        <div className="mt-8 border-t border-(--white)/10 lg:hidden"></div>
        <div className="mx-auto mt-6 max-w-[1440px] rounded-[8px] bg-(--white)/6 lg:py-4 lg:grid lg:grid-cols-[auto_auto_auto] lg:items-center">
          {/* Contact information */}
          <div className="order-1 p-4 lg:order-3 lg:border-l lg:border-(--white)/10 lg:px-5 lg:py-0">
            <h3 className="text-[18px] font-semibold md:text-[20px]">
              Contact Information
            </h3>

            <div className="mt-4 space-y-3">
              <a
                href="mailto:theteam@tobamsgroup.com"
                className="flex items-center gap-2 text-[14px] text-(--white) hover:text-(--white) md:text-[16px]"
              >
                <Mail size={13} className="shrink-0 text-(--secondary)" />
                theteam@tobamsgroup.com
              </a>

              <a
                href="tel:+447886600748"
                className="flex items-center gap-2 text-[14px] text-(--white) hover:text-(--white) md:text-[16px]"
              >
                <Phone size={13} className="shrink-0 text-(--secondary)" />
                +447886600748
              </a>
            </div>
          </div>

          {/* Registered offices */}
          <div className="order-1 p-4 lg:order-1 lg:px-5 lg:py-0">
            <h3 className="text-[18px] font-semibold md:text-[20px]">
              Registered Offices
            </h3>

            <div className="mt-4 gap-4">
              <div className="text-[14px] text-(--white) md:text-[16px]">
                <p className="text-(--secondary)">Nigeria</p>
                <p>
                  RC 1048722 (Registered by the Corporate Affairs Commission)
                </p>
                <p>4, Muaz Close, Angwar-Rimi</p>
              </div>
            </div>
          </div>

          <div className=" p-4 text-[14px] text-(--white) md:text-[16px] lg:px-5 lg:py-0 lg:order-2 lg:border-l lg:border-(--white)/10 lg:self-end">
            <p className="text-(--secondary)">United Kingdom</p>
            <p>07451196 (Registered by Company House)</p>
            <p>
              Vine Cottages, 215 North Street, Romford, Essex, United Kingdom,
              RM1 4QA
            </p>
          </div>
        </div>

        {/* Copyright and legal links */}
        <div className="mx-auto mt-6 flex max-w-[1312px] flex-col-reverse gap-4 border-t border-(--white)/10 pt-5 text-[14px] text-(--white)/60 items-center lg:flex-row lg:justify-between md:text-[16px]">
          <p>Copyright © Tobams Group, 2024. All rights reserved.</p>

          <div className="grid grid-cols-2 text-center md:flex md:flex-wrap gap-4 text-(--white) font-light md:gap-6">
            <a
              href="#"
              className="order-3 col-span-2 justify-self-center underline md:order-1"
            >
              Terms and Conditions
            </a>

            <a href="#" className="order-1 underline md:order-2">
              Privacy Policy
            </a>

            <a href="#" className="order-2 underline md:order-3">
              Cookies Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}