

import React from "react";
import Header from "./components/Header";
import Spline from "@splinetool/react-spline";

const App = () => {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Gradient image */}
      <img className="absolute top-0 right-0 opacity-60 -z-10" src="/gradient.png" alt="Gradient-img" />
      
      {/* Blur Effect */}
      <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-20" ></div>

      {/* Navigation/Header at the top */}
      <nav className="w-full flex justify-between items-center px-12 py-8 text-lg font-medium tracking-wide z-20 relative">
        <span className="text-3xl font-extrabold tracking-tight text-white" style={{fontFamily: 'Orbitron, Inter, sans-serif'}}>Mobility Labs</span>
        <div className="flex gap-8">
          <a href="#company" className="hover:text-orange-400 transition">Company</a>
          <a href="#features" className="hover:text-orange-400 transition">Features</a>
          <a href="#resources" className="hover:text-orange-400 transition">Resources</a>
          <a href="#docs" className="hover:text-orange-400 transition">Docs</a>
        </div>
      </nav>

      {/* Main content: left info, right Spline visual */}
      <div className="flex w-full max-w-7xl mx-auto h-[80vh] items-center relative z-10">
        {/* Left: Main interface */}
        <div className="flex-1 flex flex-col justify-center pl-16 pr-4">
          <Header />
        </div>

        {/* Right: Spline 3D visual */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-[400px] h-[400px] rounded-3xl shadow-2xl flex items-center justify-center bg-transparent">
            <Spline scene="https://prod.spline.design/UK8Tvsprl9p3TwXp/scene.splinecode" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
