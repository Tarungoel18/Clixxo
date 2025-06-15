// constants/sidebarConstants.js
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
import { ROUTE_PATHS } from './routeConstatns';

export const SIDEBAR_SECTIONS = [
  {
    id: 'operationInfo',
    title: 'Operation Info',
    icon: DashboardIcon,
    hasSubmenu: true,
    path: ROUTE_PATHS.OPERATION_INFO,
    submenuItems: [
      { 
        id: 'systemInfo', 
        title: 'System Info',
        path: ROUTE_PATHS.SYSTEM_INFO 
      },
      { 
        id: 'pstnStatus', 
        title: 'PSTN Status',
        path: ROUTE_PATHS.PSTN_STATUS 
      },
      { 
        id: 'psmInfo', 
        title: 'PSM Info',
        path: ROUTE_PATHS.PSM_INFO 
      },
      { 
        id: 'callCount', 
        title: 'Call Count',
        path: ROUTE_PATHS.CALL_COUNT 
      },
      { 
        id: 'warningInfo', 
        title: 'Warning Info',
        path: ROUTE_PATHS.WARNING_INFO 
      },
    ]
  },
  {
    id: 'sip',
    title: 'SIP',
    icon: PhoneIcon,
    hasSubmenu: false,
    path: ROUTE_PATHS.SIP
  },
  {
    id: 'pcm',
    title: 'PCM',
    icon: ComputerIcon,
    hasSubmenu: false,
    path: ROUTE_PATHS.PCM
  },
  {
    id: 'isdn',
    title: 'ISDN',
    icon: NetworkCheckIcon,
    hasSubmenu: false,
    path: ROUTE_PATHS.ISDN
  },
  {
    id: 'fax',
    title: 'FAX',
    icon: FaxIcon,
    hasSubmenu: false,
    path: ROUTE_PATHS.FAX
  },
  {
    id: 'route',
    title: 'Route',
    icon: RouteIcon,
    hasSubmenu: false,
    path: ROUTE_PATHS.ROUTE
  },
  {
    id: 'numberFilter',
    title: 'Number Filter',
    icon: FilterListIcon,
    hasSubmenu: false,
    path: ROUTE_PATHS.NUMBER_FILTER
  },
  {
    id: 'manipulate',
    title: 'Num Manipulate',
    icon: EditIcon,
    hasSubmenu: false,
    path: ROUTE_PATHS.NUM_MANIPULATE
  },
  {
    id: 'vpn',
    title: 'VPN',
    icon: VpnKeyIcon,
    hasSubmenu: false,
    path: ROUTE_PATHS.VPN
  },
  {
    id: 'dhcp',
    title: 'DHCP',
    icon: DnsIcon,
    hasSubmenu: false,
    path: ROUTE_PATHS.DHCP
  },
  {
    id: 'systemTools',
    title: 'System Tools',
    icon: BuildIcon,
    hasSubmenu: false,
    path: ROUTE_PATHS.SYSTEM_TOOLS
  }
];