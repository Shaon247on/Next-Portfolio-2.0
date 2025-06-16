"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectType } from "./ProjectList";
import AnimatedExternalLink from "../ui/AnimatedExternalLink";
import Image from "next/image";

// TypeScript interfaces
interface ProjectProps {
  project: ProjectType;
  index: number;
  selectedProject: string | null;
  onMouseEnter: (slug: string) => void;
  onMouseLeave: () => void;
  isMobile: boolean;
}

const Project: React.FC<ProjectProps> = ({
  project,
  index,
  selectedProject,
  onMouseEnter,
  onMouseLeave,
  isMobile,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [showCredentials, setShowCredentials] = useState<boolean>(false);

  const handleMouseEnter = (): void => {
    setIsHovered(true);
    onMouseEnter(project.slug);
  };

  const handleMouseLeave = (): void => {
    setIsHovered(false);
    onMouseLeave();
  };

  const handleProjectClick = (): void => {
    window.open(project.liveLink, "_blank", "noopener,noreferrer");
  };

  const handleGithubClick = (e: React.MouseEvent): void => {
    e.stopPropagation();
    window.open(project.codeBase, "_blank", "noopener,noreferrer");
  };

  const toggleCredentials = (e: React.MouseEvent): void => {
    e.stopPropagation();
    setShowCredentials(!showCredentials);
  };

  const copyToClipboard = async (text: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <motion.div
      className="project-item group leading-none py-5 border-b first:!pt-0 last:pb-0 last:border-none border-gray-800 transition-all duration-300 cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ x: 10 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
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
              {index === 0 ? (
                <Image
                  src="/Restora.png"
                  alt="Restora Dashboard page"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto object-cover object-top"
                  priority
                />
              ) : index === 1 ? (
                <Image
                  src="/VictoryVault.png"
                  alt="Victory Vault Dashboard"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto object-cover object-top"
                  priority
                />
              ) : index === 2 ? (
                <Image
                  src="/Reflect-Radar.png"
                  alt="Reflect Radar page"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto object-cover object-top"
                  priority
                />
              ) : (
                <Image
                  src="/Aamar-Dokan.png"
                  alt="Aminul - Frontend Developer"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto object-cover object-top"
                  priority
                />
              )}
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
          <motion.h4
            className="text-3xl md:text-6xl flex gap-4 font-bold transition-all duration-700 bg-gradient-to-r from-blue-500 to-white from-[50%] to-[50%] bg-[length:200%] bg-right bg-clip-text text-transparent group-hover:bg-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
            onClick={handleProjectClick}
          >
            {project.title}
            <span className="text-white">
              <AnimatedExternalLink isHovered={isHovered} />
            </span>
          </motion.h4>

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
            {/* GitHub Link Button */}
            <button
              onClick={handleGithubClick}
              className="inline-flex items-center gap-2 px-3 py-1 text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-md transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Source Code
            </button>

            {/* Login Info Button */}
            {project.credentials && (
              <button
                onClick={toggleCredentials}
                className="inline-flex items-center gap-2 px-3 py-1 text-xs bg-blue-600 hover:bg-blue-500 text-white rounded-md transition-all duration-200"
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
                    d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                  />
                </svg>
                Login Info
              </button>
            )}
          </motion.div>

          {/* Credentials Panel */}
          {showCredentials && (
            <motion.div
              className="mt-3 p-3 bg-gray-900/50 border border-gray-700 rounded-lg lg:w-1/2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h5 className="text-sm font-semibold text-white mb-2">
                Test Login Credentials:
              </h5>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">Username:</span>
                  <div className="flex items-center gap-2">
                    <code className="text-xs bg-gray-800 px-2 py-1 rounded text-green-400">
                      {project?.credentials?.username}
                    </code>
                    {project?.credentials && (
                      <button
                        onClick={() =>
                          copyToClipboard(
                            project?.credentials?.username as string
                          )
                        }
                        className="text-gray-400 hover:text-white transition-colors"
                        title="Copy username"
                      >
                        <svg
                          className="w-3 h-3"
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
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">Password:</span>
                  <div className="flex items-center gap-2">
                    {project.codeBase && (
                      <code className="text-xs bg-gray-800 px-2 py-1 rounded text-green-400">
                        {project?.credentials?.password}
                      </code>
                    )}
                    <button
                      onClick={() =>
                        copyToClipboard(
                          project?.credentials?.password as string
                        )
                      }
                      className="text-gray-400 hover:text-white transition-colors"
                      title="Copy password"
                    >
                      <svg
                        className="w-3 h-3"
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
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
