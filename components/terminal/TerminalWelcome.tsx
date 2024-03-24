'use client';
import React, { useState, useEffect } from 'react';
import { UAParser } from 'ua-parser-js';

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
    'guest@domain',
    `OS: ${browserName} ${browserVersion} on ${OS} ${OSVersion}`,
    `Kernel: ${CPU} ${model} ${vendor}`,
    `Uptime: ${uptime}`, // Display the dynamic uptime
    'Packages: 420',
    'Shell: bash',
    `CPU: ${CPU}`,
    'RAM: 6455MiB / 16276MB',
  ];

  return (
    <div className='flex h-full w-full flex-row'>
      <div className='w-3/5'>
        <p>{welcomeText}</p>
      </div>
      <div className='w-2/5'>
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
