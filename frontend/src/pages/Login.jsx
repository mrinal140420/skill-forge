import React, { useState, useContext } from 'react';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { authAPI } from '../api/apiClient';
import { AuthContext } from '../context/AuthContext';
import './Auth.css';

// Better icons
import { FaRobot, FaChartLine, FaBullseye, FaGoogle, FaGithub } from 'react-icons/fa';

export const Login = () => {
  const [email, setEmail] = useState('john@skillforge.com');
  const [password, setPassword] = useState('password123');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [jwtToken, setJwtToken] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const response = await authAPI.login(email, password);
      const token = response.data.token;

      setJwtToken(token);
      setSuccess('Login successful! JWT token obtained.');

      login(response.data.user, token);

      setTimeout(() => {
        navigate('/dashboard');
      }, 800);
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed. Please try again.');
      setJwtToken('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-background"></div>

      <Container className="auth-container">
        <div className="auth-wrapper">
          {/* Left Section - Branding */}
          <div className="auth-left d-none d-lg-flex flex-column justify-content-center">
            <div className="auth-branding">
              <h1>SkillForge</h1>
              <p>AI-Driven Adaptive Learning for Computer Science</p>

              <div className="auth-features mt-5">
                <div className="feature-item">
                  <span className="feature-icon" aria-hidden="true">
                    <FaRobot />
                  </span>
                  <p>ML-Powered Personalization</p>
                </div>

                <div className="feature-item">
                  <span className="feature-icon" aria-hidden="true">
                    <FaChartLine />
                  </span>
                  <p>Adaptive Practice Paths</p>
                </div>

                <div className="feature-item">
                  <span className="feature-icon" aria-hidden="true">
                    <FaBullseye />
                  </span>
                  <p>Real-Time Recommendations</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Login Form */}
          <div className="auth-right">
            <Card className="auth-card">
              <Card.Body className="p-5">
                <h2 className="auth-title mb-2">Welcome Back</h2>
                <p className="auth-subtitle mb-4">Sign in to your SkillForge account</p>

                {error && (
                  <Alert variant="danger" className="alert-custom">
                    <strong>Login Error:</strong> {error}
                  </Alert>
                )}

                {success && (
                  <Alert variant="success" className="alert-custom">
                    <strong>Success!</strong> {success}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-4">
                    <Form.Label className="form-label">Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="form-control-custom"
                    />
                  </Form.Group>

                  <Form.Group className="mb-2">
                    <Form.Label className="form-label">Password</Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      required
                      className="form-control-custom"
                    />
                  </Form.Group>

                  <div className="text-end mb-4">
                    <Link to="#" className="forgot-password-link">
                      Forgot password?
                    </Link>
                  </div>

                  <Button
                    variant="primary"
                    type="submit"
                    className="btn-auth w-100 mb-3"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Signing in...
                      </>
                    ) : (
                      'Sign In'
                    )}
                  </Button>
                </Form>

                {/* JWT Display Section */}
                {jwtToken && (
                  <div className="jwt-display">
                    <p className="jwt-label">JWT Token (stored in localStorage):</p>
                    <div className="jwt-token">{jwtToken.substring(0, 50)}...</div>
                  </div>
                )}

                <div className="auth-divider">
                  <span>or</span>
                </div>

                <div className="social-login mb-4">
                  <Button variant="outline-secondary" className="btn-social w-100 mb-2 btn-google">
                    <span className="social-icon" aria-hidden="true">
                      <FaGoogle />
                    </span>
                    Continue with Google
                  </Button>

                  <Button variant="outline-secondary" className="btn-social w-100 btn-github">
                    <span className="social-icon" aria-hidden="true">
                      <FaGithub />
                    </span>
                    Continue with GitHub
                  </Button>
                </div>

                <div className="auth-footer">
                  <p>
                    Don't have an account?{' '}
                    <Link to="/register" className="auth-link">
                      Sign up here
                    </Link>
                  </p>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};