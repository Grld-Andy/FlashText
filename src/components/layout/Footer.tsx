import { Facebook, Twitter, Linkedin, Github } from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#", hoverColor: "hover:text-blue-400" },
    { icon: <Twitter size={20} />, href: "#", hoverColor: "hover:text-green-400" },
    { icon: <Linkedin size={20} />, href: "#", hoverColor: "hover:text-orange-400" },
    { icon: <Github size={20} />, href: "#", hoverColor: "hover:text-purple-400" },
  ];
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Features", href: "#"},
    { name: "Pricing", href: "#"},
    { name: "Contact", href: "#"},
  ];

  return (
    <footer className="bg-zinc-900 text-white py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-2xl font-bold tracking-wide">FlashType</div>

        <ul className="mt-4 md:mt-0 flex flex-col md:flex-row gap-4 text-sm">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className={`transition hover:text-blue-500`}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-4 mt-4 md:mt-0">
          {socialLinks.map((social, index) => (
            <a key={index} href={social.href} className={`transition ${social.hoverColor}`}>
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 mt-6">
        &copy; {new Date().getFullYear()} FlashType. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
