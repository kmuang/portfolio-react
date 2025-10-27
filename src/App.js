import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Briefcase, Code, Award, Download, Target } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack online shopping platform with payment integration',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task tracker with real-time updates',
      tech: ['React', 'Firebase', 'Tailwind'],
      link: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather forecast application',
      tech: ['React', 'API Integration', 'Charts'],
      link: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern responsive portfolio with animations',
      tech: ['React', 'Tailwind', 'Framer Motion'],
      link: 'https://www.kmuang.com',
    }
  ];

  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'MongoDB', level: 70 }
  ];

  const experience = [
    {
      role: 'Senior Frontend Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Leading frontend development team and architecting scalable solutions'
    },
    {
      role: 'Full Stack Developer',
      company: 'Digital Innovations',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple web applications'
    },
    {
      role: 'Junior Developer',
      company: 'StartUp Hub',
      period: '2019 - 2020',
      description: 'Collaborated on various client projects and learned industry best practices'
    }
  ];

  const languages = [
    { 
      name: 'JavaScript', 
      svg: '<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><rect width="256" height="256" fill="#F7DF1E"/><path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574"/></svg>',
      color: '#F7DF1E'
    },
    { 
      name: 'TypeScript', 
      svg: '<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><rect width="256" height="256" fill="#3178C6" rx="28"/><path fill="#FFF" d="M133.182 143.937l-20.91.001V213h23.405V143.937h-2.495zm21.418-22.086c0-6.276 5.087-11.363 11.363-11.363s11.363 5.087 11.363 11.363-5.087 11.363-11.363 11.363-11.363-5.087-11.363-11.363zm-60.546 0c0-6.276 5.087-11.363 11.363-11.363s11.363 5.087 11.363 11.363-5.087 11.363-11.363 11.363-11.363-5.087-11.363-11.363z"/><path fill="#FFF" d="M71.318 213V143.937h23.405V213H71.318zm91.556-39.166c6.532 0 11.825-5.293 11.825-11.825s-5.293-11.825-11.825-11.825-11.825 5.293-11.825 11.825 5.293 11.825 11.825 11.825z"/><text x="128" y="180" font-family="Arial,sans-serif" font-size="80" font-weight="bold" text-anchor="middle" fill="#FFF">TS</text></svg>',
      color: '#3178C6'
    },
    { 
      name: 'React', 
      svg: '<svg viewBox="0 0 256 230" xmlns="http://www.w3.org/2000/svg"><path fill="#61DAFB" d="M128 0C57.307 0 0 57.307 0 128s57.307 128 128 128 128-57.307 128-128S198.693 0 128 0zm0 234.667C64.762 234.667 13.333 183.238 13.333 120S64.762 5.333 128 5.333 242.667 56.762 242.667 120 191.238 234.667 128 234.667z"/><circle cx="128" cy="115" r="25" fill="#61DAFB"/><ellipse cx="128" cy="115" rx="110" ry="40" fill="none" stroke="#61DAFB" stroke-width="8"/><ellipse cx="128" cy="115" rx="110" ry="40" fill="none" stroke="#61DAFB" stroke-width="8" transform="rotate(60 128 115)"/><ellipse cx="128" cy="115" rx="110" ry="40" fill="none" stroke="#61DAFB" stroke-width="8" transform="rotate(120 128 115)"/></svg>',
      color: '#61DAFB'
    },
    { 
      name: 'Node.js', 
      svg: '<svg viewBox="0 0 256 289" xmlns="http://www.w3.org/2000/svg"><path fill="#539E43" d="M128 288.464c-3.975 0-7.685-1.06-11.13-2.915l-35.247-20.936c-5.3-2.915-2.65-3.975-1.06-4.505 7.155-2.385 8.48-2.915 15.9-7.156.796-.53 1.856-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.74-61.217c1.06-.53 1.59-1.59 1.59-2.915V83.08c0-1.325-.53-2.385-1.59-2.915l-105.74-60.953c-1.06-.53-2.385-.53-3.18 0L20.405 80.166c-1.06.53-1.59 1.855-1.59 2.915v122.17c0 1.06.53 2.385 1.59 2.915l28.887 16.695c15.636 7.95 25.44-1.325 25.44-10.6V93.68c0-1.59 1.326-3.18 3.181-3.18h13.516c1.59 0 3.18 1.325 3.18 3.18v120.58c0 20.936-11.396 33.126-31.272 33.126-6.095 0-10.865 0-24.38-6.625l-27.827-15.9C4.24 220.885 0 213.465 0 205.515V83.346C0 75.396 4.24 67.976 11.13 64L116.87 2.783c6.625-3.71 15.635-3.71 22.26 0L244.87 64C251.76 67.975 256 75.395 256 83.346v122.17c0 7.95-4.24 15.37-11.13 19.345L139.13 286.08c-3.445 1.59-7.42 2.385-11.13 2.385zm32.596-84.009c-46.377 0-55.917-21.2-55.917-39.221 0-1.59 1.325-3.18 3.18-3.18h13.78c1.59 0 2.916 1.06 2.916 2.65 2.12 14.045 8.215 20.936 36.306 20.936 22.261 0 31.802-5.035 31.802-16.96 0-6.891-2.65-11.926-37.367-15.372-28.886-2.915-46.907-9.275-46.907-32.33 0-21.467 18.021-34.186 48.232-34.186 33.921 0 50.617 11.66 52.737 37.101 0 .795-.265 1.59-.795 2.385-.53.53-1.325 1.06-2.12 1.06h-13.78c-1.326 0-2.65-1.06-2.916-2.385-3.18-14.575-11.395-19.345-33.126-19.345-24.38 0-27.296 8.48-27.296 14.84 0 7.686 3.445 10.07 36.306 14.31 32.597 4.24 47.967 10.336 47.967 33.127-.265 23.321-19.345 36.571-53.002 36.571z"/></svg>',
      color: '#539E43'
    },
    { 
      name: 'HTML5', 
      svg: '<svg viewBox="0 0 256 361" xmlns="http://www.w3.org/2000/svg"><path fill="#E34F26" d="M255.555 70.766l-23.241 260.36-104.47 28.962-104.182-28.922L.445 70.766h255.11z"/><path fill="#EF652A" d="M128 337.95l84.417-23.403 19.86-222.49H128V337.95z"/><path fill="#EBEBEB" d="M82.82 155.932H128v-31.937H47.917l.764 8.568 7.85 88.01H128v-31.937H85.739l-2.919-32.704zM90.018 236.542h-32.06l4.474 50.146 65.421 18.16.147-.04V271.58l-.14.037-35.568-9.604-2.274-25.471z"/><path fill="#FFF" d="M127.89 220.573h39.327l-3.708 41.42-35.62 9.614v33.226l65.473-18.145.48-5.396 7.506-84.08.779-8.576H127.89v31.937zM127.89 155.854v.078h77.143l.64-7.178 1.456-16.191.763-8.568H127.89v31.86z"/></svg>',
      color: '#E34F26'
    },
    { 
      name: 'CSS3', 
      svg: '<svg viewBox="0 0 256 361" xmlns="http://www.w3.org/2000/svg"><path fill="#1572B6" d="M127.844 360.088L23.662 331.166.445 70.766h255.11l-23.241 260.36-104.47 28.962z"/><path fill="#33A9DC" d="M212.417 314.547l19.86-222.49H128V337.95l84.417-23.403z"/><path fill="#FFF" d="M53.669 188.636l2.862 31.937H128v-31.937H53.669zM47.917 123.995l2.903 31.937H128v-31.937H47.917zM128 271.58l-.14.037-35.568-9.604-2.274-25.471h-32.06l4.474 50.146 65.421 18.16.147-.04V271.58z"/><path fill="#EBEBEB" d="M60.484 0h38.68v16.176H76.66v16.176h22.506v16.175H60.484V0zM106.901 0h38.681v14.066h-22.505v2.813h22.505v32.352h-38.68V35.16h22.505v-2.813h-22.505V0zM153.319 0H192v14.066h-22.505v2.813H192v32.352h-38.681V35.16h22.505v-2.813H153.32V0z"/><path fill="#FFF" d="M202.127 188.636l5.765-64.641H128v31.937h45.002l-2.906 32.704H128v31.937h39.327l-3.708 41.42L128 271.58v33.226l65.473-18.145.48-5.396 7.506-84.08.779-8.576-.332.014z"/></svg>',
      color: '#1572B6'
    },
  
    { 
      name: 'Git', 
      svg: '<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path fill="#F05032" d="M251.172 116.594L139.4 4.828c-6.433-6.437-16.873-6.437-23.314 0l-23.21 23.21 29.443 29.443c6.842-2.312 14.688-.761 20.142 4.693 5.48 5.489 7.02 13.402 4.652 20.266l28.375 28.376c6.865-2.365 14.786-.835 20.269 4.657 7.663 7.66 7.663 20.075 0 27.74-7.665 7.666-20.08 7.666-27.749 0-5.764-5.77-7.188-14.235-4.27-21.336l-26.462-26.462-.003 69.637a19.82 19.82 0 0 1 5.188 3.71c7.663 7.66 7.663 20.076 0 27.747-7.665 7.662-20.086 7.662-27.74 0-7.663-7.671-7.663-20.086 0-27.746a19.654 19.654 0 0 1 6.421-4.281V94.196a19.378 19.378 0 0 1-6.421-4.281c-5.806-5.798-7.202-14.317-4.227-21.446L81.47 39.442l-76.64 76.635c-6.44 6.443-6.44 16.884 0 23.322l111.774 111.768c6.435 6.438 16.873 6.438 23.316 0l111.251-111.249c6.438-6.44 6.438-16.887 0-23.324"/></svg>',
      color: '#F05032'
    },
    { 
      name: 'Docker', 
      svg: '<svg viewBox="0 0 256 185" xmlns="http://www.w3.org/2000/svg"><path fill="#2496ED" d="M250.716 70.497c-5.765-4-18.976-5.5-29.304-3.5-1.2-10-6.725-18.749-16.333-26.499l-5.524-4-3.844 5.75c-4.803 7.5-7.205 18-6.485 28 .48 6.25 2.641 12.499 6.244 17.749-2.641 1.5-6.244 3-10.328 4.5-6.244 2-13.21 3-20.177 3H1.925l-.48 2c-1.682 12.499-1.682 51.997 22.857 82.496 18.496 23.499 46.082 35.498 81.961 35.498 77.89 0 135.493-37.498 161.952-105.743 10.569.25 33.184 0 44.993-23.999.24-.5.721-1.5 2.402-5.25l1.121-2.5-3.604-2.751zM139.278 0h-26.464v23.999h26.464V0zm0 29.999h-26.464v23.999h26.464V29.999zm-31.209 0H81.605v23.999h26.464V29.999zm-31.209 0H50.396v23.999H76.86V29.999zM45.833 59.998H19.369v23.999h26.464V59.998zm31.209 0H50.578v23.999h26.464V59.998zm31.209 0H81.786v23.999h26.464V59.998zm31.209 0h-26.464v23.999h26.464V59.998zm31.448 0h-26.464v23.999h26.464V59.998z"/></svg>',
      color: '#2496ED'
    },
    { 
      name: 'Vue.js', 
      svg: '<svg viewBox="0 0 256 221" xmlns="http://www.w3.org/2000/svg"><path fill="#41B883" d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36z"/><path fill="#41B883" d="M0 0l128 220.8L256 0h-51.2L128 132.48 50.56 0H0z"/><path fill="#35495E" d="M50.56 0L128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56z"/></svg>',
      color: '#4FC08D'
    },
    { 
      name: 'Firebase', 
      svg: '<svg viewBox="0 0 256 351" xmlns="http://www.w3.org/2000/svg"><path fill="#FFA611" d="M1.253 280.732l1.605-3.131 99.353-188.518-44.15-83.475C54.392-1.283 45.074.474 43.87 8.188L1.253 280.732z"/><path fill="#F57C00" d="M134.417 148.974l32.039-32.812-32.039-61.007c-3.042-5.791-10.433-6.398-13.443-.59l-17.705 34.109-.53 1.744 31.678 58.556z"/><path fill="#FFCA28" d="M134.417 148.974l-93.85 53.134L102.3 1.813c3.002-5.791 10.433-6.398 13.443-.59l18.674 147.751z"/><path fill="#FFA611" d="M.019 282.732l33.881 19.014c10.473 5.791 23.446 5.791 33.919 0l133.994-77.003-66.887-38.003-134.907 95.992z"/></svg>',
      color: '#FFCA28'
    },
    { 
      name: 'Python', 
      svg: '<svg viewBox="0 0 256 255" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="pyYellow" x1="12.959%" y1="12.039%" x2="79.639%" y2="78.201%"><stop offset="0%" stop-color="#387EB8"/><stop offset="100%" stop-color="#366994"/></linearGradient><linearGradient id="pyBlue" x1="19.128%" y1="20.579%" x2="90.742%" y2="88.429%"><stop offset="0%" stop-color="#FFE052"/><stop offset="100%" stop-color="#FFC331"/></linearGradient></defs><path fill="url(#pyYellow)" d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z"/><path fill="url(#pyBlue)" d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z"/></svg>',
      color: '#3776AB'
    }
  ];

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="vid/video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="bg-gray-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-700">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                John Doe
              </h1>
              <div className="flex gap-6">
                {['about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => setActiveSection(section)}
                    className={`capitalize hover:text-blue-400 transition-colors ${
                      activeSection === section ? 'text-blue-400 font-semibold' : ''
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <img
              src="img/me.JPG"
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500 shadow-2xl"
            />
            <h2 className="text-5xl font-bold mb-4">Hi, I'm Khup Muang</h2>
            <p className="text-xl text-gray-300 mb-2">Full Stack Developer & UI/UX Enthusiast</p>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Passionate about creating beautiful, functional, and user-friendly applications.
              Specializing in React, Node.js, and modern web technologies.
            </p>
          
          </div>
        </section>

        {/* Programming Languages Slider */}
        <section className="container mx-auto px-6 py-8 overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Technologies & Tools</h3>
            <div className="relative">
              <div className="flex gap-8 animate-scroll">
                {[...languages, ...languages].map((lang, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center min-w-[80px]"
                    style={{ borderColor: lang.color + '50' }}
                  >
                    <div 
                      className="w-20 h-20 mb-3 flex items-center justify-center rounded-xl group-hover:shadow-2xl transition-all p-2"
                      dangerouslySetInnerHTML={{ __html: lang.svg }}
                    />
                    <span className="text-sm font-semibold text-gray-300">{lang.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>

        {/* About Section */}
        {activeSection === 'about' && (
          <section className="container mx-auto px-6 py-16">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Briefcase className="text-blue-400" />
                About Me
              </h3>
              <div className="bg-gray-900/70 backdrop-blur-md p-8 rounded-xl border border-gray-700">
                <p className="text-gray-300 leading-relaxed mb-4">
                  I'm a passionate Full Stack Developer with 5+ years of experience building web applications.
                  I love solving complex problems and turning ideas into elegant solutions.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  My expertise lies in frontend development with React, but I'm also proficient in backend
                  technologies like Node.js, Express, and various databases. I'm constantly learning and
                  staying up-to-date with the latest web technologies.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span>Jenks, Oklahoma </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span>ksmuang20@email.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <span>+1 (918) 927-6267</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-400" />
                    <span>5+ Years Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Experience Section */}
        {activeSection === 'experience' && (
          <section className="container mx-auto px-6 py-16">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-8">Work Experience</h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="bg-gray-900/70 backdrop-blur-md p-6 rounded-xl border border-gray-700">
                    <h4 className="text-xl font-bold text-blue-400 mb-2">{exp.role}</h4>
                    <p className="text-gray-400 mb-2">{exp.company} | {exp.period}</p>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <section className="container mx-auto px-6 py-16">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Code className="text-blue-400" />
                Projects
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <div key={index} className="bg-gray-900/70 backdrop-blur-md p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all hover:scale-105">
                    <h4 className="text-xl font-bold mb-3">{project.title}</h4>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="bg-blue-600/30 text-blue-300 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a href={project.link} className="text-blue-400 hover:text-blue-300 transition-colors">
                      View Project →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <section className="container mx-auto px-6 py-16">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-8">Technical Skills</h3>
              <div className="bg-gray-900/70 backdrop-blur-md p-8 rounded-xl border border-gray-700">
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold">{skill.name}</span>
                        <span className="text-blue-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <section className="container mx-auto px-6 py-16">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>
              <div className="bg-gray-900/70 backdrop-blur-md p-8 rounded-xl border border-gray-700">
                <p className="text-gray-300 mb-6">
                  I'm always open to discussing new projects, opportunities, or just chatting about tech!
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <textarea
                      placeholder="Your Message"
                      rows="5"
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                    ></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors">
                      Send Message
                    </button>
                  </div>
                </div>
                <div className="flex justify-center gap-6 mt-8">
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    <Github className="w-8 h-8" />
                  </a>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    <Linkedin className="w-8 h-8" />
                  </a>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    <Mail className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="bg-gray-900/80 backdrop-blur-md border-t border-gray-700 py-8 mt-20">
          <div className="container mx-auto px-6 text-center">
            <p className="text-gray-400">&copy; 2025 Khup Muang. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}