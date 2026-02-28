import { FC } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, Award } from 'lucide-react';
import html2canvas from 'html2canvas';

const certificates = [
  {
    id: 1,
    course: 'Advanced Data Structures & Algorithms',
    score: 92,
    date: '2024-01-15',
    status: 'completed',
  },
  {
    id: 2,
    course: 'System Design Masterclass',
    score: 88,
    date: '2023-12-20',
    status: 'completed',
  },
];

const incompleteCourses = [
  {
    id: 3,
    course: 'DBMS Fundamentals',
    progress: 65,
    status: 'in-progress',
  },
  {
    id: 4,
    course: 'Operating Systems',
    progress: 40,
    status: 'in-progress',
  },
];

export const Certifications: FC = () => {
  const downloadCertificate = async (certId: number) => {
    const element = document.getElementById(`cert-${certId}`);
    if (element) {
      const canvas = await html2canvas(element);
      const link = document.createElement('a');
      link.href = canvas.toDataURL();
      link.download = `certificate-${certId}.png`;
      link.click();
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Certifications & Achievements</h1>
        <p className="text-muted-foreground">Your earned certificates and progress</p>
      </div>

      {/* Completed Certificates */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Completed Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <Card key={cert.id} className="border-primary/50">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      {cert.course}
                    </CardTitle>
                    <CardDescription>Completed on {new Date(cert.date).toLocaleDateString()}</CardDescription>
                  </div>
                  <Badge className="bg-green-600">Completed</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div
                  id={`cert-${cert.id}`}
                  className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-lg border-2 border-dashed border-primary text-center"
                >
                  <div className="text-sm text-muted-foreground mb-2">Certificate of Completion</div>
                  <h3 className="text-lg font-bold mb-4">{cert.course}</h3>
                  <div className="text-3xl font-bold text-primary mb-2">{cert.score}%</div>
                  <p className="text-xs text-muted-foreground">Successfully completed with distinction</p>
                </div>

                <Button
                  variant="outline"
                  className="w-full gap-2"
                  onClick={() => downloadCertificate(cert.id)}
                >
                  <Download className="h-4 w-4" />
                  Download Certificate
                </Button>

                <Button variant="ghost" className="w-full">
                  Share Certificate
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* In Progress Courses */}
      <div>
        <h2 className="text-2xl font-bold mb-4">In Progress</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {incompleteCourses.map((course) => (
            <Card key={course.id}>
              <CardHeader>
                <CardTitle>{course.course}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold">Progress</span>
                    <span className="text-sm text-muted-foreground">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
                <Button className="w-full">Continue Learning</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Badges & Achievements</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { name: 'Quick Learner', icon: '⚡' },
            { name: '7-Day Streak', icon: '🔥' },
            { name: 'Quiz Master', icon: '🎯' },
            { name: 'Night Owl', icon: '🌙' },
          ].map((badge) => (
            <Card key={badge.name} className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl mb-2">{badge.icon}</div>
                <p className="text-sm font-semibold">{badge.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
