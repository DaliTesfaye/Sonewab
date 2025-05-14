import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const EditProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // State variables for form fields
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  // existingImage stores the current image path from the database
  const [existingImage, setExistingImage] = useState("");
  // imageFile stores a new file if the admin uploads one
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch the existing project data on component mount
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/projects/${id}`);
        if (!response.ok) throw new Error("Project not found");
        const data = await response.json();
        setTitle(data.title);
        setDescription(data.description);
        setCategory(data.category);
        setExistingImage(data.image);
      } catch (error) {
        console.error("Error fetching project:", error);
        alert("Error fetching project: " + error.message);
      }
    };

    fetchProject();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let body;
    let headers = {};
    if (imageFile) {
      // If a new image file is selected, use FormData
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("image", imageFile);
      body = formData;
    } else {
      // If no new file, send JSON with the existing image via imageUrl
      headers["Content-Type"] = "application/json";
      body = JSON.stringify({ title, description, category, imageUrl: existingImage });
    }

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`http://localhost:5000/api/projects/${id}`, {
        method: "PUT",
        headers: { ...headers, Authorization: `Bearer ${token}` },
        body: body,
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Something went wrong");
      }
      navigate("/admin/dashboard");
    } catch (error) {
      console.error("Error updating project:", error);
      alert("Error updating project: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gray-100 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-2xl font-bold text-yellow-600 mb-6">Edit Project</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700">Category</label>
            <input
              type="text"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Image</label>
            <input
              type="file"
              name="image"
              onChange={(e) => setImageFile(e.target.files[0])}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            {!imageFile && existingImage && (
              <p className="text-gray-600 mt-2">Current image: {existingImage}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 transition duration-300"
          >
            {loading ? "Updating..." : "Update Project"}
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default EditProject;
