import React from 'react'
import styles from './RecentOrders.module.scss'

const StatusButton = props => {

    const isCompleting = props.status === "Complete" ? styles.complete : null;
    const isPending = props.status === "Pending" ? styles.pending : null;
    const isProcessing = props.status === "Processing" ? styles.processing : null;
    const isCancelled = props.status === "Cancelled" ? styles.cancelled : null;

    return (
        <button className={`
        ${styles.statusButton} 
        ${isCompleting}
        ${isPending}
        ${isProcessing}
        ${isCancelled}
        `} type='button'>{props.status}</button>
    )
}

export default StatusButton