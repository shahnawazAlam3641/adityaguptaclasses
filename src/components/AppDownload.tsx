import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Smartphone, Download } from "lucide-react";

export default function AppDownload() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-8 lg:mb-0"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Download Our Mobile App
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Access study materials, watch lectures, and track your progress on
              the go with our mobile app.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center justify-center">
                <Download className="h-5 w-5 mr-2" />
                Download for Android
              </button>
              <button className="btn-primary flex items-center justify-center">
                <Download className="h-5 w-5 mr-2" />
                Download for iOS
              </button>
            </div>
            <div className="mt-6 text-sm text-gray-600 dark:text-gray-300">
              Available on all major platforms. Free download for enrolled
              students.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-w-5 aspect-h-3">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000"
                alt="AGC Mobile App"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary-400 rounded-full p-4">
              <Smartphone className="h-8 w-8 text-white" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
