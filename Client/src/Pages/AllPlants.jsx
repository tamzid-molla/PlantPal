import React, { useContext, useEffect, useState } from "react";
import { FaLeaf, FaEye } from "react-icons/fa";
import { Link } from "react-router";
import Loader from "../Components/Loader";
import NoPlants from "../Components/NoPlants";
import { AuthContext } from "../Context/FirebaseContext";

const AllPlants = () => {
  const { dark } = useContext(AuthContext);
  const [plants, setPlants] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    document.title = "PlantPal || All Plants";
    fetch(`${import.meta.env.VITE_baseURL}/plants`)
      .then((res) => res.json())
      .then((data) => {
        setPlants(data);
        setLoader(false);
      })
      .catch((error) => {
        setLoader(false);
      });
  }, []);

  const handleSort = () => {
    const sortedItems = [...plants].sort(
      (a, b) => a.careLevelPriority - b.careLevelPriority
    );
    setPlants(sortedItems);
  };

  return (
    <div className="min-h-[calc(100vh-380px)] pt-8">
      {loader ? (
        <Loader></Loader>
      ) : plants.length === 0 ? (
        <NoPlants></NoPlants>
      ) : (
        <div className="">
          <div
            className={`container mx-auto p-4 sm:p-6 ${
              dark ? "bg-gray-700" : "bg-green-50"
            } rounded-xl my-28`}
          >
            <button
              onClick={handleSort}
              className={`btn block mx-auto my-7 ${
                dark ? "bg-[#2E7D32]" : "bg-primary"
              } text-lg text-white`}
            >
              Sort by careLevel
            </button>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div
                className={`p-4 sm:p-6 bg-teal-600`}
              >
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <FaLeaf className="text-green-200" /> Plant Collection
                </h2>
              </div>

              <div className="overflow-x-auto ">
                <table className="w-full">
                  <thead>
                    <tr
                      className={`${
                        dark
                          ? "bg-green-950 text-white"
                          : "bg-green-100 text-green-900"
                      } uppercase text-xs sm:text-sm`}
                    >
                      <th className="py-3 px-4 sm:px-6 text-left">
                        Plant Image
                      </th>
                      <th className="py-3 px-4 sm:px-6 text-left">
                        Plant Name
                      </th>
                      <th className="py-3 px-4 sm:px-6 text-left">
                        Care Level
                      </th>
                      <th className="py-3 px-4 sm:px-6 text-left">
                        Category
                      </th>
                      <th className="py-3 px-4 sm:px-6 text-left">
                        Watering Frequency
                      </th>
                      <th className="py-3 px-4 sm:px-6 text-center">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {plants.map((plant) => (
                      <tr
                        key={plant._id}
                        className={`border-b ${
                          dark
                            ? "border-gray-400 bg-gray-500 hover:bg-gray-600"
                            : "border-green-100 hover:bg-green-50"
                        } transition-colors duration-200`}
                      >
                        <td className="py-4 px-4 sm:px-6">
                          <img
                            src={plant.url}
                            className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded"
                            alt={plant.plantName}
                          />
                        </td>
                        <td
                          className={`py-4 px-4 sm:px-6 font-medium ${
                            dark ? "text-gray-100" : "text-gray-900"
                          } text-sm sm:text-base`}
                        >
                          {plant.plantName}
                        </td>
                        <td
                          className={`py-4 px-4 sm:px-6 font-medium ${
                            dark ? "text-gray-100" : "text-gray-900"
                          } text-sm sm:text-base`}
                        >
                          {plant.careLevel}
                        </td>
                        <td
                          className={`py-4 px-4 sm:px-6 font-medium ${
                            dark ? "text-gray-100" : "text-gray-700"
                          } text-sm sm:text-base`}
                        >
                          {plant.category}
                        </td>
                        <td
                          className={`py-4 px-4 sm:px-6 font-medium ${
                            dark ? "text-gray-100" : "text-gray-700"
                          } text-sm sm:text-base`}
                        >
                          {plant.wateringFrequency}
                        </td>
                        <td className="py-4 px-4 sm:px-6 text-center">
                          <Link
                            to={`/plants/${plant._id}`}
                            className={`inline-flex items-center px-3 py-1 sm:px-4 sm:py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition-colors duration-200 text-sm sm:text-base`}
                          >
                            <FaEye className="mr-1 sm:mr-2" /> View Details
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllPlants;