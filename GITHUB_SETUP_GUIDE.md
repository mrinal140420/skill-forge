# SkillForge Portal - Complete GitHub Setup & Deployment Guide

This guide walks you through the entire process of setting up the SkillForge Portal project, uploading it to GitHub, and deploying it on another machine.

---

## Table of Contents

1. [Initial Setup on Your Local Machine](#initial-setup-on-your-local-machine)
2. [Creating a GitHub Repository](#creating-a-github-repository)
3. [Pushing Project to GitHub](#pushing-project-to-github)
4. [Cloning to Another Machine](#cloning-to-another-machine)
5. [Installing Dependencies on New Machine](#installing-dependencies-on-new-machine)
6. [Starting the Project](#starting-the-project)
7. [Troubleshooting](#troubleshooting)

---

## Initial Setup on Your Local Machine

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **Python** (v3.8 or higher) - [Download](https://www.python.org/)
- **Git** - [Download](https://git-scm.com/)
- **Docker** & **Docker Compose** (optional, for containerized deployment) - [Download](https://www.docker.com/)

### Step 1: Clone/Navigate to Project Directory

If you're starting fresh, navigate to your project directory:

```bash
cd skillforge-portal
```

### Step 2: Install Dependencies

#### For Backend (Node.js/Express):

```bash
cd backend
npm install
cd ..
```

#### For Frontend (React/Vite):

```bash
cd frontend
npm install
cd ..
```

#### For ML Service (Python):

```bash
cd ml-service
pip install -r requirements.txt
cd ..
```

### Step 3: Configure Environment Variables

Create `.env` files in each service directory:

#### Backend - `backend/.env`:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/skillforge
JWT_SECRET=your_jwt_secret_key_here
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

#### Frontend - `frontend/.env`:

```
VITE_API_URL=http://localhost:5000/api
```

#### ML Service - `ml-service/.env`:

```
PORT=5001
PYTHON_ENV=development
```

### Step 4: Test Locally

Start all services:

```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev

# Terminal 3 - ML Service
cd ml-service
python main.py
```

Access the application at: `http://localhost:5173`

---

## Creating a GitHub Repository

### Step 1: Create Repository on GitHub

1. Go to [GitHub.com](https://github.com)
2. Click the **"+"** icon in the top-right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `skillforge-portal`
   - **Description**: `SkillForge Portal - Learning Management System`
   - **Visibility**: Choose "Public" or "Private"
   - **Initialize with**: Leave empty (we'll push existing code)
5. Click **"Create repository"**

### Step 2: Get Your Repository URL

Copy the HTTPS or SSH URL from the newly created repository:
- **HTTPS**: `https://github.com/yourusername/skillforge-portal.git`
- **SSH**: `git@github.com:yourusername/skillforge-portal.git`

---

## Pushing Project to GitHub

### Step 1: Initialize Git (if not already done)

Navigate to project root:

```bash
cd skillforge-portal
```

Initialize git repository:

```bash
git init
```

### Step 2: Add Remote Origin

Add your GitHub repository as the remote origin:

```bash
git remote add origin https://github.com/yourusername/skillforge-portal.git
```

Verify the remote:

```bash
git remote -v
```

### Step 3: Create .gitignore File

Create a `.gitignore` file in the project root:

```bash
# Dependencies
node_modules/
__pycache__/
*.pyc
venv/
env/
.venv/

# Environment variables
.env
.env.local
.env.*.local

# Build directories
dist/
build/
.next/

# IDE & Editor
.vscode/
.idea/
*.swp
*.swo
*~
.DS_Store

# Logs
logs/
*.log
npm-debug.log*

# Temporary files
tmp/
temp/
*.tmp
```

### Step 4: Stage, Commit, and Push

Stage all files:

```bash
git add .
```

Create initial commit:

```bash
git commit -m "Initial commit: SkillForge Portal project setup"
```

Push to GitHub (main branch):

```bash
git branch -M main
git push -u origin main
```

### Step 5: Verify on GitHub

Go to your GitHub repository URL and verify all files are uploaded.

---

## Cloning to Another Machine

### Step 1: Install Prerequisites on New Machine

On the new machine, ensure you have:
- Git
- Node.js (v16+)
- Python (v3.8+)
- Docker & Docker Compose (optional)

### Step 2: Clone Repository

Open terminal/command prompt and navigate to desired location:

```bash
git clone https://github.com/yourusername/skillforge-portal.git
```

Navigate into project directory:

```bash
cd skillforge-portal
```

---

## Installing Dependencies on New Machine

### Step 1: Backend Dependencies

```bash
cd backend
npm install
cd ..
```

### Step 2: Frontend Dependencies

```bash
cd frontend
npm install
cd ..
```

### Step 3: ML Service Dependencies

```bash
cd ml-service
pip install -r requirements.txt
cd ..
```

### Step 4: Create Environment Variables

Create `.env` files in each directory:

#### `backend/.env`:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/skillforge
JWT_SECRET=your_jwt_secret_key_here
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

#### `frontend/.env`:

```
VITE_API_URL=http://localhost:5000/api
```

#### `ml-service/.env`:

```
PORT=5001
PYTHON_ENV=development
```

---

## Starting the Project

### Option 1: Manual Start (Development)

Open **4 separate terminals** in the project root directory:

#### Terminal 1 - Backend Server:

```bash
cd backend
npm run dev
```

Expected output:
```
Server running on http://localhost:5000
```

#### Terminal 2 - Frontend Development Server:

```bash
cd frontend
npm run dev
```

Expected output:
```
VITE v4.x.x ready in 234 ms
Local: http://localhost:5173/
```

#### Terminal 3 - ML Service:

```bash
cd ml-service
python main.py
```

Expected output:
```
Python server running on http://localhost:5001
```

#### Terminal 4 - MongoDB (if local):

```bash
mongod
```

Access the application at: **http://localhost:5173**

### Option 2: Using Docker Compose (Recommended for Production)

In the project root directory:

```bash
docker-compose up -d
```

This will start all services in containers:
- Backend on `http://localhost:5000`
- Frontend on `http://localhost:5173`
- ML Service on `http://localhost:5001`

To stop:

```bash
docker-compose down
```

To view logs:

```bash
docker-compose logs -f
```

### Option 3: Using Setup Script

#### On Windows:

```bash
setup.bat
```

#### On macOS/Linux:

```bash
bash setup.sh
```

---

## Verifying Installation

### Check All Services Are Running

1. **Backend**: Visit `http://localhost:5000/api/health`
2. **Frontend**: Visit `http://localhost:5173`
3. **ML Service**: Visit `http://localhost:5001/health`

### Check MongoDB Connection

In backend terminal, you should see:
```
Connected to MongoDB
```

### Run Tests (if available)

```bash
cd backend
npm test

cd ../frontend
npm test
```

---

## Troubleshooting

### Issue: Port Already in Use

**Solution**: Change ports in `.env` files or kill processes using ports:

#### Windows:
```bash
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

#### macOS/Linux:
```bash
lsof -i :5000
kill -9 <PID>
```

### Issue: MongoDB Connection Error

**Solution**:
1. Verify MongoDB is running
2. Check `MONGODB_URI` in `backend/.env`
3. Ensure MongoDB service is started

### Issue: npm install Fails

**Solution**:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Issue: Python Dependencies Error

**Solution**:
```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Install requirements
pip install -r requirements.txt
```

### Issue: CORS Errors

**Solution**: Ensure `FRONTEND_URL` in `backend/.env` matches your frontend URL:
```
FRONTEND_URL=http://localhost:5173
```

### Issue: API Calls Return 404

**Solution**: Verify:
1. Backend is running on correct port
2. `VITE_API_URL` in `frontend/.env` is correct
3. API routes are properly configured

---

## Common Git Commands

### Update Local Repository

```bash
git pull origin main
```

### Create New Branch

```bash
git checkout -b feature/your-feature-name
```

### Commit Changes

```bash
git add .
git commit -m "Your commit message"
git push origin feature/your-feature-name
```

### Create Pull Request

1. Go to GitHub repository
2. Click "Compare & pull request"
3. Add description and create PR

---

## Project Structure

```
skillforge-portal/
├── backend/              # Express.js API server
│   ├── src/
│   ├── package.json
│   └── .env
├── frontend/             # React + Vite application
│   ├── src/
│   ├── package.json
│   └── .env
├── ml-service/           # Python ML service
│   ├── main.py
│   ├── requirements.txt
│   └── .env
├── docker-compose.yml    # Container orchestration
└── .gitignore
```

---

## Next Steps

1. ✅ Project is now live locally
2. ✅ Code is pushed to GitHub
3. ✅ Ready to deploy on another machine
4. Create a production `.env` file for deployment
5. Set up CI/CD pipeline (GitHub Actions)
6. Configure domain and SSL certificate
7. Deploy to cloud platform (Heroku, AWS, DigitalOcean, etc.)

---

## Support & Contact

For issues or questions:
- Check the troubleshooting section above
- Review individual service README files
- Create an issue on GitHub repository
- Contact the development team

---

## License

This project is licensed under the MIT License - see LICENSE file for details.

---

**Last Updated**: February 2026
**Version**: 1.0.0
