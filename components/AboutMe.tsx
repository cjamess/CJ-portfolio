"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function AboutMe() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState<string | null>(null);
  const [isCOEModalOpen, setIsCOEModalOpen] = useState(false);

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

  const certificates = [
    { name: "AI Certificate", file: "/PICTURES/Cert/AiCert_Antonio.pdf" },
    { name: "API Certificate", file: "/PICTURES/Cert/API-cert.pdf" },
    { name: "Cybersecurity Certificate", file: "/PICTURES/Cert/CyberSecurityCert_Antonio.pdf" },
    { name: "Database Certificate", file: "/PICTURES/Cert/DatabaseCert_Antonio.pdf" },
    { name: "Programming Language Certificate", file: "/PICTURES/Cert/ProgLangCert_Antonio.pdf" },
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {sections.map((section) => (
                <div
                  key={section.title}
                  className="group bg-gradient-to-br dark:bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-600"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <h3 className="font-bold text-black dark:text-white text-base">
                      {section.title}
                    </h3>
                  </div>
                  <ul className="space-y-2 ml-1">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-gray-700 dark:text-gray-300 text-sm group/item"
                      >
                        <span className="mt-1 text-gray-400 dark:text-gray-500 group-hover/item:text-gray-600 dark:group-hover/item:text-gray-400 transition-colors">
                          ✓
                        </span>
                        <span className="group-hover/item:text-gray-900 dark:group-hover/item:text-gray-100 transition-colors">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Certificate of Employment */}
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
                <h3 className="font-bold text-black dark:text-white text-base mb-3">
                  Certificate of Employment
                </h3>
                <button
                  onClick={() => setIsCOEModalOpen(true)}
                  className="inline-flex items-center gap-2 bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white font-semibold text-sm px-5 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z" />
                  </svg>
                  View COE
                </button>
              </div>

              {/* Certificates */}
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
                <h3 className="font-bold text-black dark:text-white text-base mb-3">
                  Training Certificates
                </h3>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2 bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white font-semibold text-sm px-5 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                  </svg>
                  View Certificates
                </button>
              </div>
            </div>

            {/* COE Modal */}
            <Dialog
              open={isCOEModalOpen}
              onOpenChange={(open) => setIsCOEModalOpen(open)}
            >
              <DialogContent className="!max-w-[60vw] w-[85vw] h-[90vh] max-h-[90vh] flex flex-col p-0">
                <DialogHeader className="p-4 pb-2 flex flex-row items-center justify-between shrink-0">
                  <div className="w-12" />
                  <DialogTitle className="text-xl md:text-2xl font-bold flex-1 text-center px-4">
                    Certificate of Employment
                  </DialogTitle>
                  <div className="w-12" />
                </DialogHeader>
                <div className="flex-1 w-full px-4 pb-4 min-h-0">
                  <iframe
                    src="/PICTURES/Cert/Certificate of Employment.pdf#toolbar=1&navpanes=0"
                    className="w-full h-full rounded-lg border border-gray-300 dark:border-gray-600"
                    title="Certificate of Employment"
                  />
                </div>
              </DialogContent>
            </Dialog>

            {/* Certificates Modal */}
            <Dialog
              open={isModalOpen}
              onOpenChange={(open) => {
                setIsModalOpen(open);
                if (!open) setSelectedCert(null);
              }}
            >
              <DialogContent
                className={`p-0 transition-all duration-300 ${
                  selectedCert
                    ? "!max-w-[60vw] w-[80vw] h-[90vh] max-h-[90vh] flex flex-col"
                    : "max-w-2xl max-h-[80vh]"
                }`}
              >
                {!selectedCert ? (
                  <>
                    <DialogHeader className="p-6 pb-0">
                      <DialogTitle className="text-2xl md:text-3xl font-bold">
                        My Certificates
                      </DialogTitle>
                    </DialogHeader>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
                      {certificates.map((cert) => (
                        <button
                          key={cert.name}
                          onClick={() => setSelectedCert(cert.file)}
                          className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-500 p-6 flex items-center justify-center cursor-pointer hover:scale-105 transform text-left"
                        >
                          <h3 className="font-bold text-black dark:text-white text-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            {cert.name}
                          </h3>
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <DialogHeader className="p-4 pb-2 flex flex-row items-center justify-between shrink-0">
                      <button
                        onClick={() => setSelectedCert(null)}
                        className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white text-2xl font-bold"
                      >
                        ←
                      </button>
                      <DialogTitle className="text-xl md:text-2xl font-bold flex-1 text-center px-4">
                        {certificates.find((c) => c.file === selectedCert)?.name}
                      </DialogTitle>
                      <div className="w-12" />
                    </DialogHeader>
                    <div
                      className="flex-1 w-full px-4 pb-4 min-h-0"
                    >
                      <iframe
                        src={`${selectedCert}#toolbar=1&navpanes=0`}
                        className="w-full h-full rounded-lg border border-gray-300 dark:border-gray-600"
                        title={certificates.find((c) => c.file === selectedCert)?.name}
                      />
                    </div>
                  </>
                )}
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
}