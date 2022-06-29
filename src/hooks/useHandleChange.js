import { useState } from 'react';


export function useHandleChange(initialState) {
    const [fields, setValues] = useState(initialState);
    return [
        fields,
        ({ target }) => {
            const value = target.value;
            const field = target.name;
            setValues((prevFields) => ({ ...prevFields, [field]: value }));
        }
    ];
}