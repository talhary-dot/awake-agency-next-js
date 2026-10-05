import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [activeHash, setActiveHash] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleHash = () => {
      setActiveHash(window.location.hash);
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, [location]);

  const isItemActive = (href: string) => {
    if (href.startsWith("/#")) {
      const hash = href.replace("/", "");
      return location.pathname === "/" && activeHash === hash;
    }
    return location.pathname === href;
  };

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-background/80 transition-colors">
      <div className="container p-3">
        <nav className="flex items-center py-3 px-4 justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                alt="logo"
                width={117}
                height={34}
                className="dark:hidden w-auto h-auto"
                src="/images/logo/logo.svg"
              />
              <img
                alt="logo"
                width={160}
                height={50}
                className="dark:block hidden w-auto h-auto"
                src="/images/logo/DarkModeLogo.svg"
              />
            </Link>
          </div>

          {/* Center Navigation for Desktop */}
          <nav className="relative max-w-max flex-1 items-center justify-center hidden lg:flex bg-dark_black/5 dark:bg-white/5 rounded-full p-1 mx-4">
            <ul className="flex-1 items-center justify-center flex gap-0 2xl:gap-1.5 list-none m-0 p-0">
              {siteConfig.navItems.map((item) => {
                const active = isItemActive(item.href);
                return (
                  <li key={item.label} className="relative">
                    {item.href.startsWith("/#") ? (
                      <a
                        href={item.href}
                        className={cn(
                          "rounded-full text-base font-medium flex transition-all duration-200 py-2 px-3 2xl:px-4",
                          active
                            ? "text-foreground bg-dark_black/5 dark:bg-white/10"
                            : "text-foreground/70 hover:text-foreground hover:bg-dark_black/5 dark:hover:bg-white/5"
                        )}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        to={item.href}
                        className={cn(
                          "rounded-full text-base font-medium flex transition-all duration-200 py-2 px-3 2xl:px-4",
                          active
                            ? "text-foreground bg-dark_black/5 dark:bg-white/10"
                            : "text-foreground/70 hover:text-foreground hover:bg-dark_black/5 dark:hover:bg-white/5"
                        )}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-1 xl:gap-4">
            <div className="flex items-center gap-2">
              <Link
                to="/signin"
                className="hidden lg:block bg-transparent border border-dark_black dark:border-white/50 text-foreground px-2.5 xl:px-4 py-2 rounded-full hover:bg-dark_black hover:text-white transition-colors text-sm font-medium"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="hidden lg:block text-white px-2.5 xl:px-4 py-2 bg-dark_black dark:bg-white/20 rounded-full hover:opacity-90 transition-opacity text-sm font-medium"
              >
                Sign Up
              </Link>
            </div>

            {/* Theme Toggler */}
            <button
              aria-label="theme toggler"
              onClick={toggleTheme}
              className="group flex h-8 w-8 items-center justify-center duration-300 rounded-full hover:bg-dark_black/5 dark:hover:bg-white/5 cursor-pointer ml-1"
            >
              <span className="group-hover:rotate-180 transition-transform duration-700 ease-in-out flex items-center justify-center">
                {theme === "dark" ? (
                  <Sun className="size-5 text-foreground" />
                ) : (
                  <Moon className="size-5 text-foreground" />
                )}
              </span>
            </button>

            {/* Mobile Menu Hamburger */}
            <div className="lg:hidden flex items-center ml-1">
              <button
                type="button"
                aria-label="Toggle mobile menu"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="p-1.5 rounded-lg text-foreground hover:bg-dark_black/5 dark:hover:bg-white/5"
              >
                {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border px-6 py-6 transition-all duration-300">
          <ul className="flex flex-col gap-3 list-none p-0 m-0">
            {siteConfig.navItems.map((item) => (
              <li key={item.label}>
                {item.href.startsWith("/#") ? (
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-lg font-medium text-foreground/80 hover:text-foreground"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-lg font-medium text-foreground/80 hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-border">
            <Link
              to="/signin"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-transparent border border-dark_black dark:border-white/50 text-foreground px-4 py-2.5 rounded-full hover:bg-dark_black hover:text-white transition-colors font-medium"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center text-white px-4 py-2.5 bg-dark_black dark:bg-white/20 rounded-full hover:opacity-90 font-medium"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
