import { CommandInput } from '@/types/input';

export function uname(input: CommandInput): Array<string> {
  if (input.flags?.includes('-a')) {
    return [
      `Darwin rinkleff.dev.local 23.4.0 Darwin Kernel Version 23.4.0: Fri Mar 15 00:11:08 PDT 2024; root:xnu-10063.101.17~1/RELEASE_ARM64_T8122 arm64`,
    ];
  }
  if (input.flags?.includes('-s')) {
    return [`Darwin`];
  }
  if (input.flags?.includes('-n')) {
    return [`rinkleff.dev`];
  }
  if (input.flags?.includes('-r')) {
    return [`23.4.0`];
  }
  if (input.flags?.includes('-v')) {
    return [
      `Darwin Kernel Version 23.4.0: Fri Mar 15 00:11:08 PDT 2024; root:xnu-10063.101.17~1/RELEASE_ARM64_T8122`,
    ];
  }
  if (input.flags?.includes('-m')) {
    return [`arm64`];
  }
  return [`${input.item}`];
}
