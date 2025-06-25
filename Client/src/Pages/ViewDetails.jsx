
import { useLoaderData, useNavigate } from 'react-router';
import { FaLeaf, FaArrowLeft, FaDroplet, FaCalendar, FaHeart, FaUser } from 'react-icons/fa6';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../Context/FirebaseContext';

const ViewDetails = () => {
    const { dark } = useContext(AuthContext);
    const navigate = useNavigate();
    const plant = useLoaderData();

    useEffect(() => {
        document.title = `PlantPal || Details ${plant.plantName}`
    },[plant])
  
    return (
        <div className={`container mx-auto p-4 sm:p-6 ${dark?"bg-gray-800":"bg-green-50"} py-10 mb-20 rounded-xl flex items-center justify-center mt-20`}>
            <div className={`${dark?"bg-gray-700":"bg-white border border-white"} rounded-2xl shadow-xl max-w-xl w-full transform transition-all hover:shadow-2xl duration-300`}>
                <div className="relative w-full h-96">
                    <img
                        src={plant.url}
                        alt={plant.plantName}
                        className="w-full h-full object-contain"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-green-900/30"></div>
                    <button onClick={()=>navigate("/allPlants")}
                        className="absolute top-4 left-4 inline-flex items-center px-3 py-1 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-200 text-sm sm:text-base"
                    >
                        <FaArrowLeft className="mr-1" /> Back
                    </button>
                </div>

              
                <div className="p-4 sm:p-6 space-y-4">
                    <div className="text-center">
                        <h2 className={`text-xl sm:text-3xl font-bold ${dark?"text-gray-200":"text-gray-800"} flex items-center justify-center gap-2`}>
                            <FaLeaf className="text-green-500" /> {plant.plantName}
                        </h2>
                        <p className={`text-sm sm:text-base ${dark?"text-gray-200":"text-gray-800"} italic capitalize`}>
                            Category : 
                            {plant.category}
                        </p>
                    </div>

                    <div className=" space-y-3 gap-3 sm:gap-4">
                        
                        <div className={`${dark?"bg-gradient-to-b from-transparent to-green-900/30 shadow-xl border-2 border-gray-400":"bg-green-50"} rounded-lg overflow-x-auto p-3`}>
                            <h3 className={`text-sm sm:text-base font-semibold ${dark?"text-gray-200":" text-gray-700"} flex items-center gap-2`}>
                                <FaLeaf className="text-green-500" /> Description
                            </h3>
                            <p className={`text-sm sm:text-base ${dark?"text-gray-200":"text-gray-600"}`}>{plant.description }</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <FaHeart className="text-green-500" />
                            <p className={`text-sm sm:text-base ${dark?"text-gray-200":"text-gray-600"}`}>
                                <strong>Care Level:</strong> {plant.careLevel}
                            </p>
                        </div>

                        <div className="flex items-center gap-2">
                            <FaDroplet className="text-blue-500" />
                            <p className={`text-sm sm:text-base ${dark?"text-gray-200":"text-gray-600"}`}>
                                <strong>Watering Frequency:</strong> {plant.wateringFrequency}
                            </p>
                        </div>

                        <div className="flex items-center gap-2">
                            <FaCalendar className="text-green-500" />
                            <p className={`text-sm sm:text-base ${dark?"text-gray-200":"text-gray-600"}`}>
                                <strong>Last Watered:</strong> {plant.lastWateredDate}
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaCalendar className="text-green-500" />
                            <p className={`text-sm sm:text-base ${dark?"text-gray-200":"text-gray-600"}`}>
                                <strong>Next Watering:</strong> {plant.nextWateringDate}
                            </p>
                        </div>

                    
                        <div className="flex items-center gap-2">
                            <FaHeart className="text-red-500" />
                            <p className={`text-sm sm:text-base ${dark?"text-gray-200":"text-gray-600"}`}>
                                <strong>Health Status:</strong> {plant.healthStatus }
                            </p>
                        </div>
                        <div className={`${dark?"bg-gradient-to-b from-transparent to-green-900/30 shadow-xl border-2 border-gray-400":"bg-green-50"} rounded-lg p-3`}>
                            <h3 className={`text-sm sm:text-base font-semibold ${dark?"text-gray-200":"text-gray-700"} flex items-center gap-2`}>
                                <FaUser className={`${dark?"text-gray-200":'text-green-500'}`} /> Added By
                            </h3>
                            <p className={`text-sm sm:text-base ${dark?"text-gray-200":"text-gray-600"}`}>
                                {plant.userName} ({plant.userEmail})
                            </p>
                        </div>

                        <div className="text-sm sm:text-base text-gray-400 text-center">
                            <strong>Added On:</strong> {new Date(plant.createdAt).toLocaleDateString()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;