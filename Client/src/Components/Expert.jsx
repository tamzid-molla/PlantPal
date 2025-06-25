
import { useContext } from "react";
import employ1 from "../assets/expert/1.jpg"
import employ2 from "../assets/expert/2.jpg"
import employ3 from "../assets/expert/3.jpg"
import employ4 from "../assets/expert/4.jpg"
import { AuthContext } from "../Context/FirebaseContext";


const Expert = () => {
  const { dark } = useContext(AuthContext);
    return (
        <div className={`my-28 w-11/12 mx-auto rounded-xl ${dark?"bg-gray-700":"bg-gradient-to-br from-green-50 to-teal-100"} py-16 px-6 md:px-10`}>
            <h1 className='text-4xl font-bold text-center mb-4'>OUR <span className='text-primary'>EXPERT</span></h1>
            <p className={`text-lg ${dark?"text-gray-100":"text-gray-500"} mb-16 w-8/12 mx-auto text-center`}>Our team of skilled plant care experts brings years of experience in nurturing and maintaining all types of plants. Whether it's indoor greens or outdoor gardens, they’re here to guide you with care and knowledge.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-11/12 mx-auto">
                
        <div className={`${dark?"bg-gray-600":"bg-teal-600"} text-white rounded-xl shadow-lg p-6 transform hover:scale-110 transition-all duration-300`}>
          <div className="flex justify-center">
            <img
              src={employ1}
              className="rounded-full w-32 h-32 object-cover border-4 border-white"
              alt="Mariya Lee"
            />
          </div>
          <div className="mt-6 space-y-3 text-center">
            <h3 className="text-xl font-semibold">Ana Smith</h3>
            <p className="text-teal-100">Senior Worker</p>
            <p className="text-teal-200">Experience: 10+ Years</p>
            <button className='btn btn-secondary text-black w-full text-[16px] mt-3 rounded-lg'>Details</button>
          </div>
        </div>

       <div className={`${dark?"bg-gray-600":"bg-teal-600"} text-white rounded-xl shadow-lg p-6 transform hover:scale-110 transition-all duration-300`}>
          <div className="flex justify-center">
            <img
              src={employ2}
              className="rounded-full w-32 h-32 object-cover border-4 border-white"
              alt="Ana smith"
            />
          </div>
          <div className="mt-6 space-y-3 text-center">
            <h3 className="text-xl font-semibold">Mariya Lee</h3>
            <p className="text-teal-100">Senior Worker</p>
            <p className="text-teal-200">Experience: 12+ Years</p>
            <button className='btn btn-secondary text-black w-full text-[16px] mt-3 rounded-lg'>Details</button>
          </div>
                </div>
                

                <div className={`${dark?"bg-gray-600":"bg-teal-600"} text-white rounded-xl shadow-lg p-6 transform hover:scale-110 transition-all duration-300`}>
          <div className="flex justify-center">
            <img
              src={employ3}
              className="rounded-full w-32 h-32 object-cover border-4 border-white"
              alt="John smith"
            />
          </div>
          <div className="mt-6 space-y-3 text-center">
            <h3 className="text-xl font-semibold">John Smith</h3>
            <p className="text-teal-100">Senior Worker</p>
            <p className="text-teal-200">Experience: 8+ Years</p>
            <button className='btn btn-secondary text-black w-full text-[16px] mt-3 rounded-lg'>Details</button>
          </div>
        </div>

                 <div className={`${dark?"bg-gray-600":"bg-teal-600"} text-white rounded-xl shadow-lg p-6 transform hover:scale-110 transition-all duration-300`}>
          <div className="flex justify-center">
            <img
              src={employ4}
              className="rounded-full w-32 h-32 object-cover border-4 border-white"
              alt="Lara Lee"
            />
          </div>
          <div className="mt-6 space-y-3 text-center">
            <h3 className="text-xl font-semibold">Lara Lee</h3>
            <p className="text-teal-100">Senior Worker</p>
            <p className="text-teal-200">Experience: 9+ Years</p>
            <button className='btn btn-secondary text-black w-full text-[16px] mt-3 rounded-lg'>Details</button>
          </div>
        </div>

      </div>
    </div>
    );
};

export default Expert;
