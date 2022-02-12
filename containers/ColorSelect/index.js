import React from 'react';
import ColorItem from "../../components/ColorItem";

const ColorSelect = ({ name, value, onChange, colors=['red'], ...props }) => {
    return (
        <>
            <ul {...props}>
                {colors?.map((color, index) => (
                    <ColorItem color={color}
                               active={color === value}
                               onClick={onChange}
                               key={index}
                    />
                ))}
            </ul>
            <input name={name}
                   type={'text'}
                   value={value}
                   readOnly
                   hidden
            />
        </>
    );
};

export default ColorSelect;
