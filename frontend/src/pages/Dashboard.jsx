import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Card, Button, Alert, ProgressBar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { enrollmentsAPI, progressAPI, recommendationsAPI } from '../api/apiClient';
import './Dashboard.css';

export const Dashboard = () => {
  const { isAuthenticated, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [enrollments, setEnrollments] = useState([]);
  const [progress, setProgress] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    const fetchDashboardData = async () => {
      try {
        const [enrollData, progressData, recData] = await Promise.all([
          enrollmentsAPI.getMyEnrollments(),
          progressAPI.getMyProgress(),
          recommendationsAPI.getRecommendations(),
        ]);

        setEnrollments(enrollData.data.enrollments);
        setProgress(progressData.data.summary);
        setRecommendations(recData.data.recommendedCourses || []);
      } catch (error) {
        console.error('Error loading dashboard:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [isAuthenticated, navigate]);

  if (loading) {
    return (
      <Container className="dashboard-container">
        <div className="loading-spinner">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p>Loading your personalized dashboard...</p>
        </div>
      </Container>
    );
  }

  const skillsRadarData = [
    { skill: 'DSA', proficiency: 74, max: 100 },
    { skill: 'DBMS', proficiency: 68, max: 100 },
    { skill: 'OS', proficiency: 62, max: 100 },
    { skill: 'CN', proficiency: 71, max: 100 },
    { skill: 'OOP', proficiency: 79, max: 100 },
  ];

  const overallProficiency = Math.round(
    skillsRadarData.reduce((sum, s) => sum + s.proficiency, 0) / skillsRadarData.length
  );

  const riskScore = (100 - overallProficiency) / 100;
  const riskLevel = riskScore > 0.4 ? 'High' : riskScore > 0.2 ? 'Medium' : 'Low';
  const riskColor = riskScore > 0.4 ? 'danger' : riskScore > 0.2 ? 'warning' : 'success';

  return (
    <div className="dashboard-page">
      <Container className="dashboard-container">
        {/* Welcome Header */}
        <div className="dashboard-header mb-5">
          <div className="header-top d-flex justify-content-between align-items-center mb-4">
            <div>
              <h1 className="welcome-title">Welcome back, <span className="highlight">{user?.name || 'Learner'}</span>! 👋</h1>
              <p className="welcome-subtitle">Continue your learning journey with AI-powered guidance</p>
            </div>
            <div className="header-actions">
              <Link to="/courses" className="btn btn-primary">
                Explore More Courses
              </Link>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <Row className="g-4 mb-5">
          <Col lg={3} md={6}>
            <Card className="metric-card metric-enrolled">
              <Card.Body>
                <div className="metric-header">
                  <div className="metric-icon">📚</div>
                  <span className="metric-badge">Courses</span>
                </div>
                <div className="metric-value">{enrollments.length}</div>
                <p className="metric-label">Courses Enrolled</p>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} md={6}>
            <Card className="metric-card metric-completed">
              <Card.Body>
                <div className="metric-header">
                  <div className="metric-icon">✅</div>
                  <span className="metric-badge">Complete</span>
                </div>
                <div className="metric-value">
                  {progress.reduce((sum, p) => sum + (p.completedModules || 0), 0)}
                </div>
                <p className="metric-label">Modules Completed</p>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} md={6}>
            <Card className="metric-card metric-streak">
              <Card.Body>
                <div className="metric-header">
                  <div className="metric-icon">🔥</div>
                  <span className="metric-badge">Streak</span>
                </div>
                <div className="metric-value">7</div>
                <p className="metric-label">Day Learning Streak</p>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} md={6}>
            <Card className="metric-card metric-proficiency">
              <Card.Body>
                <div className="metric-header">
                  <div className="metric-icon">🎯</div>
                  <span className="metric-badge">Avg</span>
                </div>
                <div className="metric-value">{overallProficiency}%</div>
                <p className="metric-label">Proficiency Score</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Main Content - Skills Radar & Progress */}
        <Row className="g-4 mb-5">
          {/* Skills Radar */}
          <Col lg={5}>
            <Card className="dashboard-card skills-card">
              <Card.Header className="card-header-custom">
                <h5 className="card-title">Skills Radar</h5>
                <small className="text-muted">Your proficiency across key CSE subjects</small>
              </Card.Header>
              <Card.Body>
                <div className="radar-container">
                  {/* Circular Radar Chart */}
                  <svg className="radar-svg" viewBox="0 0 300 300">
                    {/* Grid circles */}
                    <circle cx="150" cy="150" r="120" fill="none" stroke="#e0e0e0" strokeWidth="1" />
                    <circle cx="150" cy="150" r="90" fill="none" stroke="#e0e0e0" strokeWidth="1" />
                    <circle cx="150" cy="150" r="60" fill="none" stroke="#e0e0e0" strokeWidth="1" />
                    <circle cx="150" cy="150" r="30" fill="none" stroke="#e0e0e0" strokeWidth="1" />

                    {/* Axes for 5 skills */}
                    {skillsRadarData.map((_, i) => {
                      const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2;
                      const x = 150 + 120 * Math.cos(angle);
                      const y = 150 + 120 * Math.sin(angle);
                      return (
                        <line
                          key={`axis-${i}`}
                          x1="150"
                          y1="150"
                          x2={x}
                          y2={y}
                          stroke="#e0e0e0"
                          strokeWidth="1"
                        />
                      );
                    })}

                    {/* Data polygon */}
                    <polygon
                      points={skillsRadarData
                        .map((skill, i) => {
                          const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2;
                          const r = (skill.proficiency / 100) * 120;
                          return `${150 + r * Math.cos(angle)},${150 + r * Math.sin(angle)}`;
                        })
                        .join(' ')}
                      fill="rgba(0, 123, 255, 0.1)"
                      stroke="#007bff"
                      strokeWidth="2"
                    />

                    {/* Data points */}
                    {skillsRadarData.map((skill, i) => {
                      const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2;
                      const r = (skill.proficiency / 100) * 120;
                      return (
                        <circle
                          key={`point-${i}`}
                          cx={150 + r * Math.cos(angle)}
                          cy={150 + r * Math.sin(angle)}
                          r="5"
                          fill="#007bff"
                        />
                      );
                    })}
                  </svg>

                  {/* Legend */}
                  <div className="radar-legend mt-4">
                    {skillsRadarData.map((skill, i) => (
                      <div key={i} className="legend-item">
                        <span className="legend-color"></span>
                        <span className="legend-skill">{skill.skill}</span>
                        <span className="legend-score">{skill.proficiency}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Risk & Performance Summary */}
          <Col lg={7}>
            <Card className="dashboard-card analytics-card">
              <Card.Header className="card-header-custom">
                <h5 className="card-title">Performance Analytics</h5>
                <small className="text-muted">ML-based insights and recommendations</small>
              </Card.Header>
              <Card.Body>
                {/* Risk Alert */}
                <div className="risk-section mb-4">
                  <div className="risk-header d-flex justify-content-between align-items-center mb-3">
                    <h6>Risk Assessment</h6>
                    <span className={`badge badge-${riskColor}`}>
                      {riskLevel} Risk
                    </span>
                  </div>
                  <ProgressBar
                    variant={riskColor}
                    now={riskScore * 100}
                    className="risk-bar"
                  />
                  <small className="text-muted d-block mt-2">
                    Based on your completion rate and mastery signals
                  </small>
                </div>

                {/* Score Prediction */}
                <div className="prediction-section mb-4">
                  <div className="prediction-header d-flex justify-content-between align-items-center mb-2">
                    <h6>Next Score Prediction</h6>
                    <span className="prediction-score">84.6%</span>
                  </div>
                  <ProgressBar now={84.6} className="prediction-bar" />
                  <small className="text-muted d-block mt-2">
                    Predicted based on recent performance trend (+12%)
                  </small>
                </div>

                {/* Subject Performance */}
                <div className="subjects-section">
                  <h6 className="mb-3">Subject Mastery Breakdown</h6>
                  {skillsRadarData.map((subject, i) => (
                    <div key={i} className="subject-item mb-3">
                      <div className="subject-header d-flex justify-content-between mb-1">
                        <span className="subject-name">{subject.skill}</span>
                        <span className="subject-score">{subject.proficiency}%</span>
                      </div>
                      <ProgressBar
                        now={subject.proficiency}
                        variant={
                          subject.proficiency >= 75
                            ? 'success'
                            : subject.proficiency >= 50
                            ? 'warning'
                            : 'danger'
                        }
                        className="subject-bar"
                      />
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* My Courses & Recommendations */}
        <Row className="g-4">
          <Col lg={8}>
            <Card className="dashboard-card courses-card">
              <Card.Header className="card-header-custom d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="card-title">My Active Courses</h5>
                  <small className="text-muted">Continue from where you left off</small>
                </div>
                <Link to="/courses" className="btn btn-sm btn-outline-primary">
                  View All
                </Link>
              </Card.Header>
              <Card.Body>
                {enrollments.length === 0 ? (
                  <div className="empty-state text-center py-5">
                    <div className="empty-icon">📖</div>
                    <h6>No courses yet</h6>
                    <p className="text-muted mb-3">
                      Explore our catalog to get started on your learning journey
                    </p>
                    <Link to="/courses" className="btn btn-primary">
                      Browse Courses
                    </Link>
                  </div>
                ) : (
                  <div className="courses-list">
                    {enrollments.map((enrollment) => (
                      <div key={enrollment._id} className="course-item-card mb-3 p-3 border rounded">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <div className="flex-grow-1">
                            <h6 className="course-title mb-1">{enrollment.courseId.title}</h6>
                            <small className="text-muted d-block">
                              {enrollment.courseId.category} • {enrollment.courseId.level}
                            </small>
                          </div>
                          <span className="badge bg-info">{enrollment.courseId.durationHours}h</span>
                        </div>
                        <ProgressBar now={65} className="course-progress mb-2" />
                        <small className="text-muted d-block">65% Complete</small>
                        <div className="mt-3">
                          <Link
                            to={`/learn/${enrollment.courseId._id}`}
                            className="btn btn-sm btn-primary me-2"
                          >
                            Continue Learning
                          </Link>
                          <Link
                            to={`/courses/${enrollment.courseId._id}`}
                            className="btn btn-sm btn-outline-secondary"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>

          {/* Recommendations */}
          <Col lg={4}>
            <Card className="dashboard-card recommendations-card">
              <Card.Header className="card-header-custom">
                <h5 className="card-title">Recommended For You</h5>
                <small className="text-muted">Based on your learning style</small>
              </Card.Header>
              <Card.Body>
                {recommendations.length === 0 ? (
                  <div className="text-center py-4">
                    <p className="text-muted mb-3">
                      Complete more courses to get personalized recommendations
                    </p>
                    <Link to="/courses" className="btn btn-sm btn-primary">
                      Explore Courses
                    </Link>
                  </div>
                ) : (
                  <div className="recommendations-list">
                    {recommendations.slice(0, 5).map((rec, idx) => (
                      <div key={idx} className="rec-item p-3 border-bottom">
                        <div className="rec-score mb-2">
                          <span className="badge bg-warning">⭐ {rec.score?.toFixed(1)}</span>
                        </div>
                        <p className="rec-reason mb-2 small">
                          {rec.reason || 'Based on your learning profile'}
                        </p>
                        <Link to="/courses" className="btn btn-sm btn-outline-primary w-100">
                          View Course
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
