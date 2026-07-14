import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Logo & About */}

          <div>
            <h2 className="text-3xl font-bold">
              Muhammad <span className="text-cyan-400">Faraz</span>
            </h2>

            <p className="text-slate-400 mt-4 leading-7">
              Passionate MERN Stack Developer focused on building modern,
              responsive, and scalable web applications with clean code and
              great user experiences.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-2xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>
                <a href="#home" className="hover:text-cyan-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-cyan-400 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#education" className="hover:text-cyan-400 transition">
                  Education
                </a>
              </li>

              <li>
                <a href="#skills" className="hover:text-cyan-400 transition">
                  Skills
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-cyan-400 transition">
                  Projects
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-cyan-400 transition">
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* Contact & Social */}

          <div>
            <h3 className="text-2xl font-semibold mb-5">
              Connect With Me
            </h3>

            <p className="text-slate-400 mb-2">
              📧 farazsohail081@gmail.com
            </p>

            <p className="text-slate-400 mb-6">
              📍 Karachi, Pakistan
            </p>

            <div className="flex gap-4">

              <a
                href="https://github.com/Faraz081"
                target="_blank"
                rel="noreferrer"
                className="bg-slate-800 hover:bg-cyan-500 transition p-3 rounded-full text-xl"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/muhammad-faraz-181261320"
                target="_blank"
                rel="noreferrer"
                className="bg-slate-800 hover:bg-cyan-500 transition p-3 rounded-full text-xl"
              >
                <FaLinkedin />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-slate-400">

          <p className="flex justify-center items-center gap-2 flex-wrap">
            © {year} Muhammad Faraz. All Rights Reserved. Made with
            <FaHeart className="text-red-500" />
            using React & Tailwind CSS.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;