import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Courses from "./components/Courses";
import CourseDetails from "./components/CourseDetails";
import DemoClasses from "./components/DemoClasses";
import Faculty from "./components/Faculty";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import AppDownload from "./components/AppDownload";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import SEO from "./components/SEO";
import { ThemeProvider } from "./context/ThemeContext";

function HomePage() {
  return (
    <>
      <SEO />
      <Hero />
      <Stats />
      <Courses />
      <DemoClasses />
      <Faculty />
      <Testimonials />
      <FAQ />
      <AppDownload />
      <Gallery />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/course/:id" element={<CourseDetails />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
