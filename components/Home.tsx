import { Github, Mail, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <section
      className="min-h-screen flex items-center justify-center bg-white dark:bg-black px-6 py-20"
      id="home"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <div className="mb-8">
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">
              Hello! I am
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-white mb-4">
              Christian James A. Antonio.
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6">
              a Full-Stack Developer
            </h2>
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-8 max-w-md">
            Thank you for visiting my portfolio! Feel free to browse through my
            skills, experience, and projects to learn more about what I do.
            Let's connect—reach out to me on social media anytime.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://github.com/cjamess"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-80 transition"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.facebook.com/ploouuuf/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-black dark:border-white text-black dark:text-white rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://mail.google.com/mail/u/1/#inbox?compose=new"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-black dark:border-white text-black dark:text-white rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
              aria-label="Gmail"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/plouf/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-black dark:border-white text-black dark:text-white rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Right — Redesigned Photo Presentation */}
        <div className="hidden md:flex items-center justify-center">
          <div className="relative w-full max-w-[480px] aspect-[4/5]">

            {/* Background geometric accent — offset square */}
            <div className="absolute top-4 right-4 w-full h-full rounded-2xl border-2 border-black dark:border-white opacity-10" />

            {/* Second offset layer for depth */}
            <div className="absolute top-2 right-2 w-full h-full rounded-2xl border border-black dark:border-white opacity-20" />

            {/* Main photo card */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/PICTURES/Me.jpg"
                alt="Christian James A. Antonio"
                fill
                className="object-cover object-top"
              />

              {/* Subtle gradient overlay at bottom for badge readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Bottom name badge */}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <p className="text-white/70 text-xs font-medium tracking-widest uppercase mb-0.5">
                    Full-Stack Developer
                  </p>
                  <p className="text-white text-lg font-bold leading-tight">
                    Christian James
                  </p>
                </div>
                {/* Available dot */}
                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-white text-xs font-medium">Available</span>
                </div>
              </div>
            </div>

            {/* Floating top-left tag */}
            <div className="absolute -top-4 -left-4 bg-black dark:bg-white text-white dark:text-black text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-lg shadow-lg">
              Portfolio 2026
            </div>

            {/* Decorative dot grid — bottom-right corner */}
            <div
              className="absolute -bottom-6 -right-6 w-24 h-24 opacity-20 dark:opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle, currentColor 1.5px, transparent 1.5px)",
                backgroundSize: "8px 8px",
                color: "black",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}