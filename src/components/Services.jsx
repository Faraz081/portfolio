import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaMobileAlt,
  FaTools,
  FaCode,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Front-End Development",
    description:
      "Building modern, responsive, and interactive user interfaces using React, JavaScript, HTML, CSS, and Tailwind CSS.",
  },
  {
    icon: <FaServer />,
    title: "MERN Stack Development",
    description:
      "Developing scalable full-stack web applications using MongoDB, Express.js, React, and Node.js.",
  },
  {
    icon: <FaCode />,
    title: "ASP.NET Core Development",
    description:
      "Creating secure and database-driven web applications using ASP.NET Core MVC, C#, and MySQL.",
  },
  {
    icon: <FaDatabase />,
    title: "Database Management",
    description:
      "Designing and managing efficient databases using MongoDB and MySQL with optimized performance.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Web Design",
    description:
      "Designing websites that provide a seamless experience across desktops, tablets, and mobile devices.",
  },
  {
    icon: <FaTools />,
    title: "Website Maintenance",
    description:
      "Optimizing performance, fixing bugs, improving functionality, and maintaining web applications.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-24 px-6 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold">
            My <span className="text-cyan-400">Services</span>
          </h2>

          <p className="text-slate-400 mt-6 max-w-3xl mx-auto leading-8">
            I develop modern, scalable, and responsive web applications using
            the latest technologies while focusing on clean code, performance,
            and user experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (

            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .6,
                delay: index * .1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="glass rounded-2xl p-8"
            >

              <div className="text-5xl text-cyan-400 mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-slate-400 leading-7">
                {service.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;