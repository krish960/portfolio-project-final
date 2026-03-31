import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Code } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-800/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-blue-600 mx-auto rounded-full"
          />
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center p-4 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400 mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <a href="mailto:thombarek362@gmail.com" className="text-gray-900 dark:text-white font-medium hover:text-blue-600 transition-colors">
                    thombarek362@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center p-4 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-purple-600 dark:text-purple-400 mr-4">
                  <Github size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">GitHub</p>
                  <a href="https://github.com/krish960" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white font-medium hover:text-blue-600 transition-colors">
                    github.com/krish960
                  </a>
                </div>
              </div>

              <div className="flex items-center p-4 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400 mr-4">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/krushna-thombare-34169a28a" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white font-medium hover:text-blue-600 transition-colors">
                    linkedin.com/in/krushna-thombare-34169a28a
                  </a>
                </div>
              </div>

              <div className="flex items-center p-4 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg text-green-600 dark:text-green-400 mr-4">
                  <Code size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">HackerRank</p>
                  <a href="https://www.hackerrank.com/profile/thombarek362" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white font-medium hover:text-blue-600 transition-colors">
                    hackerrank.com/thombarek362
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center overflow-hidden rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900"
          >
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLScE7mLzGQ5ft1N69COEV3jM9HERGgcHoLCAmTPQbA2uVWTFnQ/viewform?embedded=true" 
              width="100%" 
              height="730" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              className="max-w-full"
            >
              Loading…
            </iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
