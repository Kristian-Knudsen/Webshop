import React from 'react';
import styles from './Dashboard.module.scss';

import Sidebar from '../Components/Sidebar/Sidebar';
import Topbar from '../Components/Topbar/Topbar';
import SalesActivitiesChart from '../Components/SalesActivitiesChart/SalesActivitiesChart';
import RecentOrders from '../Components/RecentOrders/RecentOrders';

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Topbar />
        <SalesActivitiesChart />
        <RecentOrders />
      </div>
    </div>
  )
}

export default Dashboard