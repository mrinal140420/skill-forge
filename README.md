# SkillForge - CSE Courses Portal

A professional learning portal for Computer Science Engineering courses with real authentication, persistent data, API documentation, and ML-powered recommendations.

## Features

✅ **Real Authentication** - JWT-based auth with bcrypt password hashing  
✅ **Persistent Database** - MongoDB Atlas integration  
✅ **Comprehensive API** - RESTful backend with Swagger UI docs  
✅ **ML Recommendations** - Personalized course suggestions using weighted ranking  
✅ **Beautiful UI** - React + Bootstrap responsive design  
✅ **Production-Ready** - Proper error handling, validation, rate limiting  

## Tech Stack

### Frontend
- React 18
- Vite (build tool)
- React Router (navigation)
- Axios (HTTP client)
- Bootstrap 5 (UI framework)
- Recharts (visualizations)

### Backend
- Node.js + Express
- MongoDB Atlas
- JWT + bcrypt
- Swagger UI (OpenAPI 3.0)
- Express Rate Limiting

### ML Service
- Python + FastAPI
- Pydantic validation
- NumPy for calculations
- Auto Swagger docs

## Project Structure

```
skillforge-portal/
├── frontend/                    # React Vite application
│   ├── src/
│   │   ├── pages/             # Page components
│   │   ├── components/        # Reusable components
│   │   ├── context/           # React context
│   │   ├── api/               # API client
│   │   └── styles/            # Global styles
│   ├── package.json
│   └── vite.config.js
├── backend/                     # Express.js backend
│   ├── src/
│   │   ├── app.js             # Express app entry
│   │   ├── config/            # DB & Swagger config
│   │   ├── models/            # MongoDB schemas
│   │   ├── routes/            # API routes
│   │   ├── controllers/       # Route handlers
│   │   ├── middlewares/       # Custom middlewares
│   │   └── utils/             # Seed script
│   ├── package.json
│   └── .env.example
└── ml-service/                  # FastAPI ML service
    ├── main.py                # FastAPI app
    ├── requirements.txt
    └── .env.example
```

## Getting Started

### Prerequisites
- Node.js 18+
- Python 3.9+
- MongoDB Atlas account (free tier available)
- Git

### 1. Clone & Setup

```bash
cd skillforge-portal

# Frontend setup
cd frontend
npm install

# Backend setup
cd ../backend
npm install

# ML Service setup
cd ../ml-service
python -m venv venv

# On Windows
venv\Scripts\activate
# On macOS/Linux
source venv/bin/activate

pip install -r requirements.txt
```

### 2. Configure Environment

**Backend** - Create `backend/.env`:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/skillforge
JWT_SECRET=your-super-secret-jwt-key-change-in-production
JWT_EXPIRES_IN=7d
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
ML_SERVICE_URL=http://localhost:8000
ML_REQUEST_TIMEOUT=1200
SEED_ADMIN_EMAIL=admin@skillforge.com
SEED_ADMIN_PASSWORD=AdminPass123!
```

**ML Service** - Create `ml-service/.env`:
```env
ML_SERVICE_PORT=8000
BACKEND_URL=http://localhost:5000
```

### 3. Set Up MongoDB

1. Create free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster (select free tier)
3. Create a database user and get connection string
4. Add your IP to IP whitelist
5. Update `MONGODB_URI` in backend `.env`

### 4. Run Services

**Terminal 1 - Backend**:
```bash
cd backend
npm run dev
# Server runs on http://localhost:5000
# Swagger docs at http://localhost:5000/api/docs
```

**Terminal 2 - ML Service**:
```bash
cd ml-service
# Activate venv first
python -m uvicorn main:app --reload --port 8000
# API docs at http://localhost:8000/docs
```

**Terminal 3 - Frontend**:
```bash
cd frontend
npm run dev
# Frontend runs on http://localhost:5173
```

### 5. Seed Database

Once backend is running:
```bash
cd backend
npm run seed
# Creates admin user, sample courses, and enrollments
```

**Test Credentials**:
- Email: `john@skillforge.com`
- Password: `password123`

## API Documentation

### Swagger UI
Access interactive API docs at: `http://localhost:5000/api/docs`

