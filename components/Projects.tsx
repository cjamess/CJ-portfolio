"use client";

import { ExternalLink, Images, ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Project = {
  number: string;
  title: string;
  description: string;
  image: string;
  link: string;
  imageOnLeft: boolean;
  role: string;
  skills: string[];
  pictures: string[];
};

export default function Projects() {
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const [modalType, setModalType] = useState<"school" | "personal" | null>(null);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const schoolProjects: Project[] = [
    {
      number: "01",
      title: "Imajica Aesthetics",
      description:
        "a web-based ERP System. Including Point of Sale (POS), Staff Commission Management, Product Management and Inventory Management.",
      image: "/PICTURES/imajica.jpg",
      link: "#",
      imageOnLeft: true,
      role: "Full Stack Developer and Quality Assurance Engineer",
      skills: ["PHP Laravel"],
      pictures: [],
    },
    {
      number: "02",
      title: "Imajica Aesthetics Modular",
      description:
        "A modular architecture implemented within a payroll system mainly for hiring employees.",
      image: "/PICTURES/imajica.jpg",
      link: "#",
      imageOnLeft: false,
      role: "Full Stack Developer and Quality Assurance Engineer",
      skills: ["PHP Laravel"],
      pictures: [],
    },
    {
      number: "03",
      title: "Shinryo",
      description:
        "A private HRIS focused on improving internal processes such as DTR computations, and payroll management.",
      image: "/PICTURES/shinryo.jpg",
      link: "#",
      imageOnLeft: true,
      role: "Quality Assurance Engineer",
      skills: ["Quality Assurance", "Testing"],
      pictures: [],
    },
  ];

  const personalProjects: Project[] = [
    {
      number: "01",
      title: "Cuisining",
      description:
        "a 3D simulation web-based game designed to assess the user's cooking knowledge and experience. Through interactive training, the game provides a set of instructions to guide players, helping them better understand cooking techniques and processes.",
      image: "/PICTURES/cuisining1.jpg",
      link: "#",
      imageOnLeft: false,
      role: "Assets Creation and Game Designer",
      skills: ["Blender", "Unity"],
      pictures: ["/PICTURES/cuisiningpic1.jpg", "/PICTURES/cuisiningpic.jpg", "/PICTURES/cuisining2.jpg"],
    },
    {
      number: "02",
      title: "Stocker",
      description:
        "a stock investment simulator that helps users practice trading in a risk-free environment, building financial literacy and decision-making skills. By using Monte Carlo Simulation, it shows different possible stock outcomes over time, teaching the importance of risk and uncertainty in investments.",
      image: "/PICTURES/stockerr.png",
      link: "#",
      imageOnLeft: true,
      role: "Documentation Engineer",
      skills: ["Documentation", "Technical Writing"],
      pictures: ["/PICTURES/stocker1.jpg", "/PICTURES/stocker2.jpg", "/PICTURES/stocker3.jpg"],
    },
    {
      number: "03",
      title: "TRESH",
      description:
        "an AI-Enabled IoT Smart Bin for Automated Waste Sorting and Sealing, Collection Alerts, and Incentive-Based Rewards",
      image: "/PICTURES/treshy.png",
      link: "#",
      imageOnLeft: false,
      role: "Full Stack Developer",
      skills: ["PHP Laravel", "Vue.js", "Tailwind CSS", "Ionic Framework"],
      pictures: ["/PICTURES/tresh1.jpg", "/PICTURES/tresh4.jpg", "/PICTURES/tresh2.jpg", "/PICTURES/tresh3.jpg"],
    },
    {
      number: "04",
      title: "Artzwork PC",
      description:
        "Artzwork PC's E-commerce Management System is a comprehensive web-based platform developed using Laravel 11, addressing operational challenges faced by small and medium-sized online retailers.",
      image: "/PICTURES/artzworks.png",
      link: "#",
      imageOnLeft: true,
      role: "Frontend Developer",
      skills: ["Vue.js", "Tailwind CSS"],
      pictures: ["/PICTURES/artzwork1.jpg", "/PICTURES/artzwork2.jpg", "/PICTURES/artzwork.jpg"],
    },
  ];

  const allProjects = { school: schoolProjects, personal: personalProjects };

  const openModal = (index: number, type: "school" | "personal") => {
    setActiveModal(index);
    setModalType(type);
    setGalleryOpen(false);
    setGalleryIndex(0);
  };

  const closeModal = () => {
    setActiveModal(null);
    setModalType(null);
    setGalleryOpen(false);
    setGalleryIndex(0);
  };

  const openGallery = () => {
    setGalleryIndex(0);
    setGalleryOpen(true);
  };

  const prevImage = () =>
    setGalleryIndex((i) =>
      i === 0 ? (activeProject?.pictures.length ?? 1) - 1 : i - 1
    );

  const nextImage = () =>
    setGalleryIndex((i) =>
      i === (activeProject?.pictures.length ?? 1) - 1 ? 0 : i + 1
    );

  const activeProject =
    activeModal !== null && modalType !== null
      ? allProjects[modalType][activeModal]
      : null;

  const renderProjects = (
    list: Project[],
    type: "school" | "personal"
  ) =>
    list.map((project, index) => (
      <div
        key={index}
        className="border border-gray-700 dark:border-gray-300 rounded-lg p-6 hover:border-gray-500 dark:hover:border-gray-600 transition-all"
      >
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Image */}
          <div
            className={`relative w-full md:w-56 h-48 shrink-0 rounded-lg overflow-hidden ${
              !project.imageOnLeft ? "md:order-2" : ""
            }`}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div
            className={`flex flex-col justify-center flex-1 ${
              !project.imageOnLeft ? "md:order-1" : ""
            }`}
          >
            <p className="text-gray-400 dark:text-gray-600 text-sm font-semibold mb-1">
              {project.number}
            </p>
            <h3 className="text-xl font-bold text-white dark:text-black mb-3">
              {project.title}
            </h3>
            <p className="text-gray-300 dark:text-gray-700 leading-relaxed mb-4 text-sm">
              {project.description}
            </p>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => openModal(index, type)}
                className="text-white dark:text-black hover:opacity-70 p-0"
                aria-label="View project"
              >
                <ExternalLink size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    ));

  return (
    <section className="py-20 px-6 bg-gray-900 dark:bg-gray-100" id="projects">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white dark:text-black mb-16">
          My <span className="font-bold">Projects</span>
        </h2>

        {/* Featured Paid Projects */}
        <h3 className="text-2xl md:text-3xl font-bold text-white dark:text-black mb-6">
          FEATURED PAID PROJECTS
        </h3>
        <div className="space-y-6 mb-16">
          {renderProjects(schoolProjects, "school")}
        </div>

        {/* School Projects */}
        <h3 className="text-2xl md:text-3xl font-bold text-white dark:text-black mb-6">
          SCHOOL PROJECTS
        </h3>
        <div className="space-y-6">
          {renderProjects(personalProjects, "personal")}
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!activeProject} onOpenChange={(open) => !open && closeModal()}>
        <DialogContent className="max-w-2xl">
          <DialogHeader className="mb-3">
            <DialogTitle className="text-xl font-bold text-black dark:text-white">
              {activeProject?.title}
            </DialogTitle>
          </DialogHeader>

          {!galleryOpen && (
            <>
              <div className="flex flex-wrap items-start gap-6 pt-2">
                {activeProject?.role && (
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">
                      Role
                    </p>
                    <p className="text-sm font-medium">{activeProject.role}</p>
                  </div>
                )}

                {activeProject?.skills && activeProject.skills.length > 0 && (
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">
                      Skills
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.skills.map((skill, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="rounded-full px-3 py-1 text-sm"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Pictures Button */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700 mt-2">
                <Button
                  variant="outline"
                  onClick={openGallery}
                  disabled={!activeProject?.pictures || activeProject.pictures.length === 0}
                  className="flex items-center gap-2 text-sm"
                >
                  <Images size={16} />
                  Pictures
                  {activeProject?.pictures && activeProject.pictures.length > 0 && (
                    <Badge variant="secondary" className="ml-1 px-2 py-0 text-xs">
                      {activeProject.pictures.length}
                    </Badge>
                  )}
                </Button>
                {(!activeProject?.pictures || activeProject.pictures.length === 0) && (
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                    No pictures available for this project yet.
                  </p>
                )}
              </div>
            </>
          )}

          {/* Inline Gallery (inside the same dialog) */}
          {galleryOpen && activeProject?.pictures && activeProject.pictures.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setGalleryOpen(false)}
                  className="h-7 w-7 text-gray-500 hover:text-black dark:hover:text-white"
                  aria-label="Back to project"
                >
                  <ChevronLeft size={18} />
                </Button>
                <p className="text-sm font-semibold text-black dark:text-white">
                  {activeProject.title} — Pictures
                </p>
              </div>

              {/* Main image viewer */}
              <div className="relative w-full h-72 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                <Image
                  src={activeProject.pictures[galleryIndex]}
                  alt={`${activeProject.title} picture ${galleryIndex + 1}`}
                  fill
                  className="object-contain"
                />

                {activeProject.pictures.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 transition-all"
                      aria-label="Previous"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 transition-all"
                      aria-label="Next"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}

                <div className="absolute bottom-2 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                  {galleryIndex + 1} / {activeProject.pictures.length}
                </div>
              </div>

              {/* Thumbnails */}
              {activeProject.pictures.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {activeProject.pictures.map((pic, i) => (
                    <button
                      key={i}
                      onClick={() => setGalleryIndex(i)}
                      className={`relative shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${
                        i === galleryIndex
                          ? "border-black dark:border-white"
                          : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image src={pic} alt={`Thumbnail ${i + 1}`} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}