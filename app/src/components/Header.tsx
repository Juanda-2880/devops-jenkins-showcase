import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "¿Qué es?", href: "#que-es" },
    { name: "Historia", href: "#historia" },
    { name: "¿Cómo funciona?", href: "#como-funciona" },
    { name: "Plugins", href: "#plugins" },
    { name: "Git", href: "#git" },
    { name: "Ventajas", href: "#ventajas" },
    { name: "Participantes", href: "#participantes" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-jenkins-red shadow-lg py-4">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 flex items-center justify-between">
        {/* Logo and Title */}
        <a
          href="/"
          className="flex items-center gap-3 transition-transform hover:scale-105"
        >
          <img
            className="h-10 w-auto md:h-12"
            src="/images/jenkins-logo.png"
            alt="Jenkins Logo"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="font-open-sans text-sm font-medium text-white/90 transition-all hover:text-white hover:underline underline-offset-8"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="pb-6 pt-2">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-md px-2 py-1 font-open-sans text-lg text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
