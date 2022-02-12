import React from 'react';
import styles from './style.module.scss';
import cn from "classnames";

const ColorItem = ({ color, active, onClick }) => {
    return (
        <li className={cn(styles.colorItem, {
            [styles.active]: active,
        })}
            style={{
                background: color,
            }}
            onClick={_ => onClick(color)}
        >
        </li>
    );
};

export default ColorItem;
