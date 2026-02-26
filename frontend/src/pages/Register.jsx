import React, { useState, useContext } from 'react';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { authAPI } from '../api/apiClient';
import { AuthContext } from '../context/AuthContext';
import './Auth.css';

// Better icons
import { FaRocket, FaChartLine, FaTrophy, FaGoogle, FaGithub } from 'react-icons/fa';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const checkPasswordStrength = (pwd) => {
    let strength = 0;
    if (pwd.length >= 8) strength++;
    if (/[a-z]/.test(pwd) && /[A-Z]/.test(pwd)) strength++;
    if (/\d/.test(pwd)) strength++;
    if (/[!@#$%^&*]/.test(pwd)) strength++;
    setPasswordStrength(strength);
  };

  const handlePasswordChange = (e) => {
    const pwd = e.target.value;
    setPassword(pwd);
    checkPasswordStrength(pwd);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);

    try {
      const response = await authAPI.register(name, email, password);
      setSuccess('Account created successfully! Redirecting to dashboard...');
      login(response.data.user, response.data.token);

      setTimeout(() => {
        navigate('/dashboard');
      }, 800);
    } catch (err) {
      setError(err.response?.data?.error || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getStrengthColor = () => {
    if (passwordStrength === 0) return '#ccc';
    if (passwordStrength === 1) return '#e74c3c';
    if (passwordStrength === 2) return '#f39c12';
    if (passwordStrength === 3) return '#3498db';
    return '#27ae60';
  };

  const getStrengthLabel = () => {
    if (passwordStrength === 0) return 'No password';
    if (passwordStrength === 1) return 'Weak';
    if (passwordStrength === 2) return 'Fair';
    if (passwordStrength === 3) return 'Good';
    return 'Strong';
  };

  return (
    <div className="auth-page">
      <div className="auth-background"></div>

      <Container className="auth-container">
        <div className="auth-wrapper">
          {/* Left Section - Branding */}
          <div className="auth-left d-none d-lg-flex flex-column justify-content-center">
            <div className="auth-branding">
              <h1>Join SkillForge</h1>
              <p>Begin your AI-powered learning journey</p>

              <div className="auth-features mt-5">
                <div className="feature-item">
                  <span className="feature-icon" aria-hidden="true">
                    <FaRocket />
                  </span>
                  <p>Start Free & Unlimited</p>
                </div>

                <div className="feature-item">
                  <span className="feature-icon" aria-hidden="true">
                    <FaChartLine />
                  </span>
                  <p>Track Your Progress</p>
                </div>

                <div className="feature-item">
                  <span className="feature-icon" aria-hidden="true">
                    <FaTrophy />
                  </span>
                  <p>Achieve Your Goals</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Register Form */}
          <div className="auth-right">
            <Card className="auth-card">
              <Card.Body className="p-5">
                <h2 className="auth-title mb-2">Create Account</h2>
                <p className="auth-subtitle mb-4">Join thousands of learners on SkillForge</p>

                {error && (
                  <Alert variant="danger" className="alert-custom">
                    <strong>Error:</strong> {error}
                  </Alert>
                )}

                {success && (
                  <Alert variant="success" className="alert-custom">
                    <strong>Success!</strong> {success}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-4">
                    <Form.Label className="form-label">Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      required
                      className="form-control-custom"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="form-label">Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="form-control-custom"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="form-label">Password</Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={handlePasswordChange}
                      placeholder="Min 6 characters"
                      required
                      className="form-control-custom"
                    />

                    {password && (
                      <div className="password-strength mt-2">
                        <div className="strength-bar">
                          <div
                            className="strength-fill"
                            style={{
                              width: `${(passwordStrength / 4) * 100}%`,
                              backgroundColor: getStrengthColor(),
                            }}
                          ></div>
                        </div>
                        <small style={{ color: getStrengthColor(), fontWeight: 700 }}>
                          Strength: {getStrengthLabel()}
                        </small>
                      </div>
                    )}
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="form-label">Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm password"
                      required
                      className="form-control-custom"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Check type="checkbox" label="I agree to the Terms & Conditions" required />
                  </Form.Group>

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
                        Creating Account...
                      </>
                    ) : (
                      'Create Account'
                    )}
                  </Button>
                </Form>

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
                    Already have an account?{' '}
                    <Link to="/login" className="auth-link">
                      Sign in
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