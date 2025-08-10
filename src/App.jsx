import React, { useEffect, useRef, useState } from 'react';

const App = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const dotsRef = useRef([]);
  const animationRef = useRef();
  const [currentGradient, setCurrentGradient] = useState(0);

  const DOT_COUNT = 100;
  const CONNECTION_DISTANCE = 150;
  const MAX_CONNECTIONS = 5;

  const darkGradients = [
    'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900',
    'bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900',
    'bg-gradient-to-br from-neutral-900 via-red-900 to-neutral-900',
    'bg-gradient-to-br from-stone-900 via-green-900 to-stone-900',
    'bg-gradient-to-br from-zinc-900 via-pink-900 to-zinc-900',
    'bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900',
    'bg-gradient-to-br from-gray-900 via-teal-900 to-gray-900',
    'bg-gradient-to-br from-neutral-900 via-orange-900 to-neutral-900',
    'bg-gradient-to-br from-stone-900 via-cyan-900 to-stone-900',
    'bg-gradient-to-br from-zinc-900 via-violet-900 to-zinc-900'
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initializeDots = () => {
      dotsRef.current = [];
      for (let i = 0; i < DOT_COUNT; i++) {
        dotsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          radius: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.3,
        });
      }
    };

    const updateDots = () => {
      dotsRef.current.forEach(dot => {
        dot.x += dot.vx;
        dot.y += dot.vy;

        if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;

        dot.x = Math.max(0, Math.min(canvas.width, dot.x));
        dot.y = Math.max(0, Math.min(canvas.height, dot.y));
      });
    };

    const getDistance = (x1, y1, x2, y2) => {
      return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    };

    const drawConnections = () => {
      const mouse = mouseRef.current;
      const nearestDots = dotsRef.current
        .map(dot => ({
          ...dot,
          distance: getDistance(mouse.x, mouse.y, dot.x, dot.y)
        }))
        .filter(dot => dot.distance < CONNECTION_DISTANCE)
        .sort((a, b) => a.distance - b.distance)
        .slice(0, MAX_CONNECTIONS);

      nearestDots.forEach(dot => {
        const opacity = 1 - (dot.distance / CONNECTION_DISTANCE);
        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.6})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(mouse.x, mouse.y);
        ctx.lineTo(dot.x, dot.y);
        ctx.stroke();
      });

      for (let i = 0; i < nearestDots.length; i++) {
        for (let j = i + 1; j < nearestDots.length; j++) {
          const dot1 = nearestDots[i];
          const dot2 = nearestDots[j];
          const distance = getDistance(dot1.x, dot1.y, dot2.x, dot2.y);
          
          if (distance < CONNECTION_DISTANCE * 0.8) {
            const opacity = 1 - (distance / (CONNECTION_DISTANCE * 0.8));
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.3})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(dot1.x, dot1.y);
            ctx.lineTo(dot2.x, dot2.y);
            ctx.stroke();
          }
        }
      }
    };

    const drawDots = () => {
      dotsRef.current.forEach(dot => {
        ctx.fillStyle = `rgba(255, 255, 255, ${dot.opacity})`;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      updateDots();
      drawConnections();
      drawDots();
      
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    };

    const handleMouseClick = () => {
      setCurrentGradient((prev) => (prev + 1) % darkGradients.length);
    };

    resizeCanvas();
    initializeDots();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      initializeDots();
    });
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleMouseClick);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleMouseClick);
    };
  }, []);

  return (
    <div className={`relative w-screen h-screen overflow-hidden ${darkGradients[currentGradient]} transition-all duration-1000 ease-in-out before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.2)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.2)_0%,transparent_50%),radial-gradient(circle_at_40%_40%,rgba(120,219,226,0.2)_0%,transparent_50%)] before:z-[1] before:animate-pulse-glow`}>
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-[2]" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-[3] text-white pointer-events-none select-none">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold m-0 mb-4 bg-gradient-to-r from-white via-blue-50 via-blue-100 to-white bg-200 bg-clip-text text-transparent animate-text-shimmer font-sans tracking-wider-2 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          Interactive Floating Dots
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-light m-0 opacity-90 font-sans tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)] animate-fade-in-out">
          Click anywhere to change the background gradient
        </p>
      </div>
    </div>
  );
};

export default App;