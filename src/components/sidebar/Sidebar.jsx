import "./sidebar.scss"
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import SensorsOutlinedIcon from '@mui/icons-material/SensorsOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="top" > <span className="logo">Verbum Networks</span></div>
            <hr />
            <div className="center" >
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardOutlinedIcon className="icon" />
                        <span>Home</span>
                    </li>
                    <p className="title">DEPARTMENTS</p>
                    <li> 
                        <SensorsOutlinedIcon className="icon" />
                        <span>Admin</span>
                    </li>
                    <li> 
                        <SensorsOutlinedIcon className="icon" />
                        <span>Networking</span>
                    </li>
                    <li>
                        <LanguageOutlinedIcon className="icon" />
                        <span>WebDev</span>
                    </li>
                    <li>
                        <AccountBalanceOutlinedIcon className="icon" />
                        <span>Accountant</span>
                    </li>
                    <li>
                        <AcUnitOutlinedIcon className="icon" />
                        <span>Cyber Cafe </span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountBoxOutlinedIcon className="icon" />
                        <span>Profile</span>
                    </li>
                    <li><SettingsOutlinedIcon className="icon" />
                        <span>Settings</span>
                    </li>
                    <li><ExitToAppOutlinedIcon className="icon" />
                        <span>Log Out</span>
                    </li>

                </ul>
            </div>
            <div className="bottom" >
                <div className="mode"></div>
                <div className="mode"></div>
            </div>
        </div>
    )
}