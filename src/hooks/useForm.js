import { useState } from 'react';

const useForm = ( initialForm, validateForm) => {

    const [ values, setValues ] = useState( initialForm );
    const [errors, setErrors] = useState({});

    const handleInputChange = ({ target }) =>
    {
        setValues({
            ...values,
            [target.name]: target.value
        });
    setErrors(validateForm(values));
    }; 

    const handleBlur = (e) => {
        handleInputChange(e);
        setErrors(validateForm(values));
    };

    return [values, handleInputChange , handleBlur,  errors];
}

export default useForm;