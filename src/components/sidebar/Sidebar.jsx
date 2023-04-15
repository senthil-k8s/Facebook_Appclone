import {React, useContext} from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';


export default function Sidebar() {

    const {dispatch} = useContext(DarkModeContext);
  return (
    <div className='sidebar'>
        
        <Link to="/" style={{textDecoration:"none"}}>
            <div className="top">
                <span className="logo">Admin Panel</span>
            </div>

        </Link>

        <hr className='hr'></hr>

        <div className="centre">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className="icon" />
                    <span>Dashboard</span>
                </li>

                <p className="title">LISTS</p>

                <Link to="/users" style={{textDecoration:"none"}}>
                    <li>
                        <Person2OutlinedIcon className="icon" />
                        <span>Users</span>
                    </li>
                </Link>

                <Link to="/products" style={{textDecoration:"none"}}>
                    <li>
                        <StoreMallDirectoryIcon className="icon" />
                        <span>Products</span>
                    </li>
                </Link>
                <li>
                    <LocalMallOutlinedIcon className="icon" />
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingIcon className="icon" />
                    <span>Delivery</span>
                </li>

                <p className="title">USEFUL</p>

                <li>
                    <InsertChartIcon className="icon" />
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsNoneOutlinedIcon className="icon" />
                    <span>Notification</span>
                </li>

                <p className="title">PRODUCTS</p>

                <li>
                    <SettingsSystemDaydreamOutlinedIcon className="icon" />
                    <span>System Health</span>
                </li>
                <li>
                    <PsychologyOutlinedIcon className="icon" />
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsOutlinedIcon className="icon" />
                    <span>Settings</span>
                </li>

                <p className="title">USER</p>

                <li>
                    <AccountCircleOutlinedIcon className="icon" />
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutOutlinedIcon className="icon" />
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="side-bottom">
            
            <div className="colorOptions" onClick={()=> dispatch({type:"LIGHT"})}></div>
            <div className="colorOptions" onClick={()=> dispatch({type:"DARK"})}></div>
        </div>
    </div>
  )
}
