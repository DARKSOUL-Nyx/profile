import React, { useState, useEffect, useRef } from "react";

// ============================================
// STYLE SWITCHER COMPONENT
// ============================================
const StyleSwitcher = ({
  currentStyle,
  onStyleChange,
}: {
  currentStyle: string;
  onStyleChange: (style: string) => void;
}) => {
  const styles = [
    { id: "brutalist", name: "BRUTAL", color: "bg-black" },
    { id: "terminal", name: "TERMINAL", color: "bg-green-500" },
    { id: "swiss", name: "SWISS", color: "bg-red-600" },
    { id: "cyberpunk", name: "CYBER", color: "bg-purple-600" },
    { id: "bauhaus", name: "BAUHAUS", color: "bg-yellow-400" },
  ];

  return (
    <div className="fixed top-8 right-8 z-50 flex flex-wrap gap-2 max-w-md">
      {styles.map((style) => (
        <button
          key={style.id}
          onClick={() => onStyleChange(style.id)}
          className={`px-4 py-2 font-bold text-sm transition-all border-2 border-black ${
            currentStyle === style.id
              ? `${style.color} text-white scale-110 shadow-lg`
              : "bg-white text-black hover:scale-105"
          }`}
        >
          {style.name}
        </button>
      ))}
    </div>
  );
};


// ============================================
// SPACE/BLACKHOLE BACKGROUND COMPONENT
// ============================================
const SpaceBackground = ({ intensity = "medium" }: { intensity?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars: {
      x: number;
      y: number;
      radius: number;
      speed: number;
      opacity: number;
    }[] = [];

    const starCount =
      intensity === "high" ? 300 : intensity === "medium" ? 150 : 80;

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random(),
      });
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${star.opacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [intensity]);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
};

// ============================================
// PILLAR COMPONENTS
// ============================================
const BrutalistPillar = ({ title, quote, index }) => (
  <div className="brutalist-pillar" style={{ animationDelay: `${index * 0.15}s` }}>
    <div className="border-8 border-black bg-white p-8 hover:translate-x-2 hover:-translate-y-2 transition-transform duration-200 group">
      <div className="border-b-4 border-black pb-4 mb-4">
        <h3 className="font-black text-3xl tracking-tighter">{title}</h3>
      </div>
      <p className="text-lg leading-relaxed font-medium">{quote}</p>
      <div className="mt-6 h-2 bg-black w-16 group-hover:w-full transition-all duration-500"></div>
    </div>
  </div>
);

const TerminalPillar = ({ title, quote, index }) => (
  <div className="terminal-pillar" style={{ animationDelay: `${index * 0.15}s` }}>
    <div className="bg-black border-2 border-green-500 p-6 font-mono hover:border-green-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]">
      <div className="flex items-center mb-4">
        <span className="text-green-500 mr-2">$</span>
        <h3 className="text-green-500 text-xl font-bold">{title.toLowerCase().replace(' ', '_')}</h3>
      </div>
      <p className="text-green-400 text-sm leading-relaxed">&gt; {quote}</p>
      <div className="mt-4 flex gap-1">
        <span className="w-2 h-2 bg-green-500 animate-pulse"></span>
        <span className="w-2 h-2 bg-green-500 animate-pulse"></span>
        <span className="w-2 h-2 bg-green-500 animate-pulse"></span>
      </div>
    </div>
  </div>
);

const SwissPillar = ({ title, quote, index }) => (
  <div className="swiss-pillar" style={{ animationDelay: `${index * 0.15}s` }}>
    <div className="bg-white p-8 border-l-8 border-red-600 hover:border-l-16 transition-all duration-300">
      <div className="flex items-start gap-4">
        <span className="text-6xl font-bold text-red-600 leading-none">{index + 1}</span>
        <div>
          <h3 className="text-2xl font-bold mb-3 uppercase tracking-tight">{title}</h3>
          <p className="text-base leading-relaxed text-gray-700">{quote}</p>
        </div>
      </div>
    </div>
  </div>
);

