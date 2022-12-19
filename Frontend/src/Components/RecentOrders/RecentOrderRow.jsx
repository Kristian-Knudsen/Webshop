import React from 'react'
import styles from './RecentOrders.module.scss'
import StatusButton from './StatusButton'

const RecentOrderRow = props => {
  return (
    <tr className={styles.tablerow}>
      <td><b># {props.order.code}</b></td>
      <td>{props.order.name}</td>
      <td>{props.order.location}</td>
      <td>{props.order.start_date}</td>
      <td><StatusButton status={props.order.status} /></td>
    </tr>
  )
}

export default RecentOrderRow