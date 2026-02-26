const User = require('../models/User');
const Course = require('../models/Course');
const Enrollment = require('../models/Enrollment');

const coursesData = [
  {
    title: 'DBMS Mastery',
    category: 'DBMS',
    level: 'Intermediate',
    durationHours: 40,
    rating: 4.8,
    description: 'Master database management systems from basics to advanced normalization.',
    tags: ['SQL', 'Normalization', 'Indexing'],
    thumbnailUrl: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20240307113700/DBMS-Tutorial.webp',
    syllabusModules: [
      { title: 'Introduction to DBMS', contentType: 'video', durationMin: 30 },
      { title: 'Relational Model', contentType: 'video', durationMin: 45 },
      { title: 'Normalization Concepts', contentType: 'text', durationMin: 60 },
      { title: 'SQL Advanced', contentType: 'video', durationMin: 50 },
    ],
  },
  {
    title: 'OS Fundamentals',
    category: 'OS',
    level: 'Beginner',
    durationHours: 35,
    rating: 4.7,
    description: 'Learn operating system concepts including processes, threads, and memory management.',
    tags: ['Processes', 'Memory', 'Scheduling'],
    thumbnailUrl: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20240213151929/Operating-System.webp',
    syllabusModules: [
      { title: 'OS Intro', contentType: 'video', durationMin: 25 },
      { title: 'Process Management', contentType: 'video', durationMin: 50 },
      { title: 'Memory Management', contentType: 'text', durationMin: 60 },
    ],
  },
  {
    title: 'Computer Networks',
    category: 'CN',
    level: 'Intermediate',
    durationHours: 42,
    rating: 4.6,
    description: 'Understand networking layers, protocols, and real-world communication systems.',
    tags: ['TCP/IP', 'Protocols', 'OSI Model'],
    thumbnailUrl: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20240213151619/Computer-Networks-Tutorial.webp',
    syllabusModules: [
      { title: 'OSI Model', contentType: 'video', durationMin: 40 },
      { title: 'TCP/IP Stack', contentType: 'video', durationMin: 55 },
      { title: 'HTTP & HTTPS', contentType: 'text', durationMin: 45 },
    ],
  },
  {
    title: 'DSA in Java',
    category: 'DSA',
    level: 'Intermediate',
    durationHours: 50,
    rating: 4.9,
    description: 'Complete data structures and algorithms course covering arrays, trees, graphs, and more.',
    tags: ['Arrays', 'Trees', 'Graphs', 'Sorting'],
    thumbnailUrl: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20231129210251/DSA-Roadmap.webp',
    syllabusModules: [
      { title: 'Arrays & Strings', contentType: 'video', durationMin: 45 },
      { title: 'Linked Lists', contentType: 'video', durationMin: 50 },
      { title: 'Trees & BST', contentType: 'text', durationMin: 70 },
      { title: 'Graphs & DFS/BFS', contentType: 'video', durationMin: 65 },
    ],
  },
  {
    title: 'OOP with Java',
    category: 'OOP',
    level: 'Beginner',
    durationHours: 30,
    rating: 4.5,
    description: 'Master object-oriented programming principles with Java.',
    tags: ['Classes', 'Inheritance', 'Polymorphism'],
    thumbnailUrl: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20240213152324/OOP-Concepts-In-Java.webp',
    syllabusModules: [
      { title: 'Classes & Objects', contentType: 'video', durationMin: 35 },
      { title: 'Inheritance', contentType: 'video', durationMin: 40 },
      { title: 'Polymorphism', contentType: 'text', durationMin: 45 },
    ],
  },
  {
    title: 'System Design Basics',
    category: 'System Design',
    level: 'Advanced',
    durationHours: 45,
    rating: 4.8,
    description: 'Learn system design patterns for building scalable applications.',
    tags: ['Scalability', 'Databases', 'Caching'],
    thumbnailUrl: 'https://media.geeksforgeeks.org/wp-content/uploads/20221227171052/system-design-tutorials.jpg',
    syllabusModules: [
      { title: 'Basics of Scalability', contentType: 'video', durationMin: 50 },
      { title: 'Database Design', contentType: 'video', durationMin: 60 },
      { title: 'Caching Strategies', contentType: 'text', durationMin: 55 },
    ],
  },
  {
    title: 'AI/ML Basics',
    category: 'AI/ML Basics',
    level: 'Intermediate',
    durationHours: 40,
    rating: 4.7,
    description: 'Introduction to machine learning and artificial intelligence concepts.',
    tags: ['ML', 'Neural Networks', 'Classification'],
    thumbnailUrl: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20231129210518/Machine-Learning-Tutorial.webp',
    syllabusModules: [
      { title: 'ML Intro', contentType: 'video', durationMin: 40 },
      { title: 'Supervised Learning', contentType: 'video', durationMin: 55 },
      { title: 'Neural Networks Intro', contentType: 'text', durationMin: 65 },
    ],
  },
  {
    title: 'Cyber Security Essentials',
    category: 'Cyber Security',
    level: 'Beginner',
    durationHours: 35,
    rating: 4.6,
    description: 'Learn the fundamentals of cybersecurity and protect systems from threats.',
    tags: ['Encryption', 'Authentication', 'Networks'],
    thumbnailUrl: 'https://media.geeksforgeeks.org/wp-content/uploads/20230616105028/CyberSecurity-1.webp',
    syllabusModules: [
      { title: 'Security Basics', contentType: 'video', durationMin: 35 },
      { title: 'Encryption', contentType: 'video', durationMin: 45 },
      { title: 'Network Security', contentType: 'text', durationMin: 50 },
    ],
  },
  {
    title: 'Advanced DSA',
    category: 'DSA',
    level: 'Advanced',
    durationHours: 55,
    rating: 4.8,
    description: 'Deep dive into advanced data structures and algorithmic techniques.',
    tags: ['DP', 'Graphs', 'Advanced Sorting'],
    thumbnailUrl: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20240213151514-1.webp',
    syllabusModules: [
      { title: 'Dynamic Programming', contentType: 'video', durationMin: 70 },
      { title: 'Advanced Graphs', contentType: 'video', durationMin: 75 },
    ],
  },
  {
    title: 'Database Design',
    category: 'DBMS',
    level: 'Advanced',
    durationHours: 45,
    rating: 4.7,
    description: 'Design scalable and efficient databases for production systems.',
    tags: ['Database', 'NoSQL', 'Design Patterns'],
    thumbnailUrl: 'https://media.geeksforgeeks.org/wp-content/uploads/20230509143159/NoSQL-.webp',
    syllabusModules: [
      { title: 'Relational Design', contentType: 'video', durationMin: 50 },
      { title: 'NoSQL Design', contentType: 'video', durationMin: 55 },
    ],
  },
  {
    title: 'Personalized Learning with SkillForge ML',
    category: 'ML & Platform',
    level: 'Intermediate',
    durationHours: 8,
    rating: 4.9,
    description:
      'Explore how SkillForge uses machine learning to personalize learning paths, recommend content, and adapt assessments to each learner — including the rationale and privacy-aware design choices.',
    tags: ['Personalization', 'Recommendations', 'Adaptive Learning'],
    thumbnailUrl:
      'https://images.unsplash.com/photo-1526378721636-2f7b4c3c9d2a?auto=format&fit=crop&w=800&q=60',
    syllabusModules: [
      { title: 'ML-driven Personalization', contentType: 'video', durationMin: 35 },
      { title: 'Competency Mapping', contentType: 'text', durationMin: 30 },
      { title: 'Privacy and Fairness', contentType: 'video', durationMin: 25 },
    ],
  },
  {
    title: 'Recommendation Systems for Courses',
    category: 'ML',
    level: 'Intermediate',
    durationHours: 12,
    rating: 4.8,
    description:
      'Build and evaluate collaborative and content-based recommenders used in SkillForge to match learners with the right courses, projects, and mentors.',
    tags: ['Recommender', 'Collaborative Filtering', 'Content-based'],
    thumbnailUrl:
      'https://images.unsplash.com/photo-1581091215367-6f3f2c4d6a2b?auto=format&fit=crop&w=800&q=60',
    syllabusModules: [
      { title: 'Introduction to Recommenders', contentType: 'video', durationMin: 40 },
      { title: 'Feature-based Ranking', contentType: 'video', durationMin: 45 },
      { title: 'A/B Testing Recommenders', contentType: 'text', durationMin: 30 },
    ],
  },
  {
    title: 'Learner Progress Prediction & Intervention',
    category: 'ML',
    level: 'Advanced',
    durationHours: 10,
    rating: 4.7,
    description:
      'Learn models and pipelines that predict at-risk learners, suggest interventions, and power SkillForge analytics dashboards for educators and admins.',
    tags: ['Prediction', 'Time-series', 'Intervention'],
    thumbnailUrl:
      'https://images.unsplash.com/photo-1554168260-03f3f7d2f9b6?auto=format&fit=crop&w=800&q=60',
    syllabusModules: [
      { title: 'Labeling & Metrics', contentType: 'video', durationMin: 30 },
      { title: 'Modeling & Features', contentType: 'video', durationMin: 50 },
      { title: 'Operationalizing Alerts', contentType: 'text', durationMin: 40 },
    ],
  },
  {
    title: 'NLP for Content Tagging and Summarization',
    category: 'ML',
    level: 'Intermediate',
    durationHours: 9,
    rating: 4.8,
    description:
      'Apply NLP techniques used in SkillForge to automatically tag course content, extract learning objectives, and generate concise summaries for faster discovery.',
    tags: ['NLP', 'Tagging', 'Summarization'],
    thumbnailUrl:
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=60',
    syllabusModules: [
      { title: 'Text Embeddings & Search', contentType: 'video', durationMin: 35 },
      { title: 'Topic Modeling', contentType: 'video', durationMin: 40 },
      { title: 'Generating Summaries', contentType: 'text', durationMin: 30 },
    ],
  },
  {
    title: 'Auto-grading & Skill Assessment Automation',
    category: 'ML & Tooling',
    level: 'Advanced',
    durationHours: 11,
    rating: 4.6,
    description:
      'Discover how SkillForge uses ML to auto-grade coding assignments, evaluate quizzes, and provide explainable feedback while keeping human-in-the-loop safeguards.',
    tags: ['Auto-grading', 'Evaluation', 'Explainability'],
    thumbnailUrl:
      'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=800&q=60',
    syllabusModules: [
      { title: 'Auto-grading Techniques', contentType: 'video', durationMin: 45 },
      { title: 'Human-in-the-loop Workflows', contentType: 'video', durationMin: 35 },
      { title: 'Explainable Feedback', contentType: 'text', durationMin: 30 },
    ],
  },
];

