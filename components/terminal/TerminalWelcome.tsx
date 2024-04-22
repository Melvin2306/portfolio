'use client';
import React, { useState, useEffect } from 'react';
import { UAParser } from 'ua-parser-js';
import { ASCIIArtBig } from '@/lib/ascii/ascii-big';
import { ASCIIArtSmall } from '@/lib/ascii/ascii-small';
import { ASCIIArtMedium } from '@/lib/ascii/ascii-medium';
import { useUser } from '@/context/UserContext';
import { useMotionValue } from 'framer-motion';
import { useMotionTemplate, motion } from 'framer-motion';
import { cn } from '@/utils/cn';

const characters =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const generateRandomString = (length: number) => {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

function CardPattern({ mouseX, mouseY, randomString }: any) {
  let maskImage = useMotionTemplate`radial-gradient(160px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className='pointer-events-none'>
      <div className='[mask-image:linear-gradient(white, transparent)] absolute inset-0 rounded-2xl group-hover/card:opacity-50'></div>
      <motion.div
        className='absolute inset-0 rounded-2xl bg-red-700 opacity-0 backdrop-blur-xl transition duration-500 group-hover/card:opacity-20'
        style={style}
      />
      <motion.div
        className='absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay group-hover/card:opacity-100'
        style={style}
      >
        <p className='absolute inset-x-0 h-full whitespace-pre-wrap break-words font-mono text-xs text-red-300 transition duration-500'>
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

function TerminalWelcome() {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState('');
  const { currentUser } = useUser();
  const [userAgent, setUserAgent] = useState('');
  const [browserName, setBrowserName] = useState('Firefox');
  const [browserVersion, setBrowserVersion] = useState('89.0');
  const [OS, setOS] = useState('MelvinOS');
  const [OSVersion, setOSVersion] = useState('1.0.0');
  const [CPU, setCPU] = useState('x86_64');
  const [model, setModel] = useState('Linux');
  const [vendor, setVendor] = useState('Lenovo');
  const [startTime] = useState(new Date());
  const [uptime, setUptime] = useState('0m');
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [keyColorClass, setKeyColorClass] = useState('text-red-500');

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    let str = generateRandomString(150000);
    setRandomString(str);

    window.addEventListener('resize', handleResize);
    if (typeof navigator !== 'undefined') {
      setUserAgent(navigator.userAgent);
      const parser = new UAParser();
      parser.setUA(navigator.userAgent);
      const UA = parser.getResult();
      if (UA.browser.name) {
        setBrowserName(UA.browser.name as string);
      }
      if (UA.browser.version) {
        setBrowserVersion(UA.browser.version as string);
      }
      if (UA.os.name) {
        setOS(UA.os.name as string);
      }
      if (UA.os.version) {
        setOSVersion(UA.os.version as string);
      }
      if (UA.device.model) {
        setModel(UA.device.model as string);
      }
      if (UA.device.vendor) {
        setVendor(UA.device.vendor as string);
      }
      if (UA.cpu.architecture) {
        setCPU(UA.cpu.architecture as string);
      }
    }
    return () => {
      window.removeEventListener('resize', handleResize);
      // Clear any intervals or timeouts if any
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = now.getTime() - startTime.getTime();
      const minutes = Math.floor(diff / 60000);
      setUptime(`${minutes}m`);
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime]);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const str = generateRandomString(150000);
    setRandomString(str);
  }

  const changeKeyColor = (color: string) => {
    setKeyColorClass(color);
  };

  const getASCIIArt = () => {
    // Only determine ASCII art size if windowWidth is defined
    if (typeof windowWidth === 'undefined') return ASCIIArtMedium; // Default or placeholder

    if (windowWidth < 630) {
      return ASCIIArtSmall;
    } else if (windowWidth < 750) {
      return ASCIIArtMedium;
    } else {
      return ASCIIArtBig;
    }
  };

  const welcomeInfo = [
    { key: `${currentUser}@host`, value: '' },
    {
      key: 'OS',
      value: `${browserName} ${browserVersion} on ${OS} ${OSVersion}`,
    },
    { key: 'Kernel', value: `${CPU} ${model} ${vendor}` },
    { key: 'Uptime', value: `${uptime}` },
    { key: 'Packages', value: '420' },
    { key: 'Shell', value: 'bash' },
    { key: 'CPU', value: `${CPU}` },
    { key: 'RAM', value: '6455MiB / 16276MB' },
  ];

  return (
    <div className={cn('relative h-full w-full rounded-full bg-transparent')}>
      <div
        onMouseMove={onMouseMove}
        className='group/card relative flex h-full w-full overflow-hidden rounded-3xl bg-transparent'
      >
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
        />
        <div className='relative z-10 flex'>
          <div className='relative flex h-full w-full rounded-full'>
            <div className='grid w-full grid-cols-6'>
              <div className='col-span-4 mr-96'>
                <pre className='cursor-default'>{getASCIIArt()}</pre>
              </div>
              <div
                className={`col-span-2 cursor-default ${typeof windowWidth !== 'undefined' && windowWidth < 1030 ? 'hidden' : ''}`}
              >
                <ul>
                  {welcomeInfo.map((info) => (
                    <li key={info.key}>
                      <span className={`${keyColorClass} font-bold`}>
                        {info.key}:
                      </span>{' '}
                      {info.value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TerminalWelcome;
