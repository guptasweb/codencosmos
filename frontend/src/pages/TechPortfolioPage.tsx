import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { cn } from '../utils/cn';
import Button from '../components/ui/Button';
import Tag from '../components/ui/Tag';

type TabType = 'featured' | 'experience' | 'skills' | 'github';

const TechPortfolioPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('skills');
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  const renderTabContent = () => {
    switch (activeTab) {
      case 'featured':
        return <FeaturedProjects />;
      case 'experience':
        return <WorkExperience />;
      case 'skills':
        return <SkillsExpertise />;
      case 'github':
        return <GitHubProfile />;
      default:
        return <SkillsExpertise />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-8 mt-16">
        <div className="container-custom px-4 text-center">
          <div className="text-5xl mb-3">💻</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Tech Portfolio</h1>
          <p className="text-lg md:text-xl opacity-90">
            9+ Years Building Scalable, Accessible Web Applications
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="container-custom px-4">
          <div className="flex flex-wrap gap-4 py-4 justify-center">
            <button
              onClick={() => setActiveTab('featured')}
              className={cn(
                'px-6 py-2 rounded-full font-medium transition-all duration-200',
                activeTab === 'featured'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-primary-600 border-2 border-primary-600 hover:bg-primary-50'
              )}
            >
              Featured Projects
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={cn(
                'px-6 py-2 rounded-full font-medium transition-all duration-200',
                activeTab === 'experience'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-primary-600 border-2 border-primary-600 hover:bg-primary-50'
              )}
            >
              Work Experience
            </button>
            <button
              onClick={() => setActiveTab('skills')}
              className={cn(
                'px-6 py-2 rounded-full font-medium transition-all duration-200',
                activeTab === 'skills'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-primary-600 border-2 border-primary-600 hover:bg-primary-50'
              )}
            >
              Skills & Expertise
            </button>
            <button
              onClick={() => setActiveTab('github')}
              className={cn(
                'px-6 py-2 rounded-full font-medium transition-all duration-200',
                activeTab === 'github'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-primary-600 border-2 border-primary-600 hover:bg-primary-50'
              )}
            >
              GitHub Profile
            </button>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div ref={elementRef} className="container-custom px-4 py-12">
        <div
          className={cn(
            'transition-all duration-1000 ease-out',
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

// Featured Projects Component
const FeaturedProjects: React.FC = () => {
  const projects = [
    {
      title: 'Netflix Clone',
      subtitle: 'Movie Loader Application',
      description: 'A full-featured movie browsing application that replicates Netflix\'s user experience. Implements dynamic content loading, responsive design, and smooth user interactions.',
      tags: ['JavaScript', 'React', 'API Integration', 'Responsive Design'],
      repoUrl: 'https://github.com/guptasweb/netflix',
      buttons: [
        { label: 'View Code', variant: 'primary' as const },
        { label: 'Live Demo', variant: 'outline' as const }
      ]
    },
    {
      title: 'Form Builder Navigation',
      subtitle: 'Dynamic Form System',
      description: 'A sophisticated form builder with step-by-step navigation, validation, and state management. Designed for creating complex multi-step forms with ease.',
      tags: ['TypeScript', 'React', 'State Management', 'Form Validation'],
      repoUrl: 'https://github.com/guptasweb/form-builder-navigation',
      buttons: [
        { label: 'View Code', variant: 'primary' as const }
      ]
    },
    {
      title: 'Bookshelf',
      subtitle: 'Personal Library Manager',
      description: 'A clean and intuitive application for tracking your reading list, organizing books, and managing your personal library collection.',
      tags: ['JavaScript', 'React', 'Local Storage', 'UI/UX'],
      repoUrl: 'https://github.com/guptasweb/bookshelf',
      buttons: [
        { label: 'View Code', variant: 'primary' as const }
      ]
    },
    {
      title: 'OmPulse',
      subtitle: 'Wellness Application',
      description: 'A mindfulness and wellness tracking application that bridges technology with holistic practices. Perfect example of tech meeting wellness philosophy.',
      tags: ['Python', 'Backend', 'Wellness Tech'],
      repoUrl: 'https://github.com/guptasweb/ompulse',
      buttons: [
        { label: 'View Code', variant: 'primary' as const }
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-6">
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm opacity-90">{project.subtitle}</p>
          </div>
          <div className="p-6">
            <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, tagIndex) => (
                <Tag key={tagIndex} variant="primary" size="sm">
                  {tag}
                </Tag>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="md">
                  View Code
                </Button>
              </a>
              {project.buttons.length > 1 && (
                <Button variant="outline" size="md">
                  Live Demo
                </Button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Work Experience Component
const WorkExperience: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'Kin Insurance',
      location: 'Remote',
      period: 'May 2023 - June 2025',
      achievements: [
        'Developed comprehensive workflow management tool for insurance adjusters using Angular 16 with reusable component libraries and ngRedux',
        'Architected and maintained RESTful Rails APIs for high-volume insurance operations',
        'Created WCAG-compliant UI components with screen-reader compatibility',
        'Optimized database performance through ActiveRecord query tuning, significantly reducing response times',
        'Established end-to-end testing protocols using Cypress and mentored junior developers'
      ],
      tags: ['Angular 16', 'Ruby on Rails', 'Redux', 'Cypress', 'WCAG']
    },
    {
      title: 'Software Engineer',
      company: 'UserTesting',
      location: 'Remote',
      period: 'August 2019 - March 2023',
      achievements: [
        'Built scalable, reusable Angular components using ng Redux architecture',
        'Collaborated in Agile environment with cross-functional teams',
        'Implemented comprehensive testing strategies including unit tests and automated Cypress suites',
        'Conducted thorough peer code reviews and resolved complex technical challenges'
      ],
      tags: ['Angular', 'Redux', 'Cypress', 'Agile']
    },
    {
      title: 'Software Engineer',
      company: 'BetterCloud',
      location: 'Atlanta, GA',
      period: 'March 2016 - August 2019',
      achievements: [
        'Developed modular React components and integrated them into AngularJS apps using angular2react',
        'Created component documentation using React Storybook',
        'Designed Spring Boot REST APIs following clean architecture principles',
        'Achieved comprehensive unit test coverage using Karma and Jasmine'
      ],
      tags: ['React', 'AngularJS', 'Spring Boot', 'Storybook']
    },
    {
      title: 'Front End Developer',
      company: 'Deloitte',
      location: 'Atlanta, GA',
      period: 'September 2015 - February 2016',
      achievements: [
        'Developed HR management tools including performance management and helpdesk systems',
        'Built responsive AngularJS applications with Salesforce CRM integration',
        'Participated in Agile development with Git version control'
      ],
      tags: ['AngularJS', 'Salesforce', 'Git']
    }
  ];

  return (
    <div className="relative">
      {/* Vertical Timeline Line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary-300 hidden md:block" />
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            {/* Timeline dot */}
            <div className="absolute left-2 top-8 w-8 h-8 bg-primary-600 rounded-full border-4 border-white shadow-lg hidden md:block z-10" />
            
            <div className="md:ml-16 bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-primary-600 mb-1">{exp.title}</h3>
                  <p className="text-base text-gray-700">{exp.company} | {exp.location}</p>
                </div>
                <span className="text-gray-600 text-sm font-medium mt-2 md:mt-0">{exp.period}</span>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">▸</span>
                    <span className="text-gray-700 text-sm">{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, tagIndex) => (
                  <Tag key={tagIndex} variant="primary" size="sm">
                    {tag}
                  </Tag>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Skills & Expertise Component
const SkillsExpertise: React.FC = () => {
  const frontendSkills = [
    { name: 'Angular (JS/16)', years: '9+ years', level: 95 },
    { name: 'React', years: '6+ years', level: 85 },
    { name: 'TypeScript', years: '7+ years', level: 90 },
    { name: 'HTML5/CSS3/SASS', years: '9+ years', level: 95 },
    { name: 'Redux/RxJS', years: '7+ years', level: 85 }
  ];

  const backendSkills = [
    { name: 'Ruby on Rails', years: '2+ years', level: 70 },
    { name: 'Node.js', years: '5+ years', level: 75 },
    { name: 'Spring Boot/Java', years: '3+ years', level: 65 },
    { name: 'Python', years: '2+ years', level: 60 }
  ];

  const SkillBar = ({ skill }: { skill: typeof frontendSkills[0] }) => (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-semibold text-gray-800">{skill.name}</span>
        <span className="text-sm text-gray-600">{skill.years}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="bg-gradient-to-r from-primary-600 to-secondary-600 h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Frontend Technologies */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-primary-600 mb-6">Frontend Technologies</h2>
        {frontendSkills.map((skill, index) => (
          <SkillBar key={index} skill={skill} />
        ))}
      </div>

      {/* Backend Technologies */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-primary-600 mb-6">Backend Technologies</h2>
        {backendSkills.map((skill, index) => (
          <SkillBar key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

// GitHub Profile Component
const GitHubProfile: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-12 text-center max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-primary-600 mb-6">Open Source & Code</h2>
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        Explore my repositories, contributions, and coding activity on GitHub. I believe in 
        clean code, thorough documentation, and sharing knowledge with the developer community.
      </p>
      <a href="https://github.com/guptasweb" target="_blank" rel="noopener noreferrer">
        <Button variant="primary" size="lg" className="inline-flex items-center gap-2">
          <span className="text-2xl">🐙</span>
          Visit My GitHub Profile
        </Button>
      </a>
      
      <div className="mt-8 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Featured Repositories</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { name: 'netflix', desc: 'Movie Loader' },
            { name: 'form-builder-navigation', desc: 'Form System' },
            { name: 'bookshelf', desc: 'Library Manager' },
            { name: 'ompulse', desc: 'Wellness App' },
            { name: 'thoughtful-automation', desc: 'Automation' },
            { name: 'rad-food-mapper', desc: 'Food Mapper' }
          ].map((repo, index) => (
            <a
              key={index}
              href={`https://github.com/guptasweb/${repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:border-primary-300 border-2 border-transparent transition-all duration-200"
            >
              <p className="font-semibold text-primary-600 text-sm mb-1">{repo.name}</p>
              <p className="text-xs text-gray-600">{repo.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechPortfolioPage;
