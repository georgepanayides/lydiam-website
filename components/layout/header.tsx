import Link from "next/link";
import { Button } from "../ui/button";
import { ThemeToggle } from "../ui/theme-toggle";

export const Header = () => {
  const navItems = [
    { name: "Solutions", href: "/solutions" },
    { name: "Platform", href: "/platform" },
    { name: "Impact", href: "/impact" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-dark-900/80 backdrop-blur-md transition-colors duration-300">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-organetto text-2xl font-bold text-dark-900 dark:text-white tracking-tighter">
            LYDIAM
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Menu Trigger */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link href="/contact">
            <Button variant="gradient" size="sm">
              Get Started
            </Button>
          </Link>
          
          {/* Mobile Menu Button (Placeholder) */}
          <button className="md:hidden p-2 text-gray-600">
            <span className="sr-only">Open menu</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
