import { motion } from "framer-motion";
import { FaGraduationCap, FaUniversity, FaKeyboard } from "react-icons/fa";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-6 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16"
        >
          Education & <span className="text-cyan-400">Qualifications</span>
        </motion.h2>

        <div className="space-y-8">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 flex gap-6 items-start"
          >
            <FaUniversity className="text-cyan-400 text-4xl mt-1" />

            <div>
              <h3 className="text-2xl font-bold">
                Bachelor of Science in Information Technology (BSIT)
              </h3>

              <p className="text-cyan-400 mt-2">
                Currently Pursuing
              </p>

              <p className="text-slate-300 mt-4 leading-7">
                Pursuing a Bachelor's degree in Information Technology with a focus on software development, databases, programming, and modern web technologies.
              </p>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 flex gap-6 items-start"
          >
            <FaGraduationCap className="text-cyan-400 text-4xl mt-1" />

            <div>
              <h3 className="text-2xl font-bold">
                Diploma in Software Engineering
              </h3>

              <p className="text-cyan-400 mt-2">
                Aptech Pakistan • Currently Pursuing
              </p>

              <p className="text-slate-300 mt-4 leading-7">
                Learning practical software engineering concepts, full-stack development, databases, and industry-standard programming practices through hands-on projects.
              </p>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 flex gap-6 items-start"
          >
            <FaKeyboard className="text-cyan-400 text-4xl mt-1" />

            <div>
              <h3 className="text-2xl font-bold">
                Professional Skill - Shorthand (Stenotypist)
              </h3>

              <p className="text-cyan-400 mt-2">
                Professional Typing & Documentation
              </p>

              <p className="text-slate-300 mt-4 leading-7">
                Skilled in shorthand writing and fast documentation, demonstrating strong communication, accuracy, and organizational abilities.
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Education;