import React, { useState } from "react";

const useForm = (initialFieldValues, validate, setCurrentId) => {
    const [values, setValues] = useState(initialFieldValues);
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        if (e?.target) {
            const { name, value } = e.target;
            const fieldValue = { [name]: value }
            setValues({
                ...values,
                ...fieldValue
            });
            console.log(name + ": " + value);
            validate(fieldValue)
        } else if (e?.name && e?.value !== undefined) {
            // For non-standard events, such as date pickers
            const fieldValue = { [e.name]: e.value }
            setValues({
                ...values,
                ...fieldValue
            });
            console.log(e.name + ": " + e.value);
            validate(fieldValue)
        }
    };

    const resetForm = () => {
        setValues({
            ...initialFieldValues
        })
        setErrors({})
        setCurrentId(0)
    }

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    };
};

export default useForm;
