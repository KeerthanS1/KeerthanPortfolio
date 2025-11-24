"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Eye, Sparkles, Target } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    // { icon: Code2, number: "50+", label: "Projects Built" },
    { icon: Eye, number: "5+", label: "Years Experience" },
    // { icon: Sparkles, number: "99%", label: "Satisfaction Rate" },
    { icon: Target, number: "100%", label: "Pixel Perfect" },
  ];

  return (
    <section id="about" className="min-h-screen py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">About</span> Me
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">
                  I Build <span className="gradient-text">Digital Dreams</span>
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  As a passionate frontend engineer, I specialize in creating
                  immersive web experiences and beautiful mobile application
                  that not only look stunning but also deliver exceptional
                  performance and usability.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My approach combines technical expertise with creative vision,
                  ensuring every project pushes the boundaries of what's
                  possible on the web while maintaining clean, maintainable
                  code.
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    >
                      <Card className="glass text-center p-4">
                        <CardContent className="p-0">
                          <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                          <div className="text-2xl font-bold gradient-text">
                            {stat.number}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {stat.label}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Content - Animated Code Block */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="glass rounded-2xl p-8">
                <div className="flex space-x-2 mb-6">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>

                <div className="font-mono text-sm space-y-4">
                  <div className="flex">
                    <span className="text-purple-400 mr-4">1</span>
                    <span className="text-blue-400">const</span>
                    <span className="text-foreground ml-2">developer =</span>
                    <span className="text-yellow-400 ml-2">{"{"}</span>
                  </div>

                  <div className="flex ml-8">
                    <span className="text-purple-400 mr-4">2</span>
                    <span className="text-foreground">passion:</span>
                    <span className="text-green-400 ml-2">
                      "creating amazing UX"
                    </span>
                  </div>

                  <div className="flex ml-8">
                    <span className="text-purple-400 mr-4">3</span>
                    <span className="text-foreground">skills:</span>
                    <span className="text-yellow-400 ml-2">[</span>
                  </div>

                  <div className="flex ml-16">
                    <span className="text-purple-400 mr-4">4</span>
                    <span className="text-green-400">"React"</span>
                    <span className="text-foreground">,</span>
                    <span className="text-green-400 ml-2">"React Native"</span>
                    <span className="text-foreground">,</span>
                    <span className="text-green-400 ml-2">"TypeScript"</span>
                  </div>

                  <div className="flex ml-16">
                    <span className="text-purple-400 mr-4">5</span>
                    <span className="text-green-400">"Next.js"</span>
                    <span className="text-foreground">,</span>
                    <span className="text-green-400 ml-2">"Animation"</span>
                  </div>

                  <div className="flex ml-8">
                    <span className="text-purple-400 mr-4">6</span>
                    <span className="text-yellow-400">]</span>
                  </div>

                  <div className="flex">
                    <span className="text-purple-400 mr-4">7</span>
                    <span className="text-yellow-400">{"}"}</span>
                  </div>

                  <div className="flex">
                    <span className="text-purple-400 mr-4">8</span>
                    <span className="text-blue-400">export</span>
                    <span className="text-foreground ml-2">default</span>
                    <span className="text-foreground ml-2">developer</span>
                  </div>
                </div>
              </div>

              {/* Floating elements around code block */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full opacity-60"
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full opacity-60"
                animate={{ rotate: -360, scale: [1.2, 1, 1.2] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
