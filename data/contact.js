import { FaPhoneAlt, FaEnvelope, FaLinkedin ,FaGithub } from 'react-icons/fa';
import { FaSquareUpwork } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";

export const contact = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+212) 6 82 84 65 80',
    action: () => window.location.href = "tel:+212682846580"
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'mohamad.jadir2018@gmail.com',
    action: () => window.location.href = "mailto:mohamad.jadir2018@gmail.com"
  },
  {
    icon: <FaLinkedin />,
    title: 'LinkedIn',
    description: 'JADIR Mohammed',
    action: () => window.open("https://www.linkedin.com/in/mohammed-jadir/", "_blank")
  },
  {
    icon: <FaGithub />,
    title: 'Github',
    description: 'Jadir99',
    action: () => window.open("https://github.com/Jadir99", "_blank")
  },
];