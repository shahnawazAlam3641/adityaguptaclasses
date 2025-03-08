import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  BookOpen,
  Users,
  Clock,
  Check,
  Youtube,
} from "lucide-react";
import { courseData, facultyMembers } from "../utils/constant";

export default function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courseData[id as keyof typeof courseData];

  // Add useEffect to scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    if (course) {
      const seoTitle = `${course.title} Course in Kolkata | AGC - Aditya Gupta Classes`;
      const seoDescription = `Join ${course.title} at AGC, Kolkata's premier commerce coaching. ${course.description} Expert faculty, comprehensive study material, and proven results. Enroll now!`;

      document
        .querySelector('meta[name="description"]')
        ?.setAttribute("content", seoDescription);
      document
        .querySelector('meta[property="og:title"]')
        ?.setAttribute("content", seoTitle);
      document
        .querySelector('meta[property="og:description"]')
        ?.setAttribute("content", seoDescription);
      document
        .querySelector('meta[property="twitter:title"]')
        ?.setAttribute("content", seoTitle);
      document
        .querySelector('meta[property="twitter:description"]')
        ?.setAttribute("content", seoDescription);
      document.title = seoTitle;
    }
  }, [course]);

  if (!course) {
    return (
      <div className="container-custom py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Course not found
          </h2>
          <button onClick={() => navigate("/")} className="mt-4 btn-primary">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <button
            onClick={() => navigate("/")}
            className="mb-8 flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-400 dark:hover:text-primary-500"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Courses
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex justify-center items-center">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="max-w-full h-[400px] object-contain rounded-lg shadow-lg"
              />
            </div>

            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {course.title}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {course.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-primary-400 mr-2" />
                  <span className="text-gray-600 dark:text-gray-300">
                    {course.duration}
                  </span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-primary-400 mr-2" />
                  <span className="text-gray-600 dark:text-gray-300">
                    {course.students} Students
                  </span>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Course Fee
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600 dark:text-gray-300">Online</p>
                    <p className="text-2xl font-bold text-primary-400">
                      {course.onlinePrice}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-300">Offline</p>
                    <p className="text-2xl font-bold text-primary-400">
                      {course.offlinePrice}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href={`https://wa.me/919876543210?text=Hi, I'm interested in the ${course.title} course and would like to enroll.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-primary inline-flex justify-center"
                >
                  Enroll Now
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Subjects Covered
              </h3>
              <ul className="space-y-4">
                {course.subjects.map((subject, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <BookOpen className="w-5 h-5 text-primary-400 mr-3" />
                    {subject}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Course Features
              </h3>
              <ul className="space-y-4">
                {course.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <Check className="w-5 h-5 text-primary-400 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Demo Classes
            </h3>
            <div className="flex justify-center">
              <a
                href={`https://www.youtube.com/playlist?list=${course.playlist}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-colors duration-200"
              >
                <Youtube className="w-5 h-5 mr-2" />
                Watch Demo Classes
              </a>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Our Faculty
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {facultyMembers.map((faculty, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {faculty.name}
                    </h4>
                    <p className="text-primary-400 mt-1">{faculty.role}</p>
                    <div className="mt-4">
                      <h5 className="text-sm font-medium text-gray-900 dark:text-white">
                        Subjects:
                      </h5>
                      <ul className="mt-2 space-y-1">
                        {faculty.subjects.map((subject, i) => (
                          <li
                            key={i}
                            className="text-sm text-gray-600 dark:text-gray-300"
                          >
                            {subject}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
