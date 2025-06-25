
import { useContext, useEffect, useState } from 'react';
import { FaUser, FaEnvelope, FaLink, FaLock, FaEyeSlash ,FaRegEye  } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Context/FirebaseContext';
import Swal from 'sweetalert2';


const Register = () => {
  const [show,setShow]=useState(false)
  const [shows, setShows] = useState(false)
  const navigate = useNavigate();
    const {registerWithEmailPass,updateUser,setUser,dark } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const photoURL = formData.get('photoURL');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;

    if (!passwordRegex.test(password)) {
       return Swal.fire({
         icon: "error",
          title: "Weak Password",
    text: "Password must contain at least one lowercase and one uppercase letter.",
    footer: 'Try again'
  });
    }


    if (password.length < 6) {
  return Swal.fire({
    icon: "error",
    title: "Weak Password",
    text: "Password must be at least 6 characters long",
    footer: 'Try again'
  });
}

    if (password !== confirmPassword) {
  return Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Passwords do not match",
    footer: 'Please try again'
  });
}
    
    //Create user 
    registerWithEmailPass(email, password)
      .then(userCredential => {
        const newUser = userCredential.user;
        if (newUser) {

          updateUser({
            displayName: name,
            photoURL: photoURL
          })
            .then(() => {
              setUser({...newUser,displayName: name, photoURL: photoURL});
          }).catch(err => {
             Swal.fire({
  icon: "error",
  title: "Oops...",
  text:"Something went wrong ! please try again",
  footer: err.message
             });
            setUser(newUser)
          })

                Swal.fire({
          icon: "success",
          title: "Registration successfully",
          showConfirmButton: false,
          timer: 1500
                });
                   navigate('/')
              }
      })
      .catch(err => {
      Swal.fire({
  icon: "error",
  title: "Oops...",
  text:"Something went wrong ! Please try again",
  footer: err.message
      });
         e.target.reset()
    })

  };

  useEffect(() => {
      document.title= "PlantPal || Register"
    },[])

  return (
    <div className={`min-h-screen py-20 flex items-center justify-center ${dark?"bg-gray-800":" bg-gray-100"}`}>
      <div className={`${dark?"bg-gray-700":"bg-white"} p-8 rounded-lg shadow-lg w-full max-w-md`}>
        <h2 className="text-2xl font-bold text-center text-gray-950 mb-6">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className={`w-full pl-10 pr-4 py-2 ${dark && "placeholder:text-gray-300"} border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              required
            />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={`w-full pl-10 pr-4 py-2 ${dark && "placeholder:text-gray-300"} border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              required
            />
          </div>
          <div className="relative">
            <FaLink className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
                          type="url"
                          required
              name="photoURL"
              placeholder="Photo URL"
              className={`w-full pl-10 pr-4 py-2 ${dark && "placeholder:text-gray-300"} border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
          </div>
          <div className="relative">
                      <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      {
                          !show ? <button type='button' onClick={()=>setShow(!show)}>
                              <FaEyeSlash className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" />
                          </button>
                              :
                              <button type='button' onClick={()=>setShow(!show)}>
                                  <FaRegEye className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" />
                              </button>
                      }
                      
                      
                      
            <input
              type={`${!show?"password":"text"}`}
              name="password"
              placeholder="Password"
              className={`w-full pl-10 pr-4 py-2 ${dark && "placeholder:text-gray-300 text-gray-300"} border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              required
            />
          </div>
          <div className="relative">
                      <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      {
                          !shows ? <button type='button' onClick={()=>setShows(!shows)}>
                              <FaEyeSlash className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" />
                          </button>
                              :
                              <button type='button' onClick={()=>setShows(!shows)}>
                                  <FaRegEye className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" />
                              </button>
                      }
                      
                      
                      
            <input
              type={`${!shows?"password":"text"}`}
              name="confirmPassword"
              placeholder="Confirm Password"
              className={`w-full pl-10 pr-4 py-2 ${dark && "placeholder:text-gray-300 text-gray-300"} border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Sign Up
          </button>
        </form>
              <p className={`${dark?"text-white":"text-gray-600"} text-center  text-sm mt-4`}>
          Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;