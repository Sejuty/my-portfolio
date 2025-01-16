import { Mail, Linkedin, Github, Phone } from "lucide-react";

const Contact = () => {
  const contacts = [
    {
      icon: <Mail size={16} color="#FF3F81" />,
      label: "Email",
      value: "tafannumnishat00@gmail.com",
      href: "mailto:tafannumnishat00@gmail.com",
    },
    {
      icon: <Linkedin size={16} color="#FF3F81" />,
      label: "LinkedIn",
      value: "in/nishat-tafannum-92a13b1bb/",
      href: "https://linkedin.com/in/nishat-tafannum-92a13b1bb/",
    },
    {
      icon: <Github size={16} color="#FF3F81" />,
      label: "GitHub",
      value: "/Sejuty",
      href: "https://github.com/Sejuty",
    },
    {
      icon: <Phone size={16} color="#FF3F81" />,
      label: "Phone",
      value: "+880 1991-954786",
    },
  ];

  return (
    <div className="h-full w-full flex flex-col justify-end items-start p-4 sm:p-6 md:p-8 lg:pl-12 gap-2 lg:gap-4">
      <div className="w-full">
        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-[40px] text-secondary font-exo font-normal tracking-wide overflow-hidden animate-slide-right">
          Contact me!
        </h1>
      </div>

      <div className="w-full flex flex-col sm:flex-row flex-wrap gap-4 text-blue-200 text-sm sm:text-base font-exo my-3 lg:my-4">
        {contacts.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            className="flex items-center group hover:text-secondary transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-gray-400 group-hover:text-secondary">
              {contact.icon}
            </span>
            <span className="ml-2 sm:ml-3">{contact.value}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
