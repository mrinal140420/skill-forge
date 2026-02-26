import React, { useState, useContext } from 'react';
import { Container, Row, Col, Card, Button, Form, Alert } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { progressAPI } from '../api/apiClient';
import './Learning.css';

export const Learning = () => {
  const { courseId, moduleId } = useParams();
  const { isAuthenticated } = useContext(AuthContext);
  const [completed, setCompleted] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState([false, true, false]);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(null);

  const handleMarkComplete = async () => {
    try {
      await progressAPI. markComplete(courseId, moduleId);
      setCompleted(true);
    } catch (error) {
      alert('Error marking module complete');
    }
  };

  const handleSubmitQuiz = async () => {
    try {
      const response = await progressAPI.submitQuiz(courseId, moduleId, quizAnswers, 300);
      setQuizScore(response.data.score);
      setQuizSubmitted(true);
    } catch (error) {
      alert('Error submitting quiz');
    }
  };

  return (
    <Container className="learning-container">
      <Link to={`/courses/${courseId}`} className="mb-3 d-inline-block">
        ← Back to Course
      </Link>

      <Row className="g-4">
        <Col lg={8}>
          <Card className="learning-card">
            <Card.Header>
              <Card.Title>Module: {moduleId}</Card.Title>
            </Card.Header>
            <Card.Body>
              {/* Video/Content Placeholder */}
              <div className="content-placeholder">
                <div className="video-placeholder">
                  <h3>▶ Module Content</h3>
                  <p>Video or text content would be displayed here...</p>
                </div>
              </div>

              <div className="module-description">
                <h5>Learning Objectives:</h5>
                <ul>
                  <li>Understand core concepts</li>
                  <li>Apply theory to practice</li>
                  <li>Complete the quiz</li>
                </ul>
              </div>

              {!completed && (
                <Button
                  variant="success"
                  className="mt-4"
                  onClick={handleMarkComplete}
                >
                  ✓ Mark as Complete
                </Button>
              )}

              {completed && (
                <Alert variant="success" className="mt-4">
                  ✓ Module completed!
                </Alert>
              )}
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card className="quiz-card">
            <Card.Header>
              <Card.Title>Quiz</Card.Title>
            </Card.Header>
            <Card.Body>
              {quizSubmitted ? (
                <div className="quiz-result">
                  <div className="result-score">
                    <h3>{quizScore}%</h3>
                  </div>
                  <p className={quizScore >= 60 ? 'text-success' : 'text-danger'}>
                    {quizScore >= 60 ? '✓ Passed!' : '✗ Try again!'}
                  </p>
                  <Button
                    variant="outline-primary"
                    className="w-100"
                    onClick={() => setQuizSubmitted(false)}
                  >
                    Retake Quiz
                  </Button>
                </div>
              ) : (
                <>
                  <Form.Group className="mb-3">
                    <Form.Label>Question 1: What is the main concept?</Form.Label>
                    <Form.Check
                      type="radio"
                      label="Option A"
                      checked={quizAnswers[0]}
                      onChange={() =>
                        setQuizAnswers([!quizAnswers[0], quizAnswers[1], quizAnswers[2]])
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Option B (Correct)"
                      checked={quizAnswers[1]}
                      onChange={() =>
                        setQuizAnswers([quizAnswers[0], !quizAnswers[1], quizAnswers[2]])
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Option C"
                      checked={quizAnswers[2]}
                      onChange={() =>
                        setQuizAnswers([quizAnswers[0], quizAnswers[1], !quizAnswers[2]])
                      }
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    className="w-100"
                    onClick={handleSubmitQuiz}
                  >
                    Submit Quiz
                  </Button>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
