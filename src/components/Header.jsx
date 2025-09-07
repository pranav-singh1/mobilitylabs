import React from "react";

const Header = () => (
  <header className="w-full py-12 flex flex-col items-start justify-center bg-transparent text-white relative z-10">
    <span className="inline-block px-5 py-2 rounded-full border border-orange-400 text-orange-400 font-semibold mb-6 tracking-wide shadow-orange-400/30 shadow-lg" style={{fontFamily: 'Orbitron, Inter, sans-serif'}}>INTRODUCING</span>
    <h1 className="text-6xl font-extrabold mb-6 tracking-tight leading-tight" style={{fontFamily: 'Orbitron, Inter, sans-serif'}}>Mobility Labs Apps</h1>
    <p className="text-xl max-w-2xl text-left opacity-80 mb-8" style={{fontFamily: 'Inter, sans-serif'}}>
      Mobility Labs Apps delivers innovative mobile solutions, managing the rollout and growth of 45+ in-house apps across all platforms. We drive user acquisition, product analytics, and roadmap strategy, growing downloads from hundreds to over 2.5 million, and increasing paid app downloads by 500% in two years.<br />
      Our team manages monthly digital ad spend, end-to-end app discovery, build, test, and deployment—including custom integrations between NetSuite and Wordpress. We are a remote-first team of experts in mobile product delivery, design, and development.
    </p>
    <div className="flex gap-4 mt-2">
      <a href="#docs" className="bg-white/10 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-orange-400 hover:text-black transition flex items-center gap-2" style={{fontFamily: 'Orbitron, Inter, sans-serif'}}>Documentation <span>↗</span></a>
      <a href="#getstarted" className="bg-white/20 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-orange-400 hover:text-black transition flex items-center gap-2" style={{fontFamily: 'Orbitron, Inter, sans-serif'}}>Get Started <span>↗</span></a>
    </div>
  </header>
);

export default Header;
