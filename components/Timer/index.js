import React, {useMemo} from "react";
import styles from './style.module.scss';

const RADIUS = 54;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const Timer = ({ onClick, progress=100, time='25:00' }) => {
    const dashoffset = useMemo(() => {
        return CIRCUMFERENCE * (1 - (progress / 100));
    }, [progress]);

    return (
        <div className={styles.timer}
             onClick={onClick}
        >
            <div>
                <div className={styles.time}>
                    {time}
                </div>
                <p className={styles.pause}>
                    PAUSE
                </p>
            </div>
            <div className={styles.progressbarContainer}>
                <svg className={styles.circleProgress} width="265" height="265" viewBox="0 0 120 120">
                    <circle className={styles.bar} cx="60" cy="60" r={RADIUS} strokeWidth="4"
                            strokeDasharray={CIRCUMFERENCE}
                            strokeDashoffset={dashoffset}
                    />
                </svg>
            </div>
        </div>
    );
};

export default Timer;
