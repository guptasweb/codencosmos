import React, { useState } from 'react';

interface FloatingSocialLinksProps {
  playClick?: () => void;
  playHover?: () => void;
}

const FloatingSocialLinks: React.FC<FloatingSocialLinksProps> = ({ playClick, playHover }) => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const socialLinks = [
    {
      id: 'linkedin',
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shivani-gupta-108/',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      position: 'left',
      top: '25%',
    },
    {
      id: 'github',
      name: 'GitHub',
      url: 'https://github.com/guptasweb',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      position: 'left',
      top: '50%',
    },
    {
      id: 'substack',
      name: 'Substack',
      url: 'https://substack.com/@bluenightsky',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
        </svg>
      ),
      position: 'left',
      top: '75%',
    },
  ];

  return (
    <>
      {socialLinks.map((link, index) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`fixed z-50 group ${link.position === 'left' ? 'left-6' : 'right-6'}`}
          style={{
            top: link.top,
            animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
            animationDelay: `${index * 0.3}s`,
          }}
          onMouseEnter={() => {
            setHoveredLink(link.id);
            playHover?.();
          }}
          onMouseLeave={() => setHoveredLink(null)}
          onClick={playClick}
          aria-label={link.name}
        >
          {/* Outer Glitch Container */}
          <div className="relative">
            {/* Main Icon */}
            <div
              className={`
                relative p-4 bg-black bg-opacity-80 border-2 border-[#00ff41]
                transition-all duration-300
                ${hoveredLink === link.id ? 'scale-110 shadow-[0_0_30px_rgba(0,255,65,0.6)]' : ''}
                ${hoveredLink === link.id ? 'glitch-active' : ''}
              `}
              style={{
                clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)',
              }}
            >
              <div className="text-[#00ff41] relative z-10">
                {link.icon}
              </div>

              {/* Scan Lines */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
                <div className="absolute inset-0 scan-lines"></div>
              </div>
            </div>

            {/* Glitch Layers */}
            {hoveredLink === link.id && (
              <>
                <div
                  className="absolute inset-0 p-4 border-2 border-[#00ff41] text-[#00ff41] opacity-70 glitch-layer-1"
                  style={{
                    clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)',
                    animation: 'glitch-1 0.3s infinite',
                  }}
                >
                  {link.icon}
                </div>
                <div
                  className="absolute inset-0 p-4 border-2 border-[#ff0041] text-[#ff0041] opacity-70 glitch-layer-2"
                  style={{
                    clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)',
                    animation: 'glitch-2 0.3s infinite',
                  }}
                >
                  {link.icon}
                </div>
              </>
            )}

            {/* Tooltip */}
            <div
              className={`
                absolute left-full ml-4 top-1/2 -translate-y-1/2
                px-4 py-2 bg-black border-2 border-[#00ff41] whitespace-nowrap
                transition-all duration-300 pointer-events-none
                ${hoveredLink === link.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}
              `}
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              <span className="text-[#00ff41] font-bold">&gt; {link.name.toUpperCase()}</span>
              {/* Arrow */}
              <div className="absolute right-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-[#00ff41]"></div>
            </div>

            {/* Particles on hover */}
            {hoveredLink === link.id && (
              <div className="absolute inset-0 pointer-events-none">
                <div className="particle-1"></div>
                <div className="particle-2"></div>
                <div className="particle-3"></div>
              </div>
            )}
          </div>
        </a>
      ))}

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes glitch-1 {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-3px, 3px);
          }
          40% {
            transform: translate(-3px, -3px);
          }
          60% {
            transform: translate(3px, 3px);
          }
          80% {
            transform: translate(3px, -3px);
          }
          100% {
            transform: translate(0);
          }
        }

        @keyframes glitch-2 {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(3px, -3px);
          }
          40% {
            transform: translate(3px, 3px);
          }
          60% {
            transform: translate(-3px, -3px);
          }
          80% {
            transform: translate(-3px, 3px);
          }
          100% {
            transform: translate(0);
          }
        }

        .scan-lines {
          background: repeating-linear-gradient(
            0deg,
            rgba(0, 255, 65, 0.1) 0px,
            transparent 2px,
            transparent 4px,
            rgba(0, 255, 65, 0.1) 4px
          );
          animation: scan 8s linear infinite;
        }

        @keyframes scan {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(100%);
          }
        }

        .particle-1, .particle-2, .particle-3 {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #00ff41;
          border-radius: 50%;
        }

        .particle-1 {
          top: 10%;
          left: 10%;
          animation: particle-float 1s ease-out forwards;
        }

        .particle-2 {
          top: 50%;
          right: 10%;
          animation: particle-float 1.2s ease-out forwards;
          animation-delay: 0.1s;
        }

        .particle-3 {
          bottom: 10%;
          left: 50%;
          animation: particle-float 1.4s ease-out forwards;
          animation-delay: 0.2s;
        }

        @keyframes particle-float {
          0% {
            opacity: 1;
            transform: translate(0, 0);
          }
          100% {
            opacity: 0;
            transform: translate(var(--tx, 20px), var(--ty, -40px));
          }
        }
      `}</style>
    </>
  );
};

export default FloatingSocialLinks;

