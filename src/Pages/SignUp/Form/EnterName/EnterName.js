import React, {useState} from 'react';
import icons from '../icons';
import * as styles from './styles.module.css';

function EnterName() {
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        e.target.setCustomValidity('');
        setError('');
        setName(e.target.value);
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
                value={name} 
                name='name'
                onChange={handleChange}
                onBlur={handleBlur}
                onInvalid={handleInvalid}
                placeholder='Name'
                style={error === 'empty' ? {borderColor: '#F05B5B'} : {}}
                required
                />
            {error === 'empty' && <img className={styles.error} src={icons['error']}/>}
        </fieldset>
    )
}

export default EnterName;