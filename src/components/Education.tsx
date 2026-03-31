import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    degree: 'Master of Computer Science (MCS)',
    institution: 'Savitribai Phule Pune University',
    duration: '2025 - 2027',
    status: 'Ongoing',
    description: 'Focusing on advanced algorithms, software engineering, and machine learning.',
  },
  {
    degree: 'Bachelor of Computer Science (BCS)',
    institution: 'Savitribai Phule Pune University',
    duration: '2022 - 2025',
    status: 'Completed',
    description: 'Built a strong foundation in C, C++, Python, and web technologies.',
  },
  {
    degree: 'Higher Secondary Certificate (12th)',
    institution: 'Savitribai Phule Pune University (HSC Board)',
    duration: '2020 - 2022',
    status: 'Completed',
    description: 'Completed with focus on science stream including mathematics and computer science.',
  },
  {
    degree: 'Secondary School Certificate (10th)',
    institution: ' Dr. Babasaheb Ambedkar Marathwada University',
    duration: '2019 - 2020',
    status: 'Completed',
    description: 'Completed foundational education with strong academic performance.',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Education
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-blue-600 mx-auto rounded-full"
          />
        </div>

        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index !== education.length - 1 && (
                <div className="absolute left-[11px] top-7 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800" />
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-1.5 w-6 h-6 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow-sm" />

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium flex items-center mt-1">
                      <GraduationCap size={18} className="mr-2" />
                      {edu.institution}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    edu.status === 'Completed' 
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                      : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                  }`}>
                    {edu.status}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    {edu.duration}
                  </span>
                  <span className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    Maharashtra , India
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
