import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaProjectDiagram,
  FaTools,
} from "react-icons/fa";
import axios from "axios";

const AdminDash = () => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(null);
  const [projects, setProjects] = useState([]);
  const [services, setServices] = useState([]);

  // Fetch admin profile
  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return navigate("/admin/login");
        const res = await axios.get("http://localhost:5000/api/auth/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setAdmin(res.data);
      } catch (error) {
        console.error("Error fetching admin:", error);
        navigate("/admin/login");
      }
    };
    fetchAdmin();
  }, [navigate]);

  // Fetch projects from backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/projects");
        setProjects(res.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

  // Fetch services from backend
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/services");
        setServices(res.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchServices();
  }, []);

  //Delete Project
  const handleDeleteProject = async (projectId) => {
    if (!window.confirm("Are you sure you want to delete this project?"))
      return;
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5000/api/projects/${projectId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProjects((prevProjects) =>
        prevProjects.filter((p) => p._id !== projectId)
      );
    } catch (error) {
      console.error("Error deleting project:", error);
      alert("Error deleting project");
    }
  };

  //Delete Service
  const handleDelete = async (serviceId) => {
    if (!window.confirm("Are you sure you want to delete this service?")) {
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/services/${serviceId}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete service");
      }

      setServices((prevServices) =>
        prevServices.filter((service) => service._id !== serviceId)
      );

      alert("Service deleted successfully");
    } catch (error) {
      console.error("Error deleting service:", error);
      alert("Error: Unable to delete service.");
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-100 flex py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Sidebar */}
      <motion.aside
        className="w-64 bg-white shadow-md p-5 space-y-6"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-yellow-600 py-6">
          Sonewab Admin
        </h2>
        <nav className="space-y-4">
          <Link
            to="/admin/dashboard"
            className="flex items-center space-x-2 text-gray-700 hover:text-yellow-600"
          >
            <FaProjectDiagram /> <span>Dashboard</span>
          </Link>
          <Link
            to="/projects"
            className="flex items-center space-x-2 text-gray-700 hover:text-yellow-600"
          >
            <FaProjectDiagram /> <span>Projects</span>
          </Link>
          <Link
            to="/services"
            className="flex items-center space-x-2 text-gray-700 hover:text-yellow-600"
          >
            <FaTools /> <span>Services</span>
          </Link>
          <Link
            to="/admin/login"
            className="flex items-center space-x-2 text-red-500 hover:underline"
          >
            <FaTrash /> <span>Logout</span>
          </Link>
        </nav>
      </motion.aside>

      {/* Main Content */}
      <motion.main
        className="flex-1 p-6"
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Welcome Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Welcome, {admin ? admin.name : "Admin"} to Dashboard
          </h2>
        </div>

        {/* Projects Table Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-semibold text-gray-700">Projects</h3>
            <Link
              to="/admin/addProject/"
              className="bg-yellow-600 text-white px-4 py-2 rounded flex items-center space-x-2 hover:bg-yellow-700 transition duration-300"
            >
              <FaPlus /> <span>Add Project</span>
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
              <thead>
                <tr className="bg-yellow-500 text-white">
                  <th className="py-2 px-4 border">Title</th>
                  <th className="py-2 px-4 border">Category</th>
                  <th className="py-2 px-4 border">Description</th>
                  <th className="py-2 px-4 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project._id} className="text-gray-700">
                    <td className="py-2 px-4 border">{project.title}</td>
                    <td className="py-2 px-4 border">{project.category}</td>
                    <td className="py-2 px-4 border">
                      {project.description.slice(0, 50)}...
                    </td>
                    <td className="py-2 px-4 border flex space-x-2">
                      <Link
                        to={`/admin/editproject/${project._id}`}
                        className="text-blue-500 hover:underline"
                      >
                        Edit
                        <FaEdit />
                      </Link>
                      <button
                        className="text-red-500 hover:underline"
                        onClick={() => handleDeleteProject(project._id)}
                      >
                        Delete
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Services Table Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-semibold text-gray-700">Services</h3>
            <Link
              to="/admin/addService"
              className="bg-yellow-600 text-white px-4 py-2 rounded flex items-center space-x-2 hover:bg-yellow-700 transition duration-300"
            >
              <FaPlus /> <span>Add Service</span>
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
              <thead>
                <tr className="bg-yellow-500 text-white">
                  <th className="py-2 px-4 border">Title</th>
                  <th className="py-2 px-4 border">Category</th>
                  <th className="py-2 px-4 border">Description</th>
                  <th className="py-2 px-4 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <tr key={service._id} className="text-gray-700">
                    <td className="py-2 px-4 border">{service.title}</td>
                    <td className="py-2 px-4 border">{service.category}</td>
                    <td className="py-2 px-4 border">
                      {service.description.slice(0, 50)}...
                    </td>
                    <td className="py-2 px-4 border flex space-x-2">
                      <Link
                        to={`/admin/editService/${service._id}`}
                        className="text-blue-500 hover:underline"
                      >
                        Edit
                        <FaEdit />
                      </Link>
                      <button className="text-red-500 hover:underline" onClick={() => handleDelete(service._id)}>
                        Delete
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.main>
    </motion.div>
  );
};

export default AdminDash;
