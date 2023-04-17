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
                    <li>
                        <DashboardOutlinedIcon />
                        <span>Home</span></li>
                    <li> <SensorsOutlinedIcon />
                        <span>Networking</span></li>
                    <li><LanguageOutlinedIcon />
                        <span>WebDev</span></li>
                    <li><AccountBalanceOutlinedIcon />
                        <span>Accountant</span></li>
                    <li><AcUnitOutlinedIcon />
                        <span>Cyber Cafe </span></li>
                        <li><AccountBoxOutlinedIcon/><span>Profile</span></li>
                        <li><SettingsOutlinedIcon/><span>Settings</span></li>
                        <li><ExitToAppOutlinedIcon/><span>Log Out</span></li>

                </ul>
            </div>
            <div className="bottom" >color <option value=""></option></div>
        </div>
    )
}