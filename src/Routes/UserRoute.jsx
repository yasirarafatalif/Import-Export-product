import React from 'react';
import useAuth from '../Hooks/useAuth';
import useRole from '../Hooks/useRole';
import { useNavigate } from 'react-router';
import AdminDashboardSkeleton from '../Components/Skeleton/AdminDashboardSkeleton';



const UserRoute = ({ children }) => {
    const {user,loading}= useAuth();
    const {role, roleLoading}= useRole();
    const navigate = useNavigate();
      if (loading || roleLoading) return <AdminDashboardSkeleton></AdminDashboardSkeleton>
      if (role !== 'user'){
        return navigate('/')
      }
    return children;
};

export default UserRoute;