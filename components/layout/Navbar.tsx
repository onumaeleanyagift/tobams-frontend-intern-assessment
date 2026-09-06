<<<<<<< Updated upstream
=======
import Image from "next/image";
import Button from "@/components/ui/Button";
import { User, ChevronDown, SquareMenu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full bg-white">
      <div className="border-b border-(--footer)/10 px-2 py-4">
        <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-5 md:px-8 lg:px-10">
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

          <div className="hidden items-center gap-6 md:flex">
            <Button href="#account">
              <div className="flex gap-3">
                <div className="flex items-center justify-center bg-(--footer)/10 text-(--primary) rounded-2xl">
                  <User size={24} strokeWidth={2} />
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

          <button aria-label="Open navigation menu" className="md:hidden">
            <span className="text-(--black)">
              <SquareMenu size={32} />
            </span>
          </button>
        </div>
      </div>

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
>>>>>>> Stashed changes
