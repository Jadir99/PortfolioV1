"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.4, ease: 'easeIn' }, // Removed delay
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.4, ease: 'easeInOut' }, // Removed delay
          }}
          className="w-[298px] h-[298px] lg:w-[498px] lg:h-[498px] mix-blend-lighten absolute"
        >
          <Image
            src="/assets/pic.png"
            alt="Homepage Image"
            priority // Keep priority for critical images
            quality={100}
            fill
            className="object-contain rounded-full"
          />
        </motion.div>
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#C197D2"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: '15 120 25 25' }}
            animate={{
              strokeDasharray: [
                '15 120 25 25',
                '16 25 92 72',
                '4 250 22 22',
              ],
              rotate: [0, 360],
              strokeWidth: [4, 8, 4],
              stroke: ['#C197D2', '#5B3256'],
              opacity: [1, 0.5, 1],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 10, // Reduced duration
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;