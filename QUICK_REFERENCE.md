# 🎯 SkillForge Portal - Quick Reference Card

## 🚀 START HERE

1. **Clone/Enter Project**: `cd skillforge-portal`
2. **Install Everything**: Run `setup.bat` (Windows) or `setup.sh` (Mac/Linux)
3. **Create `.env` files**: Copy content from `.env.example` in backend/ and ml-service/
4. **Get MongoDB URL**: Register at [MongoDB Atlas](https://mongodb.com/cloud/atlas), create free cluster
5. **Start 3 Services**: See commands below
6. **Seed Database**: `cd backend && npm run seed`
7. **Visit**: http://localhost:5173

---

## 🏃 RUNNING SERVICES

### Terminal 1: Backend
```bash
cd backend
npm run dev
# Runs on port 5000
# Docs: http://localhost:5000/api/docs
```

### Terminal 2: ML Service
```bash
cd ml-service
python -m venv venv        # First time only
venv\Scripts\activate      # Windows
source venv/bin/activate   # Mac/Linux
python -m uvicorn main:app --reload --port 8000
# Runs on port 8000
# Docs: http://localhost:8000/docs
```

### Terminal 3: Frontend
```bash
cd frontend
npm run dev
# Runs on port 5173
# Visit: http://localhost:5173
```

---

## 📚 TEST ACCOUNTS

```
Email: john@skillforge.com
Password: password123
```

Or Register a new account at http://localhost:5173/register

---

## 📖 DOCUMENTATION

| Doc | Purpose |
|-----|---------|
| [README.md](./README.md) | Full documentation |
| [QUICKSTART.md](./QUICKSTART.md) | 5-minute setup |
| [DEPLOYMENT.md](./DEPLOYMENT.md) | Production deployment |
| [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md) | What was built |

---

## 🔗 API ENDPOINTS

### Auth (No token needed)
```
POST   /api/auth/register
POST   /api/auth/login
```

### Courses (No token needed)
```
GET    /api/courses                    (with filters)
GET    /api/courses/:id
```

### Protected (Token required)
```
POST   /api/enrollments
GET    /api/enrollments/me
POST   /api/progress/complete
GET    /api/progress/me
POST   /api/quiz/submit
GET    /api/recommendations/me
```

---

## 🧪 TEST API ENDPOINTS

1. Visit: **http://localhost:5000/api/docs**
2. Click "Authorize" button (top right)
3. Login to get token
4. Try endpoints!

---

## 📁 KEY FILES

| Path | Purpose |
|------|---------|
| `backend/src/app.js` | Express app setup |
| `backend/src/models/` | Database schemas |
| `backend/src/routes/` | API routes |
| `frontend/src/App.jsx` | React router |
| `frontend/src/pages/` | Page components |
| `ml-service/main.py` | ML recommendations |

---

## ⚙️ ENVIRONMENT SETUP

### Backend `.env`
```env
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/skillforge
JWT_SECRET=your-secret-key
PORT=5000
FRONTEND_URL=http://localhost:5173
ML_SERVICE_URL=http://localhost:8000
```

### ML Service `.env`
```env
ML_SERVICE_PORT=8000
BACKEND_URL=http://localhost:5000
```

---

## 🛠️ DEVELOPMENT TASKS

### Add New Course
Edit `backend/src/utils/seed.js` and add to `coursesData` array, then run `npm run seed`

### Add New API Endpoint
1. Create model (if needed) in `backend/src/models/`
2. Create controller in `backend/src/controllers/`
3. Add route in `backend/src/routes/`
4. Add JSDoc comments for Swagger

### Add Frontend Page
1. Create component in `frontend/src/pages/`
2. Add route in `frontend/src/App.jsx`
3. Style with CSS module
4. Import `apiClient` for API calls

---

## 🚨 TROUBLESHOOTING

### MongoDB Connection Error
- Check IP whitelist in MongoDB Atlas
- Verify connection string format
- Ensure cluster is running

### CORS Error
- Verify `FRONTEND_URL` in backend `.env`
- Check frontend port matches (5173)

### ML Service Error
- Backend has 1200ms timeout
- Falls back to popularity ranking
- Check ML service is running

### Port Already in Use
- Change PORT in `.env` for backend
- Change port in ML run command
- Or kill process: `lsof -ti :5000 | xargs kill -9`

---

## 📊 FEATURES CHECKLIST

Frontend:
- [x] Landing page with hero
- [x] Course catalog with filters
- [x] Course details & enrollment
- [x] Authentication (login/register)
- [x] Student dashboard
- [x] Learning modules & quizzes
- [x] Recommendations widget

Backend:
- [x] User management with JWT
- [x] Course CRUD operations
- [x] Enrollment tracking
- [x] Progress tracking
- [x] Quiz submission & scoring
- [x] Recommendation fallback
- [x] Swagger API docs
- [x] Database seeding

ML Service:
- [x] Recommendation algorithm
- [x] Difficulty estimation
- [x] Auto-generated API docs
- [x] CORS enabled

---

## 🎓 SAMPLE DATA

**10 Courses Included:**
- DBMS Mastery
- OS Fundamentals
- Computer Networks
- DSA in Java
- OOP with Java
- System Design Basics
- AI/ML Basics
- Cyber Security Essentials
- Advanced DSA
- Database Design

**3 Sample Users:**
- john@skillforge.com
- jane@skillforge.com
- alex@skillforge.com

---

## 🚀 DEPLOYMENT (Quick)

### Frontend → Vercel
```bash
cd frontend
npm run build
# Upload dist/ folder to Vercel
```

### Backend → Render
```bash
# Push GitHub repo
# Connect in Render dashboard
# Set environment variables
# Done!
```

### ML Service → Render
```bash
# Same as backend
# Use Python runtime
# Point to ml-service directory
```

---

## 💡 TIPS

- Use Swagger UI at `/api/docs` to test endpoints
- Frontend uses localStorage for JWT tokens
- ML service has fallback if unavailable
- Database auto-indexes frequently-used fields
- Rate limiting prevents brute force attempts

---

## 🔐 SECURITY NOTES

- ✅ Passwords hashed with bcrypt
- ✅ JWT tokens signed with secret
- ✅ CORS properly configured
- ✅ Input validation on all endpoints
- ✅ Rate limiting on auth routes
- ✅ Error messages don't expose internals

---

## 📈 PERFORMANCE

- Vite for fast frontend builds
- MongoDB indexes for fast queries
- JWT caching in localStorage
- ML service with 1.2s timeout
- Optional Redis caching layer

---

## 🤝 GIT WORKFLOW

```bash
git init
git add .
git commit -m "Initial skillforge portal"
git branch -M main
git remote add origin https://github.com/YOU/skillforge-portal
git push -u origin main
```

---

## 📞 GETTING HELP

1. Check **QUICKSTART.md** for setup issues
2. Check **README.md** for feature details
3. Check **DEPLOYMENT.md** for deployment
4. Browse **PROJECT_SUMMARY.md** for complete overview
5. Visit API docs at http://localhost:5000/api/docs

---

## ✅ SUCCESS CHECKLIST

- [ ] All 3 services running
- [ ] Can access http://localhost:5173
- [ ] Can see Swagger docs at port 5000
- [ ] Can login with john@skillforge.com
- [ ] Can see courses and dashboard
- [ ] Can enroll in a course
- [ ] Can view recommendations

**Once all checked → You're ready to code! 🎉**

---

Generated: February 25, 2026
SkillForge Portal v1.0
