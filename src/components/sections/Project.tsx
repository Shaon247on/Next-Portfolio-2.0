"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectType } from "@/data/projects";
import AnimatedExternalLink from "../ui/AnimatedExternalLink";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

// TypeScript interfaces
interface ProjectProps {
  project: ProjectType;
  index: number;
  selectedProject: string | null;
  expandedProject: string | null;
  onMouseEnter: (slug: string) => void;
  onMouseLeave: () => void;
  onProjectClick: (slug: string) => void;
  isMobile: boolean;
}

// Copy-to-clipboard row used for the demo login credentials
const CredentialField: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => {
  const copyToClipboard = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(value);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm text-gray-400 font-medium">{label}:</span>
      <div className="flex items-center gap-2">
        <code className="text-sm bg-gray-800 px-3 py-1.5 rounded text-green-400 font-mono break-all flex-1 overflow-hidden">
          {value}
        </code>
        <button
          onClick={copyToClipboard}
          className="text-gray-400 hover:text-white transition-colors p-1 flex-shrink-0"
          title={`Copy ${label.toLowerCase()}`}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const Project: React.FC<ProjectProps> = ({
  project,
  index,
  selectedProject,
  expandedProject,
  onMouseEnter,
  onMouseLeave,
  onProjectClick,
  isMobile,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const isExpanded = expandedProject === project.slug;

  const handleMouseEnter = (): void => {
    setIsHovered(true);
    onMouseEnter(project.slug);
  };

  const handleMouseLeave = (): void => {
    setIsHovered(false);
    onMouseLeave();
  };

  const handleRowClick = (): void => {
    onProjectClick(project.slug);
  };

  const handleLinkClick = (e: React.MouseEvent, url: string): void => {
    e.stopPropagation();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      className="project-item group leading-none border-b last:border-none border-gray-800 transition-all duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="py-5 first:!pt-0 cursor-pointer"
        onClick={handleRowClick}
      >
        {/* Mobile Image */}
        {selectedProject === null && isMobile && (
          <motion.div
            className="w-full mb-6 aspect-[3/2] overflow-hidden rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="w-full h-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 flex items-start justify-center p-2 sm:p-4 md:p-6">
              <span className="block w-full h-full max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%]">
                <Image
                  src={project.thumbnail}
                  alt={`${project.title} — ${project.techStack[0]} project preview`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto object-cover object-top"
                  priority={index < 2}
                />
              </span>
            </div>
          </motion.div>
        )}

        <div className="flex gap-2 md:gap-5">
          {/* Project Number */}
          <motion.div
            className="font-mono text-gray-500 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.2 }}
          >
            _{(index + 1).toString().padStart(2, "0")}.
          </motion.div>

          <div className="flex-1">
            {/* Project Title with Gradient Effect */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <h3 className="text-3xl md:text-6xl font-bold transition-all duration-700 bg-gradient-to-r from-blue-500 to-white from-[50%] to-[50%] bg-[length:200%] bg-right bg-clip-text text-transparent group-hover:bg-left">
                {project.title}
              </h3>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-white"
              >
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              className="mt-2 flex flex-wrap gap-3 text-gray-400 text-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.4 }}
            >
              {project.techStack.slice(0, 3).map((tech, idx, stackArr) => (
                <div className="gap-3 flex items-center" key={tech}>
                  <span>{tech}</span>
                  {idx !== stackArr.length - 1 && (
                    <span className="inline-block w-2 h-2 rounded-full bg-gray-600"></span>
                  )}
                </div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="mt-4 flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.5 }}
            >
              {/* Live Deployment Buttons */}
              {project.liveLinks.map((link) => (
                <button
                  key={link.url}
                  onClick={(e) => handleLinkClick(e, link.url)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-md transition-all duration-200 font-medium"
                >
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  {project.liveLinks.length > 1
                    ? `Live — ${link.label}`
                    : link.label}
                </button>
              ))}

              {/* GitHub Repository Buttons */}
              {project.codeBases?.map((repo) => (
                <button
                  key={repo.url}
                  onClick={(e) => handleLinkClick(e, repo.url)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-md transition-all duration-200 font-medium"
                >
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  {repo.label}
                </button>
              ))}

              {/* App Store Download Buttons — promoted to primary when there is
                  no live web deployment to link to */}
              {project.appLinks?.map((app) => (
                <button
                  key={app.url}
                  onClick={(e) => handleLinkClick(e, app.url)}
                  className={`inline-flex items-center gap-2 px-4 py-2 text-sm rounded-md transition-all duration-200 font-medium ${
                    project.liveLinks.length > 0
                      ? "bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white"
                      : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white"
                  }`}
                >
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.093 12l2.605-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
                  </svg>
                  {app.label}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Expandable Details Section - Accordion */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 pt-2 px-2 md:px-5 md:ml-20">
              <div className="glass rounded-2xl p-6 md:p-8 space-y-6 w-full md:w-1/2">
                {/* Project Image */}
                <div className="w-full overflow-hidden rounded-lg bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <Image
                    src={project.thumbnail}
                    alt={`${project.title} dashboard screenshot — built with ${project.techStack
                      .slice(0, 3)
                      .join(", ")}`}
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* Project Description */}
                {project.description && (
                  <div className="overflow-hidden">
                    <h4 className="text-lg font-semibold text-white mb-3">
                      About the Project
                    </h4>
                    <p className="text-gray-300 leading-relaxed break-words">
                      {project.description}
                    </p>
                  </div>
                )}

                {/* Key Features */}
                {project.features && project.features.length > 0 && (
                  <div className="overflow-hidden">
                    <h4 className="text-lg font-semibold text-white mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-gray-300 break-words"
                        >
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="flex-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Complete Tech Stack */}
                <div className="overflow-hidden">
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-gray-800/80 text-gray-300 rounded-lg text-sm font-medium border border-gray-700 break-words"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Admin Credentials */}
                {project.credentials && project.credentials.length > 0 && (
                  <div className="p-4 md:p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20 overflow-hidden">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <svg
                        className="w-5 h-5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                        />
                      </svg>
                      <span className="break-words">
                        {project.credentials.length > 1
                          ? "Demo Login Credentials"
                          : "Admin Login Credentials"}
                      </span>
                    </h4>
                    <div className="space-y-6">
                      {project.credentials.map((credential, idx) => (
                        <div
                          key={credential.email ?? idx}
                          className="space-y-3"
                        >
                          {credential.label && (
                            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full break-words">
                              {credential.label}
                            </span>
                          )}
                          {credential.email && (
                            <CredentialField
                              label="Email"
                              value={credential.email}
                            />
                          )}
                          {credential.password && (
                            <CredentialField
                              label="Password"
                              value={credential.password}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Project;