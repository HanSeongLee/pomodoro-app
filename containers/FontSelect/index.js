import React, {useCallback, useEffect, useState} from 'react';
import FontItem from "../../components/FontItem";

const FontSelect = ({ name, fontFamily=['sans-serif'], defaultValue=fontFamily[0], ...props }) => {
    const [value, setValue] = useState(defaultValue);

    useEffect(() => {
        setValue(defaultValue);
    }, []);

    const onChange = useCallback((value) => {
        setValue(value);
    }, []);

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
