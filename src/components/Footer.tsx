import { Github, Linkedin, Mail, Heart, Code } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 py-12 border-t dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              KT.
            </a>
            <p className="mt-2 text-gray-500 dark:text-gray-400 max-w-xs">
              Computer Science student and aspiring Software Developer passionate about building great software.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex space-x-6">
              <a
                href="https://github.com/krish960"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/krushna-thombare-34169a28a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.hackerrank.com/profile/thombarek362"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="HackerRank"
              >
                <Code size={24} />
              </a>
              <a
                href="mailto:thombarek362@gmail.com"
                className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
              © {currentYear} Krushna Thombare. Made with <Heart size={14} className="mx-1 text-red-500 fill-current" /> in Pune.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
