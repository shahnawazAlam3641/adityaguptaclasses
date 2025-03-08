import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  { id: 1, name: "Students Taught", value: "10,000+" },
  { id: 2, name: "Courses Offered", value: "15+" },
  { id: 3, name: "Google Rating", value: "4.9" },
  { id: 4, name: "Toppers Produced", value: "500+" },
];

export default function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-primary-400">
      <div className="container-custom py-12 sm:py-16">
        <div ref={ref} className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.p
                className="text-3xl font-bold text-white sm:text-4xl"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {stat.value}
              </motion.p>
              <p className="mt-2 text-sm font-medium text-primary-100">
                {stat.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
