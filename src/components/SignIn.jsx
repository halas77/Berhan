import React from "react";

import logImg from "../assets/login.jpg";

const SignIn = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-[700px] w-full">
      <div className="hidden md:block">
        <img
          className="w-full h-full object-cover"
          src={logImg}
          alt="Login Image"
        />
      </div>

      <div className="bg-gray-100 flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto bg-white p-4 rounded-xl shadow-2xl" action="">
          <h2 className="text-4xl font-bold text-center py-6 ">Sign In</h2>
          <div className="flex flex-col py-2">
            <label className="font-semibold">Email</label>
            <input className="border p-2 rounded-md" type="text" />
          </div>
          <div className="flex flex-col py-2">
            <label className="font-semibold">Password</label>
            <input className="border p-2 rounded-md" type="password" />
          </div>
          <button className="border rounded-md w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white">
            Sign In
          </button>
          <div className="flex justify-between">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" /> Remember Me
            </p>
            <a href="/signup"><p>Create an account</p></a>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
