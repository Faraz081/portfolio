import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaCode,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiMysql,
  SiDotnet,
} from "react-icons/si";

const skills = [
  {
    icon: <FaHtml5 />,
    name: "HTML5",
    level: 70,
  },
  {
    icon: <FaCss3Alt />,
    name: "CSS3",
    level: 50,
  },
  {
    icon: <FaJs />,
    name: "JavaScript",
    level: 45,
  },
  {
    icon: <FaReact />,
    name: "React.js",
    level: 90,
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind CSS",
    level: 90,
  },
  {
    icon: <FaNodeJs />,
    name: "Node.js",
    level: 82,
  },
  {
    icon: <SiExpress />,
    name: "Express.js",
    level: 80,
  },
  {
    icon: <SiMongodb />,
    name: "MongoDB",
    level: 82,
  },
  {
    icon: <SiDotnet />,
    name: "ASP.NET Core",
    level: 85,
  },
  {
    icon: <FaCode />,
    name: "C#",
    level: 85,
  },
  {
    icon: <SiMysql />,
    name: "MySQL",
    level: 88,
  },
  {
    icon: <FaGithub />,
    name: "Git & GitHub",
    level: 90,
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold">
            My <span className="text-cyan-400">Skills</span>
          </h2>

          <p className="text-slate-400 mt-6 max-w-3xl mx-auto leading-8">
            I have experience working with modern front-end and back-end
            technologies to build responsive, scalable, and user-friendly web
            applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
              }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex justify-between items-center mb-5">

                <div className="flex items-center gap-4">

                  <div className="text-4xl text-cyan-400">
                    {skill.icon}
                  </div>

                  <h3 className="text-xl font-semibold">
                    {skill.name}
                  </h3>

                </div>

                <span className="font-bold text-cyan-400">
                  {skill.level}%
                </span>

              </div>

              <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="bg-cyan-400 h-3 rounded-full"
                />

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;