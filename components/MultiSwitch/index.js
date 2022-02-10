import React, {useCallback, useState} from 'react';
import styles from './style.module.scss';
import cn from "classnames";

const MultiSwitch = ({ options }) => {
    const [value, setValue] = useState({
        label: options[0],
        index: 0,
    });

    const onClick = useCallback((newValue) => {
        setValue(newValue);
    }, []);

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
