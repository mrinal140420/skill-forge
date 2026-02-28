import { FC } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuthStore } from '@/stores/authStore';
import { useCourse, useEnrollCourse } from '@/hooks/useApi';
import { Star, Users, Clock, BookOpen, CheckCircle2, ArrowRight } from 'lucide-react';

export const CourseDetail: FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const { data: course, isLoading } = useCourse(id);
  const { mutate: enrollCourse, isPending } = useEnrollCourse();

  if (isLoading) {
    return <div className="text-center py-12">Loading course details...</div>;
  }

  if (!course) {
    return <div className="text-center py-12">Course not found</div>;
  }

  const handleEnroll = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    enrollCourse(course.id);
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8">
        <div className="max-w-3xl">
          <Badge className="mb-4">{course.level}</Badge>
          <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
          <p className="text-lg text-muted-foreground mb-6">{course.description}</p>

          <div className="flex flex-wrap gap-6 mb-6">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500" />
              <span className="font-semibold">{course.rating}</span>
              <span className="text-muted-foreground">({course.students.toLocaleString()} students)</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span>{course.duration} hours</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <span>{course.modules?.length || 0} modules</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span>By {course.instructor}</span>
            </div>
          </div>

          {user ? (
            <Button size="lg" className="gap-2" onClick={handleEnroll} disabled={isPending}>
              {isPending ? 'Enrolling...' : 'Enroll Now'}
              <ArrowRight className="h-5 w-5" />
            </Button>
          ) : (
            <Button size="lg" onClick={() => navigate('/register')}>
              Sign Up to Enroll
            </Button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Learning Outcomes */}
          <Card>
            <CardHeader>
              <CardTitle>What you'll learn</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {course.outcomes?.map((outcome, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Modules */}
          <Card>
            <CardHeader>
              <CardTitle>Course Modules</CardTitle>
              <CardDescription>{course.modules?.length || 0} modules • {course.duration} hours total</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {course.modules?.map((module, idx) => (
                <div key={module.id} className="border rounded-lg p-4 hover:bg-muted transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{module.title}</h4>
                      <p className="text-sm text-muted-foreground">{module.duration} minutes</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Requirements */}
          <Card>
            <CardHeader>
              <CardTitle>Prerequisites</CardTitle>
            </CardHeader>
            <CardContent>
              {course.prerequisites && course.prerequisites.length > 0 ? (
                <ul className="space-y-2">
                  {course.prerequisites.map((prereq, idx) => (
                    <li key={idx} className="text-sm flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {prereq}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-muted-foreground">No prerequisites required</p>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div>
          <Card className="sticky top-6">
            <CardHeader>
              <CardTitle className="text-lg">Course Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div>
                <p className="text-muted-foreground mb-1">Instructor</p>
                <p className="font-semibold">{course.instructor}</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Level</p>
                <Badge>{course.level}</Badge>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Duration</p>
                <p className="font-semibold">{course.duration} hours</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Rating</p>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <span className="font-semibold">{course.rating}</span>
                </div>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Students</p>
                <p className="font-semibold">{course.students.toLocaleString()}</p>
              </div>
              <Button className="w-full mt-4" onClick={handleEnroll} disabled={isPending}>
                {isPending ? 'Enrolling...' : 'Enroll Now'}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
