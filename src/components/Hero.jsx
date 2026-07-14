import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../assets/profile.png";
import cv from "../assets/cv.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: .8 }}
        >
          <p className="text-cyan-400 text-xl mb-2">
            Hello, I'm
          </p>

          <h1 className="text-5xl lg:text-7xl font-black mb-5">
            Muhammad <span className="gradient-text">Faraz</span>
          </h1>

          <TypeAnimation
            sequence={[
              "MERN Stack Developer",
              2000,
              "React Developer",
              2000,
              "ASP.NET Core Developer",
              2000,
            ]}
            repeat={Infinity}
            speed={40}
            className="text-2xl font-semibold text-cyan-300"
          />

          <p className="mt-8 text-slate-300 leading-8 max-w-xl">
            Passionate MERN Stack Developer focused on creating modern,
            responsive, and user-friendly web applications with clean code,
            beautiful UI, and scalable architecture.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href={cv}
              download
              className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-xl font-semibold transition"
            >
              Download CV
            </a>

            <a
              href="#contact"
              className="border border-cyan-500 px-8 py-3 rounded-xl hover:bg-cyan-500 transition"
            >
              Hire Me
            </a>

          </div>

          <div className="flex gap-6 mt-10 text-3xl">

            <a
              href="https://github.com/Faraz081"
              target="_blank"
            >
              <FaGithub className="hover:text-cyan-400 transition" />
            </a>

            <a
              href="https://www.linkedin.com/in/muhammad-faraz-181261320"
              target="_blank"
            >
              <FaLinkedin className="hover:text-cyan-400 transition" />
            </a>

          </div>
        </motion.div>

        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: .8 }}
          className="flex justify-center"
        >
          <div className="glass rounded-full p-5">

            <img
              src={profile}
              alt="Muhammad Faraz"
              className="w-80 h-80 object-cover rounded-full border-4 border-cyan-500"
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;