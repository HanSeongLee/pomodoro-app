import React, {useCallback, useEffect, useMemo, useState} from "react";
import styles from './style.module.scss';
import {useAppContext} from "../../context/AppContext";

const RADIUS = 54;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const Timer = () => {
    const [state, dispatch] = useAppContext();

    const dashoffset = useMemo(() => {
        return CIRCUMFERENCE * (1 - ((state.time / state.initialTime) * 100) / 100);
    }, [state]);

    const toMMSS = (_seconds) => {
        const minutes = Math.floor(_seconds / 60);
        const seconds = _seconds - minutes * 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    const onClick = useCallback(() => {
        if (state.start && state.time === 0) {
            dispatch({
                type: 'timer_restart',
            });
        } else if (state.start) {
            dispatch({
                type: 'timer_pause',
            });
        } else {
            dispatch({
                type: 'timer_start',
            });
        }
    }, [state, dispatch]);

    useEffect(() => {
        if (!state.start || state.time === 0) {
            return ;
        }
        const interval = setInterval(() => {
            dispatch({
                type: 'tick',
            });
        }, 1000);
        return _ => {
            if(!interval){
                return;
            }
            clearInterval(interval);
        }
    }, [state]);

    return (
        <div className={styles.timer}
             onClick={onClick}
        >
            <div>
                <div className={styles.time}>
                    {toMMSS(state.time)}
                </div>
                <p className={styles.pause}>
                    {state.start && state.time > 0 ? 'PAUSE' :
                        state.start ? 'RESTART' : 'START'}
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
