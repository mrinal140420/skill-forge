import { FC, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import {
  Play,
  MessageCircle,
  BookOpen,
  CheckCircle2,
  Volume2,
  HelpCircle,
  Send,
} from 'lucide-react';

export const Learning: FC = () => {
  const [transcript, setTranscript] = useState('hidden');
  const [chatMessages, setChatMessages] = useState([
    { id: 1, author: 'AI Tutor', text: 'Hi! I\'m here to help. Feel free to ask any questions about this module.' },
  ]);
  const [inputValue, setInputValue] = useState('');

  const module = {
    title: 'Binary Trees: Traversal & Operations',
    course: 'Advanced Data Structures & Algorithms',
    instructor: 'John Smith',
    duration: '45 minutes',
    videoUrl: 'https://example.com/video.mp4',
    thumbnail: '🎥',
  };

  const transcriptText = `
In this module, we'll explore binary trees in depth.

A binary tree is a hierarchical data structure where each node has at most two children, known as the left and right child.

Key characteristics:
- Non-linear data structure
- Root, left subtree, right subtree
- Can be empty

Traversal Methods:
1. In-order: Left, Root, Right
2. Pre-order: Root, Left, Right
3. Post-order: Left, Right, Root
4. Level-order: Breadth-first approach

Applications:
- Expression parsing
- File systems
- DOM in web browsers
- Database indexing

Time Complexity:
- Search: O(log n) average, O(n) worst
- Insert/Delete: O(log n) average, O(n) worst

Practice problems after this module:
- Implement in-order traversal
- Height of binary tree
- Lowest common ancestor
  `;

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setChatMessages([
        ...chatMessages,
        { id: chatMessages.length + 1, author: 'You', text: inputValue },
      ]);
      // Simulate AI response
      setTimeout(() => {
        setChatMessages((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            author: 'AI Tutor',
            text: 'Great question! Let me explain that for you. ' +
              inputValue.substring(0, 20) + '... is important because it helps you understand the fundamentals better.',
          },
        ]);
      }, 500);
      setInputValue('');
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main Learning Area */}
      <div className="lg:col-span-2 space-y-6">
        {/* Breadcrumb & Progress */}
        <div className="space-y-2">
          <p className="text-sm text-gray-500">{module.course}</p>
          <h1 className="text-3xl font-bold">{module.title}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <span>By {module.instructor}</span>
            </span>
            <span>{module.duration}</span>
          </div>
        </div>

        {/* Video Player */}
        <Card className="overflow-hidden">
          <div className="aspect-video bg-black rounded-lg flex items-center justify-center relative group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-center justify-center">
              <Play className="h-20 w-20 text-white group-hover:scale-110 transition" />
            </div>
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=450&fit=crop"
              alt="Video thumbnail"
              className="w-full h-full object-cover"
            />
          </div>
          <CardContent className="pt-4">
            <p className="text-sm text-gray-600">
              Click to play video or use the player controls below
            </p>
          </CardContent>
        </Card>

        {/* Tabs for Transcript & Notes */}
        <Card>
          <CardHeader>
            <CardTitle>Module Content</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="transcript" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="transcript" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Transcript
                </TabsTrigger>
                <TabsTrigger value="summary" className="flex items-center gap-2">
                  <HelpCircle className="h-4 w-4" />
                  Summary
                </TabsTrigger>
                <TabsTrigger value="notes" className="flex items-center gap-2">
                  <Volume2 className="h-4 w-4" />
                  Notes
                </TabsTrigger>
              </TabsList>

              <TabsContent value="transcript" className="mt-6">
                <div className="max-h-96 overflow-y-auto bg-gray-50 p-4 rounded-lg space-y-4 text-sm leading-relaxed">
                  {transcriptText.split('\n').map((line, idx) => (
                    line.trim() && (
                      <p key={idx} className="text-gray-700">
                        {line}
                      </p>
                    )
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="summary" className="mt-6">
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">Key Concepts</h4>
                    <ul className="text-sm space-y-2 text-blue-800">
                      <li>✓ Binary tree structure with left and right children</li>
                      <li>✓ Four main traversal methods (In, Pre, Post, Level-order)</li>
                      <li>✓ Time complexity: O(log n) average, O(n) worst case</li>
                      <li>✓ Real-world applications in databases and file systems</li>
                    </ul>
                  </div>
                  <Button className="w-full">Download Summary PDF</Button>
                </div>
              </TabsContent>

              <TabsContent value="notes" className="mt-6">
                <div className="space-y-3">
                  <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <p className="text-sm text-yellow-800">
                      📝 <strong>Important Note:</strong> Make sure to practice all four traversal methods before moving to the next module.
                    </p>
                  </div>
                  <Button variant="outline" className="w-full">
                    View All Notes
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              Next Steps
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="flex-1">
                <p className="font-semibold text-sm">Quiz: Binary Tree Traversal</p>
                <p className="text-xs text-gray-600">Test your understanding (10 questions)</p>
              </div>
              <Button size="sm">Take Quiz</Button>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-1">
                <p className="font-semibold text-sm">Practice Problems</p>
                <p className="text-xs text-gray-600">Solve 5 practice problems</p>
              </div>
              <Button variant="outline" size="sm">
                Start
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Tutor Sidebar */}
      <div className="lg:col-span-1">
        <Card className="h-full flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-blue-600" />
              AI Tutor
            </CardTitle>
            <p className="text-xs text-gray-600">Ask anything about this topic</p>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col gap-4 overflow-hidden">
            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto space-y-3 border rounded-lg p-3 bg-gray-50">
              {chatMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.author === 'You' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs rounded-lg px-3 py-2 text-sm ${
                      msg.author === 'You'
                        ? 'bg-blue-500 text-white'
                        : 'bg-white text-gray-800 border border-gray-200'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="space-y-2 border-t pt-3">
              <p className="text-xs font-semibold text-gray-600">Quick Help</p>
              <div className="grid grid-cols-1 gap-2">
                <Button variant="outline" size="sm" className="text-xs h-8 justify-start">
                  📚 Explain like I'm 5
                </Button>
                <Button variant="outline" size="sm" className="text-xs h-8 justify-start">
                  💡 Give me an example
                </Button>
                <Button variant="outline" size="sm" className="text-xs h-8 justify-start">
                  ❓ Practice questions
                </Button>
              </div>
            </div>

            {/* Input */}
            <div className="border-t pt-3 flex gap-2">
              <Input
                placeholder="Ask a question..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="text-sm h-9"
              />
              <Button
                size="sm"
                onClick={handleSendMessage}
                className="h-9 w-9 p-0"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
