# SkillForge Deployment Guide

## Deployment Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Internet Users                        │
└──────────────┬──────────────┬──────────────────┬─────────────┘
               │              │                  │
        ┌──────▼──┐    ┌──────▼──┐      ┌───────▼─────┐
        │ Vercel  │    │ Render   │      │   Render    │
        │Frontend │    │ Backend  │      │  ML Service │
        └─────────┘    └──────────┘      └─────────────┘
               │              │                  │
               └──────────────┴──────────────────┘
                       │
               ┌───────▼────────┐
               │  MongoDB Atlas  │
               │   (Database)    │
               └─────────────────┘
```

## Frontend Deployment

### Option 1: Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/skillforge-portal.git
   git push -u origin main
   ```

2. **Deploy**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import from GitHub
   - Select `skillforge-portal` repository
   - Configure project:
     - Root Directory: `frontend`
     - Build Command: `npm run build`
     - Output Directory: `dist`

3. **Set Environment Variables**
   - Project Settings → Environment Variables
   - Add: `VITE_API_URL=https://your-backend-url.com/api`

4. **Deploy** - Click "Deploy"

### Option 2: Netlify

1. Build locally:
   ```bash
   cd frontend
   npm run build
   ```

2. Visit [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder

## Backend Deployment

### Option 1: Render (Recommended)

1. **Create Render Account**
   - Visit [render.com](https://render.com)
   - Sign up with GitHub

2. **Create Web Service**
   - Click "New +"
   - Select "Web Service"
   - Connect GitHub repository

3. **Configure**
   - **Name:** `skillforge-backend`
   - **Root Directory:** `backend`
   - **Runtime:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Instance Type:** Free (or paid for better performance)

4. **Environment Variables**
   - Add your `.env` variables in Render dashboard
   - Critical ones:
     ```
     MONGODB_URI
     JWT_SECRET
     FRONTEND_URL (your Vercel URL)
     ML_SERVICE_URL (your ML service URL)
     NODE_ENV=production
     ```

5. **Deploy**
   - Push to GitHub, Render auto-deploys

### Option 2: Railway

1. Visit [railway.app](https://railway.app)
2. Connect GitHub
3. Create new project
4. Select `backend` directory
5. Add environment variables
6. Deploy

### Option 3: Heroku

1. **Install Heroku CLI**
2. **Login and create app:**
   ```bash
   heroku login
   heroku create skillforge-backend
   ```

3. **Set environment:**
   ```bash
   heroku config:set MONGODB_URI=your_uri --app skillforge-backend
   heroku config:set JWT_SECRET=your_secret --app skillforge-backend
   ```

4. **Deploy:**
   ```bash
   git push heroku main
   ```

## ML Service Deployment

### Option 1: Render

1. **Create Web Service in Render**
   - Root Directory: `ml-service`
   - Runtime: Python
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `python -m uvicorn main:app --host 0.0.0.0 --port 8000`

2. **Environment Variables**
   ```
   BACKEND_URL=https://your-backend.render.com
   ```

3. **Deploy**

### Option 2: Railway

Similar to Render:
1. Connect GitHub
2. Select `ml-service` directory
3. Set Python as runtime
4. Add environment variables
5. Deploy

### Option 3: AWS Lambda

For serverless deployment (advanced):
1. Use AWS Lambda layer for dependencies
2. Deploy with Zappa or similar framework
3. Use API Gateway for HTTP endpoint

## Database Setup

### MongoDB Atlas (Recommended)

Already used in development, no changes needed for production!

1. **Ensure Cluster is Protected**
   - Network Access: Whitelist production server IPs
   - Database Access: Create strong password

2. **SSL Connection**
   - Enable in Atlas settings
   - Use `mongodb+srv://` connection string (auto-uses SSL)

## Production Checklist

- [ ] Update `JWT_SECRET` to a strong random string
- [ ] Set `NODE_ENV=production` in backend
- [ ] Enable HTTPS on all services
- [ ] Set `FRONTEND_URL` to production frontend URL
- [ ] Set `ML_SERVICE_URL` to production ML service URL
- [ ] Configure CORS properly in backend
- [ ] Set up monitoring/logging
- [ ] Configure rate limiting for production traffic
- [ ] Backup MongoDB regularly
- [ ] Set up SSL/TLS certificates
- [ ] Enable database authentication
- [ ] Test all endpoints in production
- [ ] Set up health checks
- [ ] Configure auto-restart policies

## Environment Variables Template

### Backend `.env` (Production)
```env
MONGODB_URI=mongodb+srv://prod_user:password@prod-cluster.mongodb.net/skillforge
JWT_SECRET=generate-with-crypto.randomBytes(32).toString('hex')
JWT_EXPIRES_IN=7d
PORT=8000
NODE_ENV=production
FRONTEND_URL=https://your-frontend.vercel.app
ML_SERVICE_URL=https://your-ml-service.render.com
ML_REQUEST_TIMEOUT=1200
SEED_ADMIN_EMAIL=admin@skillforge.com
SEED_ADMIN_PASSWORD=StrongPassword123!
```

### ML Service `.env` (Production)
```env
ML_SERVICE_PORT=8000
BACKEND_URL=https://your-backend.render.com
```

## Performance Optimization

### Frontend
- Build with: `npm run build`
- Enable Gzip compression
- Use CDN (Vercel does this automatically)
- Lazy load images and components

### Backend
- Use database indexes
- Implement caching (Redis optional)
- Use connection pooling
- Monitor performance with Render dashboard

### ML Service
- Cache recommendations (10 min TTL)
- Use async operations
- Monitor response times

## Monitoring & Logging

### Render Dashboard
- View real-time logs
- Monitor resource usage
- Check deployment history

### MongoDB Atlas
- Monitor database performance
- Check connection pooling
- View query logs

### Application Logging
```bash
# View backend logs
heroku logs --tail  # Heroku
# Or via Render/Railway dashboard
```

## Common Issues

### CORS Errors
- Verify `FRONTEND_URL` in backend config
- Check allowed origins in Express middleware

### Cannot Connect to MongoDB
- Verify IP is whitelisted in MongoDB Atlas
- Check connection string format
- Ensure cluster is running

### ML Service Timeout
- Check ML service is running
- Verify `ML_SERVICE_URL` is correct
- Check network connectivity

### Out of Memory
- Scale to better tier
- Implement pagination
- Cache results

## Disaster Recovery

### Backup Database
```bash
# MongoDB Atlas automatic backups (every 6 hours)
# Manual backup
mongodump --uri "mongodb+srv://user:pass@cluster.mongodb.net/skillforge"
```

### Restore Database
```bash
mongorestore --uri "mongodb+srv://user:pass@cluster.mongodb.net/skillforge" [dump-path]
```

## Scaling Strategy

### Phase 1 (0-1000 users)
- Free tier suitable for all services
- Monitor performance

### Phase 2 (1000-10K users)
- Upgrade to $7/month tiers
- Enable database indexing
- Add Redis caching layer

### Phase 3 (10K+ users)
- Upgrade to paid tiers
- Load balancing
- Microservices architecture
- CDN for static assets

## Cost Estimation (Monthly)

| Service | Free | Starter | Growth |
|---------|------|---------|--------|
| Frontend (Vercel) | $0 | $0 | $0 |
| Backend (Render) | $0 | $7 | $15+ |
| ML Service (Render) | $0 | $7 | $15+ |
| MongoDB Atlas | $0 | $57 | $200+ |
| **Total** | **$0** | **~$70** | **$200+** |

---

**Questions? Check README.md or contact the dev team!**

See it live: [Deploy now! 🚀]
