import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What are the available modes of learning?",
    answer: "We offer both online and offline classes. Online classes are conducted through our interactive platform with live sessions, while offline classes are held at our Kolkata center with state-of-the-art facilities and personal attention.",
  },
  {
    question: "How can I enroll in a course?",
    answer: "You can enroll by visiting our center, calling our admission helpline, or filling out the online enrollment form on our website. We also offer WhatsApp support for quick enrollment and queries.",
  },
  {
    question: "Are study materials provided?",
    answer: "Yes, comprehensive study materials, practice papers, and online resources are provided to all enrolled students. Our study materials are regularly updated and aligned with the latest curriculum.",
  },
  {
    question: "Do you offer doubt clearing sessions?",
    answer: "Yes, we have regular doubt clearing sessions both online and offline. Students can also schedule one-on-one sessions with faculty. We ensure no doubt goes unresolved.",
  },
  {
    question: "What is the fee structure?",
    answer: "Fee structure varies by course and mode of learning. We offer flexible payment options and early bird discounts. Please contact our admission team for detailed information about specific courses.",
  },
  {
    question: "Is there a demo class available before joining?",
    answer: "Yes, we offer free demo classes for all our courses. You can attend both online and offline demo sessions to experience our teaching methodology firsthand.",
  },
  {
    question: "What is the batch size for offline classes?",
    answer: "We maintain a limited batch size of 30-35 students to ensure personal attention and interactive learning environment. This helps in better understanding and doubt resolution.",
  },
  {
    question: "Do you provide placement assistance?",
    answer: "Yes, we provide placement assistance for our professional courses. We have tie-ups with leading companies and organize campus interviews regularly.",
  },
];

export default function FAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const contentVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        height: {
          duration: 0.3,
        },
        opacity: {
          duration: 0.25,
          delay: 0.15,
        },
      },
    },
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Find answers to common questions about our courses and teaching methodology
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="mb-4"
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <span className="text-left font-medium text-gray-900 dark:text-white">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={contentVariants}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-b-lg">
                      <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}