import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Users from '../pages/Users';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import PageNotAllowed from '../pages/PNA';
import { DebtNew } from '../pages/DebtNew';
import NewLogin from '../pages/NewLogin';
import DebtHome from '../pages/DebtHome'
import PNF from '../pages/PNF';
import Theme from '../prop-components/Theme';
import { UserInfoEdit } from '../pages/UserTotalEdit';


export default function AppRoutes() {
    return (
            <Routes>
                <Route path='/login' element={<Theme component={<Login />} />} />
                {/* <Route path='/login' element={<Theme component={<NewLogin/>}/>}/> */}
                <Route path='/debtnew' element={<Theme component={<DebtNew />} />} />
                <Route path='/users' element={<Theme component={<Users />} />} />
                <Route path='/userinfo' >
                    <Route path=':id' element={<Theme component={<UserInfoEdit />} />} />
                </Route>
                <Route path='/' element={<Theme component={<DebtHome />} />} />
                <Route path='/profile' element={<Theme component={<Profile/>} />} />
                <Route path='/pna' element={<Theme component={<PageNotAllowed />} />} />
                <Route path='*' element={<Theme component={<PNF />} />} />
            </Routes>
    )
}
