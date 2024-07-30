import React, {useState} from 'react';
import icons from '../icons';
import * as styles from './styles.module.css';

function EnterPhone(){
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const input = e.target.value;
        e.target.setCustomValidity('');
        setError('');
        setName(e.target.value);
    }

    const handleBlur = (e) => {
        const isEmpty = e.target.validity.valueMissing;
        const isInvalid = e.target.validity.patternMismatch;

        if(isEmpty)
            setError('empty');
        else if(isInvalid)
            setError('invalid')
    }

    const handleInvalid = (e) => {
        e.target.setCustomValidity(' ');
        const isEmpty = e.target.validity.valueMissing;

        if(isEmpty)
            setError('empty');
        else
            setError('invalid');
    }

    return(
        <fieldset className={styles.container}>
            <input 
                type='text' 
                className={styles.input} 
                value={name} 
                name='phone'
                onChange={handleChange}
                onBlur={handleBlur}
                onInvalid={handleInvalid}
                pattern="(\+[0-9]{1}[0-9]{3}[0-9]{3}[0-9]{4})|([0-9]{1}[0-9]{3}[0-9]{3}[0-9]{4})|([0-9]{3}[0-9]{3}[0-9]{4})"
                placeholder='Phone Number'
                style={error ? {borderColor: '#F05B5B', color: '#F05B5B'} : {}}
                required
                />
            {error && <img className={styles.error} src={icons['error']}/>}
        </fieldset>
    )
}

export default EnterPhone;