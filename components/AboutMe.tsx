import Image from "next/image";

export default function AboutMe() {
  const sections = [
    {
      title: "Educational Attainment",
      items: ["University Of Caloocan City - Congress Extension"],
    },
    {
      title: "Work Experience",
      items: ["Full Stack Developer at Intracode IT Solutions"],
    },
    {
      title: "Hobbies",
      items: [
        "Playing FPS Mobile games",
        "Drinking Coffee",
        "Riding Motorcycle",
        
      ],
    },
    {
      title: "Current Specialization",
      items: ["HRIS Systems", "ERP System"],
    },
  ];

  return (
    <section className="py-20 px-6 bg-white dark:bg-black" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Illustration */}
          <div className="flex items-center justify-center order-2 md:order-1">
            <div className="w-full max-w-md aspect-square border-2 border-black dark:border-white rounded-2xl overflow-hidden">
              <Image
                src="/PICTURES/FORMAL ME.jpg"
                alt="Christian James A. Antonio"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-2">
              About <span className="font-bold">Me</span>
            </h2>
            <hr className="border-black dark:border-white mb-8" />

            <div className="space-y-6">
              {sections.map((section) => (
                <div key={section.title}>
                  <h3 className="font-bold text-black dark:text-white text-base mb-2">
                    {section.title}
                  </h3>
                  <ul className="space-y-1">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm"
                      >
                        <span className="mt-0.5 text-gray-400 dark:text-gray-500">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Certificate of Employment */}
              <div>
                <h3 className="font-bold text-black dark:text-white text-base mb-3">
                  Certificate of Employment
                </h3>
                <a
                  href="/PICTURES/Cert/Certificate of Employment.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-sm px-5 py-3 rounded-xl transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z" />
                  </svg>
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}