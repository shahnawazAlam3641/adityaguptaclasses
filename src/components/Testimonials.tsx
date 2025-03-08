import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content:
      "AGC's structured approach and expert faculty helped me secure AIR 5 in CA Foundation. The study material and mock tests were invaluable.",
    author: "Rahul Mehta",
    position: "CA Foundation AIR 5",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 2,
    content:
      "The commerce plus program gave me a strong foundation in business studies. The practical examples and case studies made learning enjoyable.",
    author: "Priya Singh",
    position: "Class 12 - 98% in Commerce",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 3,
    content:
      "The faculty's dedication and personal attention to each student sets AGC apart. They don't just teach, they mentor you towards success.",
    author: "Amit Kumar",
    position: "CA Inter AIR 15",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 4,
    content:
      "AGC's structured approach and expert faculty helped me secure AIR 5 in CA Foundation. The study material and mock tests were invaluable.",
    author: "Rahul Mehta",
    position: "CA Foundation AIR 5",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 5,
    content:
      "The commerce plus program gave me a strong foundation in business studies. The practical examples and case studies made learning enjoyable.",
    author: "Priya Singh",
    position: "Class 12 - 98% in Commerce",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 6,
    content:
      "The faculty's dedication and personal attention to each student sets AGC apart. They don't just teach, they mentor you towards success.",
    author: "Amit Kumar",
    position: "CA Inter AIR 15",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 7,
    content:
      "AGC's structured approach and expert faculty helped me secure AIR 5 in CA Foundation. The study material and mock tests were invaluable.",
    author: "Rahul Mehta",
    position: "CA Foundation AIR 5",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 8,
    content:
      "The commerce plus program gave me a strong foundation in business studies. The practical examples and case studies made learning enjoyable.",
    author: "Priya Singh",
    position: "Class 12 - 98% in Commerce",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 9,
    content:
      "The faculty's dedication and personal attention to each student sets AGC apart. They don't just teach, they mentor you towards success.",
    author: "Amit Kumar",
    position: "CA Inter AIR 15",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            What Our Students Say
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Success stories from our alumni
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 relative shadow-lg"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary-200" />
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {testimonial.content}
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-primary-400">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
