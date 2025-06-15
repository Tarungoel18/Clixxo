import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import PhoneIcon from '@mui/icons-material/Phone';
import ComputerIcon from '@mui/icons-material/Computer';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import FaxIcon from '@mui/icons-material/Fax';
import RouteIcon from '@mui/icons-material/Route';
import FilterListIcon from '@mui/icons-material/FilterList';
import EditIcon from '@mui/icons-material/Edit';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import DnsIcon from '@mui/icons-material/Dns';
import BuildIcon from '@mui/icons-material/Build';

export const  SIDEBAR_SECTIONS = [
  {
    id: 'operationInfo',
    title: 'Operation Info',
    icon: DashboardIcon,
    hasSubmenu: true,
    submenuItems: [
      { id: 'systemInfo', title: 'System Info' },
      { id: 'pstnStatus', title: 'PSTN Status' },
      { id: 'psmInfo', title: 'PSM Info' },
      { id: 'callCount', title: 'Call Count' },
      { id: 'warningInfo', title: 'Warning Info' },
    ]
  },
  {
    id: 'sip',
    title: 'SIP',
    icon: PhoneIcon,
    hasSubmenu: false
  },
  {
    id: 'pcm',
    title: 'PCM',
    icon: ComputerIcon,
    hasSubmenu: false
  },
  {
    id: 'isdn',
    title: 'ISDN',
    icon: NetworkCheckIcon,
    hasSubmenu: false
  },
  {
    id: 'fax',
    title: 'FAX',
    icon: FaxIcon,
    hasSubmenu: false
  },
  {
    id: 'route',
    title: 'Route',
    icon: RouteIcon,
    hasSubmenu: false
  },
  {
    id: 'numberFilter',
    title: 'Number Filter',
    icon: FilterListIcon,
    hasSubmenu: false
  },
  {
    id: 'manipulate',
    title: 'Num Manipulate',
    icon: EditIcon,
    hasSubmenu: false
  },
  {
    id: 'vpn',
    title: 'VPN',
    icon: VpnKeyIcon,
    hasSubmenu: false
  },
  {
    id: 'dhcp',
    title: 'DHCP',
    icon: DnsIcon,
    hasSubmenu: false
  },
  {
    id: 'systemTools',
    title: 'System Tools',
    icon: BuildIcon,
    hasSubmenu: false
  }
];