# SkillForge Frontend

A modern React + TypeScript educational platform with AI integration, proctored exams, and analytics.

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Styling**: TailwindCSS + shadcn/ui
- **State Management**: Zustand (UI state) + TanStack Query (server state)
- **Forms**: React Hook Form + Zod
- **Charts**: ApexCharts + Recharts
- **Build Tool**: Vite

## Features Implemented

### 🌐 Public Pages
- ✅ Landing page with hero, course categories, featured courses
- ✅ Explore courses with filtering (level, category, duration)
- ✅ Course detail pages
- ✅ Sign in/Sign up with OAuth (Google, GitHub)

### 🔐 Authenticated Features
- ✅ Protected routes with auth guards
- ✅ Dashboard with quick stats and recommendations
- ✅ My Courses with AI tutor panel
- ✅ Certifications & Achievements
- ✅ Exam proctoring with camera checks
- ✅ Performance analytics
- ✅ Settings with streak board

## Project Structure

```
src/
├── api/
│   └── apiClient.ts          # Axios client with auth interceptors
├── components/
│   ├── Navbar.tsx            # Top navigation
│   ├── Sidebar.tsx           # Authenticated sidebar
│   └── ui/                   # shadcn/ui components
├── hooks/
│   ├── useApi.ts             # TanStack Query hooks
│   └── useFormState.ts       # Form state management
├── lib/
│   ├── queryClient.ts        # TanStack Query config
│   └── utils.ts              # Utility functions
├── pages/
│   ├── Landing.tsx           # Home page
│   ├── Login.tsx             # Sign in
│   ├── Register.tsx          # Sign up
│   ├── Courses.tsx           # Course catalog
│   ├── CourseDetail.tsx      # Single course page
│   ├── Dashboard.tsx         # Student dashboard
│   ├── MyCourses.tsx         # Enrolled courses
│   ├── Learning.tsx          # Module learning
│   ├── Certifications.tsx    # Certificates & achievements
│   ├── ExamProctoring.tsx    # Exam interface
│   ├── PerformanceAnalytics.tsx # Analytics
│   └── Settings.tsx          # User settings & streaks
├── stores/
│   ├── authStore.ts          # Auth state (Zustand)
│   └── uiStore.ts            # UI state (Zustand)
├── App.jsx                   # Root component
├── main.jsx                  # Entry point
└── globals.css               # Global styles & Tailwind
```

## Setup & Development

### Prerequisites
- Node.js 16+
- npm or yarn
- Backend running on `http://localhost:5000`

### Installation

```bash
cd frontend
npm install
```

### Environment Variables

Create `.env.local`:
```
VITE_API_URL=http://localhost:5000
VITE_APP_NAME=SkillForge
```

### Development Server

```bash
npm run dev
```

Opens at `http://localhost:5173`

### Build

```bash
npm run build
```

## Key Components

### Authentication
- Zustand store for user state
- JWT token persistence
- Auth interceptors on API calls
- Protected route guards

### State Management
- **UI State** (Zustand): Sidebar toggle, dark mode, notifications
- **Server State** (TanStack Query): Courses, enrollments, progress, quizzes

### API Integration
- Centralized axios client with auth headers
- Query hooks for efficient data fetching
- Mutation hooks for creating/updating data
- Automatic cache invalidation

## Security Features

### Exam Proctoring
- Fullscreen enforcement
- Tab switch detection
- Copy/paste prevention
- DevTools blocking
- Window blur monitoring
- Violation counter (2 strikes = exam cancel)
- Camera & localStorage exam lock

## Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Sidebar collapses on mobile
- Touch-friendly button sizes

## Accessibility

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Focus management
- Color contrast compliance

## Performance

- Code splitting via Vite
- Lazy component loading (available)
- Query caching with TanStack Query
- Image optimization
- Gzip compression ready

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Follow TypeScript strict mode
2. Use shadcn/ui for components
3. Create hooks for reusable logic
4. Add types for all functions
5. Test on mobile breakpoints

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Docker
```bash
docker build -t skillforge-frontend .
docker run -p 3000:3000 skillforge-frontend
```

### Static Hosting
```bash
npm run build
# Deploy dist/ folder to any static host
```

## Troubleshooting

### API Connection Issues
- Ensure backend is running on port 5000
- Check `VITE_API_URL` in `.env.local`
- Verify CORS is enabled on backend

### State Not Persisting
- Check localStorage permissions
- Verify Zustand persist middleware
- Clear browser storage if corrupted

### Build Errors
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf .vite`
- Ensure all imports have `.ts` extensions

## License

MIT
