//路由表配置：src/routes/index.jsx
import { Navigate } from 'react-router-dom';

import Home from '../views/Home';
import Friend from '../views/Friend';
import Setting from '../views/Setting';
import NotFound from '../views/NotFound';
import Chat from '../views/Chat';

const routes = [
  // Navigate 重定向
	{ path: '/', element: <Navigate to='/home' /> },
	{ path: '/home', element: <Home /> },
	{
		path: '/friend',
		element: <Friend />,
		children: [{ path: 'chat/:name', element: <Chat /> }],
	},
	{ path: '/setting', element: <Setting /> },
	// { path: '*', element: <NotFound /> },
];

export default routes;
