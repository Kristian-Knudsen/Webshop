import React from 'react'
import RecentOrderRow from './RecentOrderRow';
import styles from './RecentOrders.module.scss';


const RecentOrders = () => {
  const DATA = [
    {
      code: "2458",
      name: "Ronald Richards",
      location: "Desoto, Oklahoma",
      start_date: "16/11/2022",
      status: "Complete"
    },
    {
      code: "2459",
      name: "Theresa Webb",
      location: "Portland, Illinois",
      start_date: "17/11/2022",
      status: "Pending"
    },
    {
      code: "2460",
      name: "Arlene McCoy",
      location: "Coppell, Virginia",
      start_date: "18/11/2022",
      status: "Processing"
    },
    {
      code: "2461",
      name: "Kristian Knudsen",
      location: "Aalborg, Denmark",
      start_date: "19/11/2022",
      status: "Cancelled"
    },
  ]
  return (
    <div className={styles.wrapper}>
      <h3>Orders</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Location</th>
            <th>Start Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {DATA.map((order, i) => (
            <RecentOrderRow key={i} order={order} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RecentOrders