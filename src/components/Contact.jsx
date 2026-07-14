import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [loading,setLoading]=useState(false);
  const [success,setSuccess]=useState("");
  const [error,setError]=useState("");

  const validateEmail=(email)=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const sendEmail=(e)=>{
    e.preventDefault();
    setSuccess(""); setError("");

    const fd=new FormData(form.current);
    const name=fd.get("user_name")?.trim();
    const email=fd.get("user_email")?.trim();
    const subject=fd.get("subject")?.trim();
    const message=fd.get("message")?.trim();

    if(!name||!email||!subject||!message){
      setError("Please fill in all fields.");
      return;
    }
    if(!validateEmail(email)){
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    emailjs.sendForm(
      "service_ozt7ocj",
      "template_jxffg93",
      form.current,
      "UAwFFG0QQlkIbOvMP"
    ).then(()=>{
      setLoading(false);
      setSuccess("Message sent successfully!");
      form.current.reset();
    }).catch(()=>{
      setLoading(false);
      setError("Failed to send message.");
    });
  };

  return (
    <section id="contact" className="bg-slate-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center mb-16">
          <h2 className="text-5xl font-bold">Contact <span className="text-cyan-400">Me</span></h2>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Feel free to reach out for internships, job opportunities or collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="glass rounded-2xl p-8">
            <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>
            <div className="space-y-6">
              <div className="flex gap-4 items-center"><FaEnvelope className="text-cyan-400"/><a href="mailto:farazsohail081@gmail.com">farazsohail081@gmail.com</a></div>
              <div className="flex gap-4 items-center"><FaPhone className="text-cyan-400"/><a href="tel:+923273644004">+92 327 3644004</a></div>
              <div className="flex gap-4 items-center"><FaMapMarkerAlt className="text-cyan-400"/><span>Karachi, Pakistan</span></div>
              <div className="flex gap-4 pt-4">
                <a href="https://github.com/Faraz081" target="_blank" rel="noreferrer"><FaGithub size={28}/></a>
                <a href="https://www.linkedin.com/in/muhammad-faraz-181261320" target="_blank" rel="noreferrer"><FaLinkedin size={28}/></a>
              </div>
            </div>
          </div>

          <motion.form ref={form} onSubmit={sendEmail} initial={{x:60,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{once:true}} className="glass rounded-2xl p-8 space-y-6">
            {error && <div className="text-red-400">{error}</div>}
            {success && <div className="text-green-400">{success}</div>}

            <input name="user_name" type="text" placeholder="Your Name" required className="w-full bg-slate-800 rounded-xl p-4"/>
            <input name="user_email" type="email" placeholder="Your Email" required className="w-full bg-slate-800 rounded-xl p-4"/>
            <input name="subject" type="text" placeholder="Subject" required className="w-full bg-slate-800 rounded-xl p-4"/>
            <textarea name="message" rows="6" placeholder="Write your message..." required className="w-full bg-slate-800 rounded-xl p-4 resize-none"></textarea>

            <button type="submit" disabled={loading} className="w-full bg-cyan-500 py-4 rounded-xl font-semibold">
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
