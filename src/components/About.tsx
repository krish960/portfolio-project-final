import { motion } from 'framer-motion';
import { User, Code, Target, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-800/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-blue-600 mx-auto rounded-full"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <User className="mr-3 text-blue-600" />
              Who I Am
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              I am a passionate Computer Science student currently pursuing my 
              <span className="text-blue-600 dark:text-blue-400 font-semibold"> Master of Computer Science (MCS)</span>. 
              Having successfully completed my BCS, I've built a strong foundation in core computer science principles.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              My goal is to become a world-class Software Developer. I thrive on solving complex problems 
              and building efficient, scalable applications that make a difference. I am constantly 
              learning and staying updated with the latest industry trends.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-900 px-4 py-2 rounded-full shadow-sm">
                <Code size={16} className="mr-2 text-blue-500" />
                Problem Solver
              </div>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-900 px-4 py-2 rounded-full shadow-sm">
                <Target size={16} className="mr-2 text-red-500" />
                DSA Enthusiast
              </div>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-900 px-4 py-2 rounded-full shadow-sm">
                <BookOpen size={16} className="mr-2 text-green-500" />
                Continuous Learner
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl dark:shadow-none border border-gray-100 dark:border-gray-800"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">My Coding Philosophy</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Problem Solving & DSA</span>
                  <span className="text-blue-600 dark:text-blue-400">90%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '90%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="bg-blue-600 h-full"
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Web Development</span>
                  <span className="text-blue-600 dark:text-blue-400">85%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '85%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="bg-blue-600 h-full"
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Backend Systems</span>
                  <span className="text-blue-600 dark:text-blue-400">80%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '80%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.9 }}
                    className="bg-blue-600 h-full"
                  />
                </div>
              </div>
            </div>
            <p className="mt-8 text-sm text-gray-500 dark:text-gray-400 italic">
              "I believe that code is a tool to solve human problems. My focus is on writing clean, maintainable, and efficient code."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
