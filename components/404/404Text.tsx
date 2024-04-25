'use client';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import { useColor } from '@/context/ColorContext';
import { motion } from 'framer-motion';

const tutorial = `Seems like you're lost. click on the home button to go back to the main page.`;

export function NotFoundText() {
  const { currentColor } = useColor();

  return (
    <>
      <TypeAnimation
        sequence={[tutorial, 5000]}
        wrapper='div'
        speed={91}
        repeat={1}
        cursor={false}
        omitDeletionAnimation={true}
        className='mt-2 text-xl'
      />
      <motion.div
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        initial={{ opacity: 0 }}
      >
        <Link
          className={`text-${currentColor}-500 mt-2 text-xl font-bold`}
          href='/'
          prefetch={true}
        >
          Back to home
        </Link>
      </motion.div>
    </>
  );
}
