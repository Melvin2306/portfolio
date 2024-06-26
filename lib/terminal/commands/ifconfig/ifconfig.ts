import { CommandInput } from '@/types/input';

export function ifconfig(input: CommandInput): Array<string> {
  return [
    `lo0:`,
    `flags=8049<UP,LOOPBACK,RUNNING,MULTICAST> mtu 16384`,
    'options=1203<RXCSUM,TXCSUM,TXSTATUS,SW_TIMESTAMP>',
    'inet 127.0.0.1 netmask 0xff000000',
    'inet6 ::1 prefixlen 128',
    'inet6 fe80::1%lo0 prefixlen 64 scopeid 0x1',
    'nd6 options=201<PERFORMNUD,DAD>',
    'gif0:',
    'flags=8010<POINTOPOINT,MULTICAST> mtu 1280',
  ];
}
