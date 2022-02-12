import React from 'react';
import styles from './style.module.scss';
import cn from "classnames";

const FontItem = ({ font:fontFamily, active=false, onClick }) => {
    return (
        <li className={cn(styles.fontItem, {
            [styles.active]: active
        })}
            style={{
                fontFamily,
            }}
            onClick={_ => onClick(fontFamily)}
        >
            Aa
        </li>
    );
};

export default FontItem;
