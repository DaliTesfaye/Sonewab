import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Layout from "./pages/Layout";
import ServicesPage from "./pages/ServicesPage"; // Detailed Services page
import ProjectsPage from "./pages/ProjectsPage"; // Detailed Projects page
import ProjectDetails from "./components/ProjectDetails";
import Projects from "./components/Projects";
import ContactPage from "./pages/ContactPage";
import AdminForm from "./pages/AdminForm";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />

        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element = {<ContactPage />} />
        <Route path="/admin/login" element={<AdminForm isLogin={true} />} />
        <Route path="/admin/register" element={<AdminForm isLogin={false} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
