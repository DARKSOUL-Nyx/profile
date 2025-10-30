// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './HomePage.css';

// // A new, self-contained component for our interactive pillars.
// const Pillar = ({ title, quote }) => {
//   return (
//     <div className="pillar">
//       <div className="pillar-content">
//         <h3>{title}</h3>
//         <p className="pillar-quote">"{quote}"</p>
//       </div>
//     </div>
//   );
// };

// const HomePage = () => {
//   // This state will control the fade-in animations on load.
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     // We use a short timeout to ensure the component is mounted before animating.
//     const timer = setTimeout(() => {
//       setIsLoaded(true);
//     }, 200);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     // The 'loaded' class will trigger our animations.
//     <div className={`homepage-container ${isLoaded ? 'loaded' : ''}`}>
      
//       {/* ACT I: The Monolith */}
//       <section className="hero-section">
//         <div className="hero-text">
//           <h1 className="fade-in-1">The distance between idea and reality is bridged by discipline.</h1>
//           <h2 className="fade-in-2">Name</h2>
//         </div>
//         <div className="scroll-indicator fade-in-3">
//           <span>SCROLL</span>
//         </div>
//       </section>

//       {/* ACT II: The Creed */}
//       <section className="creed-section">
//         <p>
//           I am a builder, driven by a fascination with solving complex puzzles. My work is a synthesis of meticulous engineering and creative intuition, exploring the frontiers of machine learning, system design, and the philosophies that underpin them.
//         </p>
//       </section>

//       {/* ACT III: The Pillars */}
//       <section className="pillars-section">
//         <h2 className="section-title">Guiding Principles</h2>
//         <div className="pillars-container">
//           <Pillar
//             title="Systems Thinking"
//             quote="True innovation lies not in isolated components, but in their elegant integration. I see the whole by understanding the interplay of its parts."
//           />
//           <Pillar
//             title="First Principles"
//             quote="Deconstructing problems to their fundamental truths allows for the most robust and honest solutions to be built from the ground up."
//           />
//           <Pillar
//             title="Intentional Design"
//             quote="Every line of code, every interaction, every pixel must serve a purpose. Great work is not just functional; it is deliberate and thoughtful."
//           />
//         </div>
//       </section>

//       {/* ACT IV: The Gateway */}
//       <section className="gateway-section">
//         <h2 className="section-title">My Philosophy in Action</h2>
//         <Link to="/projects" className="gateway-button">Explore the Blueprints</Link>
//       </section>

//     </div>
//   );
// };

// export default HomePage;


import React, { useState, useEffect } from 'react';

// ============================================
// STYLE SWITCHER COMPONENT
// ============================================
const StyleSwitcher = ({ currentStyle, onStyleChange }) => {
  return (
    <div className="fixed top-8 right-8 z-50 flex gap-3">
      <button
        onClick={() => onStyleChange('brutalist')}
        className={`px-6 py-3 font-bold transition-all ${
          currentStyle === 'brutalist'
            ? 'bg-black text-white scale-110'
            : 'bg-white text-black border-4 border-black hover:scale-105'
        }`}
      >
        BRUTAL
      </button>
      <button
        onClick={() => onStyleChange('neobrutalism')}
        className={`px-6 py-3 font-bold transition-all ${
          currentStyle === 'neobrutalism'
            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white scale-110'
            : 'bg-white text-black border-4 border-black hover:scale-105'
        }`}
      >
        NEO
      </button>
      <button
        onClick={() => onStyleChange('glassmorphism')}
        className={`px-6 py-3 font-bold transition-all ${
          currentStyle === 'glassmorphism'
            ? 'bg-white/20 backdrop-blur-lg text-white border border-white/30 scale-110'
            : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:scale-105'
        }`}
      >
        GLASS
      </button>
    </div>
  );
};

// ============================================
// PILLAR COMPONENT - BRUTALIST
// ============================================
const BrutalistPillar = ({ title, quote, index }) => {
  return (
    <div 
      className="brutalist-pillar group"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="border-8 border-black bg-white p-8 hover:translate-x-2 hover:-translate-y-2 transition-transform duration-200">
        <div className="border-b-4 border-black pb-4 mb-4">
          <h3 className="font-black text-3xl tracking-tighter">{title}</h3>
        </div>
        <p className="text-lg leading-relaxed font-medium">{quote}</p>
        <div className="mt-6 h-2 bg-black w-16 group-hover:w-full transition-all duration-500"></div>
      </div>
    </div>
  );
};

