// router.jsx
import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import { ROUTE_PATHS } from './constants/routeConstatns';
import Dashboard from './components/Dashboard';
import SystemInfo from './components/SystemInfo';
import PstnStatus from './components/PstnStatus';
import PsmInfo from './components/PsmInfo';
import CallCount from './components/CallCount';
import WarningInfo from './components/WarningInfo';
import SipPage from './components/SipPage';
import PcmPage from './components/PcmPage';
import IsdnPage from './components/IsdnPage';
import FaxPage from './components/FaxPage';
import RoutePage from './components/RoutePage';
import NumberFilterPage from './components/NumberFilterPage';
import NumManipulatePage from './components/NumManipulatePage';
import VpnPage from './components/VpnPage';
import DhcpPage from './components/DhcpPage';
import SystemToolsPage from './components/SystemToolsPage';


// Error Boundary Component
const ErrorBoundary = ({ error }) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Something went wrong!</h1>
        <p className="text-gray-600 mb-4">{error?.message || 'An unexpected error occurred'}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
        >
          Reload Page
        </button>
      </div>
    </div>
  );
};

// 404 Not Found Component
const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-gray-600 mb-4">Page not found</p>
        <a 
          href="/" 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      // Operation Info nested routes
      {
        path: ROUTE_PATHS.SYSTEM_INFO,
        element: <SystemInfo />,
      },
      {
        path: ROUTE_PATHS.PSTN_STATUS,
        element: <PstnStatus />,
      },
      {
        path: ROUTE_PATHS.PSM_INFO,
        element: <PsmInfo />,
      },
      {
        path: ROUTE_PATHS.CALL_COUNT,
        element: <CallCount />,
      },
      {
        path: ROUTE_PATHS.WARNING_INFO,
        element: <WarningInfo />,
      },
      // Main feature routes
      {
        path: ROUTE_PATHS.SIP,
        element: <SipPage />,
      },
      {
        path: ROUTE_PATHS.PCM,
        element: <PcmPage />,
      },
      {
        path: ROUTE_PATHS.ISDN,
        element: <IsdnPage />,
      },
      {
        path: ROUTE_PATHS.FAX,
        element: <FaxPage />,
      },
      {
        path: ROUTE_PATHS.ROUTE,
        element: <RoutePage />,
      },
      {
        path: ROUTE_PATHS.NUMBER_FILTER,
        element: <NumberFilterPage />,
      },
      {
        path: ROUTE_PATHS.NUM_MANIPULATE,
        element: <NumManipulatePage />,
      },
      {
        path: ROUTE_PATHS.VPN,
        element: <VpnPage />,
      },
      {
        path: ROUTE_PATHS.DHCP,
        element: <DhcpPage />,
      },
      {
        path: ROUTE_PATHS.SYSTEM_TOOLS,
        element: <SystemToolsPage />,
      },
    ],
  },
  // 404 route - should be last
  {
    path: "*",
    element: <NotFound />,
  },
]);