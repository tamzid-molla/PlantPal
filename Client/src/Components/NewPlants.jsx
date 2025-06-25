
import { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Context/FirebaseContext';
import NoPlants from './NoPlants';



const NewPlants = ({ allData }) => {
  const { dark} = useContext(AuthContext);
  const AllInfo = allData;
    return (
      <div className={`my-28 ${dark && "bg-gray-700"} py-16 w-11/12 mx-auto rounded-xl`}>
        <h2 className='text-4xl text-center font-bold mb-10'>NEW <span className='text-primary'>PLANTS</span></h2>
        {
          AllInfo.length === 0 ? <NoPlants></NoPlants>
            :
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 w-11/12 mx-auto">
                {
                    AllInfo.map(data => <div key={data._id} className=" ">
      <div className={`relative ${dark?"bg-gray-600":"bg-white"} rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition-transform duration-300`}>
       
        <div className="flex justify-center mb-4">
          <img
            src={data.url}
            alt={data.url}
            className="w-40 h-40 object-contain"
          />
        </div>

     
        <div className="text-center space-y-2">
                          <h2 className="text-xl font-bold text-gray-800">Plant Name : { data.plantName}</h2>
          <p className={`text-sm ${dark?"text-teal-600":"text-gray-600"}`}>
                            <span className="font-semibold">Added By : { data.userName}</span>
          </p>
          <p className={`text-sm ${dark?"text-teal-600":"text-gray-600"}`}>
            <span className="font-semibold">Email : </span>{' '}
            <Link
              to={data.userEmail}
              className="text-teal-600 hover:underline"
            >
              {data.userEmail}
            </Link>
          </p>
        </div>

                        {/* Details Button */}
                      
        <div className="mt-4 flex justify-center">
                          <Link to={`/plants/${data._id}`}>
                          <button className="bg-teal-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-teal-600 transition-colors duration-200">
            Details
          </button>
                          </Link>
        </div>

        {/* Decorative Element */}
        <div className="absolute top-0 left-0 w-16 h-16 bg-teal-200 rounded-full -translate-x-4 -translate-y-4 opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-teal-200 rounded-full translate-x-4 translate-y-4 opacity-50"></div>
      </div>
    </div> )
                }
            </div>

        }
        </div>
    );
};

export default NewPlants;