import React from 'react'
import styles from './SidebarItem.module.scss';

const SidebarItem = props => {
    return (
        <a className={styles.sidebaritem} href={props.path}>
            <div className={styles.icon}>{props.icon}</div>
            <p className={styles.title}>{props.title}</p>
        </a>
    )
}

export default SidebarItem