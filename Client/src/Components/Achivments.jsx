import React, { useContext } from 'react';
import CountUp from 'react-countup';
import { FaUsers, FaTrophy, FaCoffee, FaSmile } from 'react-icons/fa'; 
import { AuthContext } from '../Context/FirebaseContext';

const Achivments = () => {
  const { dark } = useContext(AuthContext);
    return (
        <div className={`my-12 mb-32 w-11/12 mx-auto ${dark?"bg-gray-700":"bg-gradient-to-br from-green-50 to-teal-100"} py-8 px-6 rounded-xl pb-16`}>
            <h3 className='text-4xl font-bold text-center my-16'>OUR <span className='text-primary'>ACHIEVEMENTS</span></h3>
      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 w-11/12 mx-auto">
        
        <div className={`${dark?"bg-gray-600":"bg-white"} p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex-1 text-center`}>
          <div className="flex justify-center"><FaUsers className="text-green-600 text-4xl mb-4 animate-bounce-slow" /></div>
            <h3 className="text-gray-800 font-semibold text-lg">Our Staff</h3>
            <p className="text-3xl font-bold text-green-700 mt-2">
              <CountUp start={0} end={145} delay={2} duration={2} enableScrollSpy={true} scrollSpyDelay={2} >
                {({ countUpRef }) => <span ref={countUpRef} />}
            </CountUp>  
            </p>
        </div>

        <div className={`${dark?"bg-gray-600":"bg-white"} p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex-1 text-center`}>
          <div className="flex justify-center"><FaTrophy className="text-green-600 text-4xl mb-4 animate-pulse" /></div>
          <h3 className="text-gray-800 font-semibold text-lg">Award</h3>
            <p className="text-3xl font-bold text-green-700 mt-2">
              <CountUp start={0} end={152} delay={2} duration={2} enableScrollSpy={true} scrollSpyDelay={2} >
                {({ countUpRef }) => <span ref={countUpRef} />}
            </CountUp>  
          </p>
        </div>

        <div className={`${dark?"bg-gray-600":"bg-white"} p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex-1 text-center`}>
          <div className="flex justify-center"><FaCoffee className="text-green-600 text-4xl mb-4 animate-spin-slow" /></div>
          <h3 className="text-gray-800 font-semibold text-lg">Cup Coffee</h3>
            <p className="text-3xl font-bold text-green-700 mt-2">
              <CountUp start={0} end={780} delay={2} duration={3} enableScrollSpy={true} scrollSpyDelay={2} >
                {({ countUpRef }) => <span ref={countUpRef} />}
            </CountUp>  
          </p>
        </div>

       
        <div className={`${dark?"bg-gray-600":"bg-white"} p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex-1 text-center`}>
          <div className="flex justify-center"><FaSmile className="text-green-600 text-4xl mb-4 animate-bounce-slow" /></div>
          <h3 className="text-gray-800 font-semibold text-lg">Happy People</h3>
            <p className="text-3xl font-bold text-green-700 mt-2">
              <CountUp start={0} end={1300} delay={2} duration={4} enableScrollSpy={true} scrollSpyDelay={2} >
                {({ countUpRef }) => <span ref={countUpRef} />}
            </CountUp>  +
          </p>
        </div>
      </div>
    </div>
    );
};

export default Achivments;