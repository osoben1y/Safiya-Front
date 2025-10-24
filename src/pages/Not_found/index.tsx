import React, { useEffect, useRef } from "react";
import "./NotFound.css";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    const letters = "qwertyuiopasdfghjklzxcvbnm123456789";
    const lettersArr = letters.split("");
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function draw() {
      if (!ctx || !canvas) return;
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00ff00";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = lettersArr[Math.floor(Math.random() * lettersArr.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 35);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <canvas ref={canvasRef} className="absolute top-0 left-0"></canvas>
      <div className="relative flex items-center justify-center h-full z-10 px-6">
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-[10rem] md:text-[12rem] font-extrabold text-[#00ff00] animate-spin-slow glow-text animate-jitter animate-glitch">
            404
          </h1>
          <h2 className="text-3xl font-semibold text-[#00ff00]">Страница не найдена</h2>
          <p className="text-[#9aff9a] max-w-md mx-auto">
            К сожалению, эта страница не существует или была удалена.
            Проверьте адрес или вернитесь на главную.
          </p>
          <NavLink
            to="/"
            className="inline-block mt-4 px-6 py-3 bg-[#00ff00] text-black font-medium rounded-lg shadow hover:bg-[#00cc00] transition duration-300"
        >
            Вернуться на главную
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default React.memo(NotFound);