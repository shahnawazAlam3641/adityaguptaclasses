import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Linkedin, Mail } from "lucide-react";

const faculty = [
  {
    id: 1,
    name: "Aditya Gupta",
    role: "Founder & Lead Instructor",
    subjects: ["Advanced Accountancy", "Business Studies"],
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    linkedin: "#",
    email: "aditya@agc.com",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Senior Faculty",
    subjects: ["Economics", "Business Mathematics"],
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    linkedin: "#",
    email: "priya@agc.com",
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    role: "Course Coordinator",
    subjects: ["Cost Accounting", "GST"],
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    linkedin: "#",
    email: "rajesh@agc.com",
  },
];

export default function Faculty() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="faculty" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Meet Our Expert Faculty
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Learn from experienced professionals who are passionate about
            teaching
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculty.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary-400">
                  {member.role}
                </p>
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                    Subjects:
                  </h4>
                  <ul className="mt-2 space-y-1">
                    {member.subjects.map((subject, i) => (
                      <li
                        key={i}
                        className="text-sm text-gray-600 dark:text-gray-300"
                      >
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 flex space-x-4">
                  <a
                    href={member.linkedin}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-400"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-400"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
