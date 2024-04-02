'use client';
import React, { useState, useEffect } from 'react';
import { UAParser } from 'ua-parser-js';
import { ASCIIArtBig } from '@/lib/ascii/ascii-big';
import { ASCIIArtSmall } from '@/lib/ascii/ascii-small';
import { ASCIIArtMedium } from '@/lib/ascii/ascii-medium';

function TerminalWelcome() {
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

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

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
    'guest@host',
    `OS: ${browserName} ${browserVersion} on ${OS} ${OSVersion}`,
    `Kernel: ${CPU} ${model} ${vendor}`,
    `Uptime: ${uptime}`,
    'Packages: 420',
    'Shell: bash',
    `CPU: ${CPU}`,
    'RAM: 6455MiB / 16276MB',
  ];

  return (
    <div className='grid w-full grid-cols-6'>
      <div className='col-span-4'>
        <pre>{getASCIIArt()}</pre>
      </div>
      <div
        className={`col-span-2 ${typeof windowWidth !== 'undefined' && windowWidth < 1030 ? 'hidden' : ''}`}
      >
        <ul>
          {welcomeInfo.map((info) => (
            <li key={info}>{info}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TerminalWelcome;
