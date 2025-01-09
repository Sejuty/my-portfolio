/* eslint-disable react/prop-types */
import  { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Twitter, Github } from 'lucide-react';

const TypingIntro = () => {
  const [text, setText] = useState([]);
  const [startTyping, setStartTyping] = useState(false);
  
  const fullText = [
    "I enjoy sharing my knowledge of web development through content to help others in the dev community. Connect with me on ",
    "Twitter",
    " and ",
    "GitHub",
    " where I post helpful tips and resources about web development and programming. I'm open to job opportunities where I can contribute, learn, and grow. If you have a role that matches my skills, feel free to reach out!"
  ];

  const getTextUpToIndex = (totalChars) => {
    let currentLength = 0;
    let result = [];
    let currentPartIndex = 0;
    
    while (currentPartIndex < fullText.length && currentLength < totalChars) {
      const part = fullText[currentPartIndex];
      const partLength = Math.min(part.length, totalChars - currentLength);
      result.push(part.slice(0, partLength));
      currentLength += partLength;
      currentPartIndex++;
    }
    
    return { texts: result, partIndex: currentPartIndex };
  };

  useEffect(() => {
    // Initial 5-second delay
    const startDelay = setTimeout(() => {
      setStartTyping(true);
    }, 3000);

    return () => clearTimeout(startDelay);
  }, []);

  useEffect(() => {
    if (!startTyping) return;

    let currentIndex = 0;
    const totalLength = fullText.reduce((sum, part) => sum + part.length, 0);
    
    const typingInterval = setInterval(() => {
      if (currentIndex <= totalLength) {
        const { texts } = getTextUpToIndex(currentIndex);
        setText(texts);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 10);

    return () => clearInterval(typingInterval);
  }, [startTyping]);

  const SocialLink = ({ href, children, icon: Icon, isVisible }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center text-blue-400  hover:font-400 transition-colors ${
        isVisible ? 'cursor-pointer' : 'pointer-events-none'
      }`}
    >
      {isVisible && <Icon className="w-4 h-4 mr-1" />}
      {children}
    </a>
  );

  const isTwitterComplete = text[1] === "Twitter";
  const isGithubComplete = text[3] === "GitHub";

  return (
    <div className="w-full min-h-[100px]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="text-blue-200 font-exo font-200 tracking-wide"
      >
        <p className="text-sm sm:text-lg leading-relaxed break-words">
          {text[0]}
          <SocialLink 
            href="https://twitter.com/yourusername" 
            icon={Twitter}
            isVisible={isTwitterComplete}
          >
            {text[1] || ''}
          </SocialLink>
          {text[2] || ''}
          <SocialLink 
            href="https://github.com/yourusername" 
            icon={Github}
            isVisible={isGithubComplete}
          >
            {text[3] || ''}
          </SocialLink>
          {text[4] || ''}
        </p>
      </motion.div>
    </div>
  );
};

export default TypingIntro;