import { Laptop } from "lucide-react";
import Image from "next/image";

export default function Experience() {
  const experiences = [
    {
      company: "IntraCode IT Solutions Inc.",
      position: "Full-Stack Developer and Quality Assurance Engineer",
      duration: "Aug 2025 - Present",
      description:
        "at IntraCode IT Solutions Inc., I am responsible for developing and maintaining Payroll System Web applications using PHP Laravel. I also conduct quality assurance testing to ensure the functionality and performance of our products meet high standards.",
      icon: "intra",
    },
  ];

  const renderIcon = (icon: string) => {
    switch (icon) {
      case "intra":
        return (
          <Image
            src="/PICTURES/Intralogo.png"
            alt="IntraCode IT Solutions Inc."
            width={40}
            height={40}
            className="object-contain"
          />
        );
      case "tresh":
        return (
          <Image
            src="/PICTURES/Tresh-logo.png"
            alt="TRESH"
            width={40}
            height={40}
            className="object-contain"
          />
        );
      case "apple":
        return (
          <svg className="w-10 h-10 text-gray-800 dark:text-gray-100" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.3-3.16-2.53-1.44-2.46-2.14-6.11-.67-7.84.92-1.22 2.37-1.29 3.26-.27.52.57 1.45 1.9 2.54 1.9.37 0 .74-.15 1.07-.34.55-.31 1.06-.75 1.68-1.25-2.6-2.41-4.07-6.24-1.86-9.25 1.46-1.7 4.29-1.48 6.3.4.72.73 1.29 1.7 1.77 2.51 1.53-1.41 2.74-2.37 3.95-1.85 1.28.59 1.7 2.5 1.28 3.92-.3.96-.68 1.76-1.45 2.69-.2.25-.36.43-.55.65.53 2.65.38 7.32-.78 8.87zM12.62 5.44c-1.1-1.19-3.1-.45-3.41 1.4-.17 1.15.5 2.4 1.95 2.4.83 0 1.55-.47 1.79-1.36.25-.84-.14-1.73-.33-2.44z"/>
          </svg>
        );
      default:
        return <Laptop className="w-10 h-10" />;
    }
  };

  return (
    <section className="py-20 px-6 bg-gray-900 dark:bg-gray-100" id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white dark:text-black mb-16">
          My Experience
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border border-gray-700 dark:border-gray-300 rounded-lg p-6 hover:border-gray-500 dark:hover:border-gray-600 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  {renderIcon(exp.icon)}
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-white dark:text-black">
                      {exp.position} at {exp.company}
                    </h3>
                    <span className="text-gray-400 dark:text-gray-600 text-sm">
                      {exp.duration}
                    </span>
                  </div>

                  <p className="text-gray-300 dark:text-gray-700 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="border border-dashed border-gray-600 dark:border-gray-400 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-white dark:text-black mb-2">
              More Experiences Coming Soon
            </h3>
            <p className="text-gray-400 dark:text-gray-600">
              Stay tuned for more exciting opportunities and experiences!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}