// ============================================
// PILLAR COMPONENT - NEOBRUTALISM
// ============================================
const NeoPillar = ({ title, quote, index }) => {
  const colors = [
    'from-yellow-400 to-orange-500',
    'from-purple-500 to-pink-500',
    'from-cyan-400 to-blue-500'
  ];
  
  return (
    <div 
      className="neo-pillar"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className={`relative bg-gradient-to-br ${colors[index]} p-8 rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300`}>
        <div className="absolute -top-4 -right-4 w-12 h-12 bg-white border-4 border-black rounded-full flex items-center justify-center font-black text-xl">
          {index + 1}
        </div>
        <h3 className="font-black text-3xl mb-4 text-black drop-shadow-lg">{title}</h3>
        <p className="text-lg leading-relaxed font-bold text-black/90">{quote}</p>
      </div>
    </div>
  );
};

// ============================================
// PILLAR COMPONENT - GLASSMORPHISM
// ============================================
const GlassPillar = ({ title, quote, index }) => {
  return (
    <div 
      className="glass-pillar"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="relative backdrop-blur-xl bg-white/10 p-8 rounded-2xl border border-white/20 hover:bg-white/15 hover:scale-105 transition-all duration-500 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
        <div className="relative z-10">
          <h3 className="font-light text-3xl mb-4 text-white tracking-wide">{title}</h3>
          <div className="h-px bg-gradient-to-r from-white/50 to-transparent mb-4"></div>
          <p className="text-lg leading-relaxed text-white/90 font-light">{quote}</p>
        </div>
      </div>
    </div>
  );
};

