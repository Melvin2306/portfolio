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
  const [startTime] = useState(new Date()); // Store the session start time
  const [uptime, setUptime] = useState('0m');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
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
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = now.getTime() - startTime.getTime(); // difference in milliseconds
      const minutes = Math.floor(diff / 60000);
      setUptime(`${minutes}m`); // Update uptime every second
    }, 1000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [startTime]);

  const welcomeText = 'Welcome to the terminal';
  const welcomeInfo = [
    'guest@host',
    `OS: ${browserName} ${browserVersion} on ${OS} ${OSVersion}`,
    `Kernel: ${CPU} ${model} ${vendor}`,
    `Uptime: ${uptime}`, // Display the dynamic uptime
    'Packages: 420',
    'Shell: bash',
    `CPU: ${CPU}`,
    'RAM: 6455MiB / 16276MB',
  ];

  return (
    <div className='grid w-full grid-cols-6'>
      <div className='col-span-4'>
        <pre>
          {window.innerWidth < 630
            ? ASCIIArtSmall
            : window.innerWidth < 750
              ? ASCIIArtMedium
              : ASCIIArtBig}
        </pre>
      </div>
      <div className={`col-span-2 ${window.innerWidth < 1030 ? 'hidden' : ''}`}>
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
