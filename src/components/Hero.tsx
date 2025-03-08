import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Calculator, TrendingUp, Award } from "lucide-react";

const floatingIcons = [
  { Icon: BookOpen, delay: 0 },
  { Icon: Calculator, delay: 0.2 },
  { Icon: TrendingUp, delay: 0.4 },
  { Icon: Award, delay: 0.6 },
];

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-900 py-16 sm:py-24">
      <div className="container-custom">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block">Excellence in</span>
                <span className="block text-primary-400">
                  Commerce Education
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Join Kolkata's premier commerce coaching institute led by Aditya
                Gupta. Transform your academic journey with expert guidance and
                comprehensive learning.
              </p>
              <div className="mt-8 sm:mt-10">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    window.location.href = "#courses";
                  }}
                  className="btn-primary"
                >
                  Explore Courses
                </motion.button>
              </div>
            </motion.div>
          </div>

          <div className="relative mt-12 lg:mt-0">
            <div className="relative">
              <img
                className="relative mx-auto rounded-lg shadow-2xl"
                src="https://yt3.ggpht.com/7Tm_e04vqupAQAmIttgOQdrzcf-vqpOQ4xwZA3FCfMTxyMUDf_IKJeMjl2y3fevs4q-PAxjGO4YV0MU=s1600-rw-nd-v1"
                alt="Aditya Gupta teaching"
              />

              {/* Floating Icons */}
              {floatingIcons.map(({ Icon, delay }, index) => (
                <motion.div
                  key={index}
                  className="absolute"
                  style={{
                    top: `${25 * index}%`,
                    right: index % 2 === 0 ? "10%" : "80%",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: [0, -10, 0],
                  }}
                  transition={{
                    delay,
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg">
                    <Icon className="w-6 h-6 text-primary-400" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
