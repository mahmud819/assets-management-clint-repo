import React from 'react';
import NormalHome from '../NormalHome/NormalHomePage/NormalHome';
import EmployeeHome from '../EmployeeHome/EmployeeHome';
import useUserInfo from '../../../SharedElement/Hooks/useUserInfo';
import HRHome from './HRHome/HRHome';

const Home = () => {
    const userInfo= useUserInfo();
    console.log(userInfo);
    return (
        <div>
            this is home
            {!userInfo&&<NormalHome></NormalHome>}
            {userInfo?.role == 'employee'&&<EmployeeHome></EmployeeHome>}
            {userInfo?.role == 'hr'&&<HRHome></HRHome>}
        </div>
    );
};

export default Home;