const seed = async () => {
  try {
    console.log('🌱 Starting database seed...');

    // Clear existing data
    await User.deleteMany({});
    await Course.deleteMany({});
    await Enrollment.deleteMany({});

    // Create admin user
    const adminUser = await User.create({
      name: 'Admin User',
      email: process.env.SEED_ADMIN_EMAIL || 'admin@skillforge.com',
      passwordHash: process.env.SEED_ADMIN_PASSWORD || 'AdminPass123!',
      role: 'ADMIN',
    });

    console.log('✓ Admin user created');

    // Create sample users
    const users = await User.insertMany([
      {
        name: 'John Doe',
        email: 'john@skillforge.com',
        passwordHash: 'password123',
        role: 'STUDENT',
      },
      {
        name: 'Jane Smith',
        email: 'jane@skillforge.com',
        passwordHash: 'password123',
        role: 'STUDENT',
      },
      {
        name: 'Alex Kumar',
        email: 'alex@skillforge.com',
        passwordHash: 'password123',
        role: 'STUDENT',
      },
    ]);

    console.log('✓ Sample users created');

    // Create courses
    const courses = await Course.insertMany(coursesData);

    console.log('✓ Courses created');

    // Create some sample enrollments
    for (let i = 0; i < users.length; i++) {
      const userCourses = courses.slice(i, i + 3);
      for (const course of userCourses) {
        await Enrollment.create({
          userId: users[i]._id,
          courseId: course._id,
          status: 'active',
        });
      }
    }

    console.log('✓ Sample enrollments created');
    console.log('✓ Database seed completed successfully!');
  } catch (error) {
    console.error('✗ Seed failed:', error.message);
    process.exit(1);
  }
};

module.exports = seed;
