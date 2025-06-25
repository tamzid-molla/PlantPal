import { useContext, useEffect } from "react";
import { FaLeaf, FaImage } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/FirebaseContext";

const AddPlants = () => {
  const { user, dark } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const entrees = Object.fromEntries(formData.entries());

    fetch(`${import.meta.env.VITE_baseURL}/plants`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(entrees),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Plant Added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
        }
      });
  };

  useEffect(() => {
    document.title = "PlantPal || Add Plant";
  }, []);

  return (
    <div
      className={`max-w-2xl mx-auto p-6 ${
        dark ? "bg-gray-600 text-white" : "bg-white"
      } shadow-md rounded-lg my-20`}
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
        <FaLeaf className="mr-2 text-green-600" /> Add New Plant
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="image"
            className={`block text-sm font-medium ${
              dark ? "text-gray-200" : "text-gray-700"
            }`}
          >
            Plant Image
          </label>
          <div className="mt-1 flex items-center">
            <input
              type="url"
              name="url"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              placeholder="Photo URL"
            />
            <FaImage className="ml-2 text-gray-400" />
          </div>
        </div>

        <div>
          <label
            htmlFor="plantName"
            className={`block text-sm font-medium ${
              dark ? "text-gray-200" : "text-gray-700"
            }`}
          >
            Plant Name
          </label>
          <input
            type="text"
            name="plantName"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="e.g., Monstera Deliciosa"
          />
        </div>

        <div>
          <label
            htmlFor="category"
            className={`block text-sm font-medium ${
              dark ? "text-gray-200" : "text-gray-700"
            }`}
          >
            Category
          </label>
          <select
            name="category"
            required
            className={`mt-1 block ${
              dark ? "bg-gray-600" : ""
            } w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500`}
          >
            <option value="">Select a category</option>
            <option value="succulent">Succulent</option>
            <option value="fern">Fern</option>
            <option value="flowering">Flowering</option>
            <option value="cactus">Cactus</option>
            <option value="herb">Herb</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="description"
            className={`block text-sm font-medium ${
              dark ? "text-gray-200" : "text-gray-700"
            }`}
          >
            Description
          </label>
          <textarea
            required
            name="description"
            rows="4"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="Describe the plant..."
          ></textarea>
        </div>

        <div>
          <label
            htmlFor="careLevel"
            className={`block text-sm font-medium ${
              dark ? "text-gray-200" : "text-gray-700"
            }`}
          >
            Care Level
          </label>
          <select
            name="careLevel"
            required
            className={`mt-1 block ${
              dark ? "bg-gray-600" : ""
            } w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500`}
          >
            <option value="">Select care level</option>
            <option value="easy">Easy</option>
            <option value="moderate">Moderate</option>
            <option value="difficult">Difficult</option>
          </select>
        </div>

        {/* Watering Frequency */}
        <div>
          <label
            htmlFor="wateringFrequency"
            className={`block text-sm font-medium ${
              dark ? "text-gray-200" : "text-gray-700"
            }`}
          >
            Watering Frequency
          </label>
          <input
            type="text"
            name="wateringFrequency"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="e.g., Every 3 days"
          />
        </div>

        <div>
          <label
            htmlFor="lastWateredDate"
            className={`block text-sm font-medium ${
              dark ? "text-gray-200" : "text-gray-700"
            }`}
          >
            Last Watered Date
          </label>
          <input
            type="date"
            name="lastWateredDate"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          />
        </div>

        <div>
          <label
            htmlFor="nextWateringDate"
            className={`block text-sm font-medium ${
              dark ? "text-gray-200" : "text-gray-700"
            }`}
          >
            Next Watering Date
          </label>
          <input
            type="date"
            name="nextWateringDate"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          />
        </div>

        <div>
          <label
            htmlFor="healthStatus"
            className={`block text-sm font-medium ${
              dark ? "text-gray-200" : "text-gray-700"
            }`}
          >
            Health Status
          </label>
          <input
            type="text"
            name="healthStatus"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="e.g., Healthy, Needs Attention"
          />
        </div>

        <div>
          <label
            htmlFor="userEmail"
            className={`block text-sm font-medium ${
              dark ? "text-gray-200" : "text-gray-700"
            }`}
          >
            User Email
          </label>
          <input
            value={user.email}
            readOnly
            type="email"
            name="userEmail"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="e.g., user@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="userName"
            className={`block text-sm font-medium ${
              dark ? "text-gray-200" : "text-gray-700"
            }`}
          >
            User Name
          </label>
          <input
            value={user.displayName}
            readOnly
            type="text"
            name="userName"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="e.g., John Doe"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Add Plant
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPlants;
