import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoutes = () => {
	const user: boolean = true;

	if (!user) {
		return <Navigate to='/login' />;
	}

	return <Outlet />;
};
