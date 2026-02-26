import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Card, InputGroup } from 'react-bootstrap';
import { coursesAPI } from '../api/apiClient';
import { CourseCard } from '../components/CourseCard';
import './Courses.css';

import { FaSearch, FaSlidersH } from 'react-icons/fa';

export const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [level, setLevel] = useState('');
  const [sort, setSort] = useState('newest');

  const categories = ['DSA', 'DBMS', 'OS', 'CN', 'OOP', 'System Design', 'AI/ML Basics', 'Cyber Security'];
  const levels = ['Beginner', 'Intermediate', 'Advanced'];

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const response = await coursesAPI.getAll({
          search: search || undefined,
          category: category || undefined,
          level: level || undefined,
          sort,
        });
        setCourses(response.data.courses);
      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        setLoading(false);
      }
    };

    const debounce = setTimeout(fetchCourses, 300);
    return () => clearTimeout(debounce);
  }, [search, category, level, sort]);

  return (
    <div className="courses-page">
      <Container className="courses-container">
        {/* Header */}
        <div className="courses-header">
          <div>
            <h1 className="courses-title">Explore Courses</h1>
            <p className="courses-subtitle">Find the best CS courses tailored for your learning path.</p>
          </div>
          <div className="courses-header-chip">
            <FaSlidersH />
            <span>Smart Filters</span>
          </div>
        </div>

        {/* Filters */}
        <Card className="courses-filters">
          <Card.Body>
            <Row className="g-3 align-items-end">
              <Col md={4}>
                <Form.Label className="filter-label">Search</Form.Label>
                <InputGroup className="filter-input">
                  <InputGroup.Text className="filter-icon">
                    <FaSearch />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Search courses..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </InputGroup>
              </Col>

              <Col md={3}>
                <Form.Label className="filter-label">Category</Form.Label>
                <Form.Select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="filter-select"
                >
                  <option value="">All Categories</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </Form.Select>
              </Col>

              <Col md={3}>
                <Form.Label className="filter-label">Level</Form.Label>
                <Form.Select
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  className="filter-select"
                >
                  <option value="">All Levels</option>
                  {levels.map((lv) => (
                    <option key={lv} value={lv}>
                      {lv}
                    </option>
                  ))}
                </Form.Select>
              </Col>

              <Col md={2}>
                <Form.Label className="filter-label">Sort</Form.Label>
                <Form.Select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="filter-select"
                >
                  <option value="newest">Newest</option>
                  <option value="rating">Top Rated</option>
                  <option value="popularity">Most Popular</option>
                </Form.Select>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* States */}
        {loading ? (
          <div className="state-wrap">
            <Card className="state-card text-center p-5">
              <div className="state-title">Loading courses...</div>
              <div className="state-subtitle">Fetching the latest content for you</div>
            </Card>
          </div>
        ) : courses.length === 0 ? (
          <div className="state-wrap">
            <Card className="state-card text-center p-5">
              <div className="state-title">No courses found</div>
              <div className="state-subtitle">Try adjusting your search or filters</div>
            </Card>
          </div>
        ) : (
          <Row className="g-4">
            {courses.map((course) => (
              <Col md={6} lg={4} key={course._id}>
                <CourseCard course={course} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};