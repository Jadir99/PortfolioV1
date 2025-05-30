import Link from 'next/link';
import { FaGithub, FaLinkedin, FaHackerrank } from 'react-icons/fa';

const socials = [
    { icon: <FaGithub />, path: 'https://github.com/Jadir99' },
    // { icon: <FaHackerrank />, path: 'https://www.hackerrank.com/profile/azarkanzakariae' },
    { icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/mohammed-jadir/' },
]

const Social = ({ contaierStyles, iconStyles, onSocialClick }) => {
    return (
        <div className={contaierStyles}>
            {socials.map((item, index) => {
                return (
                    <a
                        key={index}
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={iconStyles}
                        onClick={() => onSocialClick(item.path)}
                        >
                        {item.icon}
                    </a>
                );
            })}
        </div>
    )
}

export default Social