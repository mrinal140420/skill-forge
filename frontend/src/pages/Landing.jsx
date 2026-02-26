import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { coursesAPI } from '../api/apiClient';
import { CourseCard } from '../components/CourseCard';
import { AuthContext } from '../context/AuthContext';
import './Landing.css';

export const Landing = () => {
  const [featuredCourses, setFeaturedCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    const fetchFeaturedCourses = async () => {
      try {
        const response = await coursesAPI.getAll({ featured: true });
        setFeaturedCourses(response.data.courses);
      } catch (error) {
        console.error('Error fetching featured courses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedCourses();
  }, []);

  const categories = ['DSA', 'DBMS', 'OS', 'CN', 'OOP', 'System Design', 'AI/ML Basics', 'Cyber Security'];

  return (
    <div className="landing-page">
      {/* Hero Section (more visual) */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center gap-4 py-5">
            <Col lg={6} className="hero-content">
              <div className="badge-pill">AI-Powered Learning Platform</div>
              <h1 className="hero-headline">Master Computer Science with AI-Driven Personalization</h1>
              <p className="hero-subtext">
                SkillForge combines expertly-curated CSE curricula with machine learning-powered learning paths.
                Get personalized course recommendations, adaptive practice problems, automated grading, and ML-based
                progress predictions—all designed to accelerate your journey from student to industry-ready engineer.
              </p>

              <div className="hero-cta">
                <Link to="/courses" className="btn btn-primary btn-lg me-3">
                  Browse Courses
                </Link>
                {!isAuthenticated && (
                  <Link to="/login" className="btn btn-outline-light btn-lg">
                    Get Started — Free
                  </Link>
                )}
              </div>

              <div className="hero-tags mt-4">
                {['Adaptive Practice', 'Personalized Paths', 'Auto-grading', 'NLP Tagging'].map((t) => (
                  <span key={t} className="tag-pill">
                    {t}
                  </span>
                ))}
              </div>

              <div className="hero-stats d-flex gap-4 mt-5">
                <div>
                  <h3>10K+</h3>
                  <p className="muted">Learners</p>
                </div>
                <div>
                  <h3>120+</h3>
                  <p className="muted">Modules</p>
                </div>
                <div>
                  <h3>95%</h3>
                  <p className="muted">Placement Readiness</p>
                </div>
              </div>
            </Col>

            <Col lg={5} className="d-none d-lg-block offset-lg-1">
            </Col>
          </Row>
        </Container>
      </section>

      {/* Categories */}
      <section className="categories-section">
        <Container>
          <h2>Explore by Category</h2>
          <Row className="g-3">
            {categories.map((cat) => (
              <Col md={3} key={cat}>
                <Link to={`/courses?category=${cat}`} className="category-card">
                  <div className="category-icon">
                    {cat === 'DSA' && '📊'}
                    {cat === 'DBMS' && '🗄'}
                    {cat === 'OS' && '⚙'}
                    {cat === 'CN' && '🌐'}
                    {cat === 'OOP' && '🏗'}
                    {cat === 'System Design' && '🔧'}
                    {cat === 'AI/ML Basics' && '🤖'}
                    {cat === 'Cyber Security' && '🔒'}
                  </div>
                  <h6>{cat}</h6>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ML Features / Highlights */}
      <section className="features-section">
        <Container>
          <h2>Platform Highlights</h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="feature-card h-100">
                <Card.Body>
                  <div className="feature-icon-box adaptive"></div>
                  <Card.Title>Adaptive Practice</Card.Title>
                  <Card.Text>Intelligent difficulty adjustment based on your mastery patterns helps you learn at the perfect pace without frustration.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="feature-card h-100">
                <Card.Body>
                  <div className="feature-icon-box recommendation"></div>
                  <Card.Title>ML-Powered Recommendations</Card.Title>
                  <Card.Text>Personalized learning paths that match your skills, goals, and learning style using collaborative filtering.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="feature-card h-100">
                <Card.Body>
                  <div className="feature-icon-box insights"></div>
                  <Card.Title>Predictive Analytics</Card.Title>
                  <Card.Text>ML-based risk detection and score prediction empowers you to proactively adjust your study strategy.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured Courses */}
      <section className="featured-courses-section">
        <Container>
          <h2>Featured Courses</h2>
          {loading ? (
            <div className="loading">
              <div className="spinner"></div>
              <p>Loading available courses...</p>
            </div>
          ) : featuredCourses.length > 0 ? (
            <Row className="g-4">
              {featuredCourses.map((course) => (
                <Col md={6} lg={4} key={course._id}>
                  <CourseCard course={course} />
                </Col>
              ))}
            </Row>
          ) : (
            <Row className="g-4">
              {[
                {
                  title: 'Data Structures & Algorithms',
                  category: 'DSA',
                  level: 'Foundation',
                  durationHours: 50,
                  rating: 4.9,
                  description: 'Master arrays, linked lists, trees, graphs, sorting, searching, and dynamic programming with hands-on coding problems and interview prep.',
                  thumbnailUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=500&q=60'
                },
                {
                  title: 'Database Management Systems',
                  category: 'DBMS',
                  level: 'Intermediate',
                  durationHours: 40,
                  rating: 4.8,
                  description: 'Learn relational models, normalization, SQL optimization, indexing, transactions, consistency, and design patterns for scalable databases.',
                  thumbnailUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=500&q=60'
                },
                {
                  title: 'System Design for Scale',
                  category: 'System Design',
                  level: 'Advanced',
                  durationHours: 45,
                  rating: 4.8,
                  description: 'Design scalable architectures using caching, databases, queues, load balancing, and microservices. Prepare for senior engineering interviews.',
                  thumbnailUrl: 'https://images.unsplash.com/photo-1516534775068-bb57ce32cb20?auto=format&fit=crop&w=500&q=60'
                }
              ].map((course) => (
                <Col md={6} lg={4} key={course.title}>
                  <div className="featured-course-card">
                    <div className="course-image" style={{ backgroundImage: `url(${course.thumbnailUrl})` }}></div>
                    <div className="course-content">
                      <span className="course-badge">{course.category}</span>
                      <h4 className="course-title">{course.title}</h4>
                      <p className="course-desc">{course.description}</p>
                      <div className="course-footer">
                        <span className="course-meta">{course.level}</span>
                        <span className="course-meta">{course.durationHours}h</span>
                        <span className="course-rating\">{course.rating} / 5.0</span>
                      </div>
                      <Link to={`/courses?category=${course.category}`} className="btn btn-primary w-100 mt-3">
                        Explore Course
                      </Link>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </section>
    </div>
  );
};
