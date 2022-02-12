import React, {useCallback, useEffect, useState} from 'react';
import ColorItem from "../../components/ColorItem";

const ColorSelect = ({ name, colors=['red'], defaultValue=colors[0], ...props }) => {
    const [value, setValue] = useState(defaultValue);

    const onChange = useCallback((value) => {
        setValue(value)
    }, []);

    useEffect(() => {
        setValue(defaultValue);
    }, []);

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
