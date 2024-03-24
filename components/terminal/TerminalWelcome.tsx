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
    'guest@host',
    `OS: ${browserName} ${browserVersion} on ${OS} ${OSVersion}`,
    `Kernel: ${CPU} ${model} ${vendor}`,
    `Uptime: ${uptime}`, // Display the dynamic uptime
    'Packages: 420',
    'Shell: bash',
    `CPU: ${CPU}`,
    'RAM: 6455MiB / 16276MB',
  ];

  const ASCIIArt = `
              735446669999988800097            39000000000093           
       7555555554446669999988800000000     20000000000047  190007       
    255555555554444669999988880000000000700000000009    400000008       
   5555555554444666999999888800000000000000000008 1000000000009 33      
     7355544666999999888800000000000000000000000000000000003  337       
            73337      750000000000000000000000000000001   333          
                    73337    60000000000000000000002    333             
                       16333    00000000000000000    3212               
                       16645537   0000000000000   2535466               
                       196644555   00000000002  355544669               
                       19666445551  000000007  5554446699               
                       19996644445   0000001  25444466999               
                       19999966644    00009   54466699999               
                       19999999666    3000    56669999999               
                       18899999999     007    49999999988               
                       10888899999      0     49999998888               
                       10008888899            69988888000               
                       10000008888            98880000000               
                       10000000000            90000000008               
                       10000000000            90000000008               
                        0000000000            90000000005               
                         900000002             00000000                 
                           00000                200007                  
                            10                    09                    
`;

  return (
    <div className='flex h-full w-full flex-row'>
      <div className='w-3/5'>
        <pre>{ASCIIArt}</pre>
      </div>
      <div className='flex w-2/5 flex-1'>
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
