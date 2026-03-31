import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lightbulb, Hammer, ShoppingBag, CheckCircle2, ArrowRight } from 'lucide-react';

const sampleProjects = [
  "AI Resume Analyzer & Job Matcher",
  "Smart Attendance System (Face Recognition)",
  "Online Code Compiler & Judge System",
  "Portfolio Builder SaaS Platform",
  "E-commerce Website with Admin Panel",
  "College Placement Preparation Platform",
  "Personal Finance Tracker with Analytics",
  "Chat Application (Real-time Messaging)"
];

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScE7mLzGQ5ft1N69COEV3jM9HERGgcHoLCAmTPQbA2uVWTFnQ/viewform";

export default function ProjectModal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleModal}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold shadow-2xl shadow-blue-600/40 hover:shadow-blue-600/60 transition-all"
        >
          <Lightbulb className="text-yellow-300 animate-pulse" size={20} />
          <span className="hidden sm:inline">Build or Buy a Project</span>
          <span className="sm:hidden">Build/Buy</span>
        </motion.button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">

            {/* Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleModal}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800 max-h-[90vh] overflow-y-auto"
            >

              {/* Close Button */}
              <button
                onClick={toggleModal}
                className="absolute top-8 right-8 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors z-10 bg-gray-100 dark:bg-gray-800 rounded-full"
              >
                <X size={20} />
              </button>

              <div className="p-8 sm:p-14">

                {/* Header */}
                <div className="text-center mb-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-2xl mb-6"
                  >
                    <Lightbulb size={32} />
                  </motion.div>

                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Build or Get Your Dream Project 🚀
                  </h2>

                  <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                    Whether you have an idea to build or need a ready-made project, I provide scalable, real-world solutions with full support and modern technologies.
                  </p>
                </div>

                {/* Two Sections */}
                <div className="grid md:grid-cols-2 gap-8">

                  {/* Build */}
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="flex flex-col p-8 bg-blue-50/50 dark:bg-blue-900/10 rounded-[2rem] border border-blue-100 dark:border-blue-900/20"
                  >
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20">
                      <Hammer size={24} />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      🛠️ Build Your Custom Project
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-8 flex-grow leading-relaxed">
                      Got a unique idea? I’ll transform it into a fully functional application using modern technologies like React, Django, and more.
                    </p>

                    <a
                      href={GOOGLE_FORM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all group shadow-lg shadow-blue-600/20"
                    >
                      Start Your Project 
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </motion.div>

                  {/* Buy */}
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="flex flex-col p-8 bg-purple-50/50 dark:bg-purple-900/10 rounded-[2rem] border border-purple-100 dark:border-purple-900/20"
                  >
                    <div className="w-12 h-12 bg-purple-600 text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-purple-600/20">
                      <ShoppingBag size={24} />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      💼 Buy Ready-Made Projects
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-8 flex-grow leading-relaxed">
                      Get fully developed projects with source code, documentation, and personal support — perfect for college or learning.
                    </p>

                    <a
                      href={GOOGLE_FORM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl font-bold transition-all group shadow-lg shadow-purple-600/20"
                    >
                      Get Your Project 
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </motion.div>

                </div>

                {/* Sample Projects */}
                <div className="mt-12">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <CheckCircle2 className="text-green-500" size={20} />
                    Available Sample Projects
                  </h4>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {sampleProjects.map((project, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-blue-500/30 transition-colors"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium">
                          {project}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Extra line */}
                  <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
                    ⚡ Customizations available • Source Code Included 
                  </p>

                  {/* Pricing hint */}
                  <p className="text-center text-sm text-green-500 mt-2 font-semibold">
                    💰 Starting from ₹499 (Student Friendly Pricing)
                  </p>

                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}