import React, {useState} from 'react';
import icons from '../icons';
import * as styles from './styles.module.css';

function EnterCompany() {
    const [company, setCompany] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        e.target.setCustomValidity('');
        setError('');
        setCompany(e.target.value);
    }

    const handleBlur = (e) => {
        const isEmpty = e.target.validity.valueMissing;

        if(isEmpty)
            setError('empty');
    }

    const handleInvalid = (e) => {
        e.target.setCustomValidity(' ');
        setError('empty')
    }

    return(
        <fieldset className={styles.container}>
            <input 
                type='text' 
                className={styles.input} 
                value={company} 
                name='company'
                onChange={handleChange}
                onBlur={handleBlur}
                onInvalid={handleInvalid}
                placeholder='Company'
                style={error === 'empty' ? {borderColor: '#F05B5B'} : {}}
                required
                />
            {error === 'empty' && <img className={styles.error} src={icons['error']}/>}
        </fieldset>
    )
}

export default EnterCompany;