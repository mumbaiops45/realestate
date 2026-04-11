

"use client";
import React, { useEffect, useRef, useState } from "react";


const Hero = () => {
    const canvasRef = useRef(null);
    const [scrollY, setScrollY] = useState(0);
    const animRef = useRef(null);



    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);


        const particles = Array.from({ length: 80 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.6,
            vy: (Math.random() - 0.5) * 0.6,
            r: Math.random() * 2.5 + 0.5,
            opacity: Math.random() * 0.5 + 0.1,
            color: Math.random() > 0.5 ? "59,130,246" : "147,197,253",
        }));


        const orbs = Array.from({ length: 5 }, (_, i) => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: 80 + Math.random() * 120,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            hue: 210 + i * 20,
        }));

        let mouse = { x: canvas.width / 2, y: canvas.height / 2 };

        const handleMouse = (e) => {
            mouse = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener("mousemove", handleMouse);

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            orbs.forEach((orb) => {
                orb.x += orb.vx;
                orb.y += orb.vy;
                if (orb.x < -orb.r) orb.x = canvas.width + orb.r;
                if (orb.x > canvas.width + orb.r) orb.x = -orb.r;
                if (orb.y < -orb.r) orb.y = canvas.height + orb.r;
                if (orb.y > canvas.height + orb.r) orb.y = -orb.r;

                const grad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r);
                grad.addColorStop(0, `hsla(${orb.hue}, 80%, 60%, 0.12)`);
                grad.addColorStop(1, `hsla(${orb.hue}, 80%, 60%, 0)`);
                ctx.beginPath();
                ctx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2);
                ctx.fillStyle = grad;
                ctx.fill();
            });


            particles.forEach((p, i) => {

                p.x += p.vx;
                p.y += p.vy;


                const dx = p.x - mouse.x;
                const dy = p.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    p.vx += (dx / dist) * 0.08;
                    p.vy += (dy / dist) * 0.08;
                }


                const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
                if (speed > 2) {
                    p.vx = (p.vx / speed) * 2;
                    p.vy = (p.vy / speed) * 2;
                }


                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;


                particles.forEach((p2, j) => {
                    if (j <= i) return;
                    const dx2 = p.x - p2.x;
                    const dy2 = p.y - p2.y;
                    const d = Math.sqrt(dx2 * dx2 + dy2 * dy2);
                    if (d < 130) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(147,197,253,${0.15 * (1 - d / 130)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                });


                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${p.color},${p.opacity})`;
                ctx.fill();
            });

            animRef.current = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animRef.current);
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouse);
        };
    }, []);


    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .hero-section {
          position: relative;
          height: 100vh;
          min-height: 680px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0f172a 0%, #1e3a6e 40%, #1e40af 70%, #1d4ed8 100%);
        }

       
        .wave-layer {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .wave-1 {
          background: radial-gradient(ellipse 80% 60% at 20% 50%, rgba(59,130,246,0.25) 0%, transparent 70%);
          animation: waveMove1 12s ease-in-out infinite alternate;
        }
        .wave-2 {
          background: radial-gradient(ellipse 60% 80% at 80% 30%, rgba(99,102,241,0.2) 0%, transparent 60%);
          animation: waveMove2 15s ease-in-out infinite alternate;
        }
        .wave-3 {
          background: radial-gradient(ellipse 50% 50% at 50% 80%, rgba(14,165,233,0.15) 0%, transparent 60%);
          animation: waveMove3 10s ease-in-out infinite alternate;
        }

        @keyframes waveMove1 {
          from { transform: translate(-5%, -5%) scale(1); }
          to   { transform: translate(8%, 8%) scale(1.1); }
        }
        @keyframes waveMove2 {
          from { transform: translate(5%, 5%) scale(1.05); }
          to   { transform: translate(-8%, -3%) scale(0.95); }
        }
        @keyframes waveMove3 {
          from { transform: translate(0%, 0%) scale(1); }
          to   { transform: translate(-5%, 10%) scale(1.08); }
        }

       
        .city-silhouette {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 200px;
          pointer-events: none;
          opacity: 0.12;
        }

        
        .float-buildings {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .building {
          position: absolute;
          bottom: 0;
          background: rgba(255,255,255,0.06);
          border-top: 1px solid rgba(255,255,255,0.1);
          animation: buildingFloat linear infinite;
        }

        .building::before {
          content: '';
          position: absolute;
          top: 15%;
          left: 10%;
          right: 10%;
          bottom: 20%;
          background: repeating-linear-gradient(
            to bottom,
            transparent 0px,
            transparent 8px,
            rgba(255,255,255,0.05) 8px,
            rgba(255,255,255,0.05) 10px
          );
        }

        @keyframes buildingFloat {
          0%   { transform: translateY(0px); opacity: 0.08; }
          50%  { transform: translateY(-12px); opacity: 0.14; }
          100% { transform: translateY(0px); opacity: 0.08; }
        }

       
        .pin {
          position: absolute;
          animation: pinFloat ease-in-out infinite;
          pointer-events: none;
          filter: drop-shadow(0 4px 12px rgba(59,130,246,0.5));
        }

        @keyframes pinFloat {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.7; }
          50%       { transform: translateY(-16px) scale(1.1); opacity: 1; }
        }

        
        .scan-line {
          position: absolute;
          left: 0; right: 0;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(147,197,253,0.4), transparent);
          animation: scanDown 6s linear infinite;
          pointer-events: none;
        }

        @keyframes scanDown {
          0%   { top: -1px; opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }

        
        .grid-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(147,197,253,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147,197,253,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: gridPulse 4s ease-in-out infinite;
        }

        @keyframes gridPulse {
          0%, 100% { opacity: 0.5; }
          50%       { opacity: 1; }
        }

       
        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 860px;
          padding: 0 24px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          backdrop-filter: blur(10px);
          padding: 8px 20px;
          border-radius: 100px;
          margin-bottom: 28px;
          animation: fadeDown 0.8s ease forwards;
          opacity: 0;
        }

        .badge-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #34d399;
          animation: pulse 2s ease infinite;
        }

        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(52,211,153,0.4); }
          50%       { box-shadow: 0 0 0 6px rgba(52,211,153,0); }
        }

        .badge-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.8);
        }

        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(38px, 7vw, 72px);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.1;
          margin-bottom: 24px;
          animation: fadeDown 0.8s ease 0.2s forwards;
          opacity: 0;
        }

        .hero-title .accent {
          background: linear-gradient(135deg, #60a5fa, #93c5fd, #bfdbfe);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(15px, 2vw, 18px);
          font-weight: 300;
          color: rgba(255,255,255,0.65);
          line-height: 1.7;
          max-width: 580px;
          margin: 0 auto 40px;
          animation: fadeDown 0.8s ease 0.4s forwards;
          opacity: 0;
        }

        .hero-subtitle strong {
          color: rgba(255,255,255,0.9);
          font-weight: 500;
        }

        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        
        .search-box {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          backdrop-filter: blur(20px);
          border-radius: 16px;
          padding: 8px;
          display: flex;
          align-items: center;
          gap: 8px;
          max-width: 640px;
          margin: 0 auto 40px;
          animation: fadeUp 0.8s ease 0.5s forwards;
          opacity: 0;
          flex-wrap: wrap;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .search-select {
          flex: 1;
          min-width: 120px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          padding: 12px 16px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: rgba(255,255,255,0.8);
          outline: none;
          cursor: pointer;
          appearance: none;
          transition: all 0.3s;
        }

        .search-select:focus {
          border-color: rgba(147,197,253,0.5);
          background: rgba(255,255,255,0.12);
        }

        .search-select option { background: #1e40af; color: white; }

        .search-input {
          flex: 2;
          min-width: 160px;
          background: transparent;
          border: none;
          padding: 12px 16px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          color: white;
          outline: none;
        }

        .search-input::placeholder { color: rgba(255,255,255,0.35); }

        .search-btn {
          padding: 12px 28px;
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          color: white;
          border: none;
          border-radius: 10px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          letter-spacing: 0.5px;
          transition: all 0.3s;
          white-space: nowrap;
          box-shadow: 0 4px 20px rgba(59,130,246,0.4);
        }

        .search-btn:hover {
          background: linear-gradient(135deg, #60a5fa, #2563eb);
          box-shadow: 0 6px 28px rgba(59,130,246,0.6);
          transform: translateY(-1px);
        }

       
        .cta-group {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
          animation: fadeUp 0.8s ease 0.7s forwards;
          opacity: 0;
        }

        .btn-primary {
          padding: 16px 36px;
          background: white;
          color: #1e40af;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          letter-spacing: 0.3px;
          transition: all 0.3s;
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .btn-primary:hover {
          background: #eff6ff;
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.25);
        }

        .btn-secondary {
          padding: 16px 36px;
          background: rgba(255,255,255,0.1);
          color: white;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 400;
          border: 1px solid rgba(255,255,255,0.25);
          border-radius: 12px;
          cursor: pointer;
          letter-spacing: 0.3px;
          transition: all 0.3s;
          backdrop-filter: blur(10px);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .btn-secondary:hover {
          background: rgba(255,255,255,0.18);
          border-color: rgba(255,255,255,0.4);
          transform: translateY(-2px);
        }

        /* STATS BAR */
        .stats-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(10,15,40,0.7);
          backdrop-filter: blur(20px);
          border-top: 1px solid rgba(255,255,255,0.08);
          display: flex;
          justify-content: center;
          animation: fadeUp 0.8s ease 0.9s forwards;
          opacity: 0;
        }

        .stat-item {
          flex: 1;
          max-width: 200px;
          padding: 20px 24px;
          text-align: center;
          border-right: 1px solid rgba(255,255,255,0.06);
          transition: background 0.3s;
        }

        .stat-item:last-child { border-right: none; }
        .stat-item:hover { background: rgba(255,255,255,0.04); }

        .stat-value {
          font-family: 'Playfair Display', serif;
          font-size: 26px;
          font-weight: 700;
          color: #93c5fd;
          display: block;
          line-height: 1;
          margin-bottom: 4px;
        }

        .stat-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
        }

        /* SCROLL INDICATOR */
        .scroll-indicator {
          position: absolute;
          bottom: 90px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          animation: fadeUp 0.8s ease 1.1s forwards;
          opacity: 0;
        }

        .scroll-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.5), transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }

        @keyframes scrollPulse {
          0%, 100% { transform: scaleY(1); opacity: 0.5; }
          50%       { transform: scaleY(0.6); opacity: 1; }
        }

        .scroll-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 9px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
        }

        @media (max-width: 640px) {
          .stats-bar { display: none; }
          .search-box { flex-direction: column; }
          .search-select, .search-input { width: 100%; min-width: unset; }
          .search-btn { width: 100%; justify-content: center; }
          .building { display: none; }
        }
      `}</style>

            <section className="hero-section">
                <canvas
                    ref={canvasRef}
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 1,
                        pointerEvents: "none",
                    }}
                />

                <div className="wave-layer wave-1" style={{ zIndex: 2 }} />
                <div className="wave-layer wave-2" style={{ zIndex: 2 }} />
                <div className="wave-layer wave-3" style={{ zIndex: 2 }} />

                <div className="grid-overlay" style={{ zIndex: 3 }} />

                <div className="scan-line" style={{ zIndex: 4 }} />

                <div className="float-buildings" style={{ zIndex: 4 }}>
                    {[
                        { left: "3%", w: 60, h: 220, delay: "0s", dur: "7s" },
                        { left: "9%", w: 40, h: 160, delay: "1s", dur: "9s" },
                        { left: "14%", w: 50, h: 280, delay: "0.5s", dur: "6s" },
                        { left: "20%", w: 35, h: 130, delay: "2s", dur: "8s" },
                        { left: "75%", w: 55, h: 200, delay: "1.5s", dur: "7.5s" },
                        { left: "81%", w: 45, h: 300, delay: "0.8s", dur: "6.5s" },
                        { left: "87%", w: 60, h: 180, delay: "2.5s", dur: "9s" },
                        { left: "93%", w: 35, h: 240, delay: "0.3s", dur: "7s" },
                    ].map((b, i) => (
                        <div
                            key={i}
                            className="building"
                            style={{
                                left: b.left,
                                width: b.w,
                                height: b.h,
                                animationDelay: b.delay,
                                animationDuration: b.dur,
                            }}
                        />
                    ))}
                </div>


                {[
                    { top: "20%", left: "15%", delay: "0s", dur: "4s", size: 28 },
                    { top: "35%", left: "78%", delay: "1.5s", dur: "5s", size: 22 },
                    { top: "55%", left: "25%", delay: "0.8s", dur: "3.5s", size: 18 },
                    { top: "25%", left: "65%", delay: "2s", dur: "4.5s", size: 24 },
                ].map((pin, i) => (
                    <div
                        key={i}
                        className="pin"
                        style={{
                            top: pin.top,
                            left: pin.left,
                            zIndex: 5,
                            animationDelay: pin.delay,
                            animationDuration: pin.dur,
                        }}
                    >
                        <svg width={pin.size} height={pin.size} viewBox="0 0 24 24" fill="none">
                            <path
                                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                                fill="rgba(147,197,253,0.7)"
                                stroke="rgba(147,197,253,0.9)"
                                strokeWidth="1"
                            />
                            <circle cx="12" cy="9" r="2.5" fill="white" opacity="0.9" />
                        </svg>
                    </div>
                ))}


                <div className="hero-content" style={{ zIndex: 10 }}>


                    <h1 className="hero-title">
                        Find Your{" "}
                        <span className="accent">Dream Home</span>
                        <br />
                        in Mumbai &amp; Navi Mumbai
                    </h1>

                    <p className="hero-subtitle">
                        <strong>Welcome Realty LLP</strong> — Trusted Real Estate Experts helping
                        you <strong>Buy</strong>, <strong>Sell</strong>, and <strong>Rent</strong>{" "}
                        with complete confidence since 2009.
                    </p>


                    <div className="cta-group">
                        <a href="#properties" className="btn-primary">
                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                                <polyline points="9,22 9,12 15,12 15,22" />
                            </svg>
                            View Properties
                        </a>
                        <a href="#contact" className="btn-secondary">
                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.82a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.14a16 16 0 006.95 6.95l1.23-1.23a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                            </svg>
                            Contact Us Today
                        </a>
                    </div>
                </div>


                <div className="scroll-indicator" style={{ zIndex: 10 }}>
                    <span className="scroll-text">Scroll</span>
                    <div className="scroll-line" />
                </div>


                <div className="stats-bar" style={{ zIndex: 10 }}>
                    {[
                        { value: "2,400+", label: "Properties Sold" },
                        { value: "15+", label: "Years of Trust" },
                        { value: "98%", label: "Client Satisfaction" },
                        { value: "₹1,200Cr+", label: "Total Transactions" },
                    ].map((s, i) => (
                        <div className="stat-item" key={i}>
                            <span className="stat-value">{s.value}</span>
                            <span className="stat-label">{s.label}</span>
                        </div>
                    ))}
                </div>

            </section>
        </>
    );
};

export default Hero;

