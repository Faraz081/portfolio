import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaLightbulb } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-14"
        >
          About <span className="text-cyan-400">Me</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">
              MERN Stack Developer
            </h3>

            <p className="text-slate-300 leading-8 mb-5">
              I am <span className="text-cyan-400 font-semibold">Muhammad Faraz</span>, a passionate MERN Stack Developer with a strong interest in building modern, responsive, and user-friendly web applications. I enjoy transforming ideas into functional and visually appealing digital solutions using modern technologies.
            </p>

            <p className="text-slate-300 leading-8 mb-5">
              Along with the MERN Stack, I also have experience in ASP.NET Core MVC, C#, MySQL, and modern front-end development. I continuously improve my skills by building real-world projects and learning the latest technologies.
            </p>

            <p className="text-slate-300 leading-8">
              I am currently seeking internship and entry-level opportunities where I can contribute to real projects, collaborate with experienced developers, and grow professionally in the software development industry.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >

            <div className="glass rounded-2xl p-6 text-center hover:-translate-y-2 transition">
              <FaCode className="text-5xl text-cyan-400 mx-auto mb-4" />
              <h4 className="font-bold text-xl mb-2">
                Clean Code
              </h4>
              <p className="text-slate-400 text-sm">
                Writing scalable and maintainable code.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 text-center hover:-translate-y-2 transition">
              <FaLaptopCode className="text-5xl text-cyan-400 mx-auto mb-4" />
              <h4 className="font-bold text-xl mb-2">
                Modern UI
              </h4>
              <p className="text-slate-400 text-sm">
                Responsive and attractive user interfaces.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 text-center hover:-translate-y-2 transition">
              <FaLightbulb className="text-5xl text-cyan-400 mx-auto mb-4" />
              <h4 className="font-bold text-xl mb-2">
                Continuous Learning
              </h4>
              <p className="text-slate-400 text-sm">
                Always exploring new technologies and best practices.
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;