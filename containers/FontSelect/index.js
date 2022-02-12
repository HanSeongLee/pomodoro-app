import React from 'react';
import FontItem from "../../components/FontItem";

const FontSelect = ({ name, value, onChange, fontFamily=['sans-serif'], ...props }) => {
    return (
        <>
            <ul {...props}>
                {fontFamily?.map((font, index) => (
                    <FontItem font={font}
                              active={font === value}
                              onClick={onChange}
                              key={index}
                    />
                ))}
            </ul>
            <input name={name}
                   type={'text'}
                   readOnly
                   value={value}
                   hidden
            />
        </>
    );
};

export default FontSelect;
