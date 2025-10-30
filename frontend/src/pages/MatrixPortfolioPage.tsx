import React, { useState, useEffect, useRef } from 'react';
import MatrixRain from '../components/MatrixRain';
import FloatingSocialLinks from '../components/FloatingSocialLinks';
import { useSound } from '../hooks/useSound';

interface CareerData {
  title: string;
  year: string;
  role: string;
  description: string;
  tech: string[];
}

interface CareerNode {
  id: string;
  cx: number;
  cy: number;
  label: string;
  year: string;
}

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  topics: string[];
}

const MatrixPortfolioPage: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [showPanel, setShowPanel] = useState(false);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loadingRepos, setLoadingRepos] = useState(true);
  const [reposVisible, setReposVisible] = useState<number[]>([]);
  const [isDecrypting, setIsDecrypting] = useState(false);
  const [showJourneyNodes, setShowJourneyNodes] = useState(false);
  const [typedCommand, setTypedCommand] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const repoSectionRef = useRef<HTMLDivElement>(null);
  
  const { isMuted, toggleMute, playClick, playHover, playSuccess, playKeyPress, playEnterKey, playBeep } = useSound();

  // Hexagon path generator
  const createHexagonPath = (cx: number, cy: number, size: number = 25) => {
    const points = [];
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i - Math.PI / 2;
      const x = cx + size * Math.cos(angle);
      const y = cy + size * Math.sin(angle);
      points.push(`${x},${y}`);
    }
    return `M ${points.join(' L ')} Z`;
  };

  const careerData: Record<string, CareerData> = {
    education: {
      title: "University of Texas at Dallas",
      year: "2013 - 2015",
      role: "Master of Science in Computer Science",
      description: "Focused on software engineering, algorithms, and system design. Built foundation in data structures, operating systems, and database management.",
      tech: ["Java", "C++", "Python", "SQL", "Data Structures", "Algorithms"]
    },
    marykay: {
      title: "Mary Kay",
      year: "2014 - 2015",
      role: "Systems Administration Intern",
      description: "Managed system administration tasks and implemented automated solutions for operational efficiency. Deployed and configured Remote Desktop Services infrastructure.",
      tech: ["Citrix", "Active Directory", "VPN", "Windows Server", "Automation"]
    },
    deloitte: {
      title: "Deloitte",
      year: "2015 - 2016",
      role: "Front End Developer",
      description: "Developed comprehensive HR management tools including performance management and helpdesk systems for both desktop and mobile platforms. Built responsive applications with Salesforce integration.",
      tech: ["AngularJS", "Salesforce CRM", "JavaScript", "HTML5", "CSS3", "Responsive Design"]
    },
    bettercloud: {
      title: "BetterCloud",
      year: "2016 - 2019",
      role: "Software Engineer",
      description: "Developed modular React components and integrated them into existing AngularJS applications. Created comprehensive documentation and designed Spring Boot REST APIs following best practices.",
      tech: ["React", "AngularJS", "angular2react", "Spring Boot", "REST APIs", "Storybook", "Karma", "Jasmine"]
    },
    usertesting: {
      title: "UserTesting",
      year: "2019 - 2023",
      role: "Software Engineer",
      description: "Built scalable, reusable Angular components using Redux architecture. Collaborated in Agile environment and implemented comprehensive testing strategies including Cypress automation.",
      tech: ["Angular", "Redux", "TypeScript", "Cypress", "Jest", "Agile", "CI/CD"]
    },
    kin: {
      title: "Kin Insurance",
      year: "2023 - 2025",
      role: "Senior Software Engineer",
      description: "Developed comprehensive workflow management tool for insurance adjusters using Angular 16. Architected RESTful Rails APIs and created WCAG-compliant UI components with accessibility features.",
      tech: ["Angular 16", "Ruby on Rails", "TypeScript", "Redux", "WCAG", "Cypress", "ActiveRecord", "REST APIs"]
    },
    future: {
      title: "Next Adventure",
      year: "2025+",
      role: "What's Next?",
      description: "Ready to bring expertise in full-stack development, accessibility, and scalable architecture to innovative projects. Passionate about building user-centric solutions with cutting-edge technology.",
      tech: ["Angular", "React", "Rails", "Node.js", "TypeScript", "System Design"]
    }
  };

  const nodes: CareerNode[] = [
    { id: 'education', cx: 100, cy: 200, label: 'UTD', year: '2013-2015' },
    { id: 'marykay', cx: 250, cy: 150, label: 'Mary Kay', year: '2014-2015' },
    { id: 'deloitte', cx: 400, cy: 200, label: 'Deloitte', year: '2015-2016' },
    { id: 'bettercloud', cx: 600, cy: 250, label: 'BetterCloud', year: '2016-2019' },
    { id: 'usertesting', cx: 800, cy: 200, label: 'UserTesting', year: '2019-2023' },
    { id: 'kin', cx: 1000, cy: 150, label: 'Kin Insurance', year: '2023-2025' },
    { id: 'future', cx: 1100, cy: 200, label: 'Future', year: '2025+' }
  ];

  const handleNodeClick = (nodeId: string) => {
    playClick();
    setActiveNode(nodeId);
    setShowPanel(true);
    playSuccess();
  };

  const closeInfo = () => {
    playClick();
    setShowPanel(false);
    setTimeout(() => setActiveNode(null), 500);
  };

  const handleRepoHover = () => {
    playHover();
  };

  useEffect(() => {
    // Typing animation for career_journey.exe
    const command = 'career_journey.exe';
    let currentIndex = 0;
    
    const startTyping = setTimeout(() => {
      setIsTyping(true);
      
      const typeInterval = setInterval(() => {
        if (currentIndex < command.length) {
          setTypedCommand(command.substring(0, currentIndex + 1));
          // playKeyPress(); // Disabled - sounds not good
          currentIndex++;
        } else {
          clearInterval(typeInterval);
          
          // Press Enter after typing completes
          setTimeout(() => {
            // playEnterKey(); // Disabled - sounds not good
            setIsTyping(false);
            
            // Reveal nodes
            setTimeout(() => {
              setShowJourneyNodes(true);
              
              // Auto-show Kin Insurance after nodes appear
              setTimeout(() => {
                handleNodeClick('kin');
              }, 1500);
            }, 300);
          }, 500);
        }
      }, 120); // Typing speed

      return () => clearInterval(typeInterval);
    }, 1500); // Start typing after 1.5 seconds

    return () => clearTimeout(startTyping);
  }, []);

  useEffect(() => {
    // Fetch GitHub repos with decryption animation
    const fetchRepos = async () => {
      setIsDecrypting(true);
      try {
        const response = await fetch('https://api.github.com/users/guptasweb/repos?sort=updated&per_page=6');
        const data = await response.json();
        
        // Simulate decryption delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        setRepos(data);
        
        // Animate repos appearing one by one
        data.forEach((_: any, index: number) => {
          setTimeout(() => {
            setReposVisible(prev => [...prev, index]);
            playBeep(800 + (index * 100), 50);
          }, index * 300);
        });
        
        setTimeout(() => {
          playSuccess();
        }, data.length * 300 + 200);
        
      } catch (error) {
        console.error('Error fetching repos:', error);
      } finally {
        setTimeout(() => {
          setLoadingRepos(false);
          setIsDecrypting(false);
        }, 1000);
      }
    };

    // Check if repos section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && repos.length === 0) {
          fetchRepos();
        }
      },
      { threshold: 0.1 }
    );

    if (repoSectionRef.current) {
      observer.observe(repoSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-black text-[#00ff41] flex flex-col" style={{ fontFamily: "'Courier New', monospace" }}>
      <MatrixRain />
      <FloatingSocialLinks playClick={playClick} playHover={playHover} />

      {/* Sound Toggle Button */}
      <button
        onClick={() => {
          toggleMute();
          playClick();
        }}
        className="fixed top-4 right-4 z-[60] p-3 bg-black bg-opacity-90 border-2 border-[#00ff41] hover:bg-[#00ff41] hover:text-black transition-all duration-300 group"
        aria-label="Toggle Sound"
      >
        {isMuted ? (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
          </svg>
        )}
      </button>

      <div className="relative z-10 flex-grow flex flex-col">
        {/* Header with Social Links */}
        <div className="sticky top-0 z-50 bg-black bg-opacity-90 border-b-2 border-[#00ff41] backdrop-blur-sm">
          <div className="p-8 text-center">
            <div className="text-5xl font-bold uppercase glitch-text">
              SHIVANI GUPTA
            </div>
          </div>
        </div>

        {/* Career Journey Map */}
        <div className="relative py-20 px-10 min-h-[600px] flex-grow">
          {!showJourneyNodes && (
            <div className="flex items-center justify-center h-[400px]">
              <div className="text-center">
                <div className="text-4xl font-bold font-mono flex items-center justify-center">
                  <span className="mr-2">&gt;</span>
                  <span>{typedCommand}</span>
                  <span className={`ml-1 ${isTyping ? 'animate-blink' : 'opacity-0'}`}>█</span>
                </div>
              </div>
            </div>
          )}

          {showJourneyNodes && (
            <>
              <h2 className="text-3xl font-bold text-center mb-12 opacity-80 animate-fadeIn">&gt; CAREER_JOURNEY.EXE</h2>
              <div className="relative max-w-[1400px] mx-auto h-[400px] animate-fadeIn">
                <svg viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid meet" className="w-full h-full">
              {/* Hexagon Nodes - Now Floating */}
              {nodes.map((node, index) => (
                  <g
                  key={node.id}
                  className="node cursor-pointer transition-all duration-300 hover:scale-110"
                  onClick={() => handleNodeClick(node.id)}
                  onMouseEnter={playHover}
                  style={{
                    animation: `hexFloat ${3 + index * 0.3}s ease-in-out infinite`,
                    animationDelay: `${index * 0.2}s`,
                    transformOrigin: `${node.cx}px ${node.cy}px`
                  }}
                >
                  {/* 3D Hexagon Effect */}
                  {/* Back layer */}
                  <path
                    d={createHexagonPath(node.cx + 3, node.cy + 3, 25)}
                    fill="#001a0a"
                    stroke="#00ff41"
                    strokeWidth="1"
                    opacity="0.3"
                    className="pointer-events-none"
                  />
                  
                  {/* Middle layer */}
                  <path
                    d={createHexagonPath(node.cx + 1.5, node.cy + 1.5, 25)}
                    fill="#00330f"
                    stroke="#00ff41"
                    strokeWidth="1.5"
                    opacity="0.5"
                    className="pointer-events-none"
                  />
                  
                  {/* Front Hexagon */}
                  <path
                    d={createHexagonPath(node.cx, node.cy, 25)}
                    fill={activeNode === node.id ? '#00ff41' : '#000'}
                    stroke="#00ff41"
                    strokeWidth="3"
                    className={`transition-all duration-300 ${node.id === 'kin' ? 'animate-pulse' : ''}`}
                    style={{
                      filter: activeNode === node.id ? 'drop-shadow(0 0 15px #00ff41) drop-shadow(0 0 25px #00ff41)' : 'drop-shadow(2px 2px 4px rgba(0,255,65,0.3))',
                      ...(node.id === 'future' && { strokeDasharray: '5,5' })
                    }}
                  />
                  
                  {/* Inner hexagon for depth */}
                  <path
                    d={createHexagonPath(node.cx, node.cy, 18)}
                    fill="none"
                    stroke="#00ff41"
                    strokeWidth="1"
                    opacity="0.5"
                    className="pointer-events-none"
                  />
                  
                  {/* Center dot for depth */}
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r="3"
                    fill="#00ff41"
                    opacity="0.6"
                    className="pointer-events-none"
                  />
                  
                  {/* Label */}
                  <text
                    x={node.cx}
                    y={node.cy > 200 ? node.cy + 55 : node.cy - 35}
                    fill="#00ff41"
                    fontSize="14"
                    textAnchor="middle"
                    className="pointer-events-none transition-all duration-300 font-bold"
                  >
                    {node.label}
                  </text>
                  <text
                    x={node.cx}
                    y={node.cy > 200 ? node.cy + 70 : node.cy - 20}
                    fill="#00ff41"
                    fontSize="10"
                    textAnchor="middle"
                    opacity="0.7"
                    className="pointer-events-none"
                  >
                    {node.year}
                  </text>
                </g>
              ))}
            </svg>
              </div>
            </>
          )}
        </div>

        {/* GitHub Projects Section - HIDDEN FOR NOW */}
        {false && (
        <div ref={repoSectionRef} className="relative py-20 px-10 border-t-2 border-[#00ff41]">
          <h2 className="text-3xl font-bold text-center mb-12 opacity-80">&gt; GITHUB_REPOS.EXE</h2>
          
          {loadingRepos ? (
            <div className="text-center">
              <div className="text-xl opacity-70 mb-4">
                {isDecrypting ? 'DECRYPTING DATABASE...' : 'ACCESSING REPOSITORIES...'}
              </div>
              <div className="flex justify-center gap-2">
                <span className="animate-pulse">█</span>
                <span className="animate-pulse delay-100">█</span>
                <span className="animate-pulse delay-200">█</span>
                <span className="animate-pulse delay-300">█</span>
                <span className="animate-pulse delay-500">█</span>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1400px] mx-auto">
              {repos.map((repo, index) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative bg-black bg-opacity-80 border-2 border-[#00ff41] p-6 hover:bg-[#00ff41] hover:bg-opacity-10 transition-all duration-500 hover:shadow-[0_0_20px_rgba(0,255,65,0.3)] ${
                    reposVisible.includes(index) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  onClick={playClick}
                  onMouseEnter={handleRepoHover}
                  style={{
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  {/* Repo Name */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-shadow-glow">{repo.name}</h3>
                  
                  {/* Description */}
                  <p className="text-sm opacity-80 mb-4 line-clamp-2">
                    {repo.description || 'No description available'}
                  </p>
                  
                  {/* Language & Stars */}
                  <div className="flex items-center gap-4 text-sm opacity-70 mb-4">
                    {repo.language && (
                      <span className="flex items-center gap-1">
                        <span className="w-3 h-3 rounded-full bg-[#00ff41]"></span>
                        {repo.language}
                      </span>
                    )}
                    {repo.stargazers_count > 0 && (
                      <span>★ {repo.stargazers_count}</span>
                    )}
                  </div>
                  
                  {/* Topics */}
                  {repo.topics && repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {repo.topics.slice(0, 3).map((topic, index) => (
                        <span
                          key={index}
                          className="text-xs px-2 py-1 border border-[#00ff41] opacity-60"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  {/* Hover effect corner */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-r-[20px] border-t-transparent border-r-[#00ff41] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              ))}
            </div>
          )}
          
          {/* View More Link */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/guptasweb?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border-2 border-[#00ff41] hover:bg-[#00ff41] hover:text-black transition-all duration-300 font-bold"
              onClick={playClick}
              onMouseEnter={playHover}
            >
              VIEW ALL REPOSITORIES →
            </a>
          </div>
        </div>
        )}
      </div>

      {/* Footer - Now at bottom */}
      <footer className="relative z-10 border-t-2 border-[#00ff41] py-6 text-center opacity-70 bg-black mt-auto">
        <p className="text-sm">&copy; 2025 SHIVANI GUPTA // BUILT WITH MATRIX TECH</p>
      </footer>

      {/* Info Panel */}
      {showPanel && (
        <div
          className={`fixed top-1/2 -translate-y-1/2 w-[380px] max-h-[80vh] overflow-y-auto bg-black bg-opacity-95 border-2 border-[#00ff41] rounded-lg p-8 transition-all duration-500 shadow-[0_0_30px_rgba(0,255,65,0.3)] z-[55] ${
            showPanel ? 'right-8' : '-right-[400px]'
          }`}
        >
          <button
            onClick={closeInfo}
            className="absolute top-4 right-4 bg-transparent border-2 border-[#00ff41] text-[#00ff41] px-4 py-1 hover:bg-[#00ff41] hover:text-black transition-all duration-300 cursor-pointer z-10"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            X
          </button>

          {activeNode && careerData[activeNode] && (
            <div>
              <h2 className="text-3xl mb-4 drop-shadow-[0_0_10px_#00ff41]">{careerData[activeNode].title}</h2>
              <div className="text-sm opacity-70 mb-2">{careerData[activeNode].year}</div>
              <div className="text-lg mb-4 text-[#00ff41]">{careerData[activeNode].role}</div>
              <div className="leading-relaxed mb-4 opacity-90">{careerData[activeNode].description}</div>
              <div className="mt-5">
                <h3 className="text-base mb-3">Technologies & Skills:</h3>
                <div className="flex flex-wrap gap-2">
                  {careerData[activeNode].tech.map((tech, index) => (
                    <span
                      key={index}
                      className="inline-block px-3 py-1 bg-[#00ff41] bg-opacity-20 border border-[#00ff41] rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <style>{`
        @keyframes glitch {
          2%, 64% {
            transform: translate(2px, 0) skew(0deg);
          }
          4%, 60% {
            transform: translate(-2px, 0) skew(0deg);
          }
          62% {
            transform: translate(0, 0) skew(5deg);
          }
        }

        .glitch-text {
          animation: glitch 1s infinite;
        }

        @keyframes drawPath {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 2s ease-in;
        }

        .typing-animation {
          overflow: hidden;
          white-space: nowrap;
          animation: typing 2s steps(40, end);
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        .animate-fadeIn {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blink {
          0%, 49% {
            opacity: 1;
          }
          50%, 100% {
            opacity: 0;
          }
        }

        .animate-blink {
          animation: blink 1s infinite;
        }

        @keyframes hexFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .info-panel::-webkit-scrollbar {
          width: 8px;
        }

        .info-panel::-webkit-scrollbar-track {
          background: #000;
        }

        .info-panel::-webkit-scrollbar-thumb {
          background: #00ff41;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default MatrixPortfolioPage;

