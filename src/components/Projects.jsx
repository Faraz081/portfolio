import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import rechargeImg from "../assets/projects/mobile-recharge.png";
import fitnessImg from "../assets/projects/fitness-tracker.png";
import hotelImg from "../assets/projects/hotel-management.png";

const projects = [
  {
    title: "Online Mobile Recharge System",
    image: rechargeImg,
    description:
      "A complete ASP.NET Core MVC application that allows users to register, log in, recharge mobile numbers, browse recharge plans, manage profiles, and view transaction history. It also includes an admin dashboard for managing users, services, recharge plans, and transactions.",

    tech: [
      "ASP.NET Core MVC",
      "C#",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
    ],

    github:
      "https://github.com/Faraz081/3rd-sem-eproject",

    live: "#",
  },

  {
    title: "Fitness Tracker Website",
    image: fitnessImg,

    description:
      "A modern fitness tracking application currently under development. It helps users monitor workouts, manage fitness goals, and track progress through a clean and responsive interface.",

    tech: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],

    github: "#",

    live: "#",
  },

  {
    title: "Hotel Management System",
    image: hotelImg,

    description:
      "A full-stack hotel management system currently in development for managing room bookings, reservations, customers, and hotel operations efficiently.",

    tech: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],

    github: "#",

    live: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-slate-900 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold">
            My <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="text-slate-400 mt-6 max-w-3xl mx-auto leading-8">
            Here are some of the projects I have built and am currently
            working on. These projects demonstrate my skills in front-end,
            back-end, database management, and full-stack web development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .6,
                delay: index * .15,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass rounded-2xl overflow-hidden"
            >

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-slate-400 leading-7 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">

                  {project.tech.map((item) => (

                    <span
                      key={item}
                      className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm"
                    >
                      {item}
                    </span>

                  ))}

                </div>

                <div className="flex gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 transition px-5 py-3 rounded-lg"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 border border-cyan-400 hover:bg-cyan-500 transition px-5 py-3 rounded-lg"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;