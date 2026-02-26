import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { NavBar } from './components/Navbar';
import { Footer } from './components/Footer';

import { Landing } from './pages/Landing';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Courses } from './pages/Courses';
import { CourseDetail } from './pages/CourseDetail';
import { Dashboard } from './pages/Dashboard';
import { Learning } from './pages/Learning';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetail />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/learn/:courseId/:moduleId" element={<Learning />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
