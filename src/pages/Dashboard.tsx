import { RootState } from '../store';
import React from 'react';
// import { useGetUserInfoMutation } from "../services/user";
import { useSelector } from "react-redux";

const Dashboard = () => {
   const { loginDetails } = useSelector((state: RootState) => state.userData);

   console.log("loginDetails : ", loginDetails);

   return (
      <div>
         Dashboard
      </div>
   );
};

export default Dashboard;