// ============================================
// MAIN COMPONENT
// ============================================
const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentStyle, setCurrentStyle] = useState('brutalist');

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const pillarsData = [
    {
      title: "Systems Thinking",
      quote: "True innovation lies not in isolated components, but in their elegant integration. I see the whole by understanding the interplay of its parts."
    },
    {
      title: "First Principles",
      quote: "Deconstructing problems to their fundamental truths allows for the most robust and honest solutions to be built from the ground up."
    },
    {
      title: "Intentional Design",
      quote: "Every line of code, every interaction, every pixel must serve a purpose. Great work is not just functional; it is deliberate and thoughtful."
    }
  ];

  // ============================================
  // BRUTALIST STYLE
  // ============================================
  if (currentStyle === 'brutalist') {
    return (
      <div className="min-h-screen bg-white text-black overflow-x-hidden">
        <StyleSwitcher currentStyle={currentStyle} onStyleChange={setCurrentStyle} />
        
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700;900&display=swap');
          
          .brutalist-container * {
            font-family: 'Space Grotesk', sans-serif;
          }
          
          .brutalist-hero {
            animation: fadeInUp 1s ease-out forwards;
            opacity: 0;
          }
          
          .brutalist-pillar {
            animation: slideInLeft 0.8s ease-out forwards;
            opacity: 0;
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          .text-glitch {
            position: relative;
          }
          
          .text-glitch:hover::before {
            content: attr(data-text);
            position: absolute;
            left: 2px;
            text-shadow: -2px 0 red;
            top: 0;
            color: black;
            overflow: hidden;
            animation: glitch-1 0.3s infinite;
          }
          
          @keyframes glitch-1 {
            0% { clip-path: inset(40% 0 61% 0); }
            20% { clip-path: inset(92% 0 1% 0); }
            40% { clip-path: inset(43% 0 1% 0); }
            60% { clip-path: inset(25% 0 58% 0); }
            80% { clip-path: inset(54% 0 7% 0); }
            100% { clip-path: inset(58% 0 43% 0); }
          }
        `}</style>

        <div className={`brutalist-container ${isLoaded ? 'loaded' : ''}`}>
          {/* HERO SECTION */}
          <section className="min-h-screen flex items-center justify-center px-8 py-20 border-b-8 border-black">
            <div className="brutalist-hero max-w-5xl">
              <div className="mb-12">
                <div className="inline-block bg-black text-white px-6 py-2 font-black text-sm tracking-widest mb-8">
                  PORTFOLIO / 2025
                </div>
              </div>
              <h1 className="text-7xl md:text-8xl font-black leading-none mb-12 tracking-tighter">
                THE DISTANCE<br/>
                BETWEEN<br/>
                <span className="text-glitch inline-block" data-text="IDEA">IDEA</span> AND<br/>
                <span className="bg-black text-white px-4">REALITY</span>
              </h1>
              <p className="text-2xl font-bold max-w-2xl border-l-8 border-black pl-6">
                IS BRIDGED BY DISCIPLINE
              </p>
            </div>
          </section>

          {/* CREED SECTION */}
          <section className="min-h-screen flex items-center justify-center px-8 py-20 bg-black text-white border-b-8 border-white">
            <div className="max-w-4xl">
              <h2 className="text-6xl font-black mb-12 border-b-4 border-white pb-4">MANIFESTO</h2>
              <p className="text-3xl leading-relaxed font-medium">
                I am a builder, driven by a fascination with solving complex puzzles. My work is a synthesis of meticulous engineering and creative intuition, exploring the frontiers of machine learning, system design, and the philosophies that underpin them.
              </p>
            </div>
          </section>

          {/* PILLARS SECTION */}
          <section className="min-h-screen px-8 py-20">
            <h2 className="text-6xl font-black mb-16 text-center">GUIDING PRINCIPLES</h2>
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
              {pillarsData.map((pillar, index) => (
                <BrutalistPillar key={index} {...pillar} index={index} />
              ))}
            </div>
          </section>

          {/* GATEWAY SECTION */}
          <section className="min-h-screen flex items-center justify-center px-8 py-20 bg-black text-white">
            <div className="text-center">
              <h2 className="text-6xl font-black mb-12">READY TO<br/>DIVE IN?</h2>
              <button className="bg-white text-black px-16 py-6 text-2xl font-black border-4 border-white hover:bg-black hover:text-white transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1">
                EXPLORE BLUEPRINTS
              </button>
            </div>
          </section>
        </div>
      </div>
    );
  }

  // ============================================
  // NEOBRUTALISM STYLE
  // ============================================
  if (currentStyle === 'neobrutalism') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 text-black overflow-x-hidden">
        <StyleSwitcher currentStyle={currentStyle} onStyleChange={setCurrentStyle} />
        
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap');
          
          .neo-container * {
            font-family: 'Outfit', sans-serif;
          }
          
          .neo-hero {
            animation: bounceIn 1s ease-out forwards;
            opacity: 0;
          }
          
          .neo-pillar {
            animation: popIn 0.6s ease-out forwards;
            opacity: 0;
          }
          
          @keyframes bounceIn {
            0% {
              opacity: 0;
              transform: scale(0.3);
            }
            50% {
              transform: scale(1.05);
            }
            70% {
              transform: scale(0.9);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          @keyframes popIn {
            from {
              opacity: 0;
              transform: scale(0.8) rotate(-5deg);
            }
            to {
              opacity: 1;
              transform: scale(1) rotate(0deg);
            }
          }
          
          .floating {
            animation: float 3s ease-in-out infinite;
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
        `}</style>

        <div className={`neo-container ${isLoaded ? 'loaded' : ''}`}>
          {/* HERO SECTION */}
          <section className="min-h-screen flex items-center justify-center px-8 py-20 relative overflow-hidden">
            <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-400 rounded-full border-4 border-black opacity-20 floating"></div>
            <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-400 rounded-full border-4 border-black opacity-20 floating" style={{ animationDelay: '1s' }}></div>
            
            <div className="neo-hero max-w-5xl relative z-10">
              <div className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-8 py-3 rounded-full border-4 border-black font-black text-sm tracking-widest mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                ✨ CREATIVE TECHNOLOGIST
              </div>
              <h1 className="text-7xl md:text-8xl font-black leading-tight mb-8">
                <span className="bg-white border-4 border-black px-4 py-2 inline-block transform -rotate-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  DISCIPLINE
                </span>
                <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  BRIDGES
                </span>
                <br/>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 border-4 border-black px-4 py-2 inline-block transform rotate-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  DREAMS
                </span>
              </h1>
            </div>
          </section>

          {/* CREED SECTION */}
          <section className="min-h-screen flex items-center justify-center px-8 py-20">
            <div className="max-w-4xl bg-white p-12 rounded-3xl border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-5xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                WHO I AM
              </h2>
              <p className="text-2xl leading-relaxed font-bold">
                I am a builder, driven by a fascination with solving complex puzzles. My work is a synthesis of meticulous engineering and creative intuition, exploring the frontiers of machine learning, system design, and the philosophies that underpin them.
              </p>
            </div>
          </section>

          {/* PILLARS SECTION */}
          <section className="min-h-screen px-8 py-20">
            <h2 className="text-6xl font-black mb-16 text-center">
              <span className="bg-white border-4 border-black px-8 py-4 inline-block transform -rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                MY CORE VALUES
              </span>
            </h2>
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
              {pillarsData.map((pillar, index) => (
                <NeoPillar key={index} {...pillar} index={index} />
              ))}
            </div>
          </section>

          {/* GATEWAY SECTION */}
          <section className="min-h-screen flex items-center justify-center px-8 py-20">
            <div className="text-center">
              <h2 className="text-6xl font-black mb-12">
                LET'S BUILD<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  SOMETHING EPIC
                </span>
              </h2>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-16 py-6 text-2xl font-black rounded-full border-4 border-black hover:scale-105 transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                VIEW PROJECTS →
              </button>
            </div>
          </section>
        </div>
      </div>
    );
  }

  // ============================================
  // GLASSMORPHISM STYLE
  // ============================================
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-x-hidden relative">
      <StyleSwitcher currentStyle={currentStyle} onStyleChange={setCurrentStyle} />
      
      {/* Animated background orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');
        
        .glass-container * {
          font-family: 'Inter', sans-serif;
        }
        
        .glass-hero {
          animation: glassAppear 1.2s ease-out forwards;
          opacity: 0;
        }
        
        .glass-pillar {
          animation: glassSlide 0.8s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes glassAppear {
          from {
            opacity: 0;
            transform: translateY(40px);
            filter: blur(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
        
        @keyframes glassSlide {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className={`glass-container relative z-10 ${isLoaded ? 'loaded' : ''}`}>
        {/* HERO SECTION */}
        <section className="min-h-screen flex items-center justify-center px-8 py-20">
          <div className="glass-hero max-w-5xl text-center">
            <div className="backdrop-blur-xl bg-white/5 p-3 rounded-full border border-white/20 inline-block mb-8">
              <span className="text-sm tracking-widest font-light px-4">PORTFOLIO 2025</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-light leading-tight mb-8 tracking-tight">
              The Distance<br/>
              Between <span className="font-semibold italic">Idea</span><br/>
              and <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">Reality</span>
            </h1>
            <p className="text-2xl font-light tracking-wide opacity-80">
              is bridged by discipline
            </p>
          </div>
        </section>

        {/* CREED SECTION */}
        <section className="min-h-screen flex items-center justify-center px-8 py-20">
          <div className="max-w-4xl backdrop-blur-xl bg-white/5 p-12 rounded-3xl border border-white/20">
            <h2 className="text-5xl font-light mb-8 tracking-wide">Philosophy</h2>
            <div className="h-px bg-gradient-to-r from-white/50 to-transparent mb-8"></div>
            <p className="text-2xl leading-relaxed font-light opacity-90">
              I am a builder, driven by a fascination with solving complex puzzles. My work is a synthesis of meticulous engineering and creative intuition, exploring the frontiers of machine learning, system design, and the philosophies that underpin them.
            </p>
          </div>
        </section>

        {/* PILLARS SECTION */}
        <section className="min-h-screen px-8 py-20">
          <h2 className="text-6xl font-light mb-16 text-center tracking-wide">Guiding Principles</h2>
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            {pillarsData.map((pillar, index) => (
              <GlassPillar key={index} {...pillar} index={index} />
            ))}
          </div>
        </section>

        {/* GATEWAY SECTION */}
        <section className="min-h-screen flex items-center justify-center px-8 py-20">
          <div className="text-center">
            <h2 className="text-6xl font-light mb-12 tracking-wide">
              Experience My Work
            </h2>
            <button className="backdrop-blur-xl bg-white/10 hover:bg-white/20 text-white px-16 py-6 text-xl font-light rounded-full border border-white/30 hover:border-white/50 transition-all duration-500 hover:scale-105 shadow-2xl tracking-wide">
              Explore Projects
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;