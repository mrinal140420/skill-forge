import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import apiClient from '@/api/apiClient';

// ===== Types =====
export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: number;
  modules: Module[];
  rating: number;
  students: number;
  category: string;
  thumbnail?: string;
  outcomes?: string[];
  prerequisites?: string[];
}

export interface Module {
  id: string;
  title: string;
  duration: number;
  videoUrl?: string;
  transcript?: string;
  completed: boolean;
}

export interface Enrollment {
  id: string;
  courseId: string;
  userId: string;
  progress: number;
  enrolledAt: string;
}

export interface Quiz {
  id: string;
  courseId: string;
  title: string;
  questions: QuizzQuestion[];
  duration: number;
  attempts: QuizAttempt[];
}

export interface QuizzQuestion {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface QuizAttempt {
  id: string;
  quizId: string;
  userId: string;
  score: number;
  answers: number[];
  completedAt: string;
}

// Mock data for development/fallback
const MOCK_COURSES: Course[] = [
  {
    id: '1',
    title: 'Advanced Data Structures & Algorithms',
    description: 'Master DSA with real-world problem solving',
    instructor: 'John Smith',
    level: 'advanced',
    duration: 40,
    modules: [
      { id: 'm1', title: 'Arrays', duration: 5, completed: false },
      { id: 'm2', title: 'Linked Lists', duration: 5, completed: false },
    ],
    rating: 4.9,
    students: 12500,
    category: 'dsa',
    thumbnail: '📚',
  },
  {
    id: '2',
    title: 'System Design Fundamentals',
    description: 'Learn to design scalable systems',
    instructor: 'Jane Doe',
    level: 'advanced',
    duration: 35,
    modules: [
      { id: 'm1', title: 'Scalability', duration: 5, completed: false },
    ],
    rating: 4.8,
    students: 8900,
    category: 'system-design',
    thumbnail: '🏗️',
  },
];

const MOCK_ENROLLMENTS = [
  {
    id: '1',
    courseId: '1',
    userId: 'user1',
    enrolledAt: new Date().toISOString(),
    progress: 45,
    completed: false,
  },
];

const MOCK_RECOMMENDATIONS = [
  { id: '1', courseId: '1', reason: 'Based on your performance', priority: 'high' },
  { id: '2', courseId: '2', reason: 'Recommended for you', priority: 'medium' },
];

// ===== Courses =====
export const useCourses = (filters?: any) => {
  return useQuery({
    queryKey: ['courses', filters],
    queryFn: async () => {
      try {
        const { data } = await apiClient.get('/api/courses', { params: filters });
        // Ensure data is always an array
        return Array.isArray(data) ? data : data?.courses || MOCK_COURSES;
      } catch (error) {
        console.warn('Failed to fetch courses from API, using mock data', error);
        return MOCK_COURSES;
      }
    },
    retry: 1,
  });
};

export const useCourse = (courseId: string | undefined) => {
  return useQuery({
    queryKey: ['course', courseId],
    queryFn: async () => {
      const { data } = await apiClient.get(`/api/courses/${courseId}`);
      return data as Course;
    },
    enabled: !!courseId,
  });
};

export const useCreateCourse = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (courseData: Partial<Course>) => {
      const { data } = await apiClient.post('/api/courses', courseData);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['courses'] });
    },
  });
};

// ===== Enrollments =====
export const useEnrollments = () => {
  return useQuery({
    queryKey: ['enrollments'],
    queryFn: async () => {
      try {
        const { data } = await apiClient.get('/api/enrollments');
        return data as Enrollment[];
      } catch (error) {
        // Silently fall back to mock data - backend not available
        return MOCK_ENROLLMENTS;
      }
    },
    retry: 1,
  });
};

export const useEnrollCourse = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (courseId: string) => {
      const { data } = await apiClient.post(`/api/enrollments`, { courseId });
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['enrollments'] });
      queryClient.invalidateQueries({ queryKey: ['courses'] });
    },
  });
};

export const useUnenrollCourse = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (enrollmentId: string) => {
      const { data } = await apiClient.delete(`/api/enrollments/${enrollmentId}`);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['enrollments'] });
      queryClient.invalidateQueries({ queryKey: ['courses'] });
    },
  });
};

// ===== Progress =====
export const useProgress = (courseId?: string) => {
  return useQuery({
    queryKey: ['progress', courseId],
    queryFn: async () => {
      const url = courseId 
        ? `/api/progress?courseId=${courseId}`
        : '/api/progress';
      const { data } = await apiClient.get(url);
      return data;
    },
    enabled: true,
  });
};

export const useUpdateProgress = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (progressData: any) => {
      const { data } = await apiClient.post('/api/progress', progressData);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['progress'] });
    },
  });
};

// ===== Quizzes =====
export const useQuiz = (quizId: string | undefined) => {
  return useQuery({
    queryKey: ['quiz', quizId],
    queryFn: async () => {
      const { data } = await apiClient.get(`/api/quizzes/${quizId}`);
      return data as Quiz;
    },
    enabled: !!quizId,
  });
};

export const useSubmitQuiz = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (attemptData: any) => {
      const { data } = await apiClient.post('/api/quizzes/submit', attemptData);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['progress'] });
      queryClient.invalidateQueries({ queryKey: ['quiz'] });
    },
  });
};

// ===== Recommendations =====
export const useRecommendations = () => {
  return useQuery({
    queryKey: ['recommendations'],
    queryFn: async () => {
      try {
        const { data } = await apiClient.get('/api/recommendations');
        return data;
      } catch (error) {
        // Silently fall back to mock data - backend not available
        return MOCK_RECOMMENDATIONS;
      }
    },
    retry: 1,
  });
};
