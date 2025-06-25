import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/FirebaseContext";
import { Link } from "react-router";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import Loader from "../Components/Loader";

const MyPlants = () => {
  const [myData, setMyData] = useState([]);
  const { user, dark } = useContext(AuthContext);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    document.title = "PlantPal || My Plants";
    fetch(
      `${import.meta.env.VITE_baseURL}/plants/byEmail?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyData(data);
        setLoader(false);
      });
  }, [user]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to delete this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(
            `${import.meta.env.VITE_baseURL}/plants/${id}`,
            {
              method: "DELETE",
            }
          )
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount) {
                const filter = myData.filter(
                  (singleData) => singleData._id !== id
                );
                setMyData(filter);
                swalWithBootstrapButtons.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
              }
            })
            .catch((err) => {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: err.message,
                footer: "Try again",
              });
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };

  return (
    <div className="pt-8">
      {loader ? (
        <Loader></Loader>
      ) : (
        <div
          className={`container min-h-[calc(100vh-440px)] mx-auto p-6 ${
            dark ? "bg-gray-800" : "bg-gray-100"
          } my-20 py-20`}
        >
          <h1 className="text-4xl font-extrabold text-center mb-8 text-teal-600">
            My Plants
          </h1>
          {myData.length === 0 ? (
            <div className="">
              <p className="text-center text-gray-500 text-lg">
                No plants found. Add some to get started!
              </p>
              <div className="flex justify-center mt-6">
                <Link className="btn btn-primary px-7" to="/addPlants">
                  ADD Plant
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {myData.map((plant) => (
                <div
                  key={plant._id}
                  className={`${
                    dark ? "bg-gray-700" : "bg-white"
                  } rounded-xl shadow-lg overflow-hidden flex flex-col`}
                >
                  <div className="flex justify-center">
                    <img
                      src={plant.url}
                      alt={plant.plantName}
                      className="md:w-48 md:h-80 w-24 h-36 object-cover pt-10"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h2
                      className={`text-2xl font-semibold ${
                        dark ? "text-gray-200" : "text-gray-800"
                      } mb-2`}
                    >
                      {plant.plantName}
                    </h2>
                    <p
                      className={`${
                        dark ? "text-gray-200" : "text-gray-600"
                      } mb-1`}
                    >
                      <span className="font-medium">Category:</span>{" "}
                      {plant.category}
                    </p>
                    <p
                      className={`${
                        dark ? "text-gray-200" : "text-gray-600"
                      } mb-1`}
                    >
                      <span className="font-medium">Care Level:</span>{" "}
                      {plant.careLevel}
                    </p>
                    <p
                      className={`${
                        dark ? "text-gray-200" : "text-gray-600"
                      } mb-1`}
                    >
                      <span className="font-medium">Next Watering:</span>{" "}
                      {formatDate(plant.nextWateringDate)}
                    </p>
                    <p
                      className={`${
                        dark ? "text-gray-200" : "text-gray-600"
                      } mb-1`}
                    >
                      <span className="font-medium">Health Status:</span>{" "}
                      {plant.healthStatus}
                    </p>
                    <p
                      className={`${
                        dark ? "text-gray-200" : "text-gray-500"
                      } text-sm mt-2`}
                    >
                      <span className="font-medium">Added:</span>{" "}
                      {formatDate(plant.createdAt)}
                    </p>

                    <div className="flex justify-end space-x-3 mt-auto pt-4">
                      <Link to={`/update/${plant._id}`}>
                        <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200">
                          <FaEdit className="mr-2" /> Update
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(plant._id)}
                        className="flex items-center bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
                      >
                        <FaTrash className="mr-2" /> Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MyPlants;
