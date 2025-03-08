interface Course {
  title: string;
  thumbnail: string;
  description: string;
  duration: string;
  students: string;
  onlinePrice: number;
  offlinePrice: number;
  subjects: string[];
  playlist: string;
}

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-lg shadow-md overflow-hidden">
      <img
        src={course.thumbnail}
        alt={course.title}
        loading="lazy"
        className="h-48 w-full object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          {course.title}
        </h3>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          {course.description}
        </p>
        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <p>Duration: {course.duration}</p>
            <p>Students: {course.students}</p>
          </div>
          <div className="text-right">
            <p className="text-primary-600 font-semibold">
              ₹{course.onlinePrice}
            </p>
            <p className="text-sm text-gray-500">Online</p>
            <p className="text-primary-600 font-semibold mt-1">
              ₹{course.offlinePrice}
            </p>
            <p className="text-sm text-gray-500">Offline</p>
          </div>
        </div>
      </div>
    </div>
  );
}
