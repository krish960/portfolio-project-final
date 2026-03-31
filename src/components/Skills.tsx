import { motion } from 'framer-motion';
import { Terminal, Globe, Server, Database, Settings,BarChart3 } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming',
    icon: <Terminal className="text-blue-500" />,
    skills: ['Python', 'C++', 'JavaScript', 'R Language','DSA (Problem Solving)'],
  },
  {
    title: 'Web Frontend',
    icon: <Globe className="text-green-500" />,
    skills: ['HTML5', 'CSS3', 'React.js', 'Tailwind CSS', 'Bootstrap', 'AJAX'],
  },
  {
    title: 'Backend',
    icon: <Server className="text-purple-500" />,
    skills: ['Django', 'Node.js (Learning)', 'REST APIs'],
  },
  {
    title: 'Database',
    icon: <Database className="text-red-500" />,
    skills: ['MySQL', 'Supabase', 'PostgreSQL'],
  },
  {
    title: 'Data Science',
    icon: <BarChart3 className="text-pink-500" />,
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
  },
  {
    title: 'Cloud & Tools',
    icon: <Settings className="text-orange-500" />,
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'AWS (Basic)'],
  },

];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            My Skills
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-blue-600 mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-white dark:bg-gray-900 rounded-lg shadow-sm mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
