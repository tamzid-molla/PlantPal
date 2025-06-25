import React, { useContext, useEffect, useState } from "react";
import {
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaEyeSlash,
  FaRegEye,
} from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/FirebaseContext";
import Swal from "sweetalert2";

const Login = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { loginWithEmailPass, googleLogin, setUser, dark,setLoading } =
    useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    //Login User
    loginWithEmailPass(email, password)
      .then((userCredential) => {
        const newUser = userCredential.user;

        if (newUser) {
          setUser(newUser);
          Swal.fire({
            icon: "success",
            title: "Login successful",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(location.state || "/");
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Incorrect email or password. Please try again",
          footer: err.message,
        });
        setLoading(false)
        e.target.reset();
      });
  };

  useEffect(() => {
    document.title= "PlantPal || Login"
  },[])

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        setUser(result.user);
        Swal.fire({
          icon: "success",
          title: "Login successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location.state || "/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something Wrong ! Try again",
          footer: err.message,
        });
      });
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${
        dark ? "bg-gray-800" : "bg-gray-100"
      }`}
    >
      <div
        className={`${
          dark ? "bg-gray-600" : "bg-gray-100"
        } p-8 rounded-lg shadow-lg w-full max-w-md`}
      >
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={`w-full pl-10 pr-4 py-2 ${
                dark && "placeholder:text-gray-300"
              } border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              required
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            {!show ? (
              <button type="button" onClick={() => setShow(!show)}>
                <FaEyeSlash className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" />
              </button>
            ) : (
              <button type="button" onClick={() => setShow(!show)}>
                <FaRegEye className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" />
              </button>
            )}
            <input
              type={`${!show ? "password" : "text"}`}
              name="password"
              placeholder="Password"
              className={`w-full pl-10 pr-4 py-2 ${
                dark && "placeholder:text-gray-300 text-gray-300"
              } border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Sign In
          </button>
        </form>
        <div className="flex items-center justify-center mt-4">
          <hr className="w-full border-gray-300" />
          <span className="px-3 text-gray-500">or</span>
          <hr className="w-full border-gray-300" />
        </div>
        <button
          onClick={handleGoogleLogin}
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200 flex items-center justify-center gap-2 mt-4"
        >
          <FaGoogle />
          Sign in with Google
        </button>
        <p
          className={`text-center ${
            dark ? "text-white" : "text-gray-600"
          } text-sm mt-4`}
        >
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