const CyberpunkPillar = ({ title, quote, index }) => (
  <div className="cyberpunk-pillar" style={{ animationDelay: `${index * 0.15}s` }}>
    <div className="relative bg-black border-2 border-purple-500 p-6 overflow-hidden group hover:border-cyan-400 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-cyan-400"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-purple-500"></div>
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 uppercase tracking-wide">
          {title}
        </h3>
        <p className="text-purple-200 leading-relaxed text-sm">{quote}</p>
        <div className="mt-4 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 w-0 group-hover:w-full transition-all duration-500"></div>
      </div>
    </div>
  </div>
);

const BauhausPillar = ({ title, quote, index }) => {
  const colors = ['bg-red-600', 'bg-yellow-400', 'bg-blue-600'];
  
  return (
    <div className="bauhaus-pillar" style={{ animationDelay: `${index * 0.15}s` }}>
      <div className="bg-white p-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
        <div className={`absolute -top-10 -right-10 w-32 h-32 ${colors[index]} opacity-20 group-hover:opacity-30 transition-opacity rounded-full`}></div>
        <h3 className="text-3xl font-black mb-4 uppercase">{title}</h3>
        <div className={`w-16 h-1 ${colors[index]} mb-4`}></div>
        <p className="text-lg leading-relaxed font-medium text-gray-800">{quote}</p>
      </div>
    </div>
  );
};

