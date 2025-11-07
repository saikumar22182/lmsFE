import React, { useState, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

import Header from './Components/Header'
import Advertisement from './Components/Advertisement'
import Hero from './Components/Hero'
import CourseList from './Components/CourseList'
import Footer from './Components/Footer'
import Resources from './pages/Resources'
import ForBusiness from './pages/ForBusiness';
import LoginPage from './pages/LoginPage';
import SignUp from './pages/SignUp';

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const coursesRef = useRef(null)

  return (
    <Router>
      <Header
        onSearch={(q) => setSearchQuery(q)}
        onLogin={() => alert('Login clicked (demo)')}
      />
     
    
      <Routes>
        <Route />
        <Route path="/" element={
          <>
            <Advertisement />
            <main style={{ padding: '24px 16px', maxWidth: 1200, margin: '0 auto' }}>
              <Hero onExplore={() => coursesRef.current && coursesRef.current.scrollIntoView({ behavior: 'smooth' })} />
              <section ref={coursesRef} id="courses" style={{ marginTop: 32 }}>
                <CourseList searchQuery={searchQuery} />
              </section>
            </main>
          </>
        } />
        <Route path="/resources" element={<Resources />} />
        <Route path="/forBusiness" element={<ForBusiness/>} />
        <Route path="/loginPage" element={<LoginPage/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
