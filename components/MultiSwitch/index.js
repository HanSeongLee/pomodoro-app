import React, {useCallback, useState} from 'react';
import styles from './style.module.scss';
import cn from "classnames";
import {useAppContext} from "../../context/AppContext";

const MultiSwitch = ({ options }) => {
    const [state, dispatch] = useAppContext();

    const [value, setValue] = useState({
        label: options[0],
        index: 0,
    });

    const onClick = useCallback((newValue) => {
        setValue(newValue);

        dispatch({
            type: 'set_mode',
            value: newValue.label
        });

        if (state.settings.time[newValue.label]) {
            dispatch({
                type: 'set_time',
                value: state.settings.time[newValue.label] * 60,
            });
        }
    }, [state, dispatch]);

    return (
        <div className={styles.multiSwitch}
             style={{
                 "--selected": value.index,
             }}
             data-value={value.label}
        >
            <ul className={styles.container}>
                {options?.map((label, index) => (
                    <li data-label={label}
                        key={index}
                    >
                        <button className={cn({
                            [styles.active]: value.index === index,
                        })} onClick={_ => onClick({
                            label,
                            index,
                        })}>
                            {label}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MultiSwitch;