// ============================================
// MAIN COMPONENT
// ============================================
const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentStyle, setCurrentStyle] = useState("brutalist");

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const pillarsData = [
    {
      title: "Systems Thinking",
      quote:
        "True innovation lies not in isolated components, but in their elegant integration. I see the whole by understanding the interplay of its parts.",
    },
    {
      title: "First Principles",
      quote:
        "Deconstructing problems to their fundamental truths allows for the most robust and honest solutions to be built from the ground up.",
    },
    {
      title: "Intentional Design",
      quote:
        "Every line of code, every interaction, every pixel must serve a purpose. Great work is not just functional; it is deliberate and thoughtful.",
    },
  ];


  // ============================================
  // BRUTALIST STYLE (Enhanced with Space Theme)
  // ============================================
  if (currentStyle === 'brutalist') {
    return (
      <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
        <SpaceBackground intensity="medium" />
        <StyleSwitcher currentStyle={currentStyle} onStyleChange={setCurrentStyle} />
        
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700;900&display=swap');
          
          .brutalist-container * { font-family: 'Space Grotesk', sans-serif; }
          .brutalist-hero { animation: fadeInUp 1s ease-out forwards; opacity: 0; }
          .brutalist-pillar { animation: slideInLeft 0.8s ease-out forwards; opacity: 0; }
          
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-50px); }
            to { opacity: 1; transform: translateX(0); }
          }
          
          .glitch-text {
            position: relative;
            animation: glitch 5s infinite;
          }
          @keyframes glitch {
            0%, 90%, 100% { transform: translate(0); }
            92% { transform: translate(-2px, 2px); }
            94% { transform: translate(2px, -2px); }
            96% { transform: translate(-2px, -2px); }
            98% { transform: translate(2px, 2px); }
          }
        `}</style>

        <div className={`brutalist-container relative z-10 ${isLoaded ? 'loaded' : ''}`}>
          <section className="min-h-screen flex items-center justify-center px-8 py-20">
            <div className="brutalist-hero max-w-6xl">
              <div className="inline-block bg-white text-black px-6 py-2 font-black text-sm tracking-widest mb-8 transform -rotate-2">
                ENGINEERING × PHILOSOPHY
              </div>
              <h1 className="text-7xl md:text-9xl font-black leading-none mb-8 tracking-tighter">
                <span className="text-white">THE</span><br/>
                <span className="glitch-text text-white">DISTANCE</span><br/>
                <span className="text-white border-8 border-white px-4 inline-block">BETWEEN</span><br/>
                <span className="text-red-600">IDEA</span> <span className="text-white">&</span><br/>
                <span className="bg-white text-black px-4 inline-block transform rotate-1">REALITY</span>
              </h1>
              <p className="text-2xl font-bold border-l-8 border-white pl-6 ml-4">
                IS BRIDGED BY DISCIPLINE
              </p>
            </div>
          </section>

          <section className="min-h-screen flex items-center justify-center px-8 py-20">
            <div className="max-w-4xl border-8 border-white bg-black p-12">
              <h2 className="text-6xl font-black mb-8 text-white">MANIFESTO_</h2>
              <div className="h-2 bg-white w-32 mb-8"></div>
              <p className="text-2xl leading-relaxed font-medium text-gray-300">
                I am a builder, driven by a fascination with solving complex puzzles. My work is a synthesis of meticulous engineering and creative intuition, exploring the frontiers of machine learning, system design, and the philosophies that underpin them.
              </p>
            </div>
          </section>

          <section className="min-h-screen px-8 py-20 relative z-10">
            <h2 className="text-7xl font-black mb-16 text-center text-white tracking-tighter">
              CORE<br/>PRINCIPLES
            </h2>
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
              {pillarsData.map((pillar, index) => (
                <BrutalistPillar key={index} {...pillar} index={index} />
              ))}
            </div>
          </section>

          <section className="min-h-screen flex items-center justify-center px-8 py-20">
            <div className="text-center">
              <h2 className="text-7xl font-black mb-12 text-white tracking-tighter">ENTER<br/>THE VOID</h2>
              <button className="bg-white text-black px-16 py-6 text-2xl font-black border-8 border-white hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105">
                EXPLORE_PROJECTS
              </button>
            </div>
          </section>
        </div>
      </div>
    );
  }

  // ============================================
  // TERMINAL/HACKER STYLE
  // ============================================
  if (currentStyle === 'terminal') {
    return (
      <div className="min-h-screen bg-black text-green-500 overflow-x-hidden relative font-mono">
        <SpaceBackground intensity="low" />
        <StyleSwitcher currentStyle={currentStyle} onStyleChange={setCurrentStyle} />
        
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap');
          .terminal-container * { font-family: 'JetBrains Mono', monospace; }
          .terminal-hero { animation: terminalBoot 1s ease-out forwards; opacity: 0; }
          .terminal-pillar { animation: terminalLoad 0.8s ease-out forwards; opacity: 0; }
          .cursor { animation: blink 1s infinite; }
          
          @keyframes terminalBoot {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes terminalLoad {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
          .scanline {
            position: absolute;
            width: 100%;
            height: 2px;
            background: rgba(34, 197, 94, 0.1);
            animation: scan 6s linear infinite;
          }
          @keyframes scan {
            from { top: 0; }
            to { top: 100%; }
          }
        `}</style>

        <div className="scanline"></div>
        <div className={`terminal-container relative z-10 ${isLoaded ? 'loaded' : ''}`}>
          <section className="min-h-screen flex items-center justify-center px-8 py-20">
            <div className="terminal-hero max-w-5xl">
              <div className="text-green-400 text-sm mb-8">
                <p>$ ssh user@portfolio.dev</p>
                <p>$ Connecting...</p>
                <p className="text-green-500">$ Connection established.</p>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold mb-8">
                <span className="text-green-500">&gt; </span>
                THE_DISTANCE<br/>
                <span className="text-green-500">&gt; </span>
                BETWEEN_IDEA<br/>
                <span className="text-green-500">&gt; </span>
                AND_REALITY<br/>
                <span className="text-green-400">&gt; </span>
                IS_DISCIPLINE<span className="cursor">_</span>
              </h1>
              <p className="text-green-400 text-lg">
                [SYSTEM INITIALIZED] | UPTIME: ∞ | STATUS: OPERATIONAL
              </p>
            </div>
          </section>

          <section className="min-h-screen flex items-center justify-center px-8 py-20">
            <div className="max-w-4xl border-2 border-green-500 bg-black p-8">
              <div className="flex items-center gap-2 mb-6 border-b-2 border-green-500 pb-2">
                <span className="text-green-500">$</span>
                <h2 className="text-3xl font-bold">cat README.md</h2>
              </div>
              <p className="text-lg leading-relaxed text-green-400">
                I am a builder, driven by a fascination with solving complex puzzles. My work is a synthesis of meticulous engineering and creative intuition, exploring the frontiers of machine learning, system design, and the philosophies that underpin them.
              </p>
              <div className="mt-6 text-green-500">
                <p>EOF</p>
              </div>
            </div>
          </section>

          <section className="min-h-screen px-8 py-20">
            <div className="text-center mb-12">
              <p className="text-green-500 text-sm mb-2">$ ls -la /principles</p>
              <h2 className="text-5xl font-bold">CORE_MODULES</h2>
            </div>
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
              {pillarsData.map((pillar, index) => (
                <TerminalPillar key={index} {...pillar} index={index} />
              ))}
            </div>
          </section>

          <section className="min-h-screen flex items-center justify-center px-8 py-20">
            <div className="text-center">
              <h2 className="text-5xl font-bold mb-8">
                $ cd /projects <span className="cursor">_</span>
              </h2>
              <button className="bg-green-500 text-black px-12 py-4 text-xl font-bold border-2 border-green-500 hover:bg-black hover:text-green-500 transition-all duration-300">
                ./execute_exploration.sh
              </button>
            </div>
          </section>
        </div>
      </div>
    );
  }

  // ============================================
  // SWISS INTERNATIONAL STYLE
  // ============================================
  if (currentStyle === 'swiss') {
    return (
      <div className="min-h-screen bg-gray-100 text-black overflow-x-hidden">
        <StyleSwitcher currentStyle={currentStyle} onStyleChange={setCurrentStyle} />
        
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
          .swiss-container * { font-family: 'Inter', 'Helvetica', sans-serif; }
          .swiss-hero { animation: fadeIn 1s ease-out forwards; opacity: 0; }
          .swiss-pillar { animation: slideUp 0.8s ease-out forwards; opacity: 0; }
          
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>

        <div className={`swiss-container ${isLoaded ? 'loaded' : ''}`}>
          <section className="min-h-screen flex items-center justify-center px-8 py-20">
            <div className="swiss-hero max-w-6xl">
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-12 md:col-span-8">
                  <h1 className="text-8xl md:text-9xl font-bold leading-none tracking-tight mb-8">
                    THE<br/>
                    DISTANCE
                  </h1>
                  <div className="h-2 bg-red-600 w-full mb-8"></div>
                  <p className="text-3xl font-bold uppercase tracking-tight">
                    Between Idea<br/>and Reality<br/>is Discipline
                  </p>
                </div>
                <div className="col-span-12 md:col-span-4 flex items-end">
                  <div className="w-full h-64 bg-red-600"></div>
                </div>
              </div>
            </div>
          </section>

          <section className="min-h-screen flex items-center justify-center px-8 py-20 bg-white">
            <div className="max-w-4xl">
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-3">
                  <h2 className="text-2xl font-bold uppercase">01</h2>
                </div>
                <div className="col-span-9">
                  <h3 className="text-4xl font-bold mb-6 uppercase">Philosophy</h3>
                  <p className="text-xl leading-relaxed">
                    I am a builder, driven by a fascination with solving complex puzzles. My work is a synthesis of meticulous engineering and creative intuition, exploring the frontiers of machine learning, system design, and the philosophies that underpin them.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="min-h-screen px-8 py-20">
            <div className="grid grid-cols-12 gap-8 max-w-7xl mx-auto mb-12">
              <div className="col-span-3">
                <h2 className="text-2xl font-bold uppercase">02</h2>
              </div>
              <div className="col-span-9">
                <h3 className="text-6xl font-bold uppercase mb-8">Principles</h3>
              </div>
            </div>
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-1">
              {pillarsData.map((pillar, index) => (
                <SwissPillar key={index} {...pillar} index={index} />
              ))}
            </div>
          </section>

          <section className="min-h-screen flex items-center justify-center px-8 py-20 bg-red-600 text-white">
            <div className="text-center">
              <h2 className="text-7xl font-bold mb-12 uppercase">Projects</h2>
              <button className="bg-white text-red-600 px-16 py-6 text-xl font-bold uppercase hover:bg-black hover:text-white transition-all duration-300">
                View Work
              </button>
            </div>
          </section>
        </div>
      </div>
    );
  }

  // ============================================
  // CYBERPUNK STYLE
  // ============================================
  if (currentStyle === 'cyberpunk') {
    return (
      <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
        <SpaceBackground intensity="high" />
        <StyleSwitcher currentStyle={currentStyle} onStyleChange={setCurrentStyle} />
        
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');
          .cyberpunk-container * { font-family: 'Orbitron', sans-serif; }
          .cyberpunk-hero { animation: cyberGlitch 1s ease-out forwards; opacity: 0; }
          .cyberpunk-pillar { animation: cyberSlide 0.8s ease-out forwards; opacity: 0; }
          
          @keyframes cyberGlitch {
            0% { opacity: 0; transform: translateX(-20px); filter: hue-rotate(90deg); }
            50% { transform: translateX(5px); }
            100% { opacity: 1; transform: translateX(0); filter: hue-rotate(0deg); }
          }
          @keyframes cyberSlide {
            from { opacity: 0; transform: translateY(30px) skewY(-2deg); }
            to { opacity: 1; transform: translateY(0) skewY(0); }
          }
          
          .neon-text {
            text-shadow: 0 0 10px rgba(168, 85, 247, 0.8),
                         0 0 20px rgba(168, 85, 247, 0.6),
                         0 0 30px rgba(168, 85, 247, 0.4);
          }
          
          .cyber-grid {
            background-image: 
              linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px);
            background-size: 50px 50px;
          }
        `}</style>

        <div className="cyber-grid fixed inset-0 z-0"></div>
        <div className={`cyberpunk-container relative z-10 ${isLoaded ? 'loaded' : ''}`}>
          <section className="min-h-screen flex items-center justify-center px-8 py-20">
            <div className="cyberpunk-hero max-w-6xl">
              <div className="inline-block border-2 border-purple-500 px-4 py-2 mb-8 text-cyan-400 text-sm tracking-widest">
                ◢◤ NEURAL INTERFACE ACTIVE ◢◤
              </div>
              <h1 className="text-7xl md:text-9xl font-black leading-none mb-8 tracking-tight">
                <span className="neon-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  THE DISTANCE
                </span>
                <br/>
                <span className="text-white">BETWEEN</span>
                <br/>
                <span className="text-cyan-400">IDEA</span> <span className="text-purple-500">&</span> <span className="text-purple-400">REALITY</span>
              </h1>
              <p className="text-2xl font-bold text-purple-300 border-l-4 border-cyan-400 pl-6">
                // BRIDGED BY DISCIPLINE
              </p>
              <div className="mt-8 flex gap-4">
                <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-transparent"></div>
                <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-transparent"></div>
              </div>
            </div>
          </section>

          <section className="min-h-screen flex items-center justify-center px-8 py-20">
            <div className="max-w-4xl border-2 border-purple-500 bg-black/80 backdrop-blur-sm p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
              <h2 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                CORE DIRECTIVE
              </h2>
              <p className="text-xl leading-relaxed text-purple-200">
                I am a builder, driven by a fascination with solving complex puzzles. My work is a synthesis of meticulous engineering and creative intuition, exploring the frontiers of machine learning, system design, and the philosophies that underpin them.
              </p>
            </div>
          </section>

          <section className="min-h-screen px-8 py-20">
            <h2 className="text-6xl font-black mb-16 text-center neon-text">
              NEURAL PATHWAYS
            </h2>
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
              {pillarsData.map((pillar, index) => (
                <CyberpunkPillar key={index} {...pillar} index={index} />
              ))}
            </div>
          </section>

          <section className="min-h-screen flex items-center justify-center px-8 py-20">