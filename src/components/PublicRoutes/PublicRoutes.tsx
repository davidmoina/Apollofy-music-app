import { Navigate, Outlet } from 'react-router-dom';

export const PublicRoutes = () => {
	const user = localStorage.getItem('User');

	if (user) {
		return <Navigate to='/' />;
	}

	return <Outlet />;
};
