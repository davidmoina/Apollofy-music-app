import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoutes = () => {
	const user = localStorage.getItem('User');

	if (!user) {
		return <Navigate to='/welcome' />;
	}

	return <Outlet />;
};
