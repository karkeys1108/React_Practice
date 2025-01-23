import React, { useState } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

const App = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => setIsSignIn(!isSignIn);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {isSignIn ? <SignIn onToggle={toggleForm} /> : <SignUp onToggle={toggleForm} />}
    </div>
  );
};

export default App;
