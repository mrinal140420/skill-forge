import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Card, Button, Badge, Alert } from 'react-bootstrap';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { coursesAPI, enrollmentsAPI } from '../api/apiClient';
import './CourseDetail.css';

export const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [enrolling, setEnrolling] = useState(false);
  const [enrolled, setEnrolled] = useState(false);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await coursesAPI.getById(id);
        setCourse(response.data);
      } catch (error) {
        console.error('Error fetching course:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  const handleEnroll = async () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    setEnrolling(true);
    try {
      await enrollmentsAPI.enroll(id);
      setEnrolled(true);
    } catch (error) {
      alert(error.response?.data?.error || 'Enrollment failed');
    } finally {
      setEnrolling(false);
    }
  };

  if (loading) return <Container className="py-5">Loading...</Container>;
  if (!course) return <Container className="py-5">Course not found</Container>;

  return (
    <Container className="course-detail-container">
      <Link to="/courses" className="mb-3 d-inline-block">← Back to Courses</Link>

      <Row className="g-4">
        <Col lg={8}>
          <div className="course-hero">
            <img
              src={course.thumbnailUrl}
              alt={course.title}
              className="course-hero-image"
            />
          </div>

          <Card className="detail-card mt-4">
            <Card.Body>
              <h1 className="course-detail-title">{course.title}</h1>
              <div className="course-meta-detail">
                <Badge bg="primary">{course.category}</Badge>
                <span className="mx-2">⭐ {course.rating.toFixed(1)}</span>
                <span>📚 {course.level}</span>
              </div>

              <p className="course-detail-description mt-3">{course.description}</p>

              <div className="course-stats">
                <div className="stat">
                  <span className="label">Duration</span>
                  <span className="value">{course.durationHours} hours</span>
                </div>
                <div className="stat">
                  <span className="label">Level</span>
                  <span className="value">{course.level}</span>
                </div>
              </div>
            </Card.Body>
          </Card>

          <Card className="detail-card mt-4">
            <Card.Header>
              <Card.Title>Syllabus</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="syllabus-modules">
                {course.syllabusModules?.map((module, idx) => (
                  <div key={idx} className="module-item">
                    <div className="module-icon">
                      {module.contentType === 'video' ? '🎥' : '📄'}
                    </div>
                    <div className="module-info">
                      <h6>{module.title}</h6>
                      <small>{module.durationMin} minutes</small>
                    </div>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card className="sticky-card">
            <Card.Body>
              {enrolled ? (
                <div className="enrolled-state">
                  <Alert variant="success">✓ You're enrolled!</Alert>
                  <Link
                    to={`/learn/${id}/${course.syllabusModules?.[0]?.title || 'intro'}`}
                    className="btn btn-primary w-100"
                  >
                    Start Learning
                  </Link>
                </div>
              ) : (
                <>
                  <div className="enrollment-summary">
                    <h5>Ready to start?</h5>
                    <p className="text-muted">
                      Join thousands of learners improving their skills.
                    </p>
                  </div>
                  <Button
                    variant="primary"
                    className="w-100"
                    onClick={handleEnroll}
                    disabled={enrolling}
                  >
                    {enrolling ? 'Enrolling...' : 'Enroll Now'}
                  </Button>
                  {!isAuthenticated && (
                    <p className="text-center text-muted mt-2 small">
                      <Link to="/login">Login</Link> to enroll
                    </p>
                  )}
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
