import React, {useState} from 'react';
import icons from '../icons';
import * as styles from './styles.module.css';

function EnterEmail() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        e.target.setCustomValidity('');
        setError('');
        setEmail(e.target.value);
    }

    const handleBlur = (e) => {
        const isEmpty = e.target.validity.valueMissing;
        const isInvalid = e.target.validity.typeMismatch;

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
                type='email' 
                className={styles.input} 
                value={email} 
                name='email'
                onChange={handleChange}
                onBlur={handleBlur}
                onInvalid={handleInvalid}
                placeholder='Email Address'
                style={error ? {borderColor: '#F05B5B', color: '#F05B5B'} : {}}
                required
                />
            {error && <img className={styles.error} src={icons['error']}/>}
        </fieldset>
    )
}


export default EnterEmail;