import React from 'react'
import styles from './Sidebar.module.scss';
import {
    IconChartBar,
    IconLayoutDashboard,
    IconRadar,
    IconUser,
    IconMessageCircle2,
    IconShoppingCart,
    IconChecklist,
    IconBell,
    IconSettings,
    IconLogout
} from '@tabler/icons';
import SidebarItem from '../SidebarItem/SidebarItem';
import logo from '../../assets/logo.png';

const Sidebar = () => {
    return (
        <div className={styles.nav}>
            {/* <p className={styles.brand}><b>Your Company Logo</b></p> */}
            <img src={logo} alt="Logo" className={styles.brandLogo}/>
            <div className={styles.user}>
                <h2 className={styles.userName}>Welcome<br/>Devon Lane!</h2>
                <p className={styles.userTitle}>Manager</p>
            </div>

            <div className={styles.category}>Menu</div>
            <SidebarItem path="#!" icon={<IconLayoutDashboard />} title="Dashboard" />
            <SidebarItem path="#!" icon={<IconShoppingCart />} title="Project" />
            <SidebarItem path="#!" icon={<IconRadar />} title="Tracking" />
            <SidebarItem path="#!" icon={<IconUser />} title="Customers" />
            <SidebarItem path="#!" icon={<IconChartBar />} title="Analytics" />
            <SidebarItem path="#!" icon={<IconChecklist />} title="Task" />

            <div className={styles.category}>Profile</div>
            <SidebarItem path="#!" icon={<IconMessageCircle2 />} title="Message" />
            <SidebarItem path="#!" icon={<IconBell />} title="Notification" />
            <SidebarItem path="#!" icon={<IconSettings />} title="Settings" />
            <SidebarItem path="#!" icon={<IconLogout />} title="Logout" />
        </div>
    )
}

export default Sidebar