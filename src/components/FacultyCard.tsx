interface Faculty {
  name: string;
  image: string;
  subjects: string[];
}

interface FacultyCardProps {
  faculty: Faculty;
}

export default function FacultyCard({ faculty }: FacultyCardProps) {
  return (
    <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-lg shadow-md">
      <img
        src={faculty.image}
        alt={faculty.name}
        loading="lazy"
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="text-lg font-semibold text-center text-gray-800 dark:text-gray-200 mb-2">
        {faculty.name}
      </h3>
      <div className="flex flex-wrap gap-2 justify-center">
        {faculty.subjects.map((subject, index) => (
          <span
            key={index}
            className="px-2 py-1 text-sm bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded"
          >
            {subject}
          </span>
        ))}
      </div>
    </div>
  );
}
