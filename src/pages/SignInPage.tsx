import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AwakeButton } from "@/components/common/AwakeButton";

export const SignInPage: React.FC = () => {
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

                <h3 className="text-2xl font-medium text-foreground mb-6">
                  Sign in to your account
                </h3>

                {/* Social Sign In Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 items-center mb-6">
                  <button
                    type="button"
                    className="flex w-full items-center justify-center gap-2.5 rounded-full border border-border p-3 text-foreground bg-transparent hover:bg-dark_black/5 dark:hover:bg-white/5 transition-colors text-sm font-medium cursor-pointer"
                  >
                    <svg className="size-4" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.24v3.15C3.26 21.36 7.34 24 12 24z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.24C.45 8.15 0 9.99 0 12s.45 3.85 1.24 5.42l4.04-3.15z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.24 6.58l4.04 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                      />
                    </svg>
                    Google
                  </button>

                  <button
                    type="button"
                    className="flex w-full items-center justify-center gap-2.5 rounded-full border border-border p-3 text-foreground bg-transparent hover:bg-dark_black/5 dark:hover:bg-white/5 transition-colors text-sm font-medium cursor-pointer"
                  >
                    <svg className="size-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    GitHub
                  </button>
                </div>

                <div className="relative my-6 block text-center">
                  <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-border" />
                  <span className="relative z-10 bg-card px-3 text-xs uppercase tracking-wider text-muted-foreground">
                    Or with email
                  </span>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
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
                    <div className="flex justify-between items-center">
                      <label htmlFor="password" className="text-sm font-medium text-foreground">
                        Password
                      </label>
                      <a href="#forgot" className="text-xs text-muted-foreground hover:underline">
                        Forgot password?
                      </a>
                    </div>
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
                      Sign In
                    </AwakeButton>
                  </div>
                </form>

                <p className="mt-6 text-sm text-muted-foreground text-center">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-foreground font-medium hover:underline">
                    Sign Up
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
