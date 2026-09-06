import Image from "next/image";
import Button from "@/components/ui/Button";
import { User, ChevronDown, SquareMenu } from "lucide-react";

export default function Navbar() {
  return (
    // Fixed navbar that stays at the top while scrolling
    <header className="fixed top-0 left-0 z-50 w-full bg-(--white)">
      {/* Top section containing the logo and account actions */}
      <div className="border-b border-(--footer)/10 px-2 py-4">
        <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-5 md:px-8 lg:px-10">
          {/* Tobams Group logo */}
          <a href="/" aria-label="Tobams Group home" className="shrink-0">
            <Image
              src="/images/Logo.svg"
              alt="Tobams Group Logo"
              width={165.71}
              height={64}
              priority
              className="h-auto w-[123.85px] md:w-[165.71px] md:h-[64]"
            />
          </a>

          {/* Desktop account and assessment actions */}
          <div className="hidden items-center gap-6 md:flex">
            <Button href="#account">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-6.5 h-6.5 p-1 bg-[#DDD0DA] text-(--primary) rounded-4xl">
                  <User strokeWidth={2} />
                </div>
                <div className="flex items-center gap-1">
                  Account
                  <ChevronDown size={20} />
                </div>
              </div>
            </Button>

            <Button href="#assessment" variant="pink">
              Take Assessment
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            aria-label="Open navigation menu"
            className="md:hidden cursor-pointer"
          >
            <span className="text-(--black)">
              <SquareMenu size={32} />
            </span>
          </button>
        </div>
      </div>

      {/* Desktop navigation links */}
      <nav aria-label="Main navigation" className="hidden md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-5 pt-4 md:px-8 lg:px-10">
          <ul className="flex items-center pb-2 md:gap-5 lg:gap-8 md:text-[12px] lg:text-[18px] text-(--main-text)">
            <li>
              <a
                href="#about"
                className="flex items-center gap-1 transition-colors border-b border-transparent  hover:text-(--primary) hover:border-(--primary) focus:outline-none focus:ring-2 focus:ring-(--primary)]"
              >
                About
                <ChevronDown
                  size={20}
                  strokeWidth={1.5}
                  className="text-(--primary)"
                />
              </a>
            </li>

            <li>
              <a
                href="#what-we-do"
                className="flex items-center gap-1 transition-colors border-b border-transparent  hover:text-(--primary) hover:border-(--primary) focus:outline-none focus:ring-2 focus:ring-(--primary)]"
              >
                What We Do
                <ChevronDown
                  size={20}
                  strokeWidth={1.5}
                  className="text-(--primary)"
                />
              </a>
            </li>

            <li>
              <a
                href="#jobs"
                className="flex items-center gap-1 transition-colors border-b border-transparent hover:text-(--primary) hover:border-(--primary) focus:outline-none focus:ring-2 focus:ring-(--primary)]"
              >
                Jobs
                <ChevronDown
                  size={20}
                  strokeWidth={1.5}
                  className="text-(--primary)"
                />
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="transition-colors border-b border-transparent hover:text-(--primary) hover:border-(--primary) focus:outline-none focus:ring-2 focus:ring-(--primary)]"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#training"
                className="transition-colors border-b border-transparent hover:text-(--primary) hover:border-(--primary) focus:outline-none focus:ring-2 focus:ring-(--primary)]"
              >
                T&amp;D Academy
              </a>
            </li>

            <li>
              <a
                href="#strategy"
                className="transition-colors border-b border-transparent hover:text-(--primary) hover:border-(--primary) focus:outline-none focus:ring-2 focus:ring-(--primary)]"
              >
                Strategic Partnerships
              </a>
            </li>

            <li>
              <a
                href="#pricing"
                className="transition-colors border-b border-transparent hover:text-(--primary) hover:border-(--primary) focus:outline-none focus:ring-2 focus:ring-(--primary)]"
              >
                Pricing
              </a>
            </li>

            <li>
              <a
                href="#consultation"
                className="transition-colors border-b border-transparent hover:text-(--primary) hover:border-(--primary) focus:outline-none focus:ring-2 focus:ring-(--primary)]"
              >
                Book a Consultation
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}