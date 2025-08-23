import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Layout from "./pages/Layout";
import ServicesPage from "./pages/ServicesPage"; // Detailed Services page
import ProjectsPage from "./pages/ProjectsPage"; // Detailed Projects page
import ProjectDetails from "./components/ProjectDetails";
import Projects from "./components/Projects";
import Contact from "./components/Contact"
import AdminForm from "./pages/AdminForm";
import AdminDash from "./pages/AdminDash";
import AddProject from "./pages/AddProject";
import EditProject from "./pages/EditProject";
import AddService from "./pages/AddService";
import EditService from "./pages/EditService";
import AboutPage from "./pages/AboutPage";
import SuccessPage from "./pages/SuccessPage";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />

        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element = {<Contact />} />
        <Route path="/success" element = {<SuccessPage />}/>
        {/* <Route path="/Success" element {<SuccessPage />} /> */}
        <Route path="/AboutPage" element = {<AboutPage />}  />
        <Route path="/admin/login" element={<AdminForm isLogin={true} />} />
        <Route path="/admin/register" element={<AdminForm isLogin={false} />} />
        <Route path="/admin/dashboard" element = {<AdminDash />} />
        <Route path="/admin/addProject" element = {<AddProject />} /> 
        <Route path="/admin/editproject/:id" element={<EditProject />} />
        <Route path="/admin/addService" element = {<AddService />} />
        <Route path="/admin/editService/:id" element = {<EditService />} />
        

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
