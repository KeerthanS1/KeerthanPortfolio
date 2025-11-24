"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [clickedSkill, setClickedSkill] = useState<string | null>(null);

  const skills = [
    {
      name: "React",
      icon: "react.png",
      website: "https://reactjs.org",
      color: "",
    },
    {
      name: "Next.js",
      icon: "next.svg",
      website: "https://nextjs.org",
      color: "",
    },
    {
      name: "TypeScript",
      icon: "typescript.png",
      website: "https://www.typescriptlang.org",
      color: "",
    },
    {
      name: "JavaScript",
      icon: "javascript.png",
      website: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      color: "",
    },
    {
      name: "HTML",
      icon: "html5.png",
      website: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      color: "",
    },
    {
      name: "CSS",
      icon: "css3.png",
      website: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      color: "",
    },
    {
      name: "Tailwind",
      icon: "tailwind.png",
      color: "",
      website: "https://tailwindcss.com",
    },
    {
      name: "Material UI",
      icon: "mui.svg",
      color: "",
      website: "https://mui.com",
    },
    {
      name: "Framer Motion",
      icon: "framer.svg",
      color: "",
      website: "https://www.framer.com/motion/",
    },
    {
      name: "Cypress",
      icon: "cypress.jpeg",
      color: "",
      website: "https://www.cypress.io",
    },
    {
      name: "Node.js",
      icon: "node.png",
      color: "",
      website: "https://nodejs.org",
    },
    {
      name: "Redux",
      icon: "redux.png",
      color: "",
      website: "https://redux.js.org/",
    },
  ];

  const handleSkillClick = (website: string, skillName: string) => {
    setClickedSkill(skillName);
    setTimeout(() => {
      window.open(website, "_blank", "noopener,noreferrer");
      setClickedSkill(null);
    }, 300);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const hoverVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      y: -10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const clickVariants = {
    click: {
      scale: 0.9,
      rotate: -5,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <section
      id="skills"
      className="min-h-screen py-20 flex items-center justify-center"
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="gradient-text">Skills</span>
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-3 md:grid-cols-6 gap-8 md:gap-12"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center group cursor-pointer relative"
                whileHover="hover"
                animate={clickedSkill === skill.name ? "click" : "visible"}
                variants={{
                  hover: hoverVariants.hover,
                  click: clickVariants.click,
                }}
                onClick={() => handleSkillClick(skill.website, skill.name)}
              >
                <motion.div
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded-md opacity-0 pointer-events-none"
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  whileHover={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.2 },
                  }}
                >
                  Click
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-black rotate-45"></div>
                </motion.div>

                <motion.div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-2xl glass flex items-center justify-center text-2xl md:text-3xl mb-3 relative overflow-hidden"
                  whileHover={{
                    backgroundColor: `${skill.color}20`,
                  }}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12 object-contain"
                    onError={(e) => {
                      // Fallback if SVG doesn't load
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      target.nextElementSibling?.classList.remove("hidden");
                    }}
                  />

                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 opacity-0"
                    style={{ borderColor: skill.color }}
                    whileHover={{
                      opacity: 1,
                    }}
                    transition={{ duration: 0.2 }}
                  />

                  {clickedSkill === skill.name && (
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2"
                      style={{ borderColor: skill.color }}
                      initial={{ scale: 1, opacity: 1 }}
                      animate={{ scale: 1.5, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>

                <motion.span
                  className="text-sm font-medium text-muted-foreground"
                  whileHover={{
                    color: skill.color,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {skill.name}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
