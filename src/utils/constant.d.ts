interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  students: string;
  subjects: string[];
  features: string[];
  onlinePrice: string;
  offlinePrice: string;
  playlist: string;
}

export interface DemoVideo {
  id: number;
  title: string;
  videoId: string;
  embedUrl: string;
}

interface FacultyMember {
  name: string;
  role: string;
  subjects: string[];
  image: string;
}

export const courseData: Record<string, Course>;
export const demoVideos: DemoVideo[];
export const facultyMembers: FacultyMember[];
