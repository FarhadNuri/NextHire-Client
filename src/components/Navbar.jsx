'use client';
import { useState } from "react";
import { useSession, signOut } from "@/lib/auth-client";
import Link from "next/link";
import { Button } from "@heroui/react";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {data:session, isPending} = useSession()
  console.log(session, isPending)
  const user = session?.user 
  const handleSignOut = async () => {
    await signOut();
  }
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#111111]/80 backdrop-blur-lg">
      <header className="flex h-16 items-center justify-between px-6 max-w-7xl mx-auto">

        {/* Logo — left aligned */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-purple-700">
            <svg
              className="h-4 w-4 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <span className="text-sm font-semibold leading-tight text-white">
            Next<br />Hire
          </span>
        </a>

        {/* Desktop nav — right aligned */}
        <div className="hidden items-center gap-1 md:flex">
          {/* Nav links grouped with a subtle pill background */}
          <div className="flex items-center gap-1 rounded-xl bg-white/5 px-3 py-1.5">
            <a
              href="#"
              className="px-3 py-1.5 text-sm text-white/70 transition-colors hover:text-white rounded-lg hover:bg-white/10"
            >
              Browse Jobs
            </a>
            <a
              href="#"
              className="px-3 py-1.5 text-sm text-white/70 transition-colors hover:text-white rounded-lg hover:bg-white/10"
            >
              Company
            </a>
            <a
              href="#"
              className="px-3 py-1.5 text-sm text-white/70 transition-colors hover:text-white rounded-lg hover:bg-white/10"
            >
              Pricing
            </a>
          </div>

          {/* Vertical divider */}
          <div className="mx-3 h-5 w-px bg-white/20" />

          {/* Sign In */}
{          
  user ? (
    <>
    Hi, {user.name}!
    <Button variant="ghost" onClick={handleSignOut}>Sign Out</Button></>
  ) :
  <>
  <Link
            href="/auth/signin"
            className="px-3 py-1.5 text-sm font-medium text-violet-400 transition-colors hover:text-violet-300"
          >
            Sign In
          </Link>

          {/* Get Started CTA */}
          <Link
            href="/auth/signup"
            className="ml-1 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#111111] transition-all hover:bg-white/90 active:scale-95"
          >
            Get Started
          </Link>
  </>
}
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex items-center justify-center rounded-lg p-2 text-white/70 hover:bg-white/10 hover:text-white md:hidden transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </header>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="border-t border-white/10 bg-[#111111] md:hidden">
          <ul className="flex flex-col gap-1 p-4">
            <li>
              <a
                href="#"
                className="block rounded-lg px-3 py-2.5 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                Browse Jobs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded-lg px-3 py-2.5 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                Company
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded-lg px-3 py-2.5 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                Pricing
              </a>
            </li>
            <li className="mt-1 border-t border-white/10 pt-3">
              {user ? (
                <>
                  <div className="block rounded-lg px-3 py-2.5 text-sm font-medium text-white">
                    Hi, {user.name}!
                  </div>
                  <Button variant="ghost" className="w-full mt-2">
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Link
                    href="/auth/signin"
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-violet-400 transition-colors hover:bg-white/10 hover:text-violet-300"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/auth/signup"
                    className="block w-full mt-2 rounded-xl bg-white px-4 py-2.5 text-center text-sm font-semibold text-[#111111] transition-all hover:bg-white/90"
                  >
                    Get Started
                  </Link>
                </>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;