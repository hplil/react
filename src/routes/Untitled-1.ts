// App.jsx
import { useState } from 'react';
import './App.css';

import { NavLink, useRoutes } from 'react-router-dom';
import routes from './routes';

const App = () => {
  // 根据路由表生成对应的路由规则
  const ElementRouter = useRoutes(routes);
  
	const [items] = useState([
		{ path: '/home', title: '首页' },
		{ path: '/friend', title: '好友' },
		{ path: '/setting', title: '设置' },
	]);

	return (
		<div className='app'>
			<nav className='nav'>
				<div className='w'>
          	{/* 路由链接 */}
					{items.map(item => (
						<NavLink className={({ isActive }) => (isActive ? 'active' : '')} to={item.path} key={item.path}>
							{item.title}
						</NavLink>
					))}
				</div>
			</nav>
			{/* 注册路由 */}
			{ElementRouter}
		</div>
	);
};

export default App;