### Key Endpoints

**Auth**:
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login and get JWT
- `GET /api/auth/me` - Get current user (protected)

**Courses**:
- `GET /api/courses` - List all courses (filterable)
- `GET /api/courses/:id` - Get course details
- `POST /api/courses` - Create course (admin)

**Enrollments**:
- `POST /api/enrollments` - Enroll in course (protected)
- `GET /api/enrollments/me` - Get my enrollments (protected)

**Progress & Quiz**:
- `POST /api/progress/complete` - Mark module complete (protected)
- `GET /api/progress/me` - Get my progress (protected)
- `POST /api/quiz/submit` - Submit quiz answers (protected)

**Recommendations**:
- `GET /api/recommendations/me` - Get personalized recommendations (protected)

### ML Service Endpoints

**FastAPI Docs**: `http://localhost:8000/docs`

- `POST /recommend` - Get course recommendations
- `POST /difficulty` - Estimate course difficulty
- `GET /health` - Health check

## Features in Detail

### 1. Authentication
- JWT-based authentication
- Secure password hashing with bcrypt
- Token-based API protection
- Rate limiting on auth endpoints

### 2. Course Management
- 50+ CSE courses with metadata
- Full-text search
- Category & difficulty filtering
- Course details with syllabus

### 3. Learning Dashboard
- Personal course enrollment tracking
- Module progress tracking
- Quiz system with immediate feedback
- Learning streak counter
- Personalized recommendations

### 4. ML Recommendations
Uses weighted ranking algorithm:
```
Score = 0.45*(1 - masteryTag) + 0.25*recentMistakeRate 
        + 0.20*prereqGap + 0.10*popularityBoost
```

Falls back to popularity-based recommendations if ML service is unavailable.

### 5. Swagger API Docs
- Interactive endpoint testing
- Request/response examples
- Schema documentation
- Bearer token authentication UI

## Deployment

### Frontend (Vercel/Netlify)
```bash
cd frontend
npm run build
# Deploy `dist/` folder
```

### Backend (Render/Railway)
```bash
cd backend
# Set environment variables in platform UI
# Deploy with `npm start` command
```

### ML Service (Render/Railway)
```bash
cd ml-service
# Set environment variables
# Deploy with `python -m uvicorn main:app --host 0.0.0.0 --port 8000`
```

## Development Notes

### Adding New Features

**New API Endpoint**:
1. Create model in `backend/src/models/`
2. Create controller in `backend/src/controllers/`
3. Add routes in `backend/src/routes/`
4. Document with JSDoc comments for Swagger
5. Add tests

**Frontend Page**:
1. Create component in `src/pages/`
2. Add route in `App.jsx`
3. Style with CSS module
4. Use API client from `src/api/apiClient.js`

## Troubleshooting

**MongoDB Connection Error**:
- Check IP whitelist in MongoDB Atlas
- Verify connection string in `.env`
- Ensure cluster is active

**CORS Errors**:
- Update `FRONTEND_URL` in backend `.env`
- Verify frontend dev server URL matches

**ML Service Timeout**:
- Backend has 1200ms timeout for ML calls
- Falls back to popularity-based recommendations
- Check ML service is running

## Performance Optimization

- Implemented rate limiting on auth endpoints
- Database indexing on frequently queried fields
- JWT caching in localStorage
- Lazy loading of course images
- API response caching (optional)

## Security Features

- HTTPS ready (set in deployment)
- JWT token validation
- Password hashing with bcrypt
- Input validation with Zod
- Rate limiting
- CORS configured
- SQL injection protection (MongoDB)

## Testing

Sample data includes:
- 10 CSE courses
- 3 sample user accounts
- Pre-enrolled sample data

Feel free to test auth, course browsing, enrollment, and quizzes!

## License

MIT

## Support

For issues and questions:
1. Check API docs at `/api/docs`
2. Review console errors
3. Check environment variables
4. Verify all services are running

---

**Happy Learning! 🚀**

Built with ❤️ for Computer Science learners.
