import React, {useMemo} from "react";
import styles from './style.module.scss';
import {useAppContext} from "../../context/AppContext";

const RADIUS = 54;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const Timer = ({ onClick, progress=100 }) => {
    const [state, dispatch] = useAppContext();

    const dashoffset = useMemo(() => {
        return CIRCUMFERENCE * (1 - (progress / 100));
    }, [progress]);

    const toMMSS = (_seconds) => {
        const minutes = Math.floor(_seconds / 60);
        const seconds = _seconds - minutes * 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    return (
        <div className={styles.timer}
             onClick={onClick}
        >
            <div>
                <div className={styles.time}>
                    {toMMSS(state.time)}
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
