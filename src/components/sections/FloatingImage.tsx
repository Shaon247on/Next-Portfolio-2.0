"use client";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { useEffect } from "react";
import { PROJECTS } from "./ProjectList";
import Image from "next/image";

const FloatingImage = ({
  selectedProject,
  mousePosition,
  containerRef,
}: {
  selectedProject: string | null;
  mousePosition: { x: number; y: number };
  containerRef: React.RefObject<HTMLDivElement>;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  useEffect(() => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const containerWidth = rect.width;
    const containerHeight = rect.height;

    // Base position: right side of the container
    const baseX = containerWidth - 500; // Position from right edge (increased for larger image)
    const baseY = containerHeight / 2 - 250; // Center vertically (increased for larger image)

    // Calculate mouse influence (much more subtle)
    const mouseInfluenceX =
      (mousePosition.x - rect.left - containerWidth / 2) * 0.05; // 5% influence
    const mouseInfluenceY =
      (mousePosition.y - rect.top - containerHeight / 2) * 0.05; // 5% influence

    x.set(baseX + mouseInfluenceX);
    y.set(baseY + mouseInfluenceY);
  }, [mousePosition, x, y]);

  if (!selectedProject) return null;

  // Get project image based on slug
  const getProjectImage = (slug: string) => {
    const imageMap: { [key: string]: string } = {
      "sports-coaching-platform": "/ballmastery.png",
      "job-training-platform": "/api/placeholder/600/400",
      "geography-quiz-platform": "/geography.png",
      "business-platform": "/oxdoug.png",
      "math-platform": "/mathos.png",
      "Competition Platform": "/VictoryVault.png",
      "Social Community Platform": "/Reflect-Radar.png",
    };

    return imageMap[slug] || "/api/placeholder/600/400";
  };

  return (
    <motion.div
      className="absolute top-0 left-0 z-10 pointer-events-none max-w-[500px] max-h-[700px] overflow-hidden rounded-lg shadow-2xl"
      style={{
        x: springX,
        y: springY,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
    >
      <AnimatePresence mode="wait">
        {PROJECTS.map(
          (project) =>
            selectedProject === project.slug && (
              <motion.div
                key={project.slug}
                className="relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Project image */}
                <div className="relative w-auto h-auto bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-blue-500/20 rounded-lg overflow-hidden">
                  <Image
                    src={getProjectImage(project.slug)}
                    alt={`${project.title} Preview`}
                    width={500}
                    height={700}
                    className="w-auto h-auto min-w-[350px] max-w-[500px] max-h-[700px] object-contain"
                    priority
                  />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
              </motion.div>
            )
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FloatingImage;