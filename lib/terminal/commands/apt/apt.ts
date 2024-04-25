import { CommandInput } from '@/types/input';

export function apt(input: CommandInput): Array<string> {
  if (input.item === undefined) {
    return ['No command specified'];
  }
  if (input.item === 'install') {
    return ['apt install command not implemented yet.'];
  }
  if (input.item === 'remove') {
    return ['apt remove command not implemented yet.'];
  }
  if (input.item === 'update') {
    return [
      'Hit:1 https://brave-browser-apt-release.s3.brave.com stable InRelease',
      'Hit:2 https://dl.google.com/linux/chrome/deb stable InRelease',
      'Hit:3 http://repository.spotify.com stable InRelease',
      'Hit:4 http://security.ubuntu.com/ubuntu jammy-security InRelease',
      'Hit:5 http://us.archive.ubuntu.com/ubuntu jammy InRelease',
      'Hit:6 http://us.archive.ubuntu.com/ubuntu jammy-updates InRelease',
      'Hit:7 https://ppa.launchpadcontent.net/danielrichter2007/grub-customizer/ubuntu jammy InRelease',
      'Hit:8 http://us.archive.ubuntu.com/ubuntu jammy-backports InRelease',
      'Ign: 9 https://repo.vivaldi.com/stable/deb stable InRelease',
      'Get:10 https://repo.vivaldi.com/stable/deb stable Release [3,840 B]',
      'Get:11 https://repo.vivaldi.com/stable/deb stable Release.gpg [833 B]',
      'Get:12 https://repo.vivaldi.com/stable/deb stable/main amd64 Packages [1,156 B]',
      'Hit:13 https://ppa.launchpadcontent.net/helkaluin/webp-pixbuf-loader/ubuntu jammy InRelease',
      'Get :14 https://mega.nz/linux/repo/xUbuntu_22.04 •/ InRelease [2,961 B]',
      'Hit:15 https://ppa.launchpadcontent.net/jonathonf/vim/ubuntu jammy InRelease',
      'Hit:16 https://ppa.launchpadcontent.net/slimbook/slimbook/ubuntu jammy InRelease',
      'Fetched 8,790 B in 4s (2,168 B/s)',
      'Reading package lists... Done Building dependency tree... Done Reading state information... Done',
      '6 packages can be upgraded. Run "apt list --upgradable" to see them.',
    ];
  }
  if (input.item === 'upgrade') {
    return [
      'Reading package lists... Done',
      'Building dependency tree... Done',
      'Reading state information... Done',
      'Calculating upgrade... Done',
      'The following packages will be upgraded:',
      'printd gnome-control-center gnome-control-center-data gnome-control-center-faces',
      'libpam-fprintd vivaldi-stable',
      '6 upgraded, 0 newly installed, o to remove and o not upgraded.',
      'Need to get 101 MB of archives.',
      'After this operation, 3,072 B of additional disk space will be used.',
      'Do you want to continue? [Y/n]',
    ];
  }
  if (input.item === 'list' || input.flags?.includes('--upgradable')) {
    return ['apt list command not implemented yet.'];
  } else {
    return ['Invalid command. Use "man apt" to see available commands.'];
  }
}
