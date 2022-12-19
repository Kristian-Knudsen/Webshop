import React from 'react';
import styles from './Topbar.module.scss';
import { IconReceipt2, IconChartAreaLine, IconChartPie4 } from '@tabler/icons';

const Topbar = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.infoitem}>
                <IconReceipt2 className={styles.blue}/>
                <div className={styles.infoiteminner}>
                    <h4>$8.542,50</h4>
                    <p>Net Benefit</p>
                </div>
            </div>
            <div className={styles.infoitem}>
                <IconChartAreaLine className={styles.darkblue}/>
                <div className={styles.infoiteminner}>
                    <h4>$782,45</h4>
                    <p>Reference earnings</p>
                </div>
            </div>
            <div className={styles.infoitem}>
                <IconChartPie4 className={styles.purple}/>
                <div className={styles.infoiteminner}>
                    <h4>$5.896,00</h4>
                    <p>Assessed Sales</p>
                </div>
            </div>
        </div>
    )
}

export default Topbar