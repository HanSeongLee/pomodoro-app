import React, {useCallback, useEffect, useState} from "react";
import styles from './style.module.scss';
import ArrowUpIcon from '/public/icons/icon-arrow-up.svg';
import ArrowDownIcon from '/public/icons/icon-arrow-down.svg';

const NumberInput = ({ value, onChange, min, max, ...props }) => {
    const onUp = useCallback(() => {
        let newValue = value + 1;
        if (max && newValue >= max) {
            newValue = max;
        }

        onChange(newValue);
    }, [value]);

    const onDown = useCallback(() => {
        let newValue = value - 1;
        if (min && newValue <= min) {
            newValue = min;
        }

        onChange(newValue);
    }, [value]);

    return (
        <div className={styles.numberInput}>
            <input className={styles.input}
                   type={'number'}
                   value={value}
                   readOnly
                   {...props}
            />
            <div className={styles.buttonContainer}>
                <button className={styles.button}
                        type={'button'}
                        aria-label={'up'}
                        onClick={onUp}
                >
                    <ArrowUpIcon/>
                </button>
                <button className={styles.button}
                        type={'button'}
                        aria-label={'down'}
                        onClick={onDown}
                >
                    <ArrowDownIcon/>
                </button>
            </div>
        </div>
    );
};

export default NumberInput;
