import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AwakeButton } from "@/components/common/AwakeButton";

export const SignUpPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <main>
      <section className="relative overflow-hidden min-h-[calc(100vh-100px)] flex items-center">
        <div className="relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-hero-glow-from before:via-hero-glow-via before:to-hero-glow-to before:rounded-full before:top-24 before:blur-3xl before:-z-10">
          <div className="container">
            <div className="flex justify-center">
              <div className="relative shadow-xl mx-auto max-w-lg w-full overflow-hidden rounded-2xl bg-card border border-border px-8 py-14 sm:px-12 text-center transition-colors">
                {/* Logo */}
                <div className="mb-8 flex justify-center">
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
                </div>

                <h3 className="text-2xl font-medium text-foreground mb-6">Create your account</h3>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="fullname" className="text-sm font-medium text-foreground">
                      Full Name
                    </label>
                    <input
                      id="fullname"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-full border border-border px-5 py-3 h-12 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-dark_black dark:focus:border-white/50 transition-colors text-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-full border border-border px-5 py-3 h-12 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-dark_black dark:focus:border-white/50 transition-colors text-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="password" className="text-sm font-medium text-foreground">
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      required
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full rounded-full border border-border px-5 py-3 h-12 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-dark_black dark:focus:border-white/50 transition-colors text-sm"
                    />
                  </div>

                  <div className="mt-2 flex justify-center">
                    <AwakeButton type="submit" className="w-full">
                      Sign Up
                    </AwakeButton>
                  </div>
                </form>

                <p className="mt-6 text-sm text-muted-foreground text-center">
                  Already have an account?{" "}
                  <Link to="/signin" className="text-foreground font-medium hover:underline">
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
