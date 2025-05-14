import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const EditService = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // State for service details
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [existingImage, setExistingImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch service details when component mounts
  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/services/${id}`);

        if (!response.ok) throw new Error("Failed to fetch service");

        const data = await response.json();
        console.log("Fetched Data:", data); // Debugging

        setTitle(data.title || "");
        setDescription(data.description || "");
        setCategory(data.category || "");
        setExistingImage(data.image || "");
      } catch (error) {
        console.error("Error fetching service:", error);
        setError("Failed to load service data.");
      }
    };

    fetchService();
  }, [id]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      const response = await fetch(`http://localhost:5000/api/services/${id}`, {
        method: "PUT",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to update service");
      }

      navigate("/admin/dashboard");
    } catch (error) {
      console.error("Error updating service:", error);
      alert("Error: " + error.message);
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
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full mt-8">
        <h2 className="text-2xl font-bold text-yellow-600 mb-6">Edit Service</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500"
            ></textarea>
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-700">Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Current Image Preview */}
          {existingImage && (
            <div>
              <label className="block text-gray-700">Current Image</label>
              <img
                src={`http://localhost:5000${existingImage}`}
                alt="Service"
                className="w-full h-32 object-cover rounded-lg mb-2"
              />
            </div>
          )}

          {/* Upload New Image */}
          <div>
            <label className="block text-gray-700">Upload New Image</label>
            <input
              type="file"
              onChange={(e) => setImageFile(e.target.files[0])}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 transition duration-300"
          >
            {loading ? "Updating..." : "Update Service"}
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default EditService;
