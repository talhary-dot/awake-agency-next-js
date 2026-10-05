import React from "react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/config/site";

export const Footer: React.FC = () => {
  return (
    <footer className="xl:pt-20 pb-6 transition-colors">
      <div className="container">
        <div className="flex flex-col xl:flex-row py-16 gap-10 justify-between border-b border-dark_black/10 dark:border-white/10">
          {/* Logo & Description */}
          <div className="flex flex-col gap-6 max-w-md">
            <Link to="/">
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
            <p className="opacity-60 text-base">
              Empowering businesses with innovative solutions. Let's create something amazing together.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              {siteConfig.socials.map((social) => (
                <a
                  key={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-60 transition-opacity"
                  href={social.href}
                >
                  <img
                    alt={social.name}
                    width={20}
                    height={20}
                    className="dark:hidden"
                    src={social.lightIcon}
                  />
                  <img
                    alt={social.name}
                    width={20}
                    height={20}
                    className="dark:block hidden"
                    src={social.darkIcon}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid sm:grid-cols-3 gap-6">
            {/* Sitemap */}
            <div className="flex flex-col gap-4">
              <p className="font-medium text-foreground">Sitemap</p>
              <ul className="flex flex-col gap-3 list-none p-0 m-0">
                <li className="text-dark_black/60 hover:text-foreground dark:text-white/60 dark:hover:text-white transition-colors">
                  <Link to="/contact">Contact us</Link>
                </li>
                <li className="text-dark_black/60 hover:text-foreground dark:text-white/60 dark:hover:text-white transition-colors">
                  <a href="/#aboutus">About us</a>
                </li>
                <li className="text-dark_black/60 hover:text-foreground dark:text-white/60 dark:hover:text-white transition-colors">
                  <a href="/#work">Work</a>
                </li>
                <li className="text-dark_black/60 hover:text-foreground dark:text-white/60 dark:hover:text-white transition-colors">
                  <a href="/#services">Services</a>
                </li>
                <li className="text-dark_black/60 hover:text-foreground dark:text-white/60 dark:hover:text-white transition-colors">
                  <a href="/#pricing">Pricing</a>
                </li>
              </ul>
            </div>

            {/* Other Pages */}
            <div className="flex flex-col gap-4">
              <p className="font-medium text-foreground">Other Pages</p>
              <ul className="flex flex-col gap-3 list-none p-0 m-0">
                <li className="text-dark_black/60 hover:text-foreground dark:text-white/60 dark:hover:text-white transition-colors">
                  <Link to="/not-found">Error 404</Link>
                </li>
                <li className="text-dark_black/60 hover:text-foreground dark:text-white/60 dark:hover:text-white transition-colors">
                  <a href="#terms">Terms & Conditions</a>
                </li>
                <li className="text-dark_black/60 hover:text-foreground dark:text-white/60 dark:hover:text-white transition-colors">
                  <a href="#privacy">Privacy Policy</a>
                </li>
                <li className="text-dark_black/60 hover:text-foreground dark:text-white/60 dark:hover:text-white transition-colors">
                  <a href="#docs">Documentation</a>
                </li>
              </ul>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col gap-4">
              <p className="font-medium text-foreground">Contact Details</p>
              <p className="text-dark_black/60 dark:text-white/60 m-0">
                {siteConfig.contact.address}
              </p>
              <p className="text-dark_black/60 hover:text-foreground dark:text-white/60 dark:hover:text-white transition-colors m-0">
                <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
              </p>
              <p className="text-dark_black/60 hover:text-foreground dark:text-white/60 dark:hover:text-white transition-colors m-0">
                <a href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phone}</a>
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <p className="text-dark_black/60 dark:text-white/60 text-sm">
            ©2026 Awake. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
