# SkillForge Quick Start Guide

## 🚀 Getting Started in 5 Minutes

### Step 1: Prerequisites ✓
- Node.js 18+ ([download](https://nodejs.org))
- Python 3.9+ ([download](https://www.python.org))
- MongoDB Atlas account ([free](https://www.mongodb.com/cloud/atlas))
- Git

### Step 2: Clone Repository
```bash
cd skillforge-portal
```

### Step 3: Setup MongoDB
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create a user and database
4. Get your connection string: `mongodb+srv://user:pass@cluster.mongodb.net/skillforge`
5. Add your IP address to the whitelist

### Step 4: Environment Setup

**Create `backend/.env`:**
```env
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@your-cluster.mongodb.net/skillforge
JWT_SECRET=your-secret-key-here
JWT_EXPIRES_IN=7d
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
ML_SERVICE_URL=http://localhost:8000
ML_REQUEST_TIMEOUT=1200
SEED_ADMIN_EMAIL=admin@skillforge.com
SEED_ADMIN_PASSWORD=AdminPass123!
```

**Create `ml-service/.env`:**
```env
ML_SERVICE_PORT=8000
BACKEND_URL=http://localhost:5000
```

### Step 5: Install Dependencies

**Backend:**
```bash
cd backend
npm install
cd ..
```

**Frontend:**
```bash
cd frontend
npm install
cd ..
```

**ML Service:**
```bash
cd ml-service
python -m venv venv

# Windows
venv\Scripts\activate
# macOS/Linux
source venv/bin/activate

pip install -r requirements.txt
cd ..
```

### Step 6: Run Services

**Open 3 terminals:**

**Terminal 1 - Backend (Port 5000):**
```bash
cd backend
npm run dev
# Visit: http://localhost:5000/api/docs
```

**Terminal 2 - ML Service (Port 8000):**
```bash
cd ml-service

# Activate venv first
# Windows: venv\Scripts\activate
# macOS/Linux: source venv/bin/activate

python -m uvicorn main:app --reload --port 8000
# Visit: http://localhost:8000/docs
```

**Terminal 3 - Frontend (Port 5173):**
```bash
cd frontend
npm run dev
# Visit: http://localhost:5173
```

### Step 7: Populate Database
Once backend is running:
```bash
cd backend
npm run seed
```

This creates:
- Admin user (admin@skillforge.com / AdminPass123!)
- 10 CSE courses
- Sample student accounts
- Sample enrollments

### Step 8: Test the App!

**Login with:**
- Email: `john@skillforge.com`
- Password: `password123`

Or register a new account.

## 📚 API Documentation

- **Backend API Docs:** http://localhost:5000/api/docs
- **ML Service Docs:** http://localhost:8000/docs

## 🎯 What You Can Do

### Frontend (http://localhost:5173)
- ✓ Browse courses with filters and search
- ✓ View course details and syllabus
- ✓ Enroll in courses
- ✓ Track learning progress
- ✓ Take mini quizzes
- ✓ View personalized dashboard
- ✓ Get course recommendations

### Backend API (http://localhost:5000/api/docs)
- ✓ Test all endpoints interactively
- ✓ View request/response schemas
- ✓ Authenticate and try protected routes
- ✓ See real-time examples

### ML Service (http://localhost:8000/docs)
- ✓ Get personalized recommendations
- ✓ Estimate course difficulty
- ✓ View ranking algorithm calculations

## 🐳 Docker Setup (Optional)

```bash
# Build and run all services
docker-compose up

# Access services
# Frontend: http://localhost:5173
# Backend: http://localhost:5000
# ML: http://localhost:8000
```

## 🆘 Troubleshooting

**"Cannot connect to MongoDB"**
- Check connection string in `.env`
- Verify IP whitelist in MongoDB Atlas
- Ensure cluster is running

**"CORS error in frontend"**
- Update `FRONTEND_URL` in backend `.env`
- Clear browser cache

**"ML service timeout"**
- Backend has 1200ms timeout
- Falls back to simple recommendations
- Check ML service is running

**"Port already in use"**
- Change port numbers in `.env` and run commands
- Or kill process: `lsof -ti :5000 | xargs kill -9`

## 📁 Project Structure

```
skillforge-portal/
├── backend/              # Express.js backend
├── frontend/             # React Vite app
├── ml-service/           # FastAPI service
├── README.md            # Full documentation
└── docker-compose.yml   # Docker setup
```

## 💡 Next Steps

1. **Explore the code** - All well-documented
2. **Add more courses** - See backend seed.js
3. **Customize branding** - Update Navbar, colors
4. **Deploy** - Use Vercel (frontend), Render (backend)
5. **Add features** - Payments, certificates, advanced ML

## 🎓 Key Technologies

- **Real Auth:** JWT with bcrypt hashing
- **Database:** MongoDB with proper schemas
- **API:** Swagger UI for interactive docs
- **ML:** Weighted recommendations algorithm
- **UI:** Professional Bootstrap 5 design

---

**Questions? Check the full README.md or API docs!**

Happy Learning! 🚀
