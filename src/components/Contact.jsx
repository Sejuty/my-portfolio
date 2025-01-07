import { Mail, Linkedin, Github, Phone } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const contacts = [
    {
      icon: <Mail size={16} color="#FF3F81" />,
      label: "Email",
      value: "hello@example.com",
      href: "mailto:hello@example.com",
    },
    {
      icon: <Linkedin size={16} color="#FF3F81" />,
      label: "LinkedIn",
      value: "/in/yourname",
      href: "https://linkedin.com/in/yourname",
    },
    {
      icon: <Github size={16} color="#FF3F81" />,
      label: "GitHub",
      value: "/username",
      href: "https://github.com/username",
    },
    {
      icon: <Phone size={16} color="#FF3F81" />,
      label: "Phone",
      value: "+1 234 567 8900",
      href: "tel:+12345678900",
    },
  ];

  return (
    <div className="h-full w-full flex flex-col justify-end items-start pb-28 pl-12 gap-5">
      {/* <h3 className="text-lg font-medium mb-4">Contact</h3> */}
      <div>
        <motion.h1
          style={{
            overflow: "hidden",
          }}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, ease: "easeInOut" }}
          className="text-[50px] 2xl:text-[60px] text-secondary font-exo font-normal tracking-wide lg:whitespace-nowrap"
        >
          Contact me! 
        </motion.h1>
      </div>
      <div className="flex justify-center gap-5 text-blue-200 text-md font-exo ">
        {contacts.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            className="flex items-center group hover:text-secondary transition-colors duration-200"
          >
            <span className="text-gray-400 group-hover:text-secondary">
              {contact.icon}
            </span>
            <span className="ml-3">{contact.value}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
