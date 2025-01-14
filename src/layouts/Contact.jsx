import { Mail, Linkedin, Github, Phone } from "lucide-react";

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
    <div className="min-h-screen w-full flex flex-col justify-end items-start p-4 sm:p-6 pb-0 md:p-8 lg:pl-12 gap-3 sm:gap-4 lg:gap-5">
      <div className="w-full">
        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-[50px] text-secondary font-exo font-normal tracking-wide overflow-hidden animate-slide-right">
          Contact me!
        </h1>
      </div>
      
      <div className="w-full flex flex-col sm:flex-row flex-wrap gap-4 text-blue-200 text-sm sm:text-base font-exo my-4">
        {contacts.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            className="flex items-center group hover:text-secondary transition-colors duration-200"
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