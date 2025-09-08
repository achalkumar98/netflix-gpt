import { useState } from "react";
import Header from "../components/Header";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };
  return (
    <div className="relative h-screen w-screen bg-black text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_large.jpg"
          alt="background"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Header */}
      <Header />

      {/* Login Form */}
      <div className="flex justify-center items-center h-full">
        <form className="relative z-10 w-full max-w-md bg-black/75 p-12 rounded-lg">
          <h1 className="text-3xl font-bold mb-6">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          <input
            type="text"
            placeholder="Email or phone number"
            className="w-full p-3 mb-4 bg-neutral-800 rounded text-white placeholder-gray-400 focus:outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 bg-neutral-800 rounded text-white placeholder-gray-400 focus:outline-none"
          />

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 transition-colors duration-200 p-3 rounded font-semibold"
          >
          {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          {/* Sign up link */}
          <div className="mt-8 text-gray-400">
            {isSignInForm ? "New to Netflix?" : "Alreardy an User"}
            <a
              href="#"
              className="text-white hover:underline"
              onClick={toggleSignInForm}
            >
              {isSignInForm ? "Sign up now" : "Sign In"}
              
            </a>
          </div>

          <p className="mt-4 text-xs text-gray-500">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
