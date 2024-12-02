import React from 'react';
import { Code, Server, Database, Layers } from 'lucide-react';

const SkillsCard = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code className="h-6 w-14 text-blue-500" />,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React']
    },
    {
      title: 'Backend',
      icon: <Server className="h-6 w-14 text-green-500" />,
      skills: ['Node.js', 'Python', 'Express', 'Django']
    },
    {
      title: 'Database',
      icon: <Database className="h-6 w-14 text-purple-500" />,
      skills: ['MongoDB', 'PostgreSQL', 'MySQL']
    },
    // {
    //   title: 'DevOps',
    //   icon: <Layers className="h-6 w-6 text-red-500" />,
    //   skills: ['Docker', 'Kubernetes', 'AWS', 'Git']
    // }
  ];

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 max-w-5xl  mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Professional Skills
      </h2>
      <div className="space-y-4">
        {skillCategories.map((category) => (
          <div 
            key={category.title} 
            className="flex items-center border-b pb-3 last:border-b-0 mx-auto"
          >
            <div className="mr-4">
              {category.icon}
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">{category.title}</h3>
              <p className="text-sm text-gray-500">
                {category.skills.join(' • ')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;