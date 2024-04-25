'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useAnimate } from 'framer-motion';
import { useColor } from '@/context/ColorContext';

export const TextGenerateEffect = ({ words }: { words: string }) => {
  const [scope, animate] = useAnimate();
  const { currentColor } = useColor();
  let wordsArray = words.split(' ');

  useEffect(() => {
    wordsArray.forEach((_, index) => {
      animate(
        scope.current.children[index],
        {
          opacity: 1,
        },
        {
          duration: 2,
          delay: index * 0.07,
        }
      );
    });
  }, [wordsArray, scope, animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          let style = {};
          if (word === 'Melvin' || word === 'Rinkleff.') {
            style = `font-bold text-${currentColor}-500`;
          } else if (word === "'commands'") {
            style = 'font-bold';
          } else if (word === '♡') {
            style = `font-bold text-${currentColor}-500`;
          } else if (word === '<specific' || word === "command>'") {
            style = 'italic';
          }
          return (
            <motion.span key={word + idx} className={`opacity-0  ${style}`}>
              {word}{' '}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div>
      <div className='mt-4'>
        <div className='cursor-default leading-snug tracking-wide text-black dark:text-white'>
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
