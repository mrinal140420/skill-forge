import { FC, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useEnrollments } from '@/hooks/useApi';
import { Send, Lightbulb, HelpCircle, BookOpen } from 'lucide-react';

export const MyCourses: FC = () => {
  const { data: enrollments = [] } = useEnrollments();
  const [selectedTab, setSelectedTab] = useState('modules');
  const [aiQuestion, setAiQuestion] = useState('');

  const course = enrollments[0];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">My Courses</h1>
        <p className="text-muted-foreground">Continue your learning journey</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-6">
          {/* Course Header */}
          {course && (
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>{course.courseTitle}</CardTitle>
                    <CardDescription>Module 3 of 12: Advanced Recursion</CardDescription>
                  </div>
                  <Badge>In Progress</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold">Course Progress</span>
                    <span className="text-sm text-muted-foreground">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} />
                </div>
              </CardContent>
            </Card>
          )}

          {/* Tabs for Modules and Video */}
          <Tabs value={selectedTab} onValueChange={setSelectedTab}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="modules">Modules</TabsTrigger>
              <TabsTrigger value="video">Video</TabsTrigger>
            </TabsList>

            <TabsContent value="modules" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Course Modules</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <div
                      key={num}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted cursor-pointer transition-colors"
                    >
                      <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-semibold">
                        {num}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm">Module {num}: Recursion</h4>
                        <p className="text-xs text-muted-foreground">45 mins • 3 lessons</p>
                      </div>
                      {num <= 2 && <Badge variant="secondary">Completed</Badge>}
                      {num === 3 && <Badge>Current</Badge>}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="video" className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center">
                      <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground">Video player area</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold mb-2">Recursion Fundamentals</h3>
                      <p className="text-sm text-muted-foreground">
                        Learn the basics of recursive functions and how to solve problems using recursion.
                      </p>
                    </div>
                    <Button className="w-full">Mark as Complete</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Transcript */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Transcript</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm max-h-64 overflow-y-auto">
              <p>
                <span className="font-semibold">00:00</span> - Today we're going to learn about recursion...
              </p>
              <p>
                <span className="font-semibold">02:15</span> - A recursive function is a function that calls itself...
              </p>
              <p>
                <span className="font-semibold">05:30</span> - The base case is important to prevent infinite loops...
              </p>
            </CardContent>
          </Card>
        </div>

        {/* AI Bot Panel */}
        <div>
          <Card className="sticky top-6 h-fit">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                AI Tutor
              </CardTitle>
              <CardDescription>Ask questions about the content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 h-64 overflow-y-auto border border-border rounded-lg p-3 bg-muted/30">
                <div className="bg-primary/10 rounded-lg p-3 text-sm">
                  <p className="font-semibold mb-1">How can I help?</p>
                  <p className="text-xs text-muted-foreground">
                    I can explain concepts, answer questions, and help you understand the material better.
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="relative">
                  <Input
                    placeholder="Ask a question..."
                    value={aiQuestion}
                    onChange={(e) => setAiQuestion(e.target.value)}
                    className="pr-10"
                  />
                  <button className="absolute right-2 top-2.5 text-muted-foreground">
                    <Send className="h-4 w-4" />
                  </button>
                </div>

                <div className="space-y-2 text-xs">
                  <button className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors text-left">
                    <HelpCircle className="h-4 w-4 text-primary" />
                    <span>Explain like I'm 5</span>
                  </button>
                  <button className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors text-left">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span>Generate practice questions</span>
                  </button>
                  <button className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors text-left">
                    <Lightbulb className="h-4 w-4 text-primary" />
                    <span>Summarize content</span>
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
