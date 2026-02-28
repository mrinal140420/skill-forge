# SkillForge Frontend - Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Prerequisites
- Node.js 16+ installed
- npm or yarn
- Backend running on `http://localhost:5000`

### Installation

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

---

## 📋 What's Been Implemented

### Pages Ready to Use
- ✅ Landing page - Public home with features
- ✅ Courses page - Browse with filters
- ✅ Course detail - Single course info
- ✅ Authentication - Login/Register with OAuth
- ✅ Dashboard - Student home with stats
- ✅ My Courses - Enrolled courses with AI tutor
- ✅ Certifications - Badges and certificates
- ✅ Exam Proctoring - Exam interface with rules
- ✅ Performance Analytics - Charts and recommendations
- ✅ Settings - Profile, preferences, streaks

### Features Ready
- User authentication (JWT)
- Course catalog with filtering
- Protected routes
- State management (Zustand + TanStack Query)
- API integration with axios
- Responsive design
- Dark mode ready
- Professional UI with shadcn/ui

---

## 🔌 Next: Connect Backend APIs

### Update apiClient.js
Currently set to `http://localhost:5000`. Make sure your backend is running there.

### Test API Connection
```bash
# In browser console:
fetch('http://localhost:5000/api/courses')
  .then(r => r.json())
  .then(console.log)
```

### Backend Endpoints Needed
```
Authentication:
  POST /api/auth/login
  POST /api/auth/register
  GET /api/auth/oauth/:provider

Courses:
  GET /api/courses?search=&level=&category=&duration=
  GET /api/courses/:id

Enrollments:
  GET /api/enrollments
  POST /api/enrollments
  DELETE /api/enrollments/:id

Progress:
  GET /api/progress?courseId=
  POST /api/progress

Quizzes:
  GET /api/quizzes/:id
  POST /api/quizzes/submit

Recommendations:
  GET /api/recommendations
```

---

## 📊 Add Charts (Optional but Recommended)

Charts are prepared but need implementation:

```bash
# Already installed:
npm install apexcharts react-apexcharts recharts

# Update PerformanceAnalytics.tsx with chart components
```

---

## 🎯 Development Priorities

### Phase 1: Core API Integration
1. Connect authentication endpoints
2. Hook up course listing
3. Test enrollment flow
4. Verify user data loading

### Phase 2: Feature Completion
1. Implement video player in Learning page
2. Add chart components
3. Connect AI tutor service
4. Implement proctoring security

### Phase 3: Polish
1. Add loading skeletons
2. Implement error boundaries
3. Add toast notifications
4. Connect real-time features

---

## 🛠️ Useful Commands

```bash
# Development
npm run dev          # Start dev server

# Build
npm run build        # Production build
npm run preview      # Preview build locally

# Type checking
# (TypeScript is checked automatically during dev)

# Format code (if prettier is added)
npm run format       # Format with prettier
```

---

## 📁 Key Files to Modify

### For API Responses
- `src/hooks/useApi.ts` - Add/update query hooks for new endpoints

### For Styling
- `src/globals.css` - Global styles
- `tailwind.config.js` - Theme colors and spacing

### For Components
- `src/components/ui/` - Add new shadcn/ui components as needed

### For Pages
- `src/pages/` - Update pages with real data when APIs are ready

---

## 🔑 Important Configuration

### Environment Variables
```
VITE_API_URL=http://localhost:5000
VITE_APP_NAME=SkillForge
```

### Tailwind Colors
Light theme (default colors are in `src/globals.css`):
- Primary: `#1f2937` (dark gray)
- Dark mode: Automatically inverted

### API Base URL
All API calls use the base URL from `VITE_API_URL`

---

## ✅ Testing Checklist

- [ ] Frontend loads without errors
- [ ] Can navigate public pages
- [ ] Login/register forms validate
- [ ] Protected routes redirect to login when not authenticated
- [ ] Backend API returns course data
- [ ] Authentication with OAuth works
- [ ] Dashboard loads user data
- [ ] Sidebar navigation works on mobile

---

## 🐛 Common Issues

### "Cannot find module"
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### "API is not responding"
- Check backend is running on port 5000
- Verify `VITE_API_URL` in `.env.local`
- Check CORS on backend

### "Styles not loading"
- Ensure `npm install` completed
- Clear browser cache
- Restart dev server

### "TypeScript errors in editor"
- Ensure TypeScript extension is installed
- Reload VS Code window
- Check `tsconfig.json` is correct

---

## 📚 Learn More

- **Tailwind**: https://tailwindcss.com/docs
- **shadcn/ui**: https://ui.shadcn.com
- **TanStack Query**: https://tanstack.com/query/latest
- **Zustand**: https://github.com/pmndrs/zustand
- **Vite**: https://vitejs.dev/guide/

---

## 🎓 Architecture Overview

```
┌─────────────────────────────────────┐
│       React Components              │
│  (Pages, Layouts, UI Components)    │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│     State Management Layer           │
│  Zustand (UI) + TanStack Query (API) │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│        API Client                   │
│      (axios with auth)              │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│     Backend API (port 5000)          │
│   (Node.js/Express)                  │
└─────────────────────────────────────┘
```

---

## 💡 Pro Tips

1. **Use TanStack Query DevTools** - Inspect cache in dev mode
2. **Check localStorage** - Auth tokens are stored here
3. **Inspect Network tab** - See all API calls being made
4. **Test with mobile view** - Use browser DevTools to test responsive design
5. **Use VS Code extensions** - Tailwind CSS IntelliSense, ESLint

---

## 🚀 Deployment (When Ready)

```bash
# Build for production
npm run build

# Deploy dist/ folder to:
# - Vercel: vercel --prod
# - Netlify: netlify deploy --prod
# - Any static host
```

---

## 📞 Need Help?

Check:
1. `FRONTEND_README.md` - Detailed documentation
2. `FRONTEND_IMPLEMENTATION_SUMMARY.md` - What's implemented
3. Code comments in files
4. Error messages in browser console

---

**Status**: ✅ Ready for Backend Integration
**Last Updated**: February 28, 2026
