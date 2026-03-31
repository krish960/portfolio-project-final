import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, Zap, Layout, CheckCircle2, Settings } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  adminLogin?: string;
  adminCreds?: { user: string; pass: string };
  backend?: string;
  featured?: boolean;
  type?: string;
  features?: string[];
}

const projects: Project[] = [
  {
    title: 'AI Portfolio Maker Platform',
    description: 'A full-stack SaaS platform that allows users to create professional portfolios without writing any code. Features a dynamic form-based input system and backend-powered content management.',
    tech: ['React.js', 'Django', 'PostgreSQL', 'Render'],
    github: 'https://github.com/krish960/Frontend_2026',
    live: 'https://portfilo-backend-2026.onrender.com/admin/login/?next=/admin/',
    adminLogin: 'https://portfilo-backend-2026.onrender.com/admin/login/?next=/admin/',
    adminCreds: { user: 'thombarek362@gmail.com', pass: 'admin123' },
    backend: 'https://github.com/krish960/portfilo_backend_2026',
    featured: true,
    type: 'Full Stack Project',
    features: [
      'No-code portfolio generation system',
      'Dynamic form-based user input',
      'Backend-powered content management (Django Admin)',
      'Scalable architecture for multiple users'
    ]
  },
  {
    title: 'Footware Software',
    description: 'A full-stack SaaS platform that enables users to create professional portfolios without writing any code. The system uses a dynamic form-based interface for input and a powerful backend for managing user data and content efficiently.',
    tech: ['React.js', 'Django', 'PostgreSQL', 'Render'],
    github: 'https://github.com/krish960',
    live: 'https://curd1-hbi4.onrender.com/dashbord/',
    adminLogin: '#',
    adminCreds: { user: '-', pass: '-' },
    backend: 'https://github.com/krish960/CURD1',
    featured: true,
    type: 'Full Stack Project',
    features: [
      
         ' No-code portfolio generation system',
          'Dynamic form-based user input',
          'Backend-powered content management using Django Admin',
          'Multi-user scalable architecture',
          'Secure data handling and storage',
          'Real-time portfolio preview'
    ]
  },
  {
    title: 'Student Career Dashboard',
    description: 'A full-featured student dashboard platform that helps users prepare for placements. Includes modules for Aptitude tests, Coding practice, Learning Center, and Interview Prep.',
    tech: ['React.js', 'Tailwind CSS', 'Framer Motion'],
    github: '#',
    live: 'https://target-job.netlify.app',
    featured: true,
    features: [
      'Aptitude section with MCQ quizzes',
      'Coding section with problem-solving interface',
      'Learning Center for courses',
      'Interview preparation questions'
    ]
  },
  {
    title: 'EV Charging Station Finder',
    description: 'A comprehensive web application to locate electric vehicle charging stations nearby. Built with a robust backend for real-time data.',
    tech: ['React', 'Django', 'Supabase', 'Tailwind'],
    github: '#',
    live: '#',
    features: [
      'Real-time station availability',
      'Location-based search',
      'User reviews and ratings'
    ]
  },
  {
    title: 'Daily Routine Tracker',
    description: 'A productivity-focused web application that helps users track their daily routine, study schedule, and personal development activities.',
    tech: ['React', 'Tailwind CSS', 'Lucide Icons'],
    github: '#',
    live: 'https://my-daily-glow-53.lovable.app/',
    type: 'Productivity Project',
    features: [
      'Full-day routine planner',
      'Progress tracking dashboard',
      'Study hour categorized breakdown'
    ]
  },
  {
    title: 'DSA Practice Tracker',
    description: 'A tool to keep track of daily DSA problems solved across various platforms like LeetCode, GFG, and CodeStudio.',
    tech: ['React', 'Local Storage', 'Tailwind'],
    features: [
      'Topic-wise problem categorization',
      'Difficulty level tracking',
      'Revision reminders'
    ]
  },
  {
    title: 'Personal Portfolio',
    description: 'A modern, responsive portfolio website to showcase my skills, projects, and educational background to recruiters.',
    tech: ['React.js', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/krish960/Portfolio',
    live: 'https://portfolio-oje1.onrender.com/',
    features: [
      'Dark/Light mode support',
      'Smooth scroll animations',
      'Responsive mobile design'
    ]
  },
  {
    title: 'furniture Project',
    description: 'A modern, responsive portfolio website to showcase my skills, projects, and educational background to recruiters.',
    tech: ['Django', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/krish960/Ecoms',
    live: 'https://furnitureproject.onrender.com/',
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-800/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Project Showcase
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-blue-600 mx-auto rounded-full"
          />
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my key projects that demonstrate my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-500 ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="flex items-center gap-1 px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full uppercase tracking-wider">
                    <Star size={12} fill="currentColor" /> Featured
                  </span>
                </div>
              )}
              {project.type && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-xs font-bold rounded-full uppercase tracking-wider">
                    <Zap size={12} /> {project.type}
                  </span>
                </div>
              )}

              <div className={`p-8 ${project.featured ? 'lg:flex gap-8 items-center' : ''}`}>
                <div className={project.featured ? 'lg:w-1/2' : 'w-full'}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400">
                      <Layout size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {project.features && (
                    <ul className="space-y-2 mb-6">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-medium rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-600/20"
                    >
                      <ExternalLink size={16} /> {project.backend ? 'Live Demo' : 'Live Demo'}
                    </a>
                    {project.adminLogin && (
                      <a
                        href={project.adminLogin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-sm font-semibold transition-all shadow-lg shadow-purple-600/20"
                      >
                        <Settings size={16} /> Admin Panel
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-2.5 border border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 rounded-full text-sm font-semibold transition-all"
                    >
                      <Github size={16} /> View Code
                    </a>
                    {project.backend && (
                      <a
                        href={project.backend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-2.5 border border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 rounded-full text-sm font-semibold transition-all"
                      >
                        <Github size={16} /> Backend Code
                      </a>
                    )}
                  </div>

                  {project.adminCreds && (
                    <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-dashed border-gray-200 dark:border-gray-700">
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Admin Credentials</p>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                        <span className="text-gray-600 dark:text-gray-300"><span className="font-medium">User:</span> {project.adminCreds.user}</span>
                        <span className="text-gray-600 dark:text-gray-300"><span className="font-medium">Pass:</span> {project.adminCreds.pass}</span>
                      </div>
                    </div>
                  )}
                </div>

                {project.featured && (
                  <div className="hidden lg:block lg:w-1/2">
                    <div className="relative aspect-video bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-600">
                         <Layout size={64} strokeWidth={1} />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent" />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
