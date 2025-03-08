import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { courseData } from "../utils/constant";

// const courseData = {
//   "class-11-commerce": {
//     id: "class-11-commerce",
//     title: "Class 11 Commerce",
//     description:
//       "Comprehensive commerce education for Class 11 students with expert guidance.",
//     thumbnail:
//       "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200",
//     duration: "12 months",
//     students: "500+",
//     subjects: [
//       "Accountancy",
//       "Business Studies",
//       "Economics",
//       "Mathematics",
//       "English",
//     ],
//     features: [
//       "Expert Faculty",
//       "Study Material",
//       "Regular Tests",
//       "Doubt Sessions",
//       "Parent Meetings",
//       "Performance Reports",
//       "Practice Papers",
//       "Career Guidance",
//     ],
//     onlinePrice: "₹15,000",
//     offlinePrice: "₹25,000",
//   },
//   "class-12-commerce": {
//     id: "class-12-commerce",
//     title: "Class 12 Commerce",
//     description:
//       "Complete preparation for Class 12 board exams and competitive exams.",
//     thumbnail:
//       "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200",
//     duration: "12 months",
//     students: "600+",
//     subjects: [
//       "Accountancy",
//       "Business Studies",
//       "Economics",
//       "Mathematics",
//       "English",
//     ],
//     features: [
//       "Board Exam Preparation",
//       "Mock Tests",
//       "Career Guidance",
//       "Performance Analysis",
//       "Study Material",
//       "Doubt Sessions",
//       "Previous Year Papers",
//       "Extra Classes",
//     ],
//     onlinePrice: "₹18,000",
//     offlinePrice: "₹28,000",
//   },
//   "bcom-ccf-sem1": {
//     id: "bcom-ccf-sem1",
//     title: "B.Com CCF Semester 1",
//     description: "Foundation courses in commerce and financial accounting.",
//     thumbnail:
//       "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
//     duration: "6 months",
//     students: "200+",
//     subjects: [
//       "Financial Accounting",
//       "Business Mathematics",
//       "Business Communication",
//       "Business Economics",
//       "Business Environment",
//     ],
//     features: [
//       "Core Subject Coverage",
//       "Practical Training",
//       "Industry Exposure",
//       "Expert Guidance",
//       "Study Material",
//       "Regular Tests",
//       "Doubt Sessions",
//       "Library Access",
//     ],
//     onlinePrice: "₹12,000",
//     offlinePrice: "₹20,000",
//   },
//   "bcom-ccf-sem2": {
//     id: "bcom-ccf-sem2",
//     title: "B.Com CCF Semester 2",
//     description:
//       "Advanced concepts in commerce and corporate accounting with practical applications.",
//     thumbnail:
//       "https://yt3.ggpht.com/R15YXPq2_DczMGVHicrtW2E-ZvSq7qF5GxDOHOW1lcIysQBu94Wz9U_sgU_YOT1td07uccUi5Otlzg=s1600-rw-nd-v1",
//     duration: "6 months",
//     students: "180+",
//     subjects: [
//       "Corporate Accounting",
//       "Cost Accounting",
//       "Business Statistics",
//       "Commercial Law",
//       "Digital Marketing Basics",
//     ],
//     features: [
//       "Advanced Accounting Concepts",
//       "Case Study Analysis",
//       "Industry Projects",
//       "Expert Guidance",
//       "Regular Assessments",
//       "Practical Training",
//       "Doubt Sessions",
//       "Digital Resources",
//     ],
//     onlinePrice: "₹12,000",
//     offlinePrice: "₹20,000",
//   },
//   "bcom-ccf-sem3": {
//     id: "bcom-ccf-sem3",
//     title: "B.Com CCF Semester 3",
//     description:
//       "Specialized courses in corporate finance and taxation with industry exposure.",
//     thumbnail:
//       "https://yt3.ggpht.com/lgEIT6Ehkqx7SgJMGu4Lrania7nkerSGzmgPwaheq1ih_A1uxbKZPkFirDu4UDhvA3_8xTJUuiu_OQ=s1080-rw-nd-v1",
//     duration: "6 months",
//     students: "150+",
//     subjects: [
//       "Advanced Corporate Accounting",
//       "Business Taxation",
//       "Company Law",
//       "Financial Management",
//       "E-Commerce",
//     ],
//     features: [
//       "Industry Expert Sessions",
//       "Tax Filing Practice",
//       "Company Law Cases",
//       "Financial Analysis",
//       "Live Projects",
//       "Mock Interviews",
//       "Career Counseling",
//       "Industry Visits",
//     ],
//     onlinePrice: "₹12,000",
//     offlinePrice: "₹20,000",
//   },
//   "bcom-ccf-sem4": {
//     id: "bcom-ccf-sem4",
//     title: "B.Com CCF Semester 4",
//     description:
//       "Advanced financial management and business economics with practical training.",
//     thumbnail:
//       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
//     duration: "6 months",
//     students: "160+",
//     subjects: [
//       "Advanced Financial Management",
//       "Business Economics",
//       "Auditing",
//       "Information Systems",
//       "Business Ethics",
//     ],
//     features: [
//       "Financial Analysis Tools",
//       "Economic Case Studies",
//       "Audit Practice",
//       "Ethics Workshops",
//       "Industry Projects",
//       "Guest Lectures",
//       "Internship Support",
//       "Placement Training",
//     ],
//     onlinePrice: "₹12,000",
//     offlinePrice: "₹20,000",
//   },
//   "bcom-ccf-sem5": {
//     id: "bcom-ccf-sem5",
//     title: "B.Com CCF Semester 5",
//     description:
//       "Strategic management and advanced accounting with industry integration.",
//     thumbnail:
//       "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
//     duration: "6 months",
//     students: "140+",
//     subjects: [
//       "Strategic Management",
//       "Advanced Accounting",
//       "Corporate Tax Planning",
//       "Investment Management",
//       "Risk Management",
//     ],
//     features: [
//       "Strategic Planning Workshops",
//       "Tax Planning Sessions",
//       "Investment Analysis",
//       "Risk Assessment",
//       "Industry Projects",
//       "Career Guidance",
//       "Mock Interviews",
//       "Placement Support",
//     ],
//     onlinePrice: "₹12,000",
//     offlinePrice: "₹20,000",
//   },
//   "bcom-ccf-sem6": {
//     id: "bcom-ccf-sem6",
//     title: "B.Com CCF Semester 6",
//     description:
//       "Final semester specialization with focus on career preparation.",
//     thumbnail:
//       "https://yt3.ggpht.com/8A0ugyX82sV2ZhHaiiiHcJaPaPY6cjH-ptbEplup-9M4TLHqqctxYT27JkikMQL-JiN1nMdjuWAPhBQ=s1529-rw-nd-v1",
//     duration: "6 months",
//     students: "130+",
//     subjects: [
//       "International Finance",
//       "Project Management",
//       "Business Analytics",
//       "Financial Markets",
//       "Professional Ethics",
//     ],
//     features: [
//       "Industry Integration",
//       "Project Work",
//       "Analytics Training",
//       "Market Analysis",
//       "Ethics Workshop",
//       "Placement Preparation",
//       "Industry Visits",
//       "Alumni Connect",
//     ],
//     onlinePrice: "₹12,000",
//     offlinePrice: "₹20,000",
//   },
//   mba: {
//     id: "mba",
//     title: "MBA",
//     description:
//       "Comprehensive MBA preparation with focus on practical knowledge and industry exposure.",
//     thumbnail:
//       "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200",
//     duration: "24 months",
//     students: "100+",
//     subjects: [
//       "Management Principles",
//       "Financial Management",
//       "Marketing Management",
//       "Human Resource Management",
//       "Operations Management",
//       "Strategic Management",
//       "Business Analytics",
//       "International Business",
//     ],
//     features: [
//       "Industry Expert Sessions",
//       "Case Study Analysis",
//       "Live Projects",
//       "Internship Support",
//       "Placement Assistance",
//       "Leadership Training",
//       "Soft Skills Development",
//       "Research Projects",
//     ],
//     onlinePrice: "₹35,000",
//     offlinePrice: "₹45,000",
//   },
//   bba: {
//     id: "bba",
//     title: "BBA",
//     description:
//       "Comprehensive undergraduate business program with practical exposure.",
//     thumbnail:
//       "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
//     duration: "36 months",
//     students: "120+",
//     subjects: [
//       "Business Management",
//       "Marketing",
//       "Finance",
//       "Human Resources",
//       "Operations",
//       "Business Law",
//       "Economics",
//       "Entrepreneurship",
//     ],
//     features: [
//       "Industry Training",
//       "Case Studies",
//       "Live Projects",
//       "Internships",
//       "Soft Skills",
//       "Placement Support",
//       "Guest Lectures",
//       "Industrial Visits",
//     ],
//     onlinePrice: "₹25,000",
//     offlinePrice: "₹35,000",
//   },
//   "ms-office": {
//     id: "ms-office",
//     title: "MS Office",
//     description:
//       "Comprehensive Microsoft Office suite training for professionals.",
//     thumbnail:
//       "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200",
//     duration: "3 months",
//     students: "200+",
//     subjects: [
//       "MS Word",
//       "MS Excel",
//       "MS PowerPoint",
//       "MS Access",
//       "MS Outlook",
//     ],
//     features: [
//       "Hands-on Training",
//       "Real Projects",
//       "Certificate",
//       "Job Support",
//       "Practice Sessions",
//       "Assessment Tests",
//       "Course Material",
//       "Placement Assistance",
//     ],
//     onlinePrice: "₹8,000",
//     offlinePrice: "₹12,000",
//   },
//   "gst-tally": {
//     id: "gst-tally",
//     title: "GST/Tally",
//     description:
//       "Professional training in GST compliance and Tally software with practical exposure.",
//     thumbnail:
//       "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200",
//     duration: "4 months",
//     students: "150+",
//     subjects: [
//       "GST Fundamentals",
//       "Tally Prime",
//       "GST Returns",
//       "E-Way Bill",
//       "Input Tax Credit",
//     ],
//     features: [
//       "Practical Training",
//       "Live Projects",
//       "GST Portal",
//       "Return Filing",
//       "Case Studies",
//       "Certificate",
//       "Job Support",
//       "Industry Connect",
//     ],
//     onlinePrice: "₹10,000",
//     offlinePrice: "₹15,000",
//   },
//   mcom: {
//     id: "mcom",
//     title: "M.Com",
//     description:
//       "Advanced studies in commerce with specialization options and research focus.",
//     thumbnail:
//       "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
//     duration: "24 months",
//     students: "80+",
//     subjects: [
//       "Advanced Accounting",
//       "Financial Management",
//       "Research Methodology",
//       "Business Economics",
//       "Corporate Law",
//       "Tax Planning",
//       "Strategic Management",
//       "International Finance",
//     ],
//     features: [
//       "Research Projects",
//       "Specialization",
//       "Industry Projects",
//       "Expert Faculty",
//       "Thesis Guidance",
//       "Publication Support",
//       "Seminar Participation",
//       "Career Guidance",
//     ],
//     onlinePrice: "₹30,000",
//     offlinePrice: "₹40,000",
//   },
// };

export default function Courses() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const navigate = useNavigate();

  return (
    <section id="courses" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Comprehensive Commerce Education for Every Stage
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Choose from our carefully crafted courses designed to help you excel
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.values(courseData).map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300"
              onClick={() => navigate(`/course/${course.id}`)}
            >
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {course.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {course.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {course.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-gray-600 dark:text-gray-300"
                    >
                      <Check className="h-5 w-5 text-primary-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">
                      Online
                    </span>
                    <span className="text-lg font-bold text-primary-400">
                      {course.onlinePrice}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">
                      Offline
                    </span>
                    <span className="text-lg font-bold text-primary-400">
                      {course.offlinePrice}